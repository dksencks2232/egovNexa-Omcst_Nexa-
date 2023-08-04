<%@ page language="java" contentType="text/xml; charset=utf-8" pageEncoding="euc-kr"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.Enumeration"%>
<%@ page import="com.oreilly.servlet.*"%>
<%@ page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.data.datatype.*" %>

<%
	//���쇱�� ���λ�� �대��紐� (�μ�ы�щ����ロ�쇱���� ����)
	String folderName  = request.getParameter("fileFolder");

    String sCharset = "utf-8";
    //��濡��� �� ���ы�� full url 硫���吏�
    String sSuccessMsg   = "";
	//��踰��� �ㅼ�� ���쇱�� ���λ�� ��踰��� ���� 寃쎈� (���� ���ㅽ������ ��移�)
	String contextRealPath  = request.getSession().getServletContext().getRealPath("/");
// 	String filePath = contextRealPath +"NMICMS"+ "\\"+ folderName + "\\";
	String filePath = contextRealPath + "nexaui"+ "\\"+ folderName + "\\";

	
	//�ㅼ�� url 二쇱�� : ��踰��� ���� 寃쎈��� 媛��� ��移� (������ ��踰� ��寃쎌�� 留�寃� 議곗���댁�� ��) 
// 	String fileUrl = "http://localhost:8080/" + "NMICMS"+ "/" + folderName + "/";
	String fileUrl = "http://localhost:8080/" + "nexaui"+ "/" + folderName + "/";

	
	int maxSize = 1000 * 1024 * 1024;
	
	 //MultipartRequest 媛�泥� ���� ( request媛�泥�, ���쇱�� ���λ�� 寃쎈�, ���� 理��� �ш린, �몄��� ����)
	  MultipartRequest multi = new MultipartRequest(request, filePath, maxSize, sCharset);  

	//���쇰�ㅼ�� �대��� Enumeration�쇰� 諛���
	  Enumeration files = multi.getFileNames();
	
	 //�대����臾� ���� 諛� ����
	  File extFolder = new File(filePath);
	  //�대�� ��臾� ����
	  if(!extFolder.exists())
	  {
	    //�대��媛� ���쇰㈃ ����
	    extFolder.mkdir();
	  }
	  
	  //virture file 紐� : vfile****... --(String)files.nextElement();
	  String sVirtualName = "";
	  
	  //紐⑤�� 媛�泥대�� 諛������� 源�吏� 諛�蹂듬Ц�� ����
	  while (files.hasMoreElements())
	  {
	    sVirtualName  = (String)files.nextElement();
	   
	    //getFile() : ���� 媛�泥� 諛��� 
	    File f = multi.getFile(sVirtualName);
	    if (f != null)
	    {   
	    	//���λ�� ���쇰��� ��硫댁���� 蹂대�� ���쇰�怨� 媛��쇰㈃ 硫���吏� ����
	    	if(multi.getParameter("fileName").equals(sVirtualName))
	    	{
	    		//getFilesystemName() : ��踰��� ���λ�� ���쇰� (利�蹂� ���댁��)
	    		sSuccessMsg  = fileUrl + multi.getFilesystemName(sVirtualName);  
	    	}	      
	    }
	  }
	
	//platform data ���� 諛� ����   
    PlatformData outPD = new PlatformData();
    VariableList outVariableList  = new VariableList();

   try {
        outVariableList.add("ErrorCode", 0);
        outVariableList.add("ErrorMsg",  sSuccessMsg);

    } catch(Exception e) {
        outVariableList.add("ErrorCode", -1);
        outVariableList.add("ErrorMsg",  e.toString());

    } finally {
    	//platform data�� variablelist 媛�泥대�� �댁�� ����
        outPD.setVariableList(outVariableList);
        
        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response, request);
        platformResponse.setContentType(PlatformType.CONTENT_TYPE_XML);
        platformResponse.setCharset(sCharset);
        platformResponse.setData(outPD);
        platformResponse.sendData();
    }
%>
