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
                this.set_name("Pattern_03");
                this.set_titletext("엑셀 Import / Export");
                this._setFormPosition(0,0,800,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_code\">100</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Gil-Dong Hong</Col><Col id=\"telno\">02-1234-5678</Col><Col id=\"address\">Seoul Korea</Col><Col id=\"age\">100</Col></Row><Row><Col id=\"dept_code\">200</Col><Col id=\"dept_name\">Technical Support Group</Col><Col id=\"employee\">Sun-Sin Lee</Col><Col id=\"telno\">02-2345-6789</Col><Col id=\"address\">Pusan Korea</Col><Col id=\"age\">200</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_out", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"dept_code\" type=\"STRING\" size=\"256\"/><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/><Column id=\"employee\" type=\"STRING\" size=\"256\"/><Column id=\"telno\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grd_list", "absolute", "0", "38", null, "170", "0", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"employee\"/><Cell col=\"3\" text=\"telno\"/><Cell col=\"4\" text=\"address\"/><Cell col=\"5\" text=\"age\"/></Band><Band id=\"body\"><Cell text=\"bind:dept_code\"/><Cell col=\"1\" text=\"bind:dept_name\"/><Cell col=\"2\" text=\"bind:employee\"/><Cell col=\"3\" text=\"bind:telno\"/><Cell col=\"4\" text=\"bind:address\"/><Cell col=\"5\" text=\"bind:age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "8", "90", "29", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "217", "90", "28", "0", null, this);
            obj.set_taborder("3");
            obj.set_text("Import");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "246", null, null, "0", "0", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_out");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"employee\"/><Cell col=\"3\" text=\"telno\"/><Cell col=\"4\" text=\"address\"/><Cell col=\"5\" text=\"age\"/></Band><Band id=\"body\"><Cell text=\"bind:dept_code\"/><Cell col=\"1\" text=\"bind:dept_name\"/><Cell col=\"2\" text=\"bind:employee\"/><Cell col=\"3\" text=\"bind:telno\"/><Cell col=\"4\" text=\"bind:address\"/><Cell col=\"5\" text=\"bind:age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "4", "8", "140", "36", null, null, this);
            obj.set_taborder("0");
            obj.set_text("1.엑셀익스포트");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "6", "216", "332", "36", null, null, this);
            obj.set_taborder("5");
            obj.set_text("2.엑셀임포트");
            obj.set_cssclass("sta_WF_title");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("excelExportImport");
            		p.set_titletext("엑셀 Import / Export");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Pattern_03.xfdl", function() {
        /***********************************************************************************
         * 01. 업무구분 : 
         * 02. 메뉴명   : 
         * 03. 메뉴설명 :  
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
        	Iject.formOnload(obj);
        	
        }

        //ExcelExport 실행
        this.Button00_onclick = function(obj,e)
        {
        	
           Iject.exportExcel(this,this.grd_list);

        }

        this.Button01_onclick = function(obj,e)
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
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("Pattern_03.xfdl");

       
    };
}
)();
