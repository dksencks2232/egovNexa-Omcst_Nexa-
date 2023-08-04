package egovframework.omcst.project_attend.service.impl;

import java.util.List;
import org.springframework.stereotype.Repository;

import egovframework.omcst.project_attend.service.ProjectAttendVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("projectAttendDAO")
public class ProjectAttendDAO extends EgovAbstractDAO {
	
	public List<?> selectProjectAttendInfoList(ProjectAttendVO ds_projectInfo) {
		return list("projectAttendDAO.selectProjectAttendInfoList", ds_projectInfo);
	}
	
	public List<?> selectProjectAttendMbetweenList(ProjectAttendVO ds_projectInfo) {
		return list("projectAttendDAO.selectProjectAttendMbetweenList", ds_projectInfo);
	}
	
	public List<?> selectProjectAttendList(ProjectAttendVO ds_projectInfo) {
		return list("projectAttendDAO.selectProjectAttendList", ds_projectInfo);
	}
	
	public List<?> selectProjectTotalMonthList(ProjectAttendVO ds_projectInfo) {
		return list("projectAttendDAO.selectProjectTotalMonthList", ds_projectInfo);
	}
	
	public List<?> selectProjectDevAttendlList(List<ProjectAttendVO> projectTotalMonthList) {
		return list("projectAttendDAO.selectProjectDevAttendlList", projectTotalMonthList);
	}
	
	public List<?> selectProjectAttendMemeberList(ProjectAttendVO ds_projectInfo) {
		return list("projectAttendDAO.selectProjectAttendMemeberList", ds_projectInfo);
	}
}
