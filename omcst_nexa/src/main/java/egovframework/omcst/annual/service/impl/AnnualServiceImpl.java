package egovframework.omcst.annual.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.annual.service.AnnualService;
import egovframework.omcst.annual.service.AnnualVO;
import egovframework.omcst.code.service.CodeVO;
import egovframework.omcst.user.service.UserVO;
import sun.security.util.Debug;

@Service("annualService")
public class AnnualServiceImpl implements AnnualService {
	
	@Resource(name = "annualDAO")
	private AnnualDAO dao;
	
	@Override
	public List<?> selectAnnualList() {
		return dao.selectAnnualList();
	}
	
	@Override
	public List<?> selectAnnualUserList(UserVO user) {	
		return dao.selectAnnualUserList(user);
	}

	@Override
	public void saveAnnual(List<AnnualVO> ds_annual, UserVO user) {
		for (AnnualVO annualVO : ds_annual) {
			annualVO.setMEMBER_SEQ(user.getSEQ());
			annualVO.setUPDATE_USER(user.getSEQ());
			if("I".equals(annualVO.getDSSTATUS())) {				// insert
				dao.insertAnnual(annualVO);
			} else if("U".equals(annualVO.getDSSTATUS())) {			//update
				dao.updateAnnual(annualVO);
			} else {												//delete
				dao.deleteAnnual(annualVO);
			}
		}
	}

	@Override
	public int deleteAnnual(AnnualVO ds_annual) {
		return dao.deleteAnnual(ds_annual);
	}
	
	@Override
	public List<AnnualVO> selectUserSeq(UserVO user) {
		return dao.selectUserSeq(user);
	}
	
	@Override
	public List<?> selectAnnualUserSearch(AnnualVO paramList) {
		return dao.selectAnnualUserSearch(paramList);
	}

}
