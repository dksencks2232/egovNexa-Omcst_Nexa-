package egovframework.omcst.project_attend.service;

import java.util.List;

public interface ProjectAttendService {

	// 선택한 프로젝트의 정보를 받아오는 리스트
	List<?> selectProjectAttendInfoList(ProjectAttendVO ds_projectInfo);
	// 선택한 프로젝트의 년도별 개월수를 받아오는 리스트
	List<?> selectProjectAttendMbetweenList(ProjectAttendVO ds_projectInfo);
	// 선택한 프로젝트의 년월 전체 리스트
	List<?> selectProjectTotalMonthList(ProjectAttendVO ds_projectInfo);
	//선택한 프로젝트 기간 및 개발자 투입현황 리스트
	List<?> selectProjectAttendList(ProjectAttendVO ds_projectInfo);
}
