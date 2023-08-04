package egovframework.omcst.annual.service;

import java.util.List;

import egovframework.omcst.user.service.UserVO;

public interface AnnualService {

	//전체 휴가 리스트
	List<?> selectAnnualList();
	
	//로그인 유저 휴가 리스트
	List<?> selectAnnualUserList(UserVO user);

	// 휴가 저장
	void saveAnnual(List<AnnualVO> ds_annual, UserVO user);

	// 휴가 삭제
	int deleteAnnual(AnnualVO ds_annual);
	
	// 검색된 유저의 seq 검색
	List<AnnualVO> selectUserSeq(UserVO user);
	
	// 휴가 검색
	List<?> selectAnnualUserSearch(AnnualVO paramList);

}
