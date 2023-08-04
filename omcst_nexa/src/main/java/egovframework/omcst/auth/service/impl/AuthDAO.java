package egovframework.omcst.auth.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.auth.service.AuthVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("authDAO")
public class AuthDAO extends EgovAbstractDAO{

	public List<?> selectAuthList() {
		return list("authDAO.selectAuthList");
	}

	public void insertAuth(AuthVO authVO) {
		insert("authDAO.insertAuth", authVO);
	}

	public int updateAuth(AuthVO authVO) {
		return update("authDAO.updateAuth", authVO);
	}

	public int deleteAuth(AuthVO authVO) {
		// 사용자 권한 매핑 테이블 삭제
		return delete("authDAO.deleteAuth", authVO);
	}

}
