package egovframework.omcst.menu_auth.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.menu.service.MenuVO;
import egovframework.omcst.menu_auth.service.MenuAuthVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("menuAuthDAO")
public class MenuAuthDAO extends EgovAbstractDAO {

	public List<?> selectMenuAuthList(MenuAuthVO menuAuthVO) {
		return list("menuAuthDAO.selectMenuAuthList", menuAuthVO);
	}

	public int deleteMenuAuth(MenuAuthVO menuAuthVO) {
		return delete("menuAuthDAO.deleteMenuAuth", menuAuthVO);
	}

	public void insertMenuAuth(MenuAuthVO menuAuthVO) {
		insert("menuAuthDAO.insertMenuAuth", menuAuthVO);
	}

	public int deleteMenu(MenuVO ds_menu) {
		return delete("menuAuthDAO.deleteMenu", ds_menu);
	}

}
