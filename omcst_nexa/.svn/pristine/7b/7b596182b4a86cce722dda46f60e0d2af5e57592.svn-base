package egovframework.omcst.auth.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.auth.service.AuthService;
import egovframework.omcst.auth.service.AuthVO;
import egovframework.omcst.user.service.UserVO;

@Service("authService")
public class AuthServiceImpl implements AuthService {
	
	@Resource(name = "authDAO")
	private AuthDAO dao;

	@Override
	public List<?> selectAuthList() {
		return dao.selectAuthList();
	}

	@Override
	public void authSave(List<AuthVO> dsAuthList, UserVO user) {
		for (AuthVO authVO : dsAuthList) {
			authVO.setREG_USER(user.getNAME());
			authVO.setUPDATE_USER(user.getNAME());
			if("I".equals(authVO.getSTATUS())) {
				dao.insertAuth(authVO);
			} else if("U".equals(authVO.getSTATUS())) {
				dao.updateAuth(authVO);
			} else {
				dao.deleteAuth(authVO);
			}
		}
	}

}
