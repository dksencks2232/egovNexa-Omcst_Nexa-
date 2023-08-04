package egovframework.omcst.project_attend.service.impl;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import egovframework.omcst.project_attend.service.ProjectAttendService;
import egovframework.omcst.project_attend.service.ProjectAttendVO;

@Service("projectAttendService")
public class ProjectAttendServiceImpl implements ProjectAttendService {
	
	@Resource(name = "projectAttendDAO")
	private ProjectAttendDAO dao;
	
	@Override
	public List<?> selectProjectAttendInfoList(ProjectAttendVO ds_projectInfo) {
		return dao.selectProjectAttendInfoList(ds_projectInfo);
	}
	
	@Override
	public List<?> selectProjectAttendMbetweenList(ProjectAttendVO ds_projectInfo) {
		return dao.selectProjectAttendMbetweenList(ds_projectInfo);
	}
	
	@Override
	public List<?> selectProjectTotalMonthList(ProjectAttendVO ds_projectInfo) {
		return dao.selectProjectTotalMonthList(ds_projectInfo);
	}
	
	@Override
	public List<?> selectProjectAttendList(ProjectAttendVO ds_projectInfo) {
		
		/* 이 방법은 ibatis에서는 가능하지 않은 방법이다... 
		 * mybatis에서는 루프문을 돌릴때 alias에 index를 두는 방법을 통해서 투입월에 대한 대응값(투입되었으면 1, 그렇지않으면 0 등..)에 대한 
		 * 쿼리를 추출할 수 있으나 ibatis에서는 alias를 잡을 때 index를 받아올 수 있는 방법이 없어서
		 * dataset에서 직접 데이터를 가공하여 화면에 뿌리는 방식으로 대체한다.
		 * 보통 dataset을 가공하여 화면에 뿌리는 방식으로 개발하는 방법은 선호하지 않으며
		 * 대체적으로 쿼리문에서 필요한 정보를 한번에 가져와서 화면에 뿌리고 expr을 이용해서 색을 변경하는 방법을 선호하고있다.\
		 */
		/*
		List<ProjectAttendVO> projectTotalMonthList = (List<ProjectAttendVO>) dao.selectProjectTotalMonthList();
		
		List<?> projectDevAttendlList = dao.selectProjectDevAttendlList( projectTotalMonthList);
		*/
		
		/* 개발자별 투입기간 추출 */
		return dao.selectProjectAttendMemeberList(ds_projectInfo);
	}	
}
