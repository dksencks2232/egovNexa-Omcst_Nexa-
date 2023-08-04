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
                this.set_name("MenuPopup");
                this.set_titletext("메뉴 관리");
                this._setFormPosition(0,0,800,369);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_background("azure");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("UpperMenuDataSet", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_grid_top", "absolute", "0", "31", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_close", "absolute", null, "0", "50", "23", "6", null, this.div_grid_top);
            obj.set_taborder("28");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "59", null, this.div_grid_top);
            obj.set_taborder("29");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.save");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Div("menu_div", "absolute", "0.63%", "70", null, "282", "0.88%", null, this);
            obj.set_taborder("18");
            obj.style.set_background("antiquewhite");
            this.addChild(obj.name, obj);
            obj = new CheckBox("checkbox_upper", "absolute", "2%", "5", null, "30", "86.17%", null, this.menu_div);
            obj.set_taborder("0");
            obj.set_text("대메뉴 여부");
            this.menu_div.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15.99%", "5", null, "30", "76.27%", null, this.menu_div);
            obj.set_taborder("1");
            obj.set_text("상위메뉴");
            this.menu_div.addChild(obj.name, obj);
            obj = new Combo("combo_menu_grp", "absolute", "25.25%", "5", null, "30", "50.51%", null, this.menu_div);
            this.menu_div.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("@UpperMenuDataSet");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NAME");
            obj = new Static("Static01", "absolute", "2%", "50", null, "30", "92.01%", null, this.menu_div);
            obj.set_taborder("3");
            obj.set_text("메뉴명");
            this.menu_div.addChild(obj.name, obj);
            obj = new Edit("txt_menu_name", "absolute", "10%", "50", "300", "30", null, null, this.menu_div);
            obj.set_taborder("4");
            this.menu_div.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2%", "90", null, "30", "91.62%", null, this.menu_div);
            obj.set_taborder("5");
            obj.set_text("순번");
            this.menu_div.addChild(obj.name, obj);
            obj = new Edit("txt_menu_seq", "absolute", "10%", "90", "300", "30", null, null, this.menu_div);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            this.menu_div.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "2%", "130", null, "30", "91.75%", null, this.menu_div);
            obj.set_taborder("7");
            obj.set_text("URL");
            this.menu_div.addChild(obj.name, obj);
            obj = new Edit("txt_url", "absolute", "10%", "130", "300", "30", null, null, this.menu_div);
            obj.set_taborder("8");
            this.menu_div.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "2%", "170", null, "30", "91.75%", null, this.menu_div);
            obj.set_taborder("9");
            obj.set_text("PAGE_ID");
            this.menu_div.addChild(obj.name, obj);
            obj = new Edit("txt_page_id", "absolute", "10%", "170", "300", "30", null, null, this.menu_div);
            obj.set_taborder("10");
            this.menu_div.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 0, 282, this.menu_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.style.set_background("antiquewhite");

            	}
            );
            this.menu_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 369, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("메뉴 관리");
            		p.style.set_background("azure");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MenuPopup.xfdl", function() {
        this.modeType = "insert";

        this.form_onload = function(obj,e)
        {

        	this.ds_menuList.clearData();
        	var id = "menuService";
        	var url = application.services["svcurl"].url + "/menu/menuList.do";
        	var inDateset = "";
        	var outDateset = "ds_menuList=ds_menu";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.div_grid_top_btn_close_onclick = function(obj,e)
        {
        	Iject.close(this);
        }

        this.div_grid_top_btn_save_onclick = function(obj,e)
        {
        	this.menu_div.combo_menu_grp.set_enable(true);
        	this.menu_div.checkbox_upper.set_enable(true);
        	this.menu_div.txt_menu_seq.set_enable(true);
        	this.menu_div.txt_url.set_enable(true);
        	this.menu_div.txt_page_id.set_enable(true);
        		
        	var is_upper = this.menu_div.checkbox_upper.value;
        	var menu_grp = this.menu_div.combo_menu_grp.value;
        	var menu_name = this.menu_div.txt_menu_name.value;
        	var menu_seq = this.menu_div.txt_menu_seq.value+"";
        	var url = this.menu_div.txt_url.value;
        	var page_id = this.menu_div.txt_page_id.value;
        	
        	var menu_idx = this.parent.menu_index;
        	var level = this.ds_menuList.getColumn(menu_idx, "MENU_LEVEL");
        	if(level == 0 && this.modeType == "update") {
        		this.menu_div.combo_menu_grp.set_enable(false);
        		this.menu_div.checkbox_upper.set_enable(false);
        		this.menu_div.txt_menu_seq.set_enable(false);
        		this.menu_div.txt_url.set_enable(false);
        		this.menu_div.txt_page_id.set_enable(false);
        	}
        	
        	if(!is_upper && !menu_grp) {
        		this.alert("대메뉴를 선택해 주시기 바랍니다.");
        		this.menu_div.combo_menu_grp.setFocus(true);
        		return;
        	}
        	
        	if(!menu_name || !menu_name.trim()) {
        		this.alert("메뉴명을 입력해 주시기 바랍니다.");
        		this.menu_div.txt_menu_name.setFocus(true);
        		return;
        	}
        	
        	if(menu_seq == "") {
        		this.alert("순번을 입력해 주시기 바랍니다.");
        		this.menu_div.txt_menu_seq.setFocus(true);
        		return;
        	}
        	
        	if(!is_upper) {
        		if(!url || !url.trim()) {
        			this.alert("URL을 입력해 주시기 바랍니다.");
        			this.menu_div.txt_url.setFocus(true);
        			return;
        		}
        		
        		if(!page_id || !page_id.trim()) {
        			this.alert("PAGE_ID를 입력해 주시기 바랍니다.");
        			this.menu_div.txt_page_id.setFocus(true);
        			return;
        		}
        	}
        	
        	this.runtime();
        }

        this.menu_div_checkbox_upper_onchanged = function(obj,e)
        {
        	if(obj.value) {
        		this.menu_div.combo_menu_grp.set_value("");
        		this.menu_div.combo_menu_grp.set_enable(false);
        		this.menu_div.txt_url.set_value("");
        		this.menu_div.txt_url.set_enable(false);
        		this.menu_div.txt_page_id.set_value("");
        		this.menu_div.txt_page_id.set_enable(false);
        	} else {
        		this.menu_div.combo_menu_grp.set_enable(true);
        	}
        }

        
        this.runtime = function() {
        	var is_upper = this.menu_div.checkbox_upper.value;
        	var menu_grp = this.menu_div.combo_menu_grp.value;
        	var menu_name = this.menu_div.txt_menu_name.value;
        	var menu_seq = this.menu_div.txt_menu_seq.value;
        	var url = this.menu_div.txt_url.value;
        	var page_id = this.menu_div.txt_page_id.value;
        	
        	var menu_idx = this.parent.menu_index;
        	this.ds_menu.clearData();
        	this.ds_menu.addRow();
        	if(menu_idx > -1) {
        		this.ds_menu.setColumn(0, "MENU_ID", this.ds_menuList.getColumn(menu_idx, "MENU_ID"));
        	}
        	this.ds_menu.setColumn(0, "MENU_LEVEL", is_upper ? 0 : 1);
        	this.ds_menu.setColumn(0, "MENU_SEQ", menu_seq);
        	this.ds_menu.setColumn(0, "MENU_GRP", menu_grp);
        	this.ds_menu.setColumn(0, "MENU_NAME", menu_name);
        	this.ds_menu.setColumn(0, "PAGE_URL", url);
        	this.ds_menu.setColumn(0, "PAGE_ID", page_id);
        	
        	var id = "MenuService";
        	var url = application.services["svcurl"].url + "/menu/menuMerge.do";
        	
        	var inDateset = "ds_menu=ds_menu";
        	var outDateset = "";
        	var arg = "";
        	var callback = "Menu_callback";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        	
        }

        this.Menu_callback = function(id,code,message) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			Iject.close(this, "session");
        			break;
        		default :
        			Iject.close(this, "ok");
        			break;
        	}
        }

        this.getSelectCallBack = function(id,code,msg) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			Iject.close(this, "session");
        			break;
        		default :
        			var idx = 0;
        			for(var i = 0; i < this.ds_menuList.rowcount; i++) {
        				if(this.ds_menuList.getColumn(i, "MENU_LEVEL") == 0) {
        					this.UpperMenuDataSet.addRow(idx);
        					this.UpperMenuDataSet.setColumn(idx, "MENU_ID", this.ds_menuList.getColumn(i, "MENU_ID"));
        					this.UpperMenuDataSet.setColumn(idx, "MENU_NAME", this.ds_menuList.getColumn(i, "MENU_NAME").trim());
        					idx++;
        				}
        			}
        			
        			var menu_idx = this.parent.menu_index;
        			if(menu_idx) {
        				this.modeType = "update";
        				var level = this.ds_menuList.getColumn(menu_idx, "MENU_LEVEL");
        				if(level == 0) {
        					this.menu_div.checkbox_upper.set_value(true);
        					this.menu_div.combo_menu_grp.set_value("");
        					this.menu_div.combo_menu_grp.set_enable(false);
        					this.menu_div.checkbox_upper.set_enable(false);
        					this.menu_div.txt_url.set_enable(false);
        					this.menu_div.txt_page_id.set_enable(false);
        				} else {
        					this.menu_div.combo_menu_grp.set_value(this.ds_menuList.getColumn(menu_idx, "MENU_GRP"));
        				}
        				this.menu_div.txt_menu_name.set_value(this.ds_menuList.getColumn(menu_idx, "MENU_NAME"));
        				this.menu_div.txt_menu_seq.set_value(this.ds_menuList.getColumn(menu_idx, "MENU_SEQ"));
        				this.menu_div.txt_url.set_value(this.ds_menuList.getColumn(menu_idx, "PAGE_URL"));
        				this.menu_div.txt_page_id.set_value(this.ds_menuList.getColumn(menu_idx, "PAGE_ID"));
        			}
        			break;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_grid_top.btn_close.addEventHandler("onclick", this.div_grid_top_btn_close_onclick, this);
            this.div_grid_top.btn_save.addEventHandler("onclick", this.div_grid_top_btn_save_onclick, this);
            this.menu_div.checkbox_upper.addEventHandler("onchanged", this.menu_div_checkbox_upper_onchanged, this);
            this.menu_div.combo_menu_grp.addEventHandler("onitemchanged", this.menuPopDiv00_upper_menu_combo_onitemchanged, this);
            this.menu_div.Static02.addEventHandler("onclick", this.menuPopDiv00_Static02_onclick, this);
            this.menu_div.Static03.addEventHandler("onclick", this.menuPopDiv00_Static02_onclick, this);
            this.menu_div.Static04.addEventHandler("onclick", this.menuPopDiv00_Static02_onclick, this);

        };

        this.loadIncludeScript("MenuPopup.xfdl");

       
    };
}
)();
