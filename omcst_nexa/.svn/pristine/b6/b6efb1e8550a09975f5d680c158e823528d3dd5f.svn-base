package egovframework.omcst.user_auth.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.auth.service.AuthVO;
import egovframework.omcst.user_auth.service.UserAuthVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("userAuthDAO")
public class UserAuthDAO extends EgovAbstractDAO {

	public List<?> selectUserAuthList(AuthVO authVO) {
		return list("userAuthDAO.selectUserAuthList", authVO);
	}

	public int deleteUserAuth(AuthVO authVO) {
		return delete("userAuthDAO.deleteUserAuth", authVO);
	}

	public void insertUserAuth(UserAuthVO vo) {
		insert("userAuthDAO.insertUserAuth", vo);
	}
}
