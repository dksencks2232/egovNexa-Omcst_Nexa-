package egovframework.omcst.menu_auth.service;

import java.util.List;

import egovframework.omcst.menu.service.MenuVO;

public interface MenuAuthService {

	List<?> selectMenuAuthList(MenuAuthVO menuAuthVO);

	void saveMenuAuth(MenuAuthVO menuAuthVO, List<MenuVO> menuList);

}
