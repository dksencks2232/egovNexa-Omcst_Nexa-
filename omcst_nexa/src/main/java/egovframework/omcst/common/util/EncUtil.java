package egovframework.omcst.common.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class EncUtil {
	
	/**
     * sha512 방식으로 암호화한 스트링을 리턴한다
     *
     * @param target
     * @return [encrypted string]
     */
    public final static String encryptSHA512(Object target) {
        try {
            MessageDigest sh = MessageDigest.getInstance("SHA-512");
            sh.update(target.toString().getBytes());
            StringBuffer sb = new StringBuffer();
            for (byte b : sh.digest()) sb.append(Integer.toHexString(0xff & b));
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

}
