package egovframework.omcst.auth.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.auth.service.AuthService;
import egovframework.omcst.auth.service.AuthVO;
import egovframework.omcst.user.service.UserVO;

@Controller
public class AuthController {
	
	@Resource(name = "authService")
	private AuthService service;
	
	@RequestMapping(value = "/auth/authList.do")
	public NexacroResult selectAuthList() throws Exception {
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@ authList.do");
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectAuthList();
		result.addDataSet("ds_auth", list);
		return result;
	}
	
	@RequestMapping(value = "/auth/authSave.do")
	public NexacroResult saveAuth(@ParamDataSet(name="ds_auth", required=false) List<AuthVO> dsAuthList, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(dsAuthList == null || dsAuthList.size() == 0) {
			result.setErrorCode(-2);
			return result;
		}
		
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");
		
		service.authSave(dsAuthList, user); 
		
		return result;
	}

}
