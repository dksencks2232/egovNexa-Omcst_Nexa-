package egovframework.omcst.developer.web;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import egovframework.omcst.developer.service.DeveloperService;
import egovframework.omcst.developer.service.DeveloperVO;

@Controller
public class DeveloperController {
	
	@Resource(name = "developerService")
	private DeveloperService service;
	
	@RequestMapping(value = "/developer/developerList.do")
	public NexacroResult selectDeveloperList() throws Exception {
		NexacroResult result = new NexacroResult();
		List<?> list = service.selectDeveloperList();
		result.addDataSet("ds_developer", list);
		return result;
	}

	@RequestMapping(value = "/developer/insertDeveloper.do")
	public NexacroResult insertDeveloper(@ParamDataSet(name = "ds_developerInfo") DeveloperVO ds_developerInfo, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		HttpSession session = request.getSession();
		DeveloperVO user = (DeveloperVO) session.getAttribute("user");
		ds_developerInfo.setREG_USER(user.getNAME());
		ds_developerInfo.setUPDATE_USER(user.getNAME());
		service.insertDeveloper(ds_developerInfo);
		List<?> list = service.selectDeveloperList();
		result.addDataSet("ds_developer", list);
		return result;
	}
	
	@RequestMapping(value = "/developer/updateDeveloper.do")
	public NexacroResult updateDeveloper(@ParamDataSet(name = "ds_developerInfo") DeveloperVO ds_developerInfo, HttpServletRequest request) throws Exception {
		NexacroResult result = new NexacroResult();
		HttpSession session = request.getSession();
		DeveloperVO user = (DeveloperVO) session.getAttribute("user");
		ds_developerInfo.setREG_USER(user.getNAME());
		ds_developerInfo.setUPDATE_USER(user.getNAME());
		service.updateDeveloper(ds_developerInfo);
		List<?> list = service.selectDeveloperList();
		result.addDataSet("ds_developer", list);
		return result;
	}
	
	@RequestMapping(value = "/developer/deleteDeveloper.do")
	public NexacroResult deleteDeveloper(@ParamDataSet(name = "ds_developerInfo") DeveloperVO ds_developerInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		service.deleteDeveloper(ds_developerInfo);
		List<?> list = service.selectDeveloperList();
		result.addDataSet("ds_developer", list);
		return result;
	}
}
