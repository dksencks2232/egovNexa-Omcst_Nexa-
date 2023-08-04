package egovframework.omcst.project_attend.web;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import egovframework.omcst.project_attend.service.ProjectAttendService;
import egovframework.omcst.project_attend.service.ProjectAttendVO;

@Controller
public class ProjectAttendController {
	
	@Resource(name = "projectAttendService")
	private ProjectAttendService service;
	
	@RequestMapping(value = "/projectAttend/projectAttendList.do")
	public NexacroResult selectProjectAttendList(@ParamDataSet(name= "ds_projectInfo") ProjectAttendVO ds_projectInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		
		// 프로젝트 정보을 받아오는 리스트
		List<?> project_info = service.selectProjectAttendInfoList(ds_projectInfo);
		// 프로젝트의 년도별 월수를 받아오는 리스트
		List<?> project_mbetween = service.selectProjectAttendMbetweenList(ds_projectInfo);
		// 프로젝트 년월을 뿌리기위해 받아오는 리스트
		List<?> projectTotalMonthList = service.selectProjectTotalMonthList(ds_projectInfo);
		// 프로젝트 개발자들의 투입기간을 받아오는 리스트
		List<?> project_attend = service.selectProjectAttendList(ds_projectInfo);
		
		result.addDataSet("ds_projectInfo", project_info);
		result.addDataSet("ds_projectmbetween", project_mbetween);
		result.addDataSet("ds_projectTotalMonthList", projectTotalMonthList);
		result.addDataSet("ds_projectAttend", project_attend);

		return result;
	}	
}
