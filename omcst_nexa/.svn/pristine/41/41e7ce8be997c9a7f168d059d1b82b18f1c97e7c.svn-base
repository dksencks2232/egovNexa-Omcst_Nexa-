package egovframework.omcst.annual.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("annualDAO")
public class AnnualDAO extends EgovAbstractDAO {

	public List<?> selectAnnualList() {
		return list("annualDAO.selectAnnualList");
	}
	
	public List<?> selectAnnualUserList(UserVO user) {
		return list("annualDAO.selectAnnualUserList", user);
	}

	public void insertAnnual(AnnualVO ds_annual) {
		insert("annualDAO.insertAnnual", ds_annual);
	}
	
	public void updateAnnual(AnnualVO ds_annual) {
		insert("annualDAO.updateAnnual", ds_annual);
	}

	public int deleteAnnual(AnnualVO ds_annual) {
		return delete("annualDAO.deleteAnnual", ds_annual);
	}
	
	public List<AnnualVO> selectUserSeq(UserVO user) {
		return (List<AnnualVO>) list("annualDAO.selectUserSeq", user);
	}
	
	public List<?> selectAnnualUserSearch(AnnualVO paramList) {
		return list("annualDAO.selectAnnualUserSearch", paramList);
	}

}
