package egovframework.omcst.annual_stat.service;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * @author ojs
 *
 */
public class AnnualStatVO {
	
	private int SEQ;								//시퀀스	
	
	private String NAME;							//이름
	
	private String HALFANNUAL;						//반차횟수
	
	private String ANNUAL;							//연차횟수
	
	private int VACATION;							//휴가횟수
	
	private String TOTAL;							//합계
	
	private String BASIC_ANNUAL;					//지급된 연차갯수
	
	public int getSEQ() {
		return SEQ;
	}

	public void setSEQ(int sEQ) {
		SEQ = sEQ;
	}

	public String getNAME() {
		return NAME;
	}

	public void setNAME(String nAME) {
		NAME = nAME;
	}

	public String getHALFANNUAL() {
		return HALFANNUAL;
	}

	public void setHALFANNUAL(String hALFANNUAL) {
		HALFANNUAL = hALFANNUAL;
	}

	public String getANNUAL() {
		return ANNUAL;
	}

	public void setANNUAL(String aNNUAL) {
		ANNUAL = aNNUAL;
	}

	public int getVACATION() {
		return VACATION;
	}

	public void setVACATION(int vACATION) {
		VACATION = vACATION;
	}

	public String getTOTAL() {
		return TOTAL;
	}

	public void setTOTAL(String tOTAL) {
		TOTAL = tOTAL;
	}

	public String getBASIC_ANNUAL() {
		return BASIC_ANNUAL;
	}

	public void setBASIC_ANNUAL(String bASIC_ANNUAL) {
		BASIC_ANNUAL = bASIC_ANNUAL;
	}

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
}
