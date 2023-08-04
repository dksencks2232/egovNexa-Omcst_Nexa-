package egovframework.omcst.menu.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.menu.service.MenuService;
import egovframework.omcst.menu.service.MenuVO;
import egovframework.omcst.menu_auth.service.impl.MenuAuthDAO;
import egovframework.omcst.user.service.UserVO;

@Service("menuService")
public class MenuServiceImpl implements MenuService {
	
	@Resource(name = "menuDAO")
	private MenuDAO dao;
	
	@Resource(name = "menuAuthDAO")
	private MenuAuthDAO menuAuthDAO;

	@Override
	public List<?> selectMenuList() {
		return dao.selectMenuList();
	}

	@Override
	public int megerMenu(MenuVO ds_menu) {
		return dao.megerMenu(ds_menu);
	}

	@Override
	public int deleteMenu(MenuVO ds_menu) {
		menuAuthDAO.deleteMenu(ds_menu);
		return dao.deleteMenu(ds_menu);
	}

	@Override
	public List<?> selectUserMenuList(UserVO user) {
		return dao.selectUserMenuList(user);
	}

}
