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
                this.set_name("AnnualStat");
                this.set_titletext("SingleDetail");
                this._setFormPosition(0,0,900,500);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_annualStat", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"22\"/><Column id=\"HALFANNUAL\" type=\"STRING\" size=\"22\"/><Column id=\"ANNUAL\" type=\"STRING\" size=\"4\"/><Column id=\"VACATION\" type=\"STRING\" size=\"10\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"10\"/><Column id=\"BASIC_ANNUAL\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_grid_top", "absolute", "0", "31", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "14", null, this.div_grid_top);
            obj.set_taborder("28");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Grid("annualStat_grid", "absolute", "10", "66", null, null, "10", "10", this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_annualStat");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"이름\"/><Cell col=\"1\" text=\"반차\"/><Cell col=\"2\" text=\"연차\"/><Cell col=\"3\" edittype=\"none\" text=\"휴가\"/><Cell col=\"4\" text=\"합계\"/><Cell col=\"5\" text=\"지급휴가\"/></Band><Band id=\"body\"><Cell col=\"0\" edittype=\"none\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:HALFANNUAL\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:ANNUAL\" calendardisplay=\"edit\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:VACATION\" calendardisplay=\"edit\" calendardisplaynulltype=\"default\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:TOTAL\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:BASIC_ANNUAL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("SingleDetail");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Annual_stat.xfdl", function() {
        // 변경 여부 체크변수.
        this.isChange = false;

        
        // 페이지 로딩 후 호출되는 함수.
        this.AnnualStat_onload = function(obj,e)
        { 	
        	this.ds_annualStat.clearData();
        	this.getSelect();
        }

        
        // 검색 버튼을 눌렀을 때

        this.btn_select_onclick = function() {
        	this.getSelect();
        }

        
        // 검색

        this.getSelect = function() {
        	this.ds_annualStat.clearData();
        	var id = "AnnualStatService";
        	var url = application.services["svcurl"].url + "/annualStat/annualStatList.do";
        	var inDateset = "";
        	var outDateset = "ds_annualStat=ds_annualStat";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.getSelectCallBack = function(id,code,msg) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.AnnualStat_onload, this);
            this.div_grid_top.btn_delete.addEventHandler("onclick", this.btn_select_onclick, this);

        };

        this.loadIncludeScript("Annual_stat.xfdl");

       
    };
}
)();
