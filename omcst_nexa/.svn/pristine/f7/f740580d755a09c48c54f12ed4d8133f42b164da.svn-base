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
                this.set_name("Menu");
                this.set_titletext("SingleDetail");
                this._setFormPosition(0,0,900,500);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_grid_top", "absolute", "0", "31", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "14", null, this.div_grid_top);
            obj.set_taborder("28");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "68", null, this.div_grid_top);
            obj.set_taborder("31");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Grid("menu_grid", "absolute", "10", "66", null, null, "10", "10", this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"225\"/><Column size=\"66\"/><Column size=\"380\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"메뉴명\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"URL\"/><Cell col=\"4\" text=\"PAGE_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_NAME\"/><Cell col=\"2\" text=\"bind:MENU_SEQ\"/><Cell col=\"3\" text=\"bind:PAGE_URL\"/><Cell col=\"4\" text=\"bind:PAGE_ID\"/></Band></Format></Formats>");
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
        this.registerScript("Menu.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	trace(Iject.$.MENU_ID);
        	this.getSelect();
        }

        this.getSelect = function() {
        	this.ds_menu.clearData();
        	var id = "menuService";
        	var url = application.services["svcurl"].url + "/menu/menuList.do";
        	var inDateset = "";
        	var outDateset = "ds_menu=ds_menu";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.fn_add = function(obj,e)
        {

        	 var oData ={
        		sId  : "popup_sample",             //callback id
        		sUrl : "Base::MenuPopup.xfdl",   //url
        		bshowtitlebar : true,     //title bar
        		bAutoSize  : true,       //autosize
        		bResize    : false,       //resize
        		bShowtatusbar : false,     //statusbar
        		sOpenalign    : "center middle",  //align
        		oArgs :  {}    
        	};
        		   
        	Iject.showModal(this, oData, function(svcid,variant){
        		if(variant == "session") {
        			this.closefunc();
        		} else if(variant == "ok") {
        			this.getSelect();
        		}
        	});
        	 
        }

        this.menu_grid_oncelldblclick = function(obj,e)
        {
        	var oData ={
        		sId  : "popup_sample",             //callback id
        		sUrl : "Base::MenuPopup.xfdl",   //url
        		bshowtitlebar : true,     //title bar
        		bAutoSize  : true,       //autosize
        		bResize    : false,       //resize
        		bShowtatusbar : false,     //statusbar
        		sOpenalign    : "center middle",  //align
        		oArgs :  {
        			menu_index : obj.selectendrow
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

        this.fn_delete = function(obj,e)
        {
        	var idx = this.menu_grid.selectendrow;
        	if(idx < 0) {
        		this.alert("선택된 행이 없습니다.");
        		return;
        	}

        	var menu_id = this.ds_menu.getColumn(idx, "MENU_ID");
        	var menu_level = this.ds_menu.getColumn(idx, "MENU_LEVEL");
        	if(menu_level == 0) {
        		var row = this.ds_menu.findRow("MENU_TOP", menu_id);
        		if(row > -1) {
        			this.alert("하위 메뉴가 존재하여 삭제 할 수 없습니다.");
        			return;
        		} else {
        			
        		}
        	} 
        	
        	if(this.confirm("선택한 항목을 삭제 하시겠습니까?")) {
        		this.ds_menuInfo.clearData();
        		this.ds_menuInfo.addRow();
        		this.ds_menuInfo.setColumn(0, "MENU_ID", menu_id);
        		
        		var id = "MenuService";
        		var url = application.services["svcurl"].url + "/menu/menuDelete.do";
        		
        		var inDateset = "ds_menuInfo=ds_menuInfo";
        		var outDateset = "ds_menu=ds_menu";
        		var arg = "";
        		var callback = "Menu_callback";
        		
        		this.transaction(id, url, inDateset, outDateset, arg, callback);
        	}
        }

        this.Menu_callback = function(id,code,message) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;
        		default :
        			this.alert("삭제되었습니다.");
        			break;
        	}
        }

        this.closefunc = function() {
        	if(nexacro.Browser == "Runtime") {
        		application.exit();
        	} else {
        		Iject.$.vFrameSet.set_separatesize("*,0,0");
        	}
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
            this.addEventHandler("onload", this.form_onload, this);
            this.div_grid_top.btn_delete.addEventHandler("onclick", this.fn_delete, this);
            this.div_grid_top.btn_add.addEventHandler("onclick", this.fn_add, this);
            this.menu_grid.addEventHandler("oncelldblclick", this.menu_grid_oncelldblclick, this);

        };

        this.loadIncludeScript("Menu.xfdl");

       
    };
}
)();
