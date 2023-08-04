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
                this.set_name("UserAuth");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"10\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"22\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"100\"/><Column id=\"ADDR\" type=\"STRING\" size=\"150\"/><Column id=\"ADDR_DETAIL\" type=\"STRING\" size=\"150\"/><Column id=\"PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"TEL\" type=\"STRING\" size=\"20\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CHECK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "30", "50", "23", "7", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "71%", "70", null, "28", "22.38%", null, this);
            obj.set_taborder("2");
            obj.set_text("권한 : ");
            this.addChild(obj.name, obj);

            obj = new Combo("auth_combo", "absolute", "75.75%", "68", null, "31", "1.13%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_auth");
            obj.set_codecolumn("SEQ");
            obj.set_datacolumn("AUTH_NAME");

            obj = new Grid("user_grid", "absolute", "2.38%", "113", null, "328", "1.13%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_user");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"68\"/><Column size=\"131\"/><Column size=\"137\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"이메일\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"PHONE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:IS_CHECK\" expr=\"expr:IS_CHECK=='N'||IS_CHECK==null?'0':'1'\"/><Cell col=\"1\" text=\"bind:EMAIL\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:PHONE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
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
        this.registerScript("UserAuth.xfdl", function() {
        this.has_cheaged = false;

        this.UserAuth_onload = function(obj,e)
        {
        	this.getSelect();
        }

        this.getSelect = function() {
        	this.ds_auth.clearData();
        	var id = "AuthService";
        	var url = application.services["svcurl"].url + "/auth/authList.do";
        	var inDateset = "";
        	var outDateset = "ds_auth=ds_auth";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.getSelectUserAuth = function() {
        	var id = "UserAuthService";
        	var url = application.services["svcurl"].url + "/user_auth/userAuthList.do";
        	var inDateset = "ds_search=ds_search";
        	var outDateset = "ds_user=ds_user";
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
        		default :
        			this.has_cheaged = false;
        			break;
        	}
        }
        this.auth_combo_onitemchanged = function(obj,e)
        {
        	if(obj.value) {
        		this.ds_search.clearData();
        		this.ds_search.addRow();
        		this.ds_search.setColumn(0, "SEQ", obj.value);
        		this.getSelectUserAuth();
        	}
        }

        this.auth_combo_canitemchange = function(obj,e)
        {
        	if(this.has_cheaged) {
        		if(confirm("변경된 내용이 있습니다. 이전 데이터는 초기화 됩니다 변경 하시겠습니까?")) {
        			return true;
        		} else {
        			return false;
        		}
        	}
        }

        this.ds_user_oncolumnchanged = function(obj,e)
        {
        	this.has_cheaged = true;
        	if(e.columnid == "IS_CHECK") {
                // 다른 이벤트가 동작하지 않도록 설정
                obj.enableevent = false;  //false can stop event temporarily 
                // 변경된 값이 1(체크가 된 경우)인경우
                if(e.newvalue == '1') {
                    // 1인 경우 Dataset의 chk 값을 Y로 변경
                    obj.setColumn(e.row,"IS_CHECK",'Y');
                } else if(e.newvalue == '0') {
                    // 0인 경우 Dataset의 chk 값을 N로 변경
                    obj.setColumn(e.row,"IS_CHECK",'N'); 
                }
                // 다시 이벤트가 정상 동작하도록 설정
                obj.enableevent = true;
            }
        }

        this.btn_save_onclick = function(obj,e)
        {
        	if(this.has_cheaged){
        		if(confirm("저장 하시겠습니까?")) {
        			this.save();
        		}
        	} else {
        		this.alert("변경된 데이터가 없습니다.");
        	}
        }

        this.save = function() {
        	var id = "UserAuthService";
        	var url = application.services["svcurl"].url + "/user_auth/saveUserAuth.do";
        	var inDateset = "ds_search=ds_search ds_user=ds_user";
        	var outDateset = "";
        	var arg = "";
        	var callback = "getSaveCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.getSaveCallBack = function(id,code,message) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;
        		default :
        			this.alert("저장 되었습니다.");
        			this.has_cheaged = false;
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_user.addEventHandler("oncolumnchanged", this.ds_user_oncolumnchanged, this);
            this.addEventHandler("onload", this.UserAuth_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.auth_combo.addEventHandler("onitemchanged", this.auth_combo_onitemchanged, this);
            this.auth_combo.addEventHandler("canitemchange", this.auth_combo_canitemchange, this);

        };

        this.loadIncludeScript("UserAuth.xfdl");

       
    };
}
)();
