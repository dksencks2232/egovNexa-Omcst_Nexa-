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
                this.set_name("Auth");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"10\"/><Column id=\"AUTH_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"ORDER_NO\" type=\"INT\" size=\"10\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"STATUS\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_useyn", this);
            obj._setContents("<ColumnInfo><Column id=\"use_yn\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"use_yn\">Y</Col></Row><Row><Col id=\"use_yn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "24", "50", "23", "120", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "24", "50", "23", "63", null, this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", null, "24", "50", "23", "6", null, this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("auth_grid", "absolute", "10", "72", null, null, "10", "10", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_auth");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"120\"/><Column size=\"53\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드ID\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:AUTH_ID\"/><Cell col=\"1\" edittype=\"text\" style=\"padding:0 0 0 5;\" text=\"bind:AUTH_NAME\"/><Cell col=\"2\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:ORDER_NO\"/><Cell col=\"3\" edittype=\"combo\" style=\"align:center;\" text=\"bind:USE_YN\" combodataset=\"ds_useyn\" combodatacol=\"use_yn\"/></Band></Format></Formats>");
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
        this.registerScript("Auth.xfdl", function() {
        this.isChange = false;

        this.Auth_onload = function(obj,e)
        {
        	this.ds_auth.clearData();
        	this.getSelect();
        } 

        this.btn_save_onclick = function(obj,e)
        {
        	for(var i = 0; i < this.ds_auth.getRowCount(); i++) {
        		var rowType = this.ds_auth.getRowType(i);
        		if(rowType == 2) {
        			this.isChange = true;
        			this.ds_auth.setColumn(i, "STATUS", "I");
        			if(this.validation(i)) {
        				return;
        			}
        		} else if(rowType == 4) {
        			this.isChange = true;
        			this.ds_auth.setColumn(i, "STATUS", "U");
        			if(this.validation(i)) {
        				return;
        			}
        		}
        	}
        	
        	if(!this.isChange) {
        		this.alert("변경된 내용이 없습니다.");
        		return;
        	}
        	
        	if(!confirm("저장 하시겠습니까?")) {
        		return;
        	}

        	var id = "AuthService";
        	var url = application.services["svcurl"].url + "/auth/authSave.do";
        	var inDateset = "ds_auth=ds_auth:U";
        	var outDateset = "ds_auth=ds_auth";
        	var arg = "";
        	var callback = "auth_callback";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        this.validation = function(idx) {
        	var auth_id = this.ds_auth.getColumn(idx, "AUTH_ID");
        	var auth_name = this.ds_auth.getColumn(idx, "AUTH_NAME");
        	var order_no = this.ds_auth.getColumn(idx, "ORDER_NO");
        	var use_yn = this.ds_auth.getColumn(idx, "USE_YN");
        	
        	if(!auth_id) {
        		this.auth_grid.setFocus(true);
        		this.auth_grid.selectCell(idx, 0, true);
        		this.auth_grid.showEditor(true);
        		this.alert("권한코드를 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!auth_name) {
        		this.auth_grid.setFocus(true);
        		this.auth_grid.selectCell(idx, 1, true);
        		this.auth_grid.showEditor(true);
        		this.alert("권한명을 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!order_no) {
        		this.auth_grid.setFocus(true);
        		this.auth_grid.selectCell(idx, 2, true);
        		this.auth_grid.showEditor(true);
        		this.alert("순번을 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!use_yn) {
        		this.auth_grid.setFocus(true);
        		this.auth_grid.selectCell(idx, 3, true);
        		this.auth_grid.showEditor(true);
        		this.alert("사용여부를 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	return false;
        }

        this.auth_callback = function(id,code,msg) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;
        		default :
        			this.alert("저장되었습니다.");
        			break;
        	}
        }

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_auth.addRow();
        }

        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.ds_auth.rowposition;
        	this.ds_auth.deleteRow(nRow);
        	this.isChange = true;
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
        			this.isChange = false;
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

        this.auth_grid_onheadclick = function(obj,e)
        {
        	trace(e.col, e.cell);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Auth_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.auth_grid.addEventHandler("onheadclick", this.auth_grid_onheadclick, this);

        };

        this.loadIncludeScript("Auth.xfdl");

       
    };
}
)();
