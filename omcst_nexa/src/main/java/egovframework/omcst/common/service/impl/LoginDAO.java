package egovframework.omcst.common.service.impl;

import org.springframework.stereotype.Repository;

import egovframework.omcst.common.service.LoginVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("loginDAO")
public class LoginDAO extends EgovAbstractDAO {

	public UserVO selectLogin(LoginVO ds_login) {
		return (UserVO) select("loginDAO.selectLogin", ds_login);
	}

	
}
