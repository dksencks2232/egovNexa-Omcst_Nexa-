package egovframework.omcst.common.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.common.service.LoginService;
import egovframework.omcst.common.service.LoginVO;
import egovframework.omcst.user.service.UserVO;

@Service("loginService")
public class LoginServiceImpl implements LoginService{
	
	@Resource(name = "loginDAO")
	private LoginDAO dao;
	
	@Override
	public UserVO selectLogin(LoginVO ds_login) {
		return (UserVO) dao.selectLogin(ds_login);
	}

}
