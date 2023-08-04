package egovframework.omcst.developer.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.developer.service.DeveloperVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("developerDAO")
public class DeveloperDAO extends EgovAbstractDAO{

	public List<?> selectDeveloperList() {
		return list("developerDAO.selectDeveloperList");
	}

	public void insertDeveloper(DeveloperVO ds_developerInfo) {
		insert("developerDAO.insertDeveloper", ds_developerInfo);
	}

	public int updateDeveloper(DeveloperVO ds_developerInfo) {
		return update("developerDAO.updateDeveloper", ds_developerInfo);
	}

	public int deleteDeveloper(DeveloperVO ds_developerInfo) {
		return delete("developerDAO.deleteDeveloper", ds_developerInfo);
	}

}
