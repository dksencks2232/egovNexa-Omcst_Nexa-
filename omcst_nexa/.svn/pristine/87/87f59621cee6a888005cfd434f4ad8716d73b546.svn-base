package egovframework.omcst.common.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class LogoutController {

	@RequestMapping(value = "/logout.do")
	public NexacroResult logout(HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		HttpSession session = request.getSession();
		if(session.getAttribute("user") != null) {
			session.invalidate();
		}
		return result;
	}
}
