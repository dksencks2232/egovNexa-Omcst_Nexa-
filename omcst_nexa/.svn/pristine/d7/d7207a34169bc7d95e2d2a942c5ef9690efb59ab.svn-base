package egovframework.omcst.menu.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.menu.service.MenuVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("menuDAO")
public class MenuDAO extends EgovAbstractDAO {

	public List<?> selectMenuList() {
		return list("menuDAO.selectMenuList");
	}

	public int megerMenu(MenuVO ds_menu) {
		return update("menuDAO.megerMenu", ds_menu);
	}

	public int deleteMenu(MenuVO ds_menu) {
		return delete("menuDAO.deleteMenu", ds_menu);
	}

	public List<?> selectUserMenuList(UserVO user) {
		return list("menuDAO.selectUserMenuList", user);
	}

}
