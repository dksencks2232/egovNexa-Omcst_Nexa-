package egovframework.omcst.project.service;

import java.util.List;

import egovframework.omcst.developer.service.DeveloperVO;
import egovframework.omcst.user.service.UserVO;

public interface ProjectService {

	//전체 프로젝트 리스트
	List<?> selectProjectList();
	
	//프로젝트에 투입된 개발자 리스트 - 프로젝트 리스트 더블클릭했을 때 나타나는 팝업에서 뿌려지는 리스트
	List<?> selectDeveloperList(DeveloperVO developerVO);
	
	//팝업에서 프로젝트를 클릭했을 때 해당 개발자가 투입된 프로젝트 리스트
	List<?> selectAttendProjectList(ProjectVO projectVO);
	
	//팝업에서 해당 프로젝트의 개발자를 추가하거나 수정
	void saveProjectDeveloper(List<DeveloperVO> ds_developer, UserVO user);
	
	//팝업에서 해당 프로젝트의 개발자를 삭제
	void deleteProjectDeveloper(List<DeveloperVO> ds_developer, UserVO user);
	

}
