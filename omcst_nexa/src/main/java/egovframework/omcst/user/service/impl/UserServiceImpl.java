package egovframework.omcst.user.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.user.service.UserService;
import egovframework.omcst.user.service.UserVO;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Resource(name = "userDAO")
	private UserDAO dao;

	@Override
	public List<?> selectUserList() {
		return dao.selectUserList();
	}

	@Override
	public void insertUser(UserVO ds_userInfo) {
		dao.insertUser(ds_userInfo);
	}

	@Override
	public int updateUser(UserVO ds_userInfo) {
		return dao.updateUser(ds_userInfo);
	}

	@Override
	public int deleteUser(UserVO ds_userInfo) {
		return dao.deleteUser(ds_userInfo);
	}

}
