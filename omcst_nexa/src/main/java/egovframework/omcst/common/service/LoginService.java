package egovframework.omcst.common.service;

import egovframework.omcst.user.service.UserVO;

public interface LoginService {

	UserVO selectLogin(LoginVO ds_login);

}
