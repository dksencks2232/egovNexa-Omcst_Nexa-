package egovframework.omcst.developer.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.developer.service.DeveloperService;
import egovframework.omcst.developer.service.DeveloperVO;

@Service("developerService")
public class DeveloperServiceImpl implements DeveloperService {
	
	@Resource(name = "developerDAO")
	private DeveloperDAO dao;

	@Override
	public List<?> selectDeveloperList() {
		return dao.selectDeveloperList();
	}

	@Override
	public void insertDeveloper(DeveloperVO ds_developerInfo) {
		dao.insertDeveloper(ds_developerInfo);
	}

	@Override
	public int updateDeveloper(DeveloperVO ds_developerInfo) {
		return dao.updateDeveloper(ds_developerInfo);
	}

	@Override
	public int deleteDeveloper(DeveloperVO ds_developerInfo) {
		return dao.deleteDeveloper(ds_developerInfo);
	}

}
