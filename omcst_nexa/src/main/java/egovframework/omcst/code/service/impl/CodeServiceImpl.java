package egovframework.omcst.code.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.omcst.code.service.CodeService;
import egovframework.omcst.code.service.CodeVO;
import egovframework.omcst.user.service.UserVO;

@Service("codeService")
public class CodeServiceImpl implements CodeService{
	
	@Resource(name = "codeDAO")
	private CodeDAO dao;
	
	@Override
	public List<?> selectCodeList() {
		return dao.selectCodeList();
	}
	
	@Override
	public List<?> selectCodeList(CodeVO codeVO) {
		return dao.selectCodeList(codeVO);
	}

	@Override
	public void codeSave(List<CodeVO> dsCodeList, UserVO user) {
		for (CodeVO codeVO : dsCodeList) {
			codeVO.setREG_USER(user.getNAME());
			codeVO.setUPDATE_USER(user.getNAME());
			if("I".equals(codeVO.getSTATUS())) {
				dao.insertCode(codeVO);
			} else if("U".equals(codeVO.getSTATUS())) {
				dao.updateCode(codeVO);
			} else {
				dao.deleteCode(codeVO);
			}
		}
	}

	

}
