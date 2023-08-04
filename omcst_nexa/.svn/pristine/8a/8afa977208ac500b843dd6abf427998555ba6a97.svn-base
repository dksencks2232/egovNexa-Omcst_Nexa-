package egovframework.omcst.menu.service;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * @author kjp
 *
 */
public class MenuVO {
	
	private String MENU_ID;
	
	private String MENU_NAME;
	
	private int MENU_SEQ;
	
	private String MENU_OPTP;
	
	private String PAGE_URL;
	
	private String MENU_TOP;
	
	private String MENU_GRP;
	
	private String CREATE_DT;
	
	private int MENU_LEVEL;
	
	private String PAGE_ID;
	
	private String PAGE_NAME;
	
	private String MENU_ARGS;
	
	private String MENU_STAT;
	
	private String CREATE_USER;
	
	private String UPDATE_DT;
	
	private String UPDATE_USER;
	
	private String MENU_DESC;
	
	private String MENU_AUTH;
	
	private String IS_CHECK;

	public String getMENU_ID() {
		return MENU_ID;
	}

	public void setMENU_ID(String mENU_ID) {
		MENU_ID = mENU_ID;
	}

	public String getMENU_NAME() {
		return MENU_NAME;
	}

	public void setMENU_NAME(String mENU_NAME) {
		MENU_NAME = mENU_NAME;
	}

	public int getMENU_SEQ() {
		return MENU_SEQ;
	}

	public void setMENU_SEQ(int mENU_SEQ) {
		MENU_SEQ = mENU_SEQ;
	}

	public String getMENU_OPTP() {
		if(MENU_OPTP == null) {
			if(getMENU_LEVEL() == 1) {
				MENU_OPTP = "MAIN";
			}
		}
		return MENU_OPTP;
	}

	public void setMENU_OPTP(String mENU_OPTP) {
		MENU_OPTP = mENU_OPTP;
	}

	public String getPAGE_URL() {
		return PAGE_URL;
	}

	public void setPAGE_URL(String pAGE_URL) {
		PAGE_URL = pAGE_URL;
	}

	public String getMENU_TOP() {
		if(MENU_TOP == null) {
			if(getMENU_LEVEL() == 1) {
				MENU_TOP = getMENU_GRP();
			}
		}
		return MENU_TOP;
	}

	public void setMENU_TOP(String mENU_TOP) {
		MENU_TOP = mENU_TOP;
	}

	public String getMENU_GRP() {
		return MENU_GRP;
	}

	public void setMENU_GRP(String mENU_GRP) {
		MENU_GRP = mENU_GRP;
	}

	public String getCREATE_DT() {
		return CREATE_DT;
	}

	public void setCREATE_DT(String cREATE_DT) {
		CREATE_DT = cREATE_DT;
	}

	public int getMENU_LEVEL() {
		return MENU_LEVEL;
	}

	public void setMENU_LEVEL(int mENU_LEVEL) {
		MENU_LEVEL = mENU_LEVEL;
	}

	public String getPAGE_ID() {
		return PAGE_ID;
	}

	public void setPAGE_ID(String pAGE_ID) {
		PAGE_ID = pAGE_ID;
	}

	public String getPAGE_NAME() {
		if(PAGE_NAME == null) {
			if(getMENU_LEVEL() == 1) {
				PAGE_NAME = "사용자 그룹 관리";
			}
		}
		return PAGE_NAME;
	}

	public void setPAGE_NAME(String pAGE_NAME) {
		PAGE_NAME = pAGE_NAME;
	}

	public String getMENU_ARGS() {
		if(MENU_ARGS == null) {
			if(getMENU_LEVEL() == 1) {
				MENU_ARGS = "admin";
			}
		}
		return MENU_ARGS;
	}

	public void setMENU_ARGS(String mENU_ARGS) {
		MENU_ARGS = mENU_ARGS;
	}

	public String getMENU_STAT() {
		if(MENU_STAT == null) MENU_STAT = "VIEW";
		return MENU_STAT;
	}

	public void setMENU_STAT(String mENU_STAT) {
		MENU_STAT = mENU_STAT;
	}

	public String getCREATE_USER() {
		return CREATE_USER;
	}

	public void setCREATE_USER(String cREATE_USER) {
		CREATE_USER = cREATE_USER;
	}

	public String getUPDATE_DT() {
		return UPDATE_DT;
	}

	public void setUPDATE_DT(String uPDATE_DT) {
		UPDATE_DT = uPDATE_DT;
	}

	public String getUPDATE_USER() {
		return UPDATE_USER;
	}

	public void setUPDATE_USER(String uPDATE_USER) {
		UPDATE_USER = uPDATE_USER;
	}

	public String getMENU_DESC() {
		return MENU_DESC;
	}

	public void setMENU_DESC(String mENU_DESC) {
		MENU_DESC = mENU_DESC;
	}

	public String getMENU_AUTH() {
		return MENU_AUTH;
	}

	public void setMENU_AUTH(String mENU_AUTH) {
		MENU_AUTH = mENU_AUTH;
	}

	public String getIS_CHECK() {
		return IS_CHECK;
	}

	public void setIS_CHECK(String iS_CHECK) {
		IS_CHECK = iS_CHECK;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}
