package egovframework.omcst.menu_auth.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.menu.service.MenuVO;
import egovframework.omcst.menu_auth.service.MenuAuthService;
import egovframework.omcst.menu_auth.service.MenuAuthVO;

@Service("menuAuthService")
public class MenuAuthServiceImpl implements MenuAuthService {
	
	@Resource(name = "menuAuthDAO")
	private MenuAuthDAO dao;

	@Override
	public List<?> selectMenuAuthList(MenuAuthVO menuAuthVO) {
		return dao.selectMenuAuthList(menuAuthVO);
	}

	@Override
	public void saveMenuAuth(MenuAuthVO menuAuthVO, List<MenuVO> menuList) {
		dao.deleteMenuAuth(menuAuthVO);
		for (MenuVO menuVO : menuList) {
			if("Y".equals(menuVO.getIS_CHECK())) {
				menuAuthVO.setMENU_ID(menuVO.getMENU_ID());
				dao.insertMenuAuth(menuAuthVO);
			}
		}
	}

}
