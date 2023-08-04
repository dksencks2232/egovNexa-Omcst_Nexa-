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
                this.set_name("ProjectPopup");
                this.set_titletext("프로젝트 관리");
                this._setFormPosition(0,0,800,454);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_background("azure");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_developer", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"5\"/><Column id=\"DEV_SEQ\" type=\"STRING\" size=\"5\"/><Column id=\"PROJ_SEQ\" type=\"STRING\" size=\"30\"/><Column id=\"PROJ_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"NAME\" type=\"STRING\" size=\"11\"/><Column id=\"ATTEND_START\" type=\"STRING\" size=\"11\"/><Column id=\"ATTEND_END\" type=\"STRING\" size=\"11\"/><Column id=\"DSSTATUS\" type=\"STRING\" size=\"2\"/><Column id=\"IS_CHECK\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"30\"/><Column id=\"PROJ_SEQ\" type=\"STRING\" size=\"30\"/><Column id=\"PROJ_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cmbDeveloper", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"30\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_grid_top", "absolute", "0", "31", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Grid("projectPop_grid", "absolute", "10", "61", null, null, "10", "14", this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_developer");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\"/><Cell col=\"1\" text=\"프로젝트\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" colspan=\"2\" text=\"투입기간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;\" text=\"bind:IS_CHECK\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:PROJ_NAME\" combodataset=\"ds_project\" combocodecol=\"PROJ_SEQ\" combodatacol=\"PROJ_NAME\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DEV_SEQ\" combodataset=\"ds_cmbDeveloper\" combocodecol=\"SEQ\" combodatacol=\"NAME\" combodisplay=\"display\"/><Cell col=\"3\" edittype=\"date\" text=\"bind:ATTEND_START\"/><Cell col=\"4\" edittype=\"date\" text=\"bind:ATTEND_END\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_grid_top00", "absolute", "0", "15", null, "23", "0", null, this);
            obj.set_taborder("18");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "25", null, this.div_grid_top00);
            obj.set_taborder("36");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top00.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "79", null, this.div_grid_top00);
            obj.set_taborder("37");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top00.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "134", null, this.div_grid_top00);
            obj.set_taborder("38");
            obj.set_text("저장");
            this.div_grid_top00.addChild(obj.name, obj);


            
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
            obj = new Layout("default", "", 900, 23, this.div_grid_top00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 454, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("프로젝트 관리");
            		p.style.set_background("azure");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Project_popup.xfdl", function() {
        // 변경 여부 체크변수.
        this.isChange = false;

        this.form_onload = function(obj,e)
        {
        	this.getSelect();
        	this.getDeveloperList();
        }

        
        // 리스트 호출
        this.getSelect = function() {
        	var proj_seq = this.parent.proj_seq;	
        	
        	// SELECT시 필요한 SEQ를 던지기 위한 세팅.
        	this.ds_developer.clearData();
        	this.ds_developer.addRow();
        	this.ds_developer.setColumn(0, "PROJ_SEQ", proj_seq);
        		
        	var id = "developerService";
        	var url = application.services["svcurl"].url + "/project/developerList.do";
        	var inDateset = "ds_developer=ds_developer";
        	var outDateset = "ds_developer=ds_developer";
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

        
        // 그리드에 쎌을 눌렀을 때 발생하는 이벤트
        this.grid_on_cell_click = function(obj,e)
        {
        	var nRow = this.ds_developer.rowposition;	
        	
        	// 체크박스에 체크
        	if(e.cell == 0) {
        		trace("nRow >>>>>>>" + nRow);
        		trace("IS_CHECK >>>>>>>>>>>> " + this.ds_developer.getColumn(nRow, "IS_CHECK"));
        		/*
        		if(this.ds_developer.getColumn(nRow, "IS_CHECK") == '1') {
        			this.ds_developer.setColumn(nRow, "IS_CHECK", "0");
        		} else {
        			this.ds_developer.setColumn(nRow, "IS_CHECK", "1");
        		}
        		*/
        		// trace("IS_CHECK >>>>>>>>>>>> " + this.ds_developer.getColumn(nRow, "IS_CHECK"));
        	}
        	
        		
        	/*	
        	for(var i = 0; i < this.ds_developer.getRowCount(); i++) {				
        		var is_checkbox = this.ds_developer.getColumn(i, "IS_CHECK");
        		if(is_checkbox != "1") {
        			this.ds_developer.setColumn(i, "IS_CHECK", "0");
        		} 
        		trace(i+"__check status >>>>>>"+this.ds_developer.getColumn(i, "IS_CHECK"));
        	}
        	*/
        	
        	// 프로젝트를 누르면 개발자가 투입된 프로젝트 리스트를 호출
        	/*
        	if(e.cell == 1) {
        		this.getProjectList(nRow, obj, e);
        	} 
        	
        	// 이름을 누르면 개발자 리스트 호출
        	if(e.cell == 2) {
        		this.getDeveloperList();
        	} 
        	*/
        }

        // 헤더 체크박스를 누르면 전체 체크박스 선택
        this.projectPop_grid_onheadclick = function(obj,e) {
        	// 첫번째 칼럼인 경우
        	if(e.col == 0) {
        		for(var i = 0; i < this.ds_developer.getRowCount(); i++) {
        			this.ds_developer.setColumn(i, "IS_CHECK", "1");
        			trace(i+"__check status >>>>>>"+this.ds_developer.getColumn(i, "IS_CHECK"));
        		}
        	}
        }

        // 개인별 투입된 프로젝트
        this.getProjectList = function(nRow,obj,e) {
        	
        	var dev_seq = this.ds_developer.getColumn(nRow, "DEV_SEQ");	
        		
        	this.ds_project.clear();	
        	this.ds_project.addColumn("SEQ", "string", 30);	
        	var ds_row = this.ds_project.addRow();
        	this.ds_project.setColumn(ds_row, "SEQ", dev_seq);	
        		
        	var id = "projectService";
        	var url = application.services["svcurl"].url + "/project/attendProjectList.do";
        	var inDateset = "ds_project=ds_project";
        	var outDateset = "ds_project=ds_project";
        	var arg = "";
        	var callback = "getSelectCallBack";
        		
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        	
        }

        // 등록된 개발자 리스트
        this.getDeveloperList = function() {	
        	this.ds_cmbDeveloper.clear();		
        		
        	var id = "developerSelectService";
        	var url = application.services["svcurl"].url + "/developer/developerList.do";
        	var inDateset = "";
        	var outDateset = "ds_cmbDeveloper=ds_developer";
        	var arg = "";
        	var callback = "getSelectCallBack";
        		
        	this.transaction(id, url, inDateset, outDateset, arg, callback);		
        }

        // 추가버튼 눌렀을 때 
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_developer.addRow();
        	var proj_name = this.parent.proj_name;	
        	var proj_seq = this.parent.proj_seq;
        	
        	var nRowType;
        	nRowType = this.ds_developer.getRowType(nRow);	
        		
        	// 프로젝트 이름은 parent의 데이터셋에서 가져와서 insert.
        	this.ds_developer.setColumn(nRow,"PROJ_NAME",proj_name);	
        	this.ds_developer.setColumn(nRow,"PROJ_SEQ",proj_seq);
        	this.projectPop_grid.setCellProperty("body", 1, "edittype", "none");	
        	
        	// this.projectPop_grid.setCellProperty("body", 2, "edittype", "combo");	

        }

        
        // 삭제 버튼 눌렀을 때
        this.btn_del_onclick = function(obj,e)
        {
        	// var nRow = this.ds_developer.rowposition;
        	// this.ds_developer.deleteRow(nRow);
        	// 체크박스에 체크되어있는 컬럼 전부 삭제.	
        	/*
        	for(var i = 0; i < this.ds_developer.getRowCount(); i++) {
        		var getRowType = this.ds_developer.getRowType(i);
        		trace(i+"_getRowType >>>>> "+ getRowType);
        	}
        	
        	for(var i = 0; i < this.ds_developer.getRowCount(); i++) {
        		var getIsCheck = this.ds_developer.getColumn(i, "IS_CHECK");
        		trace(i+"_getIsCheck >>>>> "+ getIsCheck);
        	}
        	*/
        	// trace(this.ds_developer.saveXML());
        	
        	// 데이터셋에 변경된 내용이 있는지 체크
        	for(var i = 0; i < this.ds_developer.getRowCount(); i++) {
        		var isCheck = this.ds_developer.getColumn(i, "IS_CHECK");
        		var rowType = this.ds_developer.getRowType(i);
        		// rowType : 1: 초기 레코드 상태  2: 추가된 레코드 상태, 4: 수정된 레코드 상태 , 8: 삭제된 레코드 상태 
        		if(rowType == 4 && isCheck == 1) {				// insert
        			this.isChange = true;
        			this.ds_developer.setColumn(i, "DSSTATUS", "D");			
        		} 
        	}
        	
        	if(!this.isChange) {
        		this.alert("삭제할 내용이 없습니다.");
        		return;
        	}
        	
        	var id = "developerDeleteService";
        	var url = application.services["svcurl"].url + "/project/developerDelete.do";
        	var inDateset = "ds_developer=ds_developer:U";				// A: 모든 정보를 전송, U: 갱신된 내용만 전송, :N Delete를 제외한 데이터만 전송
        	var outDateset = "";
        	var arg = "";
        	var callback = "getDeleteCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);	
        	
        }

        

        // 저장버튼 눌렀을 때 
        this.btn_save_onclick = function(obj,e)
        {
        	// 데이터셋에 변경된 내용이 있는지 체크
        	for(var i = 0; i < this.ds_developer.getRowCount(); i++) {
        		var rowType = this.ds_developer.getRowType(i);
        		// rowType : 1: 초기 레코드 상태  2: 추가된 레코드 상태, 4: 수정된 레코드 상태 , 8: 삭제된 레코드 상태 
        		if(rowType == 2) {				// insert
        			this.isChange = true;
        			this.ds_developer.setColumn(i, "DSSTATUS", "I");
        			if(this.validation(i)) {	// 유효성 체크 
        				return;
        			}
        		} else if(rowType == 4) {		// update
        			this.isChange = true;
        			this.ds_developer.setColumn(i, "DSSTATUS", "U");
        			if(this.validation(i)) {	// 유효성 체크 
        				return;
        			}
        		} else if(rowType == 8) {			
        			this.isChange = true;
        			// this.ds_developer.setColumn(i, "DSSTATUS", "D");
        		}
        	}
        	
        	if(!this.isChange) {
        		this.alert("변경된 내용이 없습니다.");
        		return;
        	}
        	
        	if(!confirm("저장 하시겠습니까?")) {
        		return;
        	}

        	var id = "developerSaveService";
        	var url = application.services["svcurl"].url + "/project/developerSave.do";
        	var inDateset = "ds_developer=ds_developer:U";				// A: 모든 정보를 전송, U: 갱신된 내용만 전송, :N Delete를 제외한 데이터만 전송
        	var outDateset = "";
        	var arg = "";
        	var callback = "getSaveCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);		
        }

        // 유효성 체크
        this.validation = function(idx) {
        	var dev_seq = this.ds_developer.getColumn(idx, "DEV_SEQ");
        	var attend_start = this.ds_developer.getColumn(idx, "ATTEND_START");	
        	var attend_end = this.ds_developer.getColumn(idx, "ATTEND_END");
        	var proj_seq = this.ds_developer.getColumn(idx, "PROJ_SEQ");
        	
        	if(!dev_seq) {
        		this.projectPop_grid.setFocus(true);
        		this.projectPop_grid.selectCell(idx, 2, true);
        		this.projectPop_grid.showEditor(true);
        		this.alert("개발자를 선택해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!attend_start) {
        		this.projectPop_grid.setFocus(true);
        		this.projectPop_grid.selectCell(idx, 3, true);
        		this.projectPop_grid.showEditor(true);
        		this.alert("개발 투입일을 입력해 주시기 바랍니다.");
        		return true;
        	}
        		
        	if(!attend_end) {
        		this.projectPop_grid.setFocus(true);
        		this.projectPop_grid.selectCell(idx, 4, true);
        		this.projectPop_grid.showEditor(true);
        		this.alert("개발 철수일을 입력해 주시기 바랍니다.");
        		return true;
        	}	
        	
        	// 날짜형식에서 - 제거
        	attend_start = attend_start.toString().replace(/[-]/g, "");
        	attend_end = attend_end.toString().replace(/[-]/g, "");
        	
        	// 날짜형식에서 시분초 제거
        	attend_start = attend_start.substr(0,8);
        	attend_end = attend_end.substr(0,8);
        	
        	this.ds_developer.setColumn(idx, "ATTEND_START", attend_start);	
        	this.ds_developer.setColumn(idx, "ATTEND_END", attend_end);	
        	
        	return false;
        }

        // 저장 후 콜백
        this.getSaveCallBack = function(id,code,message) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -2 : 
        			this.alert("오류입니다.");
        			break;	
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;				
        		default :
        			this.alert("저장 되었습니다.");
        			this.has_cheaged = false;
        			this.getSelect();
        			break;	
        	}
        }

        // 삭제 후 콜백
        this.getDeleteCallBack = function(id,code,message) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;
        		case -2 : 
        			this.alert("오류입니다.");
        			break;	
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;				
        		default :
        			this.alert("삭제 되었습니다.");
        			this.has_cheaged = false;
        			this.getSelect();
        			break;	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.projectPop_grid.addEventHandler("oncellclick", this.grid_on_cell_click, this);
            this.projectPop_grid.addEventHandler("onheadclick", this.projectPop_grid_onheadclick, this);
            this.div_grid_top00.btn_delete.addEventHandler("onclick", this.btn_del_onclick, this);
            this.div_grid_top00.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.div_grid_top00.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("Project_popup.xfdl");

       
    };
}
)();
