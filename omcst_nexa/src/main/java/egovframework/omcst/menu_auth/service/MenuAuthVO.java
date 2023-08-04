package egovframework.omcst.menu_auth.service;

import org.apache.commons.lang3.builder.ToStringBuilder;

public class MenuAuthVO {

	private int SEQ;
	
	private String MENU_ID;

	public int getSEQ() {
		return SEQ;
	}

	public void setSEQ(int sEQ) {
		SEQ = sEQ;
	}

	public String getMENU_ID() {
		return MENU_ID;
	}

	public void setMENU_ID(String mENU_ID) {
		MENU_ID = mENU_ID;
	}
	
	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}
