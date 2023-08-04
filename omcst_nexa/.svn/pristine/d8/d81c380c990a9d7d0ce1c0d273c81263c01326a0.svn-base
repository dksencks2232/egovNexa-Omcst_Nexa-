package egovframework.omcst.user_auth.web;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.auth.service.AuthVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.omcst.user_auth.service.UserAuthService;

@Controller
public class UserAuthController {
	
	@Resource(name = "userAuthService")
	private UserAuthService service;
	
	@RequestMapping(value = "/user_auth/userAuthList.do")
	public NexacroResult selectUserAuthList(@ParamDataSet(name = "ds_search") AuthVO authVO) throws Exception {
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectUserAuthList(authVO);
		result.addDataSet("ds_user", list);
		return result;
	}
	
	@RequestMapping(value = "/user_auth/saveUserAuth.do")
	public NexacroResult saveUserAuth(@ParamDataSet(name = "ds_search") AuthVO authVO, @ParamDataSet(name = "ds_user") List<UserVO> userList) throws Exception {
		NexacroResult result = new NexacroResult();
		
		service.saveUserAuth(authVO, userList);
		
		return result;
	}
}
