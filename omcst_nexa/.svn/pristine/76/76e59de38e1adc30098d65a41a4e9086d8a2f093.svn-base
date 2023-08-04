package egovframework.omcst.annual_stat.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.annual_stat.service.AnnualStatService;
import egovframework.omcst.annual_stat.service.AnnualStatVO;
import egovframework.omcst.code.service.CodeVO;
import egovframework.omcst.user.service.UserVO;
import sun.security.util.Debug;

@Service("annualStatService")
public class AnnualStatServiceImpl implements AnnualStatService {
	
	@Resource(name = "annualStatDAO")
	private AnnualStatDAO dao;
	
	@Override
	public List<?> selectAnnualStatList() {
		return dao.selectAnnualStatList();
	}
	
	@Override
	public List<?> selectAnnualStatUserList(UserVO user) {	
		return dao.selectAnnualStatUserList(user);
	}
	
	@Override
	public AnnualStatVO selectAnnualStatUserTotal(UserVO user) {	
		return dao.selectAnnualStatUserTotal(user);
	}

}
