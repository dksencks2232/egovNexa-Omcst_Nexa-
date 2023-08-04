package egovframework.omcst.code.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.code.service.CodeService;
import egovframework.omcst.code.service.CodeVO;
import egovframework.omcst.user.service.UserVO;

@Controller
public class CodeController {
	
	@Resource(name = "codeService")
	private CodeService service;
	
	@RequestMapping(value = "/code/codeList.do")
	public NexacroResult selectCodeList() throws Exception {
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectCodeList();
		result.addDataSet("ds_code", list);
		return result;
	}
	
	@RequestMapping(value = "/code/codeSave.do")
	public NexacroResult saveCode(@ParamDataSet(name="ds_code", required=false) List<CodeVO> dsCodeList, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(dsCodeList == null || dsCodeList.size() == 0) {
			result.setErrorCode(-2);
			return result;
		}
		
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");
		
		service.codeSave(dsCodeList, user); 
		
		return result;
	}
	
	// 코드리스트 중 필요한 리스트만 호출
	@RequestMapping(value = "/code/codeListOne.do")
	public NexacroResult selectCodeList(@ParamDataSet(name = "ds_code") CodeVO codeVO) throws Exception {
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectCodeList(codeVO);
		result.addDataSet("ds_code", list);
		return result;
	}	

}
