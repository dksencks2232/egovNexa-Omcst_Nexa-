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
                this.set_name("Code");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"11\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"32\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"LEVEL\" type=\"INT\" size=\"4\"/><Column id=\"ORDER_NO\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"32\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"STATUS\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"SEQ\">1</Col><Col id=\"CODE_ID\">1</Col><Col id=\"GROUP_ID\">TEST</Col><Col id=\"CODE_NAME\">코드명</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORDER_NO\">1</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">TEST</Col><Col id=\"REG_DATE\">2018-06-12 00:00:00.0</Col><Col id=\"UPDATE_USER\">TEST</Col><Col id=\"UPDATE_DATE\">2018-06-12 00:00:00.0</Col></Row><Row><Col id=\"SEQ\">2</Col><Col id=\"CODE_ID\">2</Col><Col id=\"GROUP_ID\">TEST</Col><Col id=\"CODE_NAME\">코드명2</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORDER_NO\">2</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">TEST</Col><Col id=\"REG_DATE\">2018-06-12 00:00:00.0</Col><Col id=\"UPDATE_USER\">TEST</Col><Col id=\"UPDATE_DATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_useyn", this);
            obj._setContents("<ColumnInfo><Column id=\"use_yn\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"use_yn\">Y</Col></Row><Row><Col id=\"use_yn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("code_grid", "absolute", "10", "72", null, null, "10", "10", this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"117\"/><Column size=\"120\"/><Column size=\"53\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드ID\"/><Cell col=\"1\" text=\"그룹ID\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" text=\"순번\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"align:left;padding:0 0 0 5;\" text=\"bind:CODE_ID\"/><Cell col=\"1\" edittype=\"text\" style=\"padding:0 0 0 5;\" text=\"bind:GROUP_ID\"/><Cell col=\"2\" edittype=\"text\" style=\"padding:0 0 0 5;\" text=\"bind:CODE_NAME\"/><Cell col=\"3\" edittype=\"masknumber\" style=\"align:center;\" text=\"bind:ORDER_NO\"/><Cell col=\"4\" edittype=\"combo\" style=\"align:center;\" text=\"bind:USE_YN\" combodataset=\"ds_useyn\" combodatacol=\"use_yn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "24", "50", "23", "120", null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "24", "50", "23", "63", null, this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", null, "24", "50", "23", "6", null, this);
            obj.set_taborder("3");
            obj.set_text("삭제");
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
        this.registerScript("Code.xfdl", function() {
        this.isChange = false;

        this.Code_onload = function(obj,e)
        {
        	this.ds_code.clearData();
        	this.getSelect();
        }

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_code.addRow();
        }

        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.ds_code.rowposition;
        	this.ds_code.deleteRow(nRow);
        	this.isChange = true;
        }

        this.btn_save_onclick = function(obj,e)
        {
        	for(var i = 0; i < this.ds_code.getRowCount(); i++) {
        		var rowType = this.ds_code.getRowType(i);
        		if(rowType == 2) {
        			this.isChange = true;
        			this.ds_code.setColumn(i, "STATUS", "I");
        			if(this.validation(i)) {
        				return;
        			}
        		} else if(rowType == 4) {
        			this.isChange = true;
        			this.ds_code.setColumn(i, "STATUS", "U");
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

        	var id = "CodeService";
        	var url = application.services["svcurl"].url + "/code/codeSave.do";
        	var inDateset = "ds_code=ds_code:U";
        	var outDateset = "";
        	var arg = "";
        	var callback = "code_callback";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        	
        }

        this.validation = function(idx) {
        	var code_id = this.ds_code.getColumn(idx, "CODE_ID");
        	var group_id = this.ds_code.getColumn(idx, "GROUP_ID");
        	var code_name = this.ds_code.getColumn(idx, "CODE_NAME");
        	var order_no = this.ds_code.getColumn(idx, "ORDER_NO");
        	var use_yn = this.ds_code.getColumn(idx, "USE_YN");
        	
        	if(!code_id) {
        		this.code_grid.setFocus(true);
        		this.code_grid.selectCell(idx, 0, true);
        		this.code_grid.showEditor(true);
        		this.alert("코드ID를 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!group_id) {
        		this.code_grid.setFocus(true);
        		this.code_grid.selectCell(idx, 1, true);
        		this.code_grid.showEditor(true);
        		this.alert("그룹ID를 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!code_name) {
        		this.code_grid.setFocus(true);
        		this.code_grid.selectCell(idx, 2, true);
        		this.code_grid.showEditor(true);
        		this.alert("코드명을 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!order_no) {
        		this.code_grid.setFocus(true);
        		this.code_grid.selectCell(idx, 3, true);
        		this.code_grid.showEditor(true);
        		this.alert("순번을 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!use_yn) {
        		this.code_grid.setFocus(true);
        		this.code_grid.selectCell(idx, 4, true);
        		this.code_grid.showEditor(true);
        		this.alert("사용여부를 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	return false;
        }

        this.code_callback = function(id,code,msg) {
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
        			this.getSelect();
        			break;
        	}
        }

        this.getSelect = function() {
        	this.ds_code.clearData();
        	var id = "CodeService";
        	var url = application.services["svcurl"].url + "/code/codeList.do";
        	var inDateset = "";
        	var outDateset = "ds_code=ds_code";
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Code_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);

        };

        this.loadIncludeScript("Code.xfdl");

       
    };
}
)();
