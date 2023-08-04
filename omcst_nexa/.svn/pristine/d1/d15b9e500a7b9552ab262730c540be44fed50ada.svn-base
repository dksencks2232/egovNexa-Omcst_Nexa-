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
                this.set_name("project_list");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,900,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"5\"/><Column id=\"PROJ_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"PROJ_START\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_END\" type=\"STRING\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("project_search_div", "absolute", "1%", "16", null, "53", "1.78%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new Static("label_name", "absolute", "0.46%", "10", "75", "30", null, null, this.project_search_div);
            obj.set_taborder("46");
            obj.set_text("프로젝트명");
            obj.style.set_background("aquamarine");
            obj.style.set_align("center middle");
            this.project_search_div.addChild(obj.name, obj);
            obj = new Edit("txt_project", "absolute", "10.97%", "10", null, "30", "75.2%", null, this.project_search_div);
            obj.set_taborder("47");
            this.project_search_div.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "10", "50", "23", "47", null, this.project_search_div);
            obj.set_taborder("48");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.search");
            this.project_search_div.addChild(obj.name, obj);
            obj = new Static("label_date", "absolute", "32.46%", "10", "75", "30", null, null, this.project_search_div);
            obj.set_taborder("49");
            obj.set_text("기간");
            obj.style.set_background("aquamarine");
            obj.style.set_align("center middle");
            this.project_search_div.addChild(obj.name, obj);
            obj = new Static("label_date01", "absolute", "59.89%", "10", "35", "30", null, null, this.project_search_div);
            obj.set_taborder("50");
            obj.set_text("~");
            obj.style.set_background("aquamarine");
            obj.style.set_align("center middle");
            this.project_search_div.addChild(obj.name, obj);
            obj = new Calendar("cal_startdate", "absolute", "44.34%", "10", null, "30", "41.03%", null, this.project_search_div);
            this.project_search_div.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_enddate", "absolute", "66.06%", "10", null, "30", "20%", null, this.project_search_div);
            this.project_search_div.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("div_grid_top", "absolute", "0", "87", null, "23", "0", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "25", null, this.div_grid_top);
            obj.set_taborder("33");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "79", null, this.div_grid_top);
            obj.set_taborder("34");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "134", null, this.div_grid_top);
            obj.set_taborder("35");
            obj.set_text("저장");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Grid("project_grid", "absolute", "10", "120", null, null, "10", "58", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_project");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"시퀀스\"/><Cell col=\"1\" text=\"프로젝트\"/><Cell col=\"2\" colspan=\"2\" text=\"기간\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:PROJ_NAME\"/><Cell col=\"2\" text=\"bind:PROJ_START\"/><Cell col=\"3\" text=\"bind:PROJ_END\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.project_search_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("azure");

            	}
            );
            this.project_search_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Project_list.xfdl", function() {

        this.Projectlist_onload = function(obj,e)
        {
        	// 리스트 호출
        	this.getSelect();
        }

        // 리스트 호출
        this.getSelect = function() {
        	this.ds_project.clearData();
        	var id = "ProjectService";
        	var url = application.services["svcurl"].url + "/project/projectList.do";
        	var inDateset = "";
        	var outDateset = "ds_project=ds_project";
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

        
        // 셀을 더블클릭했을 때
        this.project_grid_oncelldblclick = function(obj,e)
        {
        	var nRow = this.ds_project.rowposition;
        	var oData ={
        		sId  : "project_popup",             //callback id
        		sUrl : "Base::Project_popup.xfdl",   //url
        		bshowtitlebar : true,     //title bar
        		bAutoSize  : true,       //autosize
        		bResize    : false,       //resize
        		bShowtatusbar : false,     //statusbar
        		sOpenalign    : "center middle",  //align
        		oArgs :  {
        			proj_seq : this.ds_project.getColumn(nRow, "SEQ")
        			, proj_name : this.ds_project.getColumn(nRow, "PROJ_NAME")
        		}    
        	};
        		   
        	Iject.showModal(this, oData, function(svcid,variant){
        		if(variant == "session") {
        			this.closefunc();
        		} else if(variant == "ok") {
        			this.getSelect();
        		}
        	});
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Projectlist_onload, this);
            this.project_search_div.btn_search.addEventHandler("onclick", this.searchAnnual, this);
            this.div_grid_top.btn_delete.addEventHandler("onclick", this.btn_del_onclick, this);
            this.div_grid_top.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.div_grid_top.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.project_grid.addEventHandler("oncelldblclick", this.project_grid_oncelldblclick, this);

        };

        this.loadIncludeScript("Project_list.xfdl");

       
    };
}
)();
