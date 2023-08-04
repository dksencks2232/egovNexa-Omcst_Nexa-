package egovframework.omcst.common.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@Controller
public class SessionController {
	
	@RequestMapping(value = "/sessionExpired.do")
	public NexacroResult logout() throws Exception {
		NexacroResult result = new NexacroResult();
		result.setErrorCode(-3);
		result.setErrorMsg("세션만료");
		return result;
	}
}
