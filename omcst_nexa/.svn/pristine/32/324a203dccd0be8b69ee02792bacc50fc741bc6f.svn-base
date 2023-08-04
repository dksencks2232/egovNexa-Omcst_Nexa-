package egovframework.omcst.annual_stat.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.annual_stat.service.AnnualStatService;
import egovframework.omcst.annual_stat.service.AnnualStatVO;
import egovframework.omcst.user.service.UserVO;

@Controller
public class AnnualStatController {
	
	@Resource(name = "annualStatService")
	private AnnualStatService service;

	// 휴가통계 전체 리스트
	@RequestMapping(value = "/annualStat/annualStatList.do")
	public NexacroResult selectAnnualStatList() throws Exception {
		List<?> list = service.selectAnnualStatList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_annualStat", list);
		return result;
	}
	
	// 휴가통계 개인별 리스트.
	@RequestMapping(value = "/annualStat/annualStatUserList.do")
	public NexacroResult selectAnnualStatUserList(HttpServletRequest request) throws Exception {
		// 로그인 되어있는 유저의 정보를 받아온다.
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");		
		
		List<?> list = service.selectAnnualStatUserList(user);
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_annualStat", list);
		return result;
	}
	
	// 개일별 휴가일수 체크
	@RequestMapping(value = "/annualStat/checkAnnual.do")
	public NexacroResult checkAnnual(HttpServletRequest request) throws Exception {
		// 로그인 되어있는 유저의 정보를 받아온다.
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");		
		
		AnnualStatVO annualStatVO = service.selectAnnualStatUserTotal(user);
		double total = Double.parseDouble(annualStatVO.getTOTAL().toString());
		double basic_annual = Double.parseDouble(annualStatVO.getBASIC_ANNUAL().toString());
		
		NexacroResult result = new NexacroResult();
		// total : 사용한 휴가일수,  basic_annual : 지급된 휴가일수
		if(total >= basic_annual ) {
			result.setErrorCode(-5);
		}
		return result;
	}
	
}
