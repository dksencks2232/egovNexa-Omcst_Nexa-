package egovframework.omcst.code.service.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.omcst.code.service.CodeVO;
import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("codeDAO")
public class CodeDAO extends EgovAbstractDAO {
	
	public List<?> selectCodeList() {
		return list("codeDAO.selectCodeList");
	}
	
	public List<?> selectCodeList(CodeVO codeVO) {
		return list("codeDAO.selectCodeList", codeVO);
	}

	public void insertCode(CodeVO codeVO) {
		insert("codeDAO.insertCode", codeVO);
	}

	public int updateCode(CodeVO codeVO) {
		return update("codeDAO.updateCode", codeVO);
	}

	public int deleteCode(CodeVO codeVO) {
		return delete("codeDAO.deleteCode", codeVO);
	}

}
