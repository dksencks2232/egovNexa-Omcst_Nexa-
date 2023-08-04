package egovframework.omcst.menu.service;

import java.util.List;

import egovframework.omcst.user.service.UserVO;

public interface MenuService {

	List<?> selectMenuList();

	int megerMenu(MenuVO ds_menu);

	int deleteMenu(MenuVO ds_menu);

	List<?> selectUserMenuList(UserVO user);

}
