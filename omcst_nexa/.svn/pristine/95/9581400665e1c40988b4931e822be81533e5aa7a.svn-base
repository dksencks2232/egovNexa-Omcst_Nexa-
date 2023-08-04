(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("Sample001_transaction");
                this.set_titletext("기본샘플(조회,엑셀)");
                this._setFormPosition(0,0,800,600);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"in_val1\" type=\"STRING\" size=\"100\"/><Column id=\"in_val2\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"in_val2\"/><Col id=\"in_val1\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_out", this);
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"sabun\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"jikgup\" type=\"STRING\" size=\"256\"/><Column id=\"ipsa_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"DATE\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"marry\" type=\"STRING\" size=\"256\"/><Column id=\"salary\" type=\"STRING\" size=\"256\"/><Column id=\"smemo\" type=\"STRING\" size=\"256\"/><Column id=\"edit_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_import", this);
            obj.set_firefirstcount("1000");
            obj.getSetter("firenextcount").set("1000");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"sabun\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"STRING\" size=\"256\"/><Column id=\"jikgup\" type=\"STRING\" size=\"256\"/><Column id=\"ipsa_date\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"DATE\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"marry\" type=\"STRING\" size=\"256\"/><Column id=\"salary\" type=\"STRING\" size=\"256\"/><Column id=\"smemo\" type=\"STRING\" size=\"256\"/><Column id=\"edit_color\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "0", "89", null, null, "0", "266", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_out");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"name\"/><Cell col=\"2\" disptype=\"normal\" text=\"dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"email\"/><Cell col=\"6\" disptype=\"normal\" text=\"sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"edit_color\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:email\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:edit_color\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid_top", "absolute", "0", "63", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title", "absolute", "33", "0", "120", null, null, "0", this.div_grid_top);
            obj.set_taborder("25");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Static("sta_total_cnt", "absolute", "8", "0", "20", null, null, "0", this.div_grid_top);
            obj.set_taborder("26");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_GridFound");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Button("btn_search1", "absolute", null, "59", "111", "23", "209", null, this);
            obj.set_taborder("18");
            obj.set_text("조회(type1)");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "11", null, "17", "8", null, this);
            obj.set_taborder("19");
            obj.set_text("@ Sample001_transaction");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search2", "absolute", null, "59", "111", "23", "97", null, this);
            obj.set_taborder("20");
            obj.set_text("조회(type2)");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list2", "absolute", "-5", "384", null, null, "5", "0", this);
            obj.set_taborder("21");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("데이타를 찾을 수 없습니다.");
            obj.set_binddataset("ds_import");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"name\"/><Cell col=\"2\" disptype=\"normal\" text=\"dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"email\"/><Cell col=\"6\" disptype=\"normal\" text=\"sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"edit_color\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:sabun\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:name\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:dept\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:jikgup\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:ipsa_date\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:email\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:sex\"/><Cell col=\"7\" disptype=\"normal\" text=\"bind:marry\"/><Cell col=\"8\" disptype=\"normal\" text=\"bind:salary\"/><Cell col=\"9\" disptype=\"normal\" text=\"bind:smemo\"/><Cell col=\"10\" disptype=\"normal\" text=\"bind:edit_color\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelImport", "absolute", "89.5%", "357", null, "23", "1%", null, this);
            obj.set_taborder("23");
            obj.set_text("엑셀Import");
            obj.style.set_background("greenyellow");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "33", "72", "120", null, null, "-72", this);
            obj.set_taborder("24");
            obj.set_text("Records Found");
            obj.set_cssclass("sta_WF_GridFound2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_total_cnt2", "absolute", "8", "362", "20", "20", null, null, this);
            obj.set_taborder("25");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport", "absolute", null, "59", "76", "23", "12", null, this);
            obj.set_taborder("26");
            obj.set_text("엑셀Export");
            obj.style.set_background("greenyellow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "37%", "21", null, "40", "47.5%", null, this);
            obj.set_taborder("27");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("기본샘플(조회,엑셀)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample001_transaction.xfdl", function() {
        /***********************************************************************************
         * 01. 업무구분 : 샘플
         * 02. 메뉴명   : 
         * 03. 메뉴설명 :  (트랜잭션,엑셀익스포트&&임포트)
         * 04. 작성일   : 
         * 05. 작성자   : 
         * 06. 수정이력 : 
         ***********************************************************************************
         *     수정일     작성자   내용
         ***********************************************************************************
         *     
         ***********************************************************************************
        */
        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/

        
        /***********************************************************************************/
        /* 폼 전역변수 선언부												               */
        /***********************************************************************************/

        
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.form_onload = function(obj,e)
        {
        	//기본 공통  함수 초기화
        	Iject.formOnload(obj);

        }

        

        /***********************************************************************************
        * 사용자 Function
        ***********************************************************************************/
         /**
         * transaction type(유형1) 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_search1 = function(p_sync)
        {
        	  // 조회조건(Condition)
          this.ds_in.setColumn(0, "in_val1", "key1111");
          this.ds_in.setColumn(0, "in_val2", "key2222");
           p_sync = p_sync || true;
        	
        	var oDatas =  {
        			  svcid : "search1",
        			  sController : "jsp/nexa_inquiry.jsp",			 
        			  inds :["in_ds=ds_in"],
        			  outds :[
        				 "ds_out=ds_out"
        			     ],			     
        			  args  : ["in_var1=test11111"],
        			  bAsync : true,    // 비동기여부 (true : async  false: sync)
        			  nDataType : 0,   // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
        			  bCompress :p_sync,	 //			  
        			}; 

            //공통 transaction 함수 호츨   //function callback 
        	Iject.transaction(this,oDatas,function(svcid,errorcode,errormsg){   
        		var oMsg = { "svcid" : svcid,
        					 "errorcode" : errorcode,
        					 "errormsg" : errormsg
        		           };
               Iject.log({name:"callback",msg:oMsg})
        		//this.fn_add();
        		if(errorcode < 0)
        		{	
        		   return;
        		} 
        	});
        }

        
        /**
         * transaction type(유형2)
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_search2 = function()
        {
          this.ds_in.setColumn(0, "in_val1", "key1111");
          this.ds_in.setColumn(0, "in_val2", "key2222");
        	
          var strSvcID       = "search2";
          var strURL         = this.fv_svcUrl  + "/nexa_inquiry.jsp";
          var strInDatasets  = "in_ds=ds_in";
          var strOutDatasets = "ds_out=ds_out";
          var strArgument    = "in_var1=test11111";
          var syncFlag       = p_sync || true;
        	
          //공통 transaction 함수 호츨   //function callback 
           this.xfn_transaction(strSvcID,strURL,strInDatasets,strOutDatasets,strArgument,"fn_callback");

        }

        /**
         * form callback function
         * @parma {string} service id 
         * @parma {integer} errorcode
         * @parma {string} errormessage
         * @return  n/a
         * @example
         *
         * @memberOf public
         */
        this.fn_callback = function(svcid,errorcode,errormsg)
        {

              if(errorcode < 0) return;	    
        	  // trace(this.ds_out.saveXML());
        	   trace(this.fv_arg1); 
        	   this.fn_setToalCnt();    //totalcount
        }

        
        /**
         * set total result count
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.fn_setToalCnt = function()
        {
           var bindDs1 = this.grd_list.getBindDataset();
           var bindDs2 = this.grd_list2.getBindDataset();
           
           this.div_grid_top.sta_total_cnt.set_text(bindDs1.rowcount);
           this.sta_total_cnt2.set_text(bindDs2.rowcount);
        }

        
        /**
         * 조회 유형 1 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.btn_search1_onclick = function(obj,e)
        {
        	this.fn_search1();
        }

        /**
         * 조회 유형 2 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.btn_search2_onclick = function(obj,e)
        {
        	this.fn_search2();
        }

        /**
         * Excel Export 
         * @return 
         * @example
         *
         * @memberOf public
         */
        this.btn_ExcelExport_onclick = function(obj,e)
        {
        	
        	if(this.ds_out.rowcount < 1) this.fn_search1(false);   //sync 통신
        	 Iject.exportExcel(this,this.grd_list);
        	
        }

        this.btn_ExcelImport_onclick = function(obj,e)
        {
        	   /*
           * 1.heead = 시트명  뿌릴 해드값 A1 ~ G1 
           * 2. body = 그리드 body에 뿌릴 excel sheet 번호 
           */
            var sSheet = "body=sheet1!A2;";  
           
           /*
           * 출력할 dataset 명
           */
        	var ds = this.ds_out;
        	Iject.importExcel(this,sSheet,ds);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search1.addEventHandler("onclick", this.btn_search1_onclick, this);
            this.btn_search2.addEventHandler("onclick", this.btn_search2_onclick, this);
            this.btn_ExcelImport.addEventHandler("onclick", this.btn_ExcelImport_onclick, this);
            this.btn_ExcelExport.addEventHandler("onclick", this.btn_ExcelExport_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample001_transaction.xfdl");

       
    };
}
)();
