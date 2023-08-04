package egovframework.omcst.menu_auth.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.menu.service.MenuVO;
import egovframework.omcst.menu_auth.service.MenuAuthService;
import egovframework.omcst.menu_auth.service.MenuAuthVO;

@Controller
public class MenuAuthController {

	@Resource(name = "menuAuthService")
	private MenuAuthService service;
	
	@RequestMapping(value = "/menu_auth/menuAuthList.do")
	public NexacroResult selectMenuAuthList(@ParamDataSet(name = "ds_search") MenuAuthVO menuAuthVO) throws Exception {
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectMenuAuthList(menuAuthVO);
		result.addDataSet("ds_menu", list);
		
		return result;
	}
	
	@RequestMapping(value = "/menu_auth/saveMenuAuth.do")
	public NexacroResult saveMenuAuth(@ParamDataSet(name = "ds_search") MenuAuthVO menuAuthVO, @ParamDataSet(name = "ds_menu") List<MenuVO> menuList) throws Exception {
		NexacroResult result = new NexacroResult();
		service.saveMenuAuth(menuAuthVO, menuList);
		return result;
	}
}
