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
                this.set_name("User");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"22\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"100\"/><Column id=\"ADDR\" type=\"STRING\" size=\"150\"/><Column id=\"ADDR_DETAIL\" type=\"STRING\" size=\"150\"/><Column id=\"PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"TEL\" type=\"STRING\" size=\"20\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEQ\">1</Col><Col id=\"NAME\">테스트2</Col><Col id=\"EMAIL\">test@test.com</Col><Col id=\"ADDR\">서울특별시 동작구 남부순환로 2033</Col><Col id=\"ADDR_DETAIL\">3층</Col><Col id=\"PHONE\">01086532891</Col><Col id=\"TEL\">0266741289</Col></Row><Row><Col id=\"SEQ\">2</Col><Col id=\"NAME\">테스트2</Col><Col id=\"EMAIL\">test@test1.com</Col><Col id=\"ADDR\">서울특별시 동작구 남부순환로 2033</Col><Col id=\"ADDR_DETAIL\">3층</Col><Col id=\"PHONE\">01086532891</Col><Col id=\"TEL\">0266741289</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"10\"/><Column id=\"NAME\" type=\"STRING\" size=\"10\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"100\"/><Column id=\"ADDR\" type=\"STRING\" size=\"150\"/><Column id=\"ADDR_DETAIL\" type=\"STRING\" size=\"150\"/><Column id=\"PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"TEL\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("user_detail_div", "absolute", "1%", "35", null, "189", "1.75%", null, this);
            obj.set_taborder("100");
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "11", "50", "23", "3", null, this.user_detail_div);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", null, "11", "50", "23", "59", null, this.user_detail_div);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "11", "50", "23", "115", null, this.user_detail_div);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_email", "absolute", "0.51%", "40", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("3");
            obj.set_text("E-mail");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_password", "absolute", "0.51%", "75", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_email", "absolute", "10.93%", "40", null, "30", "60.93%", null, this.user_detail_div);
            obj.set_taborder("5");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_name", "absolute", "50.9%", "40", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_name", "absolute", "61.83%", "40", null, "30", "10.03%", null, this.user_detail_div);
            obj.set_taborder("7");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_password", "absolute", "10.93%", "75", null, "30", "60.93%", null, this.user_detail_div);
            obj.set_taborder("8");
            obj.set_password("true");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_password00", "absolute", "50.9%", "75", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("9");
            obj.set_text("비밀번호확인");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_passwordConfirm", "absolute", "61.83%", "75", null, "30", "10.03%", null, this.user_detail_div);
            obj.set_taborder("10");
            obj.set_password("true");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_password01", "absolute", "0.51%", "110", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("11");
            obj.set_text("주소");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_addr", "absolute", "10.93%", "110", null, "30", "60.93%", null, this.user_detail_div);
            obj.set_taborder("12");
            obj.set_password("false");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_password02", "absolute", "50.9%", "110", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("13");
            obj.set_text("상세주소");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_addr_detail", "absolute", "61.83%", "110", null, "30", "10.03%", null, this.user_detail_div);
            obj.set_taborder("14");
            obj.set_password("false");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_password03", "absolute", "0.51%", "145", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("15");
            obj.set_text("휴대폰");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_phone", "absolute", "10.93%", "145", null, "30", "60.93%", null, this.user_detail_div);
            obj.set_taborder("16");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("label_password04", "absolute", "50.9%", "145", "75", "30", null, null, this.user_detail_div);
            obj.set_taborder("17");
            obj.set_text("전화");
            obj.style.set_background("aquamarine");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Edit("txt_tel", "absolute", "61.83%", "145", null, "30", "10.03%", null, this.user_detail_div);
            obj.set_taborder("18");
            this.user_detail_div.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.26%", "11", null, "24", "89.85%", null, this.user_detail_div);
            obj.set_taborder("19");
            obj.set_text("상세정보11111");
            this.user_detail_div.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.38%", "235", null, "342", "2.25%", null, this);
            obj.set_taborder("101");
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.13%", "11", null, "28", "90.27%", null, this.Div01);
            obj.set_taborder("0");
            obj.set_text("목록");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("user_grid", "absolute", "1.5%", "274", null, "294", "2.25%", null, this);
            obj.set_taborder("102");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_user");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"73\"/><Column size=\"93\"/><Column size=\"152\"/><Column size=\"94\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"67\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"E-mail\"/><Cell col=\"2\" text=\"주소\"/><Cell col=\"3\" text=\"상세주소\"/><Cell col=\"4\" text=\"휴대폰\"/><Cell col=\"5\" text=\"전화\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/><Cell col=\"2\" text=\"bind:ADDR\"/><Cell col=\"3\" text=\"bind:ADDR_DETAIL\"/><Cell col=\"4\" text=\"bind:PHONE\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" text=\"bind:REG_USER\"/><Cell col=\"7\" text=\"bind:REG_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 189, this.user_detail_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("100");
            		p.style.set_background("azure");

            	}
            );
            this.user_detail_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 342, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("101");
            		p.style.set_background("azure");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

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
        this.registerScript("User.xfdl", function() {
        this.modeType = "insert";

        this.User_onload = function(obj,e)
        {	
        	this.getSelect();
        }

        this.getSelect = function() {
        	this.ds_user.clearData();
        	var id = "UserService";
        	var url = application.services["svcurl"].url + "/user/userList.do";
        	var inDateset = "";
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
        	}
        }

        this.Div00_btn_add_onclick = function(obj,e)
        {
        	var email = this.user_detail_div.txt_email.value;
        	var name = this.user_detail_div.txt_name.value;
        	var password = this.user_detail_div.txt_password.value;
        	var passwordConfrim = this.user_detail_div.txt_passwordConfirm.value;
        	var addr = this.user_detail_div.txt_addr.value;
        	var addr_detail = this.user_detail_div.txt_addr_detail.value;
        	var phone = this.user_detail_div.txt_phone.value;
        	var tel = this.user_detail_div.txt_tel.value;
        	if(this.modeType == "insert") {
        		if(email || name || password || passwordConfrim || addr || addr_detail || phone || tel) {
        			if(!this.confirm("입력된 모든 내용이 초기화 됩니다. 진행하시겠습니까?")) {
        				return;
        			}
        		}
        	}
        	
        	this.modeType = "insert";
        	
        	this.user_detail_div.txt_email.set_value("");
        	this.user_detail_div.txt_name.set_value("");
        	this.user_detail_div.txt_password.set_value("");
        	this.user_detail_div.txt_passwordConfirm.set_value("");
        	this.user_detail_div.txt_addr.set_value("");
        	this.user_detail_div.txt_addr_detail.set_value("");
        	this.user_detail_div.txt_phone.set_value("");
        	this.user_detail_div.txt_tel.set_value("");
        	
        }

        this.user_detail_div_btn_del_onclick = function(obj,e)
        {
        	if(!this.ds_user.rowposition) {
        		this.alert("선택된 행이 없습니다.");
        		return;
        	}
        	if(this.confirm("선택된 행을 삭제 하시겠습니까?")) {
        		var id = "UserService";
        		var url = application.services["svcurl"].url + "/user/deleteUser.do";
        		var inDateset = "ds_userInfo=ds_userInfo";
        		var outDateset = "ds_user=ds_user";
        		var arg = "";
        		var callback = "getSaveCallBack";
        		

        		this.ds_userInfo.clearData();
        		this.ds_userInfo.addRow();
        		this.ds_userInfo.setColumn(0, "SEQ", this.ds_user.getColumn(this.ds_user.rowposition, "SEQ"));
        		
        		this.transaction(id, url, inDateset, outDateset, arg, callback);
        	}
        }

        this.user_grid_oncellclick = function(obj,e)
        {
        	this.modeType = "update";
        	var nRow = this.ds_user.rowposition;
        	this.user_detail_div.txt_email.set_value(this.ds_user.getColumn(nRow, "EMAIL"));
        	this.user_detail_div.txt_name.set_value(this.ds_user.getColumn(nRow, "NAME"));
        	this.user_detail_div.txt_addr.set_value(this.ds_user.getColumn(nRow, "ADDR"));
        	this.user_detail_div.txt_addr_detail.set_value(this.ds_user.getColumn(nRow, "ADDR_DETAIL"));
        	this.user_detail_div.txt_phone.set_value(this.ds_user.getColumn(nRow, "PHONE"));
        	this.user_detail_div.txt_tel.set_value(this.ds_user.getColumn(nRow, "TEL"));
        }

        this.user_detail_div_btn_save_onclick = function(obj,e)
        {

        	var email = this.user_detail_div.txt_email.value;
        	var name = this.user_detail_div.txt_name.value;
        	var password = this.user_detail_div.txt_password.value;
        	var passwordConfrim = this.user_detail_div.txt_passwordConfirm.value;
        	var addr = this.user_detail_div.txt_addr.value;
        	var addr_detail = this.user_detail_div.txt_addr_detail.value;
        	var phone = this.user_detail_div.txt_phone.value;
        	var tel = this.user_detail_div.txt_tel.value;
        	
        	var emailCheck  = new RegExp("^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$", "i"); 
        	if(!email) {
        		this.alert("Email을 입력하시기 바랍니다.");
        		this.user_detail_div.txt_email.setFocus(true);
        		return;
        	}
        	
        	if(!emailCheck.test(email)){
        		this.alert("Email 형태가 아닙니다.");
        		this.user_detail_div.txt_email.setFocus(true);
        		return;
        	}
        	
        	if(!name) {
        		this.alert("성명을 입력해 주시기 바랍니다.");
        		this.user_detail_div.txt_name.setFocus(true);
        		return;
        	}
        	
        	var mode = this.modeType;
        	
        	var id = "UserService";
        	var url = application.services["svcurl"].url + "/user/insertUser.do";
        	var inDateset = "ds_userInfo=ds_userInfo";
        	var outDateset = "ds_user=ds_user";
        	var arg = "";
        	var callback = "getSaveCallBack";
        	
        	if(mode == "insert") {
        		if(!password) {
        			this.alert("비밀번호를 입력해 주시기 바랍니다.");
        			this.user_detail_div.txt_password.setFocus(true);
        			return;
        		}
        		
        	} else {
        		url = application.services["svcurl"].url + "/user/updateUser.do";
        	}
        	
        	if(password && password != passwordConfrim) {
        		this.alert("비밀번호가 같지 않습니닫.");
        		this.user_detail_div.txt_passwordConfirm.setFocus(true);
        		return;
        	}
        	
        	if(confirm("저장 하시겠습니까?")) {
        		this.ds_userInfo.clearData();
        		this.ds_userInfo.addRow();
        		if(mode == "update") {
        			this.ds_userInfo.setColumn(0, "SEQ", this.ds_user.getColumn(this.ds_user.rowposition, "SEQ"));
        		}
        		this.ds_userInfo.setColumn(0, "EMAIL", email);
        		this.ds_userInfo.setColumn(0, "NAME", name);
        		this.ds_userInfo.setColumn(0, "PASSWORD", password);
        		this.ds_userInfo.setColumn(0, "ADDR", addr);
        		this.ds_userInfo.setColumn(0, "ADDR_DETAIL", addr_detail);
        		this.ds_userInfo.setColumn(0, "PHONE", phone);
        		this.ds_userInfo.setColumn(0, "TEL", tel);
        		this.transaction(id, url, inDateset, outDateset, arg, callback);
        	}
        }

        this.getSaveCallBack = function(id,code,msg) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;
        		default :
        			this.alert("처리 되었습니다.");
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

        

        this.user_detail_div_Static00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.User_onload, this);
            this.user_detail_div.btn_save.addEventHandler("onclick", this.user_detail_div_btn_save_onclick, this);
            this.user_detail_div.btn_del.addEventHandler("onclick", this.user_detail_div_btn_del_onclick, this);
            this.user_detail_div.btn_add.addEventHandler("onclick", this.Div00_btn_add_onclick, this);
            this.user_detail_div.label_password.addEventHandler("onclick", this.Div00_txt_email00_onclick, this);
            this.user_detail_div.label_password00.addEventHandler("onclick", this.Div00_txt_email00_onclick, this);
            this.user_detail_div.label_password01.addEventHandler("onclick", this.Div00_txt_email00_onclick, this);
            this.user_detail_div.label_password02.addEventHandler("onclick", this.Div00_txt_email00_onclick, this);
            this.user_detail_div.label_password03.addEventHandler("onclick", this.Div00_txt_email00_onclick, this);
            this.user_detail_div.label_password04.addEventHandler("onclick", this.Div00_txt_email00_onclick, this);
            this.user_detail_div.Static00.addEventHandler("onclick", this.user_detail_div_Static00_onclick, this);
            this.user_grid.addEventHandler("oncellclick", this.user_grid_oncellclick, this);

        };

        this.loadIncludeScript("User.xfdl");

       
    };
}
)();
