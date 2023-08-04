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
                this.set_name("PROJ");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("menu_grid", "absolute", "0.78%", "80", null, "82.94%", "0.59%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"92\"/><Column size=\"92\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"139\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"136\"/><Column size=\"119\"/><Column size=\"75\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"99\"/><Column size=\"123\"/><Column size=\"114\"/><Column size=\"141\"/><Column size=\"174\"/><Column size=\"96\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"계약유형\"/><Cell col=\"5\" text=\"입금일\"/><Cell col=\"6\" text=\"투입중 프로젝트\"/><Cell col=\"7\" text=\"지역\"/><Cell col=\"8\" text=\"등급\"/><Cell col=\"9\" text=\"단가(만원)\"/><Cell col=\"10\" text=\"이메일\"/><Cell col=\"11\" text=\"핸드폰번호\"/><Cell col=\"12\" text=\"참여여부\"/><Cell col=\"13\" text=\"투입월\"/><Cell col=\"14\" text=\"맨먼스\"/><Cell col=\"15\" text=\"투입시작일자\"/><Cell col=\"16\" text=\"투입종료일자\"/><Cell col=\"17\" text=\"일반이력서\"/><Cell col=\"18\" text=\"VATTZ이력서\"/><Cell col=\"19\" text=\"정보제공동의서\"/><Cell col=\"20\" text=\"관리\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MENU_NAME\"/><Cell col=\"3\" text=\"bind:MENU_SEQ\"/><Cell col=\"4\" text=\"bind:PAGE_URL\"/><Cell col=\"5\" text=\"bind:PAGE_ID\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "8", "5", null, "70", "6", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "104", "10", "132", "21", null, null, this.div_Search);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "371", "10", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj = new Button("Button05", "absolute", null, "22", "60", "25", "125", null, this.div_Search);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "19", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("16");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "286", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("17");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "553", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("18");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "19", "37", "85", "21", null, null, this.div_Search);
            obj.set_taborder("19");
            obj.set_text("참여여부");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "286", "37", "85", "21", null, null, this.div_Search);
            obj.set_taborder("21");
            obj.set_text("Profile");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "553", "37", "85", "21", null, null, this.div_Search);
            obj.set_taborder("23");
            obj.set_text("갯수");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "639", "10", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj = new Combo("Combo04", "absolute", "104", "37", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj = new Combo("Combo02", "absolute", "639", "37", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj = new Edit("Edit00", "absolute", "371", "37", "132", "21", null, null, this.div_Search);
            obj.set_taborder("28");
            obj.set_cssclass("edt_WF_Search");
            this.div_Search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 70, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("Proj.xfdl", function() {

        this.div_Search_Static05_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.menu_grid.addEventHandler("oncelldblclick", this.menu_grid_oncelldblclick, this);
            this.div_Search.Edit04.addEventHandler("oneditclick", this.div_Search_Edit04_oneditclick, this);
            this.div_Search.Static00.addEventHandler("onclick", this.div_Search_Static00_onclick, this);
            this.div_Search.Static05.addEventHandler("onclick", this.div_Search_Static05_onclick, this);
            this.div_Search.Edit00.addEventHandler("oneditclick", this.div_Search_Edit04_oneditclick, this);

        };

        this.loadIncludeScript("Proj.xfdl");

       
    };
}
)();
