package egovframework.omcst.project.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.annual.service.AnnualService;
import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.code.service.CodeVO;
import egovframework.omcst.developer.service.DeveloperVO;
import egovframework.omcst.project.service.ProjectService;
import egovframework.omcst.project.service.ProjectVO;
import egovframework.omcst.user.service.UserVO;
import sun.security.util.Debug;

@Service("projectService")
public class ProjectServiceImpl implements ProjectService {
	
	@Resource(name = "projectDAO")
	private ProjectDAO dao;
	
	@Override
	public List<?> selectProjectList() {
		return dao.selectProjectList();
	}	
	
	@Override
	public List<?> selectDeveloperList(DeveloperVO developerVO) {
		return dao.selectDeveloperList(developerVO);
	}
	
	@Override
	public List<?> selectAttendProjectList(ProjectVO projectVO) {
		return dao.selectAttendProjectList(projectVO);
	}	
	
	@Override
	public void saveProjectDeveloper(List<DeveloperVO> ds_developer, UserVO user) {
		for(DeveloperVO developerVO : ds_developer) {
			developerVO.setUPDATE_USER((user.getNAME()));
			if("I".equals(developerVO.getDSSTATUS())) {
				dao.insertDeveloper(developerVO);
			} else if ("U".equals(developerVO.getDSSTATUS())) {
				dao.updateDeveloper(developerVO);
			} else {
				// 삭제는 삭제버튼으로...
				// dao.deleteDEveloper(developerVO);
			}
		}
	}
	
	@Override
	public void deleteProjectDeveloper(List<DeveloperVO> ds_developer, UserVO user) {
		for(DeveloperVO developerVO : ds_developer) {
			developerVO.setUPDATE_USER((user.getNAME()));
			if("1".equals(developerVO.getIS_CHECK())) {
				dao.deleteDEveloper(developerVO);
			} 
		}
	}
}
