package egovframework.omcst.user.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.common.util.EncUtil;
import egovframework.omcst.user.service.UserService;
import egovframework.omcst.user.service.UserVO;

@Controller
public class UserController {
	
	@Resource(name = "userService")
	private UserService service;
	
	@RequestMapping(value = "/user/userList.do")
	public NexacroResult selectUserList() throws Exception {
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectUserList();
		result.addDataSet("ds_user", list);
		return result;
	}

	@RequestMapping(value = "/user/insertUser.do")
	public NexacroResult insertUser(@ParamDataSet(name = "ds_userInfo") UserVO ds_userInfo, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		ds_userInfo.setPASSWORD(EncUtil.encryptSHA512(ds_userInfo.getPASSWORD()));
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");
		ds_userInfo.setREG_USER(user.getNAME());
		ds_userInfo.setUPDATE_USER(user.getNAME());
		service.insertUser(ds_userInfo);
		List<?> list = service.selectUserList();
		result.addDataSet("ds_user", list);
		return result;
	}
	
	@RequestMapping(value = "/user/updateUser.do")
	public NexacroResult updateUser(@ParamDataSet(name = "ds_userInfo") UserVO ds_userInfo, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		if(ds_userInfo.getPASSWORD() != null) {
			ds_userInfo.setPASSWORD(EncUtil.encryptSHA512(ds_userInfo.getPASSWORD()));
		}
		HttpSession session = request.getSession();
		UserVO user = (UserVO) session.getAttribute("user");
		ds_userInfo.setREG_USER(user.getNAME());
		ds_userInfo.setUPDATE_USER(user.getNAME());
		service.updateUser(ds_userInfo);
		List<?> list = service.selectUserList();
		result.addDataSet("ds_user", list);
		return result;
	}
	
	@RequestMapping(value = "/user/deleteUser.do")
	public NexacroResult deleteUser(@ParamDataSet(name = "ds_userInfo") UserVO ds_userInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		service.deleteUser(ds_userInfo);
		List<?> list = service.selectUserList();
		result.addDataSet("ds_user", list);
		return result;
	}
}
