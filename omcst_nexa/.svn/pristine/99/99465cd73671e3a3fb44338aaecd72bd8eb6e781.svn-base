package egovframework.omcst.annual_stat.service;

import java.util.List;

import egovframework.omcst.user.service.UserVO;

public interface AnnualStatService {

	//전체 휴가통계 리스트
	List<?> selectAnnualStatList();
	
	//로그인 유저 휴가통계 리스트
	List<?> selectAnnualStatUserList(UserVO user);
	
	//개일별 사용한 휴가갯수 체크
	AnnualStatVO selectAnnualStatUserTotal(UserVO user);

}
