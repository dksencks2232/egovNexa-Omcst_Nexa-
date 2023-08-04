package egovframework.omcst.project.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.developer.service.DeveloperVO;
import egovframework.omcst.project.service.ProjectVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("projectDAO")
public class ProjectDAO extends EgovAbstractDAO {

	public List<?> selectProjectList() {
		return list("projectDAO.selectProjectList");
	}
	
	public List<?> selectDeveloperList(DeveloperVO developerVO) {
		return list("projectDAO.selectDeveloperList", developerVO);
	}
	
	public List<?> selectAttendProjectList(ProjectVO projectVO) {
		return list("projectDAO.selectAttendProjectList", projectVO);
	}
	
	public void insertDeveloper(DeveloperVO developerVO) {
		insert("projectDAO.insertDeveloper", developerVO);
	}
	
	public void updateDeveloper(DeveloperVO developerVO) {
		update("projectDAO.updateDeveloper", developerVO);
	}
	
	public void deleteDEveloper(DeveloperVO developerVO) {
		update("projectDAO.deleteDeveloper", developerVO);
	}
}
