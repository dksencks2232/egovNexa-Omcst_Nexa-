package egovframework.omcst.user_auth.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.auth.service.AuthVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.omcst.user_auth.service.UserAuthService;
import egovframework.omcst.user_auth.service.UserAuthVO;

@Service("userAuthService")
public class UserAuthServiceImpl implements UserAuthService {
	
	@Resource(name = "userAuthDAO")
	private UserAuthDAO dao;

	@Override
	public List<?> selectUserAuthList(AuthVO authVO) {
		return dao.selectUserAuthList(authVO);
	}

	@Override
	public void saveUserAuth(AuthVO authVO, List<UserVO> userList) {
		dao.deleteUserAuth(authVO);
		for (UserVO userVO : userList) {
			if("Y".equals(userVO.getIS_CHECK())) {
				UserAuthVO vo = new UserAuthVO();
				vo.setAUTH_SEQ(authVO.getSEQ());
				vo.setUSER_SEQ(userVO.getSEQ());
				dao.insertUserAuth(vo);
			}
			
		}
	}

}
