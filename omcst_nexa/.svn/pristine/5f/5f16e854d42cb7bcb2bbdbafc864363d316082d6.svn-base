package egovframework.omcst.user.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.user.service.UserVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("userDAO")
public class UserDAO extends EgovAbstractDAO{

	public List<?> selectUserList() {
		return list("userDAO.selectUserList");
	}

	public void insertUser(UserVO ds_userInfo) {
		insert("userDAO.insertUser", ds_userInfo);
	}

	public int updateUser(UserVO ds_userInfo) {
		return update("userDAO.updateUser", ds_userInfo);
	}

	public int deleteUser(UserVO ds_userInfo) {
		return delete("userDAO.deleteUser", ds_userInfo);
	}

}
