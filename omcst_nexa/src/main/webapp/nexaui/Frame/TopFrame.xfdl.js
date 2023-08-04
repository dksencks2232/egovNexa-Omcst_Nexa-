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
                this.set_name("titlebar");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1280,52);
            }
            this.style.set_background("transparent");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "0", null, "52", "0", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("bg_titlebar");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "16", "19", "17", "14", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_cssclass("btn_burger");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "51", "-1", "1", "52", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_cssclass("sta_line");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_logout", "absolute", null, "30", "64", "19", "10", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_logout");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1190", "8", "8", "15", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.style.set_background("#ff727280");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("stc_lastlogin", "absolute", null, "6", "75", "23", "65", null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("김현대 님");
            obj.set_usedecorate("true");
            obj.set_cssclass("title_name");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("stc_empNm", "absolute", null, "6", "68", "23", "8", null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("품질기술2팀");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_TF_user");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "76", "19", "30", "17", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_cssclass("sta_logo");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_leftMenuOpen", "absolute", "7", "12", "34", "29", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_cssclass("btn_TF_LeftMenuOpen");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "586", null, "92", "15", null, "0", this);
            obj.set_taborder("1");
            obj.set_text("w92");
            obj.set_visible("false");
            obj.style.set_background("#ff727280");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 52, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_cssclass("bg_titlebar");
            		p.set_scrollbars("none");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1280, 52, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("titlebar");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("TopFrame.xfdl", function() {
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
        this.fn_onload = function(obj,e)
        {
        }

        
        //left 펼침 접힘 실행
        this.btn_leftMenuOpen_onclick = function(obj,e)
        {
           Iject.Mdi.leftMenuAction(this,obj);
           
        }

        //logout
        this.fn_logout = function(obj,e)
        {
        	if(!confirm("로그아웃 하시겠습니까?")) {
        		return;
        	}
        	var id = "logoutService";
        	var url = application.services["svcurl"].url + "/logout.do";
        	var inDateset = "";
        	var outDateset = "";
        	var arg = "";
        	var callback = "getLogoutCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.getLogoutCallBack = function(id,code,message) {
        	if(nexacro.Browser == "Runtime") {
        		application.exit();
        	} else {
        		Iject.$.vFrameSet.set_separatesize("*,0,0");
        	}
        }

        this.fn_set = function()
        {
           this.stNm.set_text(application.gds_userInfo.getColumn(0, "USER_NAME") + " <b v='false'>님 환영합니다.</b>");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div00.btn_logout.addEventHandler("onclick", this.fn_logout, this);
            this.Div00.stc_lastlogin.addEventHandler("onclick", this.stc_lastlogin_onclick, this);
            this.Div00.btn_leftMenuOpen.addEventHandler("onclick", this.btn_leftMenuOpen_onclick, this);

        };

        this.loadIncludeScript("TopFrame.xfdl");

       
    };
}
)();
