package egovframework.omcst.annual_stat.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.annual_stat.service.AnnualStatVO;
import egovframework.omcst.user.service.UserVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("annualStatDAO")
public class AnnualStatDAO extends EgovAbstractDAO {

	public List<?> selectAnnualStatList() {
		return list("annualStatDAO.selectAnnualStatList");
	}
	
	public List<?> selectAnnualStatUserList(UserVO user) {
		return list("annualStatDAO.selectAnnualStatUserList", user);
	}
	
	public AnnualStatVO selectAnnualStatUserTotal(UserVO user) {
		return (AnnualStatVO) select("annualStatDAO.selectAnnualStatUserTotal", user);
	}
}
