package egovframework.omcst.common.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.common.service.LoginService;
import egovframework.omcst.common.service.LoginVO;
import egovframework.omcst.common.util.EncUtil;
import egovframework.omcst.menu.service.MenuService;
import egovframework.omcst.user.service.UserVO;

@Controller
public class LoginController {
	
	@Resource(name = "loginService")
	private LoginService service;
	
	@Resource(name = "menuService")
	private MenuService menuService;

	@RequestMapping(value = "/login.do")
	public NexacroResult login(@ParamDataSet(name = "dsLogin", required = false) LoginVO ds_login, HttpServletRequest request) throws Exception {
		
		NexacroResult result = new NexacroResult();
		result.setErrorCode(-1);
		
		UserVO user = service.selectLogin(ds_login);
		
		if(user != null) {
			System.out.println("서버에서 가져온 pw: " + user.getPASSWORD());
			System.out.println("화면에서 가져온 pw: " + ds_login.getPASSWORD());
			
			if(user.getPASSWORD().equals(EncUtil.encryptSHA512(ds_login.getPASSWORD()))) {
				
				HttpSession session = request.getSession();
				
				System.out.println("@@@@@@@@@@@ session @@@@@@@ " + session);
				System.out.println("@@@@@@@@@@@ session user@@@@@@@ " + session.getAttribute("user"));
				
				if(session.getAttribute("user") != null) {
					System.out.println("@@@@@@@@@@@ session user2@@@@@@@ " + session.getAttribute("user"));
					session.removeAttribute("user");
				}
				
				session.setAttribute("user", user);
				System.out.println("@@@@@@@@@@@ user@@@@@@@ " + user);
				System.out.println("@@@@@@@@@@@ session user3@@@@@@@ " + session.getAttribute("user"));
				
				result.setErrorCode(0);
				
				result.addDataSet("gds_userInfo", user);
				
				// 사용자에 따른 메뉴 조회
				List<?> menuList = menuService.selectUserMenuList(user);
				
				// 메뉴 리턴
				result.addDataSet("gds_menu", menuList);
			}
		}
		
		return result;
	}
}
