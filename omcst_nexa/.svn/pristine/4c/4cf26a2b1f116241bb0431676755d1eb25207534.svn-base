package egovframework.omcst.menu.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.menu.service.MenuService;
import egovframework.omcst.menu.service.MenuVO;
import egovframework.omcst.user.service.UserVO;

@Controller
public class MenuController {
	
	@Resource(name = "menuService")
	private MenuService service;

	@RequestMapping(value = "/menu/menuList.do")
	public NexacroResult selectMenuList() throws Exception {
		List<?> list = service.selectMenuList();
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_menu", list);
		return result;
	}
	
	@RequestMapping(value = "/menu/menuMerge.do")
	public NexacroResult mergeMenu(@ParamDataSet(name = "ds_menu") MenuVO ds_menu, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");
		ds_menu.setCREATE_USER(user.getNAME());
		ds_menu.setUPDATE_USER(user.getNAME());
		
		int retVal = service.megerMenu(ds_menu);
		if(retVal == 0) {
			result.setErrorCode(-1);
		}
		return result;
	}
	
	@RequestMapping(value = "/menu/menuDelete.do")
	public NexacroResult deleteMenu(@ParamDataSet(name = "ds_menuInfo") MenuVO ds_menu) throws Exception {
		NexacroResult result = new NexacroResult();
		
		int retVal = service.deleteMenu(ds_menu);
		if(retVal > 0) {
			List<?> list = service.selectMenuList();
			result.addDataSet("ds_menu", list);
		} else {
			result.setErrorCode(-1);
		}
		return result;
	}

}
