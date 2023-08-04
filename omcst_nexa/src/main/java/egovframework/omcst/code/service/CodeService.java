package egovframework.omcst.code.service;

import java.util.List;

import egovframework.omcst.user.service.UserVO;

public interface CodeService {

	void codeSave(List<CodeVO> dsCodeList, UserVO user);

	List<?> selectCodeList();
	
	List<?> selectCodeList(CodeVO codeVO);

}
