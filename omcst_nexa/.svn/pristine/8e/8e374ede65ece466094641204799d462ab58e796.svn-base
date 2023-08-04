package egovframework.omcst.annual.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.annual.service.AnnualService;
import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.user.service.UserVO;

@Controller
public class AnnualController {
	
	@Resource(name = "annualService")
	private AnnualService service;

	// 휴가관리 전체 리스트
	@RequestMapping(value = "/annual/annualList.do")
	public NexacroResult selectAnnualList() throws Exception {
		List<?> list = service.selectAnnualList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_annual", list);
		return result;
	}
	
	// 휴가관리 개인별 리스트
	@RequestMapping(value = "/annual/annualUserList.do")
	public NexacroResult selectAnnualUserList(HttpServletRequest request) throws Exception {
		// 로그인 되어있는 유저의 정보를 받아온다.
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");		
		
		List<?> list = service.selectAnnualUserList(user);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_annual", list);
		return result;
	}
	
	
	// 휴가관리 저장
	@RequestMapping(value = "/annual/annualSave.do")
	public NexacroResult mergeAnnual(@ParamDataSet(name = "ds_annual") List<AnnualVO> ds_annual, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(ds_annual == null || ds_annual.size() == 0) {
			result.setErrorCode(-2);
			return result;
		}
		
		// 로그인된 유저의 seq를 불러온다.		
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");		
		
		// 저장한다.		
		service.saveAnnual(ds_annual, user);		
		return result;
	}
	
	// 휴가관리 검색
	@RequestMapping(value = "/annual/annualUserSearch.do")
	public NexacroResult searchAnnualUserSearch(@ParamDataSet(name = "ds_search") AnnualVO ds_search, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		// 검색 파라미터가 없으면 에러 리턴
		if(ds_search == null ) {
			result.setErrorCode(-2);
			return result;
		}
		
		List<?> list = service.selectAnnualUserSearch(ds_search);
		result.addDataSet("ds_annual", list);
		
		return result;
	}	
}
