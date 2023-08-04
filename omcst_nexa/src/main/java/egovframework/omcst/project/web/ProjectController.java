package egovframework.omcst.project.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.developer.service.DeveloperVO;
import egovframework.omcst.project.service.ProjectService;
import egovframework.omcst.project.service.ProjectVO;
import egovframework.omcst.user.service.UserVO;

@Controller
public class ProjectController {
	
	@Resource(name = "projectService")
	private ProjectService service;
	
	@RequestMapping(value = "/project/projectList.do")
	public NexacroResult selectProjectList() throws Exception {
		NexacroResult result = new NexacroResult();
		
		List<?> list = service.selectProjectList();
		result.addDataSet("ds_project", list);

		return result;
	}	
	
	@RequestMapping(value = "/project/developerList.do")
	public NexacroResult selectDeveloperList(@ParamDataSet(name = "ds_developer") DeveloperVO ds_developer) throws Exception {
		NexacroResult result = new NexacroResult();
		
		List<?> list = service.selectDeveloperList(ds_developer);
		result.addDataSet("ds_developer", list);

		return result;
	}
	
	@RequestMapping(value = "/project/attendProjectList.do")
	public NexacroResult selectAttendProjectList(@ParamDataSet(name = "ds_project") ProjectVO ds_project) throws Exception {
		NexacroResult result = new NexacroResult();
		
		List<?> list = service.selectAttendProjectList(ds_project);
		result.addDataSet("ds_project", list);

		return result;
	}
	
	// 프로젝트관리 팝업창에서 개발자 추가 및 수정.
	@RequestMapping(value = "/project/developerSave.do")
	public NexacroResult mergeProjectDeveloper(@ParamDataSet(name = "ds_developer") List<DeveloperVO> ds_developer, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(ds_developer == null || ds_developer.size() == 0) {
			result.setErrorCode(-2);
			return result;
		}
		
		// 로그인된 유저의 seq를 불러온다.		
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");		
		
		// 저장한다.		
		service.saveProjectDeveloper(ds_developer, user);		
		return result;
	}
	
	// 삭제.
	@RequestMapping(value = "/project/developerDelete.do")
	public NexacroResult deleteProjectDeveloper(@ParamDataSet(name = "ds_developer") List<DeveloperVO> ds_developer, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		if(ds_developer == null || ds_developer.size() == 0) {
			result.setErrorCode(-2);
			return result;
		}
		
		// 로그인된 유저의 seq를 불러온다.		
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");		
		
		// 저장한다.		
		service.deleteProjectDeveloper(ds_developer, user);		
		return result;
	}
		
}


