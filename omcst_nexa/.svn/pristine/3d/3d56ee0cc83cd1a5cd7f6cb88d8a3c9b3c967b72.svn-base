/**
 * @fileoverview 넥사크로  공통 Library
 * @author  copyright 2015 TOBESOFT {J}
 */
if (!JsNamespace.exist("Iject"))
{

	/**
	 * @namespace
	 * @name Iject
	 * @author
	 * @memberof! Iject
	 * @author  copyright 2015 TOBESOFT {J}
	 */
	JsNamespace.declare("Iject", {


		 /**
		 * Application 최초 로딩시 처리되는 함수
		 * @parma {XaComp} application
		 * @example
		 * this.application_onload = function(obj:Application, e:nexacro.LoadEventInfo)
		 *	{
		 *	   //초기 application onload setting
		 *	   Iject.appOnload(obj);
		 *	}
         *
		 * @memberOf Iject
		 */
	      appOnload : function(app)
	      {
	            var o= app;
	         	Iject.$.vFrameSet      = o.mainframe.VFrameSet;                                			//VFrameSet
	 			Iject.$.loginFrame     = o.mainframe.VFrameSet.LoginFrame; 				   				//LoginFrame
	 			Iject.$.hFrame         = o.mainframe.VFrameSet.HFrameSet;                      			//HFrame
	 			Iject.$.leftFrame      = o.mainframe.VFrameSet.HFrameSet.LeftFrame;            			//leftFrame
	 			Iject.$.vFrameSet1     = o.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			//VFrameSet1
	 			Iject.$.topFrame       = o.mainframe.VFrameSet.HFrameSet.VFrameSet1.TopFrame;  			//TopFrame
	 			Iject.$.workFrame      = o.mainframe.VFrameSet.HFrameSet.VFrameSet1.WorkFrame;            //WorkForm
	 			Iject.$.mainFrame      = o.mainframe.VFrameSet.HFrameSet.VFrameSet1.WorkFrame.MainForm;  //mainform
	 			Iject.$.mdiFrame       = o.mainframe.VFrameSet.MDIFrame;                       			//mdi frame
	 			Iject.$.httpurl        = o.services["svcurl"].url;							  	//trnasaction service url
	 			Iject.$.mainframeSize  = {width: o.mainframe.width,height: o.mainframe.height};
	 			Iject.$.ExtCommonPath  = (nexacro.Browser =="Runtime" ? system.convertRealPath("%USERAPP%"+"Component/ExtCommonV13.dll") :"");

				 if( nexacro.Browser != "Runtime"
				   || (nexacro.Browser == "IE" && nexacro.BrowserVersion > 9) ) {
				 //o.services["svcurl"].set_url("");

				  var gUrl  =application.xadl.split("//")[1].split("/")[0];
				   o.services["svcurl"].set_url("http://" + gUrl + "/");
					 Iject.Html5.setFavicon();  //favicon setting
					 nexacro.loadJSLibraries(["./nexacro14lib/component/IjectJS/ExtApi/jquery-1.10.2.js"]);
				   }

	 			Iject.login(o);//로그인처리
	      },

		/**
		 * form onload 기본 함수
		 * @public
		 * @param  {XaComp} this(현재폼)
		 * @return
		 * @example
		 * this.form_onload = function(obj:Form, e:nexacro.LoadEventInfo)
		 *	{
		 *		Iject.formOnload(obj);
		 *
		 *	}
		 * @memberOf Iject
		 */
		formOnload : function(o)
		{
			var pThis = o;
  				//버튼 권한
		},


		/**
		 * logout 처리시 실행되는 함수
		 * @param  {XaComp} this(현재폼)
		 * @return
		 * @example
		 * @memberOf Iject
		 */
		login : function(o)
		{

			if(nexacro.Browser == "Runtime")
			{

				Iject.Runtime.loginR(o);
			}
			else
			{
				Iject.Html5.loginH(o);
			}
		},

		/**
		 * 로그인 처리후 메인 프레임 값 setting
		 * @param
		 * @return
		 * @example
		 * Iject.setSeprateFrame()
		 * @memberOf Iject
		 */
		setSeprateFrame : function()
		{



			Iject.$.vFrameSet.set_separatesize(Iject.$.framesize);



			//**** 임시 필요에따라 삭제해서 사용
			Iject.$.userid = application.gds_userInfo.getColumn(0,"USER_ID");
			Iject.$.usernm = application.gds_userInfo.getColumn(0,"USER_NM");

			Iject.$.mainFrame.form.fn_set();  //mainframe argument setting
			Iject.$.topFrame.form.fn_set();  //topframe argument setting

		},

		/**
		 * logout 처리 함수
		 * @param
		 * @return
		 * @example
		 * Iject.logout();
		 * @memberOf Iject
		 */
		logout : function()
		{
			if(nexacro.Browser == "Runtime")
			{
				Iject.Runtime.logoutR(); //Runtime
			}
			else
			{
				Iject.Html5.logoutH();   //html5
			}

		},

		/**
		 * 엑셀 익스포트 공통함수
		 * @param  {XaComp} this(현재폼)
		 * @param  {object} Grid
		 * @param  {string} 파일명
		 * @param  {string} sheet명
		 * @return
		 * @example
		 *  Iject.exportExcel(this,this.grd_list);
		 * @memberOf Iject
		 */
		exportExcel : function(o,oGrid,sFileName,strSheet)
		{

			var pThis = o;
			var dToday = new Date();
			var sSvcUrl = application.services["svcurl"].url+"XExportImport";
			var strType = oGrid.toString().toUpperCase();
			var strSheet = Eco.isEmpty(strSheet) ? "sheet" :strSheet;
            var strExportFileName = Eco.isEmpty(sFileName) ?  dToday.getTime() : (dToday.getTime() + "_" + sFileName);
			var exportObj = new ExcelExportObject();

			exportObj.clear();
			//onsuccess
			exportObj.addEventHandler("onsuccess", function(obj,e){
			}, pThis);


			//onerror
			exportObj.addEventHandler("onerror", function(obj,e){
				 trace(" =========== Excel Export onerror event start============");
				 trace(" =========== e.eventid : " + e.eventid + " ============");
				 trace(" =========== e.fromobject : " + e.fromobject + " ============");
				 trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
				 trace("=========== e.errorcode : " + e.errorcode + " ============");
				 trace("=========== e.errormsg) : " + e.errormsg + " ============");
			}, pThis);

			exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
			exportObj.set_exportuitype("exportprogress");    // set
			exportObj.set_exporturl(sSvcUrl);
			exportObj.set_exportfilename(strExportFileName);

			if(strType == "[OBJECT GRID]")
			{
				oGrid = oGrid;
				sSheetName = strSheet+"1";
				exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");

			}
			else
			{
				for(var i=0; i<obj.length; i++)
				{
					sSheetName = strSheet+(i+1);
					oGrid = oGrid[i];
					exportObj.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","background","font", "both");
				}
			}

			exportObj.exportData();

		},

		/**
		 * excel import 공통함수
		 * @param  {XaComp} this(현재폼)
		 * @param  {string} sheet명
		 * @param  {object} dataset명
		 * @return N/A
		 * @example
		 * var sSheet = "body=sheet1!A2;";
		 * var ds = this.ds_out;
	     * Iject.importExcel(this,sSheet,ds);
		 * @memberOf Iject
		 */
		importExcel : function(o,sSheet,ds)
		{

			var pThis = o;
			var dsName = ds.name;
			var ds_importTemp = Iject.Util.isCheckDs(pThis,"ds_importTemp");
			var sSvcUrl = application.services["svcurl"].url+"XExportImport";
			var importObj = new nexacro.ExcelImportObject("importExcel",pThis);

			 Iject.$["fobj"] = pThis;
			 ds.clearData();
			 ds_importTemp.copyData(ds);
			 pThis["ds_import"] = ds;

			importObj.set_importtype(nexacro.ImportTypes.EXCEL);


			//onsuccess
			importObj.addEventHandler("onsuccess",function(obj,e){

				var dsFromData = this["ds_importTemp"];   //엑셀데이타
				var dsToData = this["ds_import"];   //원본

				 var arrCol = [];

				 for(var i=0; i< dsToData.getColCount();i++)
				{
					 var sToCol =  dsToData.getColID(i);
					 var sFromCol = dsFromData.getColID(i);
					 arrCol[i] =  sToCol + "=" + sFromCol;
				}

			    dsToData.clearData();  //원본삭제
				dsFromData.set_enableevent(false);
				for(var i=0; i < dsFromData.getRowCount(); i++)
				{
				    var addRow = dsToData.addRow();
				    dsToData.copyRow(addRow,dsFromData,i,arrCol.join(","));

				}
				dsFromData.set_enableevent(true);
				dsToData.applyChange();
				dsFromData.clear();

			},  pThis);

			//onerror
			importObj.addEventHandler("onerror", function (obj,e) {

		     trace(" =========== Excel Import onerror event start============");
			 trace(" =========== e.eventid : " + e.eventid + " ============");
			 trace(" =========== e.fromobject : " + e.fromobject + " ============");
			 trace("=========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
			 trace("=========== e.errorcode : " + e.errorcode + " ============");
			 trace("=========== e.errormsg) : " + e.errormsg + " ============");
			 trace("======================   end   =========================");

			},pThis);

			importObj.set_importurl(sSvcUrl);
            Eco.Logger.debug({message:"#### ExceImport start log ###", stack:true,elapsed: true});
			importObj.importData("", "[command=getsheetdata;output=outDs;" + sSheet +"]", "["+ds_importTemp.name+"=outDs]");
		},

		/**
		 * 공통 팝업 modal
		 *@param {XaComp} this(현재폼)
		 *@param {object} arguments
		 *@param {string | function} callback인자값
		 *@return
		 * callback function
		 * @example
		 * var oData ={
         *sId  : "singledetail",   //callback id
         *sUrl : "sample::Pattern_01.xfdl",   //url
         *bshowtitlebar : true, //title bar
         *bAutoSize  : true,    //autosize
         *bResize    : false,   //resize
         *bShowtatusbar : false,  //statusbar
         *sOpenalign    : "center middle",  //align
         *oArgs :{'arg1':'55555',
         *        'arg2':'333333'
         *      }          // argument
         * };
         *
		 * //팝업 테스트
		 *Iject.showModal(this,oData,function(){
         *
		 * var pThis= this.fobj;
    	 *
	     * trace(" pThis.name : " + pThis.name);
	     * });
		 * @memberOf Iject
		 */
		showModal : function(o,oData,fncCallback)
		{
			var pThis = o;
			var sId = oData.sId + "_" + Math.random();
			var sBackground = Eco.isEmpty(oData.sBackground) ? "" : oData.sBackground;
			if(Eco.isEmpty(oData)){
				Eco.Logger.error({message: "unKnown calback argument!!!", elapsed: true});
				return;
			}

			var cf = new ChildFrame;
			cf.init(sId);
			cf.set_formurl(oData.sUrl);
			cf.set_showtitlebar(oData.bshowtitlebar);
			cf.set_layered(false);
			cf.set_autosize(oData.bAutoSize);
			cf.set_resizable(oData.bResize);
			cf.set_showstatusbar(oData.bShowstatusbar);
			cf.set_openalign(oData.sOpenalign); //화면의 중앙에 위치
			cf.style.set_background(sBackground);   //backround color
			cf.set_dragmovetype("all");
			cf.arguments = {};
			//cf.arguments[pThis.name] = pThis.name;
			cf.arguments["fObj"] = pThis;
			cf.arguments["popup_oArg"] = oData.oArgs;
			cf.arguments["p_callback"] = fncCallback;
			//pThis.variant  = "";
			var popWin = new ChildFrame;

			cf.showModal(sId, pThis.getOwnerFrame() ,oData.oArgs,  pThis ,function(svcid,variant){

				var p_variant = Eco.isEmpty(this.variant) ? variant : this.variant;
				this.variant = "";
				fncCallback.call(this,svcid,p_variant);

			});

		},

		/**
		 * 공통 팝업 close
		 * @param {XaComp} this(현재FORM)
		 * @param {string|object|array} arguments
		 * @return
		 * @example
		 *  //문자열
		 *  var str = "testArgq11111111111111111111";
	     *   Iject.close(this,str);
	     *   //array
	     *   var arr = ["array","testvalue1", "testvalue2", "testvalue3"];
         *   Iject.close(this,arr);
         *  //json 문자열
         *  var objJson = {key1:"1111",key2:"2222",key3:"3333"};
    	 *	Iject.close(this,objJson);
		 * @memberOf Iject
		 */
		close : function (o,variant)
		{
			var pThis  = o;

			if(pThis.opener && typeof variant !="string")
			{
				variant = Eco.isEmpty(variant) ? "" : variant;
				pThis.opener.variant = variant;
				pThis.close();

			}
			else
			{
				pThis.close(variant);
			}

		},

		/**
		 * 공통 팝업 open
		 * @param {XaComp} this(현재폼)
		 * @param {string} id
		 * @param {string} url
		 * @param {object} arguments
		 * @param {string} callback명
		 * @return
		 * @example
		 *   Iject.open(this,"pOpen","aa::aa.xfdl",{arg1:"aaa},"fn_popCallbac");
		 * @memberOf Iject
		 */
		open : function(o,sId,url,oArg,fnCallback)
		{

			var bSucc;
			var nScreenWidth;
			var pThis = o;
			var nScreenHeight;
			var arrScreenSize;
			var nLeft   =  (application.mainframe.width / 2) - Math.round(pThis.width / 2);
			var nTop    = (application.mainframe.height / 2) - Math.round(pThis.height / 2) ;

			var cf= pThis.getOwnerFrame();
			var bSucc = application.open(sId ,url,cf, oArg, "showtitlebar=true showstatusbar=false",nLeft, nTop,null,null,pThis);

			if(!bSucc) 	Eco.Logger.error({message: "modaless open error", elapsed: true});
		},

		/**
		 * alert 공통
		 * @param {string} message
		 * @param {string} title caption message
		 * @return
		 * @example
		 * Iject.alert("처리되었습니다.","완료");
		 * @memberOf Iject
		 */
		alert : function(sMsg,sCaption)
		{
			var pCaption = Eco.isEmpty(sCaption) ? "알림" : sCaption;
				application.alert(sMsg,pCaption);
		},

		/**
		 * confirm 공통
		 * @param {string} message
		 * @param {string} title caption message
		 * @return {boolen} true/false
		 * @example
		 * var isConfirm = Iject.confirm("처리하시겠습니까?","캡션");
		 *    if(isConfirm) alert("정상");
		 * @memberOf Iject
		 */
		confirm : function(sMsg,sCaption){

			var pCaption = Eco.isEmpty(sCaption) ? "확인" : sCaption;
				return application.confirm(sMsg,pCaption);

		},


		/**
		 * 	developer log message print
		 * @param {XaComp} this(현재Form)
		 * @param  {object} arguments
		 * @return
		 * @example
		 *
		 *    Iject.log({name : "fn_function",msg:{"logmessage":"aaaaaaaaaaaaaaaa"}});
		 *    or
		 *    Iject.log({name : "fn_function",msg:"logmessage",info:"error"});   //에러일경우
		 *
		 * @memberOf Iject
		 */
		log : function(oData)
		{
		   if(typeof arguments[0] != "object") return;

		    var pArguments =  oData || {};
			var sName      = oData.name || "";
			var sMsg       = oData.msg || "";
			var sErrror    = oData.info || "info";
			var nDate = Eco.date.getMaskFormatString(new Date(), "yyyy년 MM월 dd일 tt hh시 mm분 ss초");
			var dataString, levelString;
		    var resultMessage = "\n";
			    resultMessage +=  "========================= LOG PRINT("+sErrror+") ==============";
			    resultMessage +=  "\n  (TimeStamp : " + nDate + ")";
			    resultMessage +=  "\n==============================================================";
			    resultMessage += "\n  [Name]      : " + sName;
			    resultMessage += "\n  [Browser]   : " + nexacro.Browser;
		        resultMessage += "\n  [Arguments] : " + [].join.call(arguments.callee.caller.arguments);    //넘어온 아규먼트

		    if(!Eco.isEmpty(sMsg))
		    {
		         resultMessage +=  "\n === CURRENT MESSAGE ===";
		         if(typeof sMsg == "object")
		         {
		            for(key in sMsg)
					{
				    	resultMessage += "\n  ["+key+"] : " +sMsg[key] +" ";    //넘어온 아규먼트
					}
		         }
		         else
		         {
		            resultMessage += "\n  "+sMsg + " ";    //넘어온 아규먼트
		        }

		    }
		    resultMessage  += "\n===================== COMPLETE LOG ======================\n";

		    if(sErrror == "error")
		    {
				  var e = new Error(resultMessage);
					  throw e;
		    }
		    else
		    {
		      application.trace(resultMessage);
		    }

		},


		 /**
		 * 공통 트랜잭션 함수
		 * @param {XaComp} this(현재FORM)
		 * @param {object} arguments
		 * @param {string | function} callback명
		 * @return N/A
		 * @example
		 * var oDatas =  {
		 *	  sController : "loginCheck.do",
		 *	  inds :["dsin=dsin"],
		 *	  outds :[
		 *		 "gds_userInfo=gds_userInfo",
		 *		 "gds_message=gds_message",
		 *		 "gds_config=gds_userInfo"
		 *		 ],
		 *	  args  : [
		 *		  "V_USER_ID=chulsoo",
		 *		  "V_USER_PWD=test123"
		 *	  ],
		 *	  bAsync : true, // 비동기여부 (true : async  false: sync)
		 *	  nDataType : 0, // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
		 *	  bCompress :false,
		 *	};
		 *
		 *   Iject.transaction(this,oDatas,function(){
		 *	 //nexacro request callback function
		 *
		 *	});
		 * @memberOf Iject
		 */
		 transaction : function(o,oData,callback)
		{

			if(Eco.isEmpty(oData)) return;
			var pThis = o;
			var strHttpUrl         =  application.services["svcurl"].url;
			var oSvc 	           =
			  {
					oForm     : pThis,
				    svcid      :oData.svcid, //service id
					callback   : callback
		         };

			 //callback명
		    var sController        = Eco.isEmpty(oData.sController) ? "" : oData.sController;
		    var bCompress          = Eco.isEmpty(oData.bCompress)   ? false : oData.bCompress; //controller id
			var inputDataset       = Eco.isEmpty(oData.inds)        ? "" :oData.inds.join(" ");   //input dataset
		    var outputDataset      = Eco.isEmpty(oData.outds)       ? "" :oData.outds.join(" ");   //output dataset
		    var strArgument        = Eco.isEmpty(oData.args)        ? "" : oData.args.join(" ");  // argument  변환
		    var bAsync             = Eco.isEmpty(oData.bAsync)      ? true : oData.bAsync;           // 비동기여부 (true : async  false: sync)
		    var nDataType          = Eco.isEmpty(oData.nDataType)   ?  false : oData.nDataType;
			var sURL               = strHttpUrl + sController;       //service url


   		    if(!Eco.isFunction(pThis.transactionCallback))
   		    {
   		         //callback 처리
				nexacro.Form.prototype.transactionCallback = function(oSvc,nErrorcode,strErrorMsg)
				{
					var strSvcId    = oSvc.svcid;       // service id
					var svcCallback = oSvc.callback; //콜벡명

					if(Eco.isEmpty(svcCallback)) return;

					//check callback function
					if(typeof svcCallback == "function" )
					{

						svcCallback.call(this,strSvcId,nErrorcode,strErrorMsg);
						//callback in string 일경우
					}else if(typeof svcCallback == "string")
					{
						if(!Eco.isFunction(this[svcCallback]))return;
						this[svcCallback].call(this,strSvcId,nErrorcode,strErrorMsg);
					}
					else
					{
						Eco.Logger.error({message: "unKnown calback argument!!!", elapsed: true});
					}
				};
   		    }
   		    Eco.Logger.debug({message:"#### transaction  start  ###", stack:true,elapsed: true});
			pThis.transaction(oSvc, sURL,inputDataset, outputDataset,strArgument,"transactionCallback",bAsync);

		},


	});

}
