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
                this.set_name("Annual");
                this.set_titletext("SingleDetail");
                this._setFormPosition(0,0,900,557);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_annual", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"22\"/><Column id=\"MEMBER_SEQ\" type=\"STRING\" size=\"22\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"ANNUAL_START\" type=\"STRING\" size=\"10\"/><Column id=\"ANNUAL_END\" type=\"STRING\" size=\"10\"/><Column id=\"MEMBER_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"NO\" type=\"STRING\" size=\"22\"/><Column id=\"STATUS\" type=\"STRING\" size=\"20\"/><Column id=\"APPLICATION_DATE\" type=\"DATE\" size=\"20\"/><Column id=\"CONFIRM_SEQ\" type=\"STRING\" size=\"22\"/><Column id=\"CONFIRM_DATE\" type=\"STRING\" size=\"20\"/><Column id=\"WELFARE_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ETC\" type=\"STRING\" size=\"2000\"/><Column id=\"DSSTATUS\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_DAY\" type=\"STRING\" size=\"3\"/></ColumnInfo><Rows><Row><Col id=\"SEQ\"/><Col id=\"MEMBER_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"11\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"32\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"LEVEL\" type=\"INT\" size=\"4\"/><Column id=\"ORDER_NO\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"32\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"STATUS\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"SEQ\">1</Col><Col id=\"CODE_ID\">1</Col><Col id=\"GROUP_ID\">TEST</Col><Col id=\"CODE_NAME\">코드명</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORDER_NO\">1</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">TEST</Col><Col id=\"REG_DATE\">2018-06-12 00:00:00.0</Col><Col id=\"UPDATE_USER\">TEST</Col><Col id=\"UPDATE_DATE\">2018-06-12 00:00:00.0</Col></Row><Row><Col id=\"SEQ\">2</Col><Col id=\"CODE_ID\">2</Col><Col id=\"GROUP_ID\">TEST</Col><Col id=\"CODE_NAME\">코드명2</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORDER_NO\">2</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">TEST</Col><Col id=\"REG_DATE\">2018-06-12 00:00:00.0</Col><Col id=\"UPDATE_USER\">TEST</Col><Col id=\"UPDATE_DATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_code2", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"INT\" size=\"11\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"32\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"LEVEL\" type=\"INT\" size=\"4\"/><Column id=\"ORDER_NO\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"32\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"STATUS\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"SEQ\">1</Col><Col id=\"CODE_ID\">1</Col><Col id=\"GROUP_ID\">TEST</Col><Col id=\"CODE_NAME\">코드명</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORDER_NO\">1</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">TEST</Col><Col id=\"REG_DATE\">2018-06-12 00:00:00.0</Col><Col id=\"UPDATE_USER\">TEST</Col><Col id=\"UPDATE_DATE\">2018-06-12 00:00:00.0</Col></Row><Row><Col id=\"SEQ\">2</Col><Col id=\"CODE_ID\">2</Col><Col id=\"GROUP_ID\">TEST</Col><Col id=\"CODE_NAME\">코드명2</Col><Col id=\"LEVEL\">1</Col><Col id=\"ORDER_NO\">2</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">TEST</Col><Col id=\"REG_DATE\">2018-06-12 00:00:00.0</Col><Col id=\"UPDATE_USER\">TEST</Col><Col id=\"UPDATE_DATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MEMBER_NAME\" type=\"STRING\" size=\"20\"/><Column id=\"ANNUAL_START\" type=\"STRING\" size=\"20\"/><Column id=\"ANNUAL_END\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_grid_top", "absolute", "0", "119", null, "23", "0", null, this);
            obj.set_taborder("17");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_delete", "absolute", null, "0", "50", "23", "25", null, this.div_grid_top);
            obj.set_taborder("28");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.delete");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "0", "50", "23", "79", null, this.div_grid_top);
            obj.set_taborder("31");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.add");
            this.div_grid_top.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", null, "0", "50", "23", "134", null, this.div_grid_top);
            obj.set_taborder("32");
            obj.set_text("저장");
            this.div_grid_top.addChild(obj.name, obj);

            obj = new Grid("annual_grid", "absolute", "10", "158", null, null, "10", "20", this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_annual");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"시퀀스\"/><Cell col=\"1\" text=\"신청년도\"/><Cell col=\"2\" text=\"연차시작일\"/><Cell col=\"3\" edittype=\"date\" text=\"연차종료일\"/><Cell col=\"4\" text=\"기간\"/><Cell col=\"5\" text=\"신청자\"/><Cell col=\"6\" text=\"신청회차\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"신청일시\"/><Cell col=\"9\" text=\"코드\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:SEQ\"/><Cell col=\"1\" edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:YEAR\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"date\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:ANNUAL_START\" editclipmode=\"includespace\" editdisplay=\"edit\" calendardisplay=\"display\" calendardisplaynulltext=\"bind:ANNUAL_START\" calendardisplaynulltype=\"bind:ANNUAL_START\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"date\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:ANNUAL_END\" calendardisplay=\"display\" calendardisplaynulltext=\"bind:ANNUAL_END\" calendardisplaynulltype=\"bind:ANNUAL_END\"/><Cell col=\"4\" edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:DIFF_DAY\"/><Cell col=\"5\" edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:MEMBER_NAME\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:NO\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:STATUS\" combodataset=\"ds_code\" combocodecol=\"CODE_ID\" combodatacol=\"CODE_NAME\" combodisplay=\"display\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:APPLICATION_DATE\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" style=\"background:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');background2:EXPR(YEAR==comp.parent.fn_dateTostr()?'white':'lightgray');\" text=\"bind:WELFARE_CODE\" combodataset=\"ds_code2\" combocodecol=\"CODE_ID\" combodatacol=\"CODE_NAME\" combodisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("user_search_div", "absolute", "1%", "43", null, "53", "1.78%", null, this);
            obj.set_taborder("19");
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new Static("label_name", "absolute", "0.46%", "10", "75", "30", null, null, this.user_search_div);
            obj.set_taborder("23");
            obj.set_text("신청자");
            obj.style.set_background("aquamarine");
            obj.style.set_align("center middle");
            this.user_search_div.addChild(obj.name, obj);
            obj = new Edit("txt_name", "absolute", "10.97%", "10", null, "30", "75.2%", null, this.user_search_div);
            obj.set_taborder("25");
            this.user_search_div.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "10", "50", "23", "47", null, this.user_search_div);
            obj.set_taborder("31");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_CRUD");
            obj.getSetter("domainId").set("nexa.search");
            this.user_search_div.addChild(obj.name, obj);
            obj = new Static("label_date", "absolute", "32.46%", "10", "75", "30", null, null, this.user_search_div);
            obj.set_taborder("40");
            obj.set_text("날짜");
            obj.style.set_background("aquamarine");
            obj.style.set_align("center middle");
            this.user_search_div.addChild(obj.name, obj);
            obj = new Static("label_date01", "absolute", "59.89%", "10", "35", "30", null, null, this.user_search_div);
            obj.set_taborder("43");
            obj.set_text("~");
            obj.style.set_background("aquamarine");
            obj.style.set_align("center middle");
            this.user_search_div.addChild(obj.name, obj);
            obj = new Calendar("cal_startdate", "absolute", "44.34%", "10", null, "30", "41.03%", null, this.user_search_div);
            this.user_search_div.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_enddate", "absolute", "66.06%", "10", null, "30", "20%", null, this.user_search_div);
            this.user_search_div.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 53, this.user_search_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.style.set_background("azure");

            	}
            );
            this.user_search_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 557, this,
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
        this.registerScript("Annual.xfdl", function() {
        // 변경 여부 체크변수.
        this.isChange = false;

        this.Annual_onload = function(obj,e)
        { 	
        	// 리스트 호출
        	// this.ds_annual.clearData();
        	this.getSelect();
        	
        	// 공통코드 호출
        	this.getComboStatus();
        	this.getComboCode();
        }

        this.getSelect = function() {
        	this.ds_annual.clearData();
        	var id = "AnnualService";
        	var url = application.services["svcurl"].url + "/annual/annualUserList.do";
        	var inDateset = "";
        	var outDateset = "ds_annual=ds_annual";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        // 그리드의 상태 컬럼 콤보박스의 내용을 디비 공통코드 테이블에서 불러온다.
        this.getComboStatus = function() {	
        	this.ds_code.clearData();
        	this.ds_code.addRow();
        	this.ds_code.setColumn(0, "GROUP_ID", "ANNU_STAT");
        	
        	var id = "CodeService";
        	var url = application.services["svcurl"].url + "/code/codeListOne.do";
        	var inDateset = "ds_code=ds_code";
        	var outDateset = "ds_code=ds_code";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        	
        }

        // 그리드의 코드 컬럼 콤보박스의 내용을 디비 공통코드 테이블에서 불러온다.
        this.getComboCode = function() {	
        	this.ds_code2.clearData();
        	this.ds_code2.addRow();
        	this.ds_code2.setColumn(0, "GROUP_ID", "WELFARE");
        	
        	var id = "CodeService2";
        	var url = application.services["svcurl"].url + "/code/codeListOne.do";
        	var inDateset = "ds_code=ds_code2";
        	var outDateset = "ds_code2=ds_code";
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

        

        

        
        // 추가버튼 눌렀을 때 
        this.btn_add_onclick = function(obj,e)
        {
        	// 휴가일수를 체크하고 15일 이상이면 return
        	// 15일 이하면 줄을 추가한다...
        	this.checkAnnual();	
        }

        // 휴가일수 체크
        this.checkAnnual = function() {
        	var id = "AnnualStatService";
        	var url = application.services["svcurl"].url + "/annualStat/checkAnnual.do";
        	var inDateset = "";
        	var outDateset = "";
        	var arg = "";
        	var callback = "getCheckAnnualCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        
        this.getCheckAnnualCallBack = function(id,code,message) {
        	switch(code) {
        		case -1 : 
        			this.alert("오류입니다.");
        			break;		
        		case -3 : 
        			this.alert("세션 만료입니다.");
        			this.closefunc();
        			break;	
        		case -5 : 
        			this.alert("휴가 일수는 총 지급일수를 초과해서 사용하실 수 없습니다.");
        			break;			
        		default :
        			this.ds_annual.addRow();
        			break;
        	}
        }

        

        

        

        // 저장버튼 눌렀을 때 
        this.btn_save_onclick = function(obj,e)
        {
        	// 데이터셋에 변경된 내용이 있는지 체크
        	for(var i = 0; i < this.ds_annual.getRowCount(); i++) {
        		var rowType = this.ds_annual.getRowType(i);
        		// rowType : 1: 초기 레코드 상태  2: 추가된 레코드 상태, 4: 수정된 레코드 상태 , 8: 삭제된 레코드 상태 
        		if(rowType == 2) {				// insert
        			this.isChange = true;
        			this.ds_annual.setColumn(i, "DSSTATUS", "I");
        			if(this.validation(i)) {	// 유효성 체크 
        				return;
        			}
        		} else if(rowType == 4) {		// update
        			this.isChange = true;
        			this.ds_annual.setColumn(i, "DSSTATUS", "U");
        			if(this.validation(i)) {	// 유효성 체크 
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

        
        	var id = "AnnualService";
        	var url = application.services["svcurl"].url + "/annual/annualSave.do";
        	var inDateset = "ds_annual=ds_annual:U";				// A: 모든 정보를 전송, U: 갱신된 내용만 전송, :N Delete를 제외한 데이터만 전송
        	var outDateset = "";
        	var arg = "";
        	var callback = "getSaveCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);	

        	
        }

        // 유효성 체크
        this.validation = function(idx) {
        	var annual_start = this.ds_annual.getColumn(idx, "ANNUAL_START");
        	var annual_end = this.ds_annual.getColumn(idx, "ANNUAL_END");	
        	var welfare_code = this.ds_annual.getColumn(idx, "WELFARE_CODE");
        	
        	if(!annual_start) {
        		this.annual_grid.setFocus(true);
        		this.annual_grid.selectCell(idx, 2, true);
        		this.annual_grid.showEditor(true);
        		this.alert("연차시작일을 입력해 주시기 바랍니다.");
        		return true;
        	}
        	
        	if(!annual_end) {
        		this.annual_grid.setFocus(true);
        		this.annual_grid.selectCell(idx, 3, true);
        		this.annual_grid.showEditor(true);
        		this.alert("연차종료일을 입력해 주시기 바랍니다.");
        		return true;
        	}
        		
        	if(!welfare_code) {
        		this.annual_grid.setFocus(true);
        		this.annual_grid.selectCell(idx, 3, true);
        		this.annual_grid.showEditor(true);
        		this.alert("코드를 입력해 주시기 바랍니다.");
        		return true;
        	}	
        	
        	return false;
        }

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
        		case -5 : 
        			this.alert("휴가 일수는 총 지급일수를 초과해서 사용하실 수 없습니다.");			
        			break;	
        		default :
        			this.alert("저장 되었습니다.");
        			this.has_cheaged = false;
        			this.getSelect();
        			break;	
        	}
        }

        

        

        

        // 삭제 버튼 눌렀을 때
        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.ds_annual.rowposition;
        	this.ds_annual.deleteRow(nRow);
        	this.isChange = true;
        }

        

        

        // 그리드 클릭 이벤트
        this.grid_on_cell_click = function(obj,e) {
        	// 기간을 누르면 날짜 계산.
        	if(e.cell == 4) {
        		this.getDiffDay(obj, e);
        	} 
        }

        // 날짜 계산.
        // 연차 시작일을 누르고 연차 종료일을 눌렀을 때
        // 둘 다 널(null)값이 아니라면 시작일과 종료일의 날짜 차이를 계산해서 같은 행의 기간 칸에 넣는다.
        this.getDiffDay = function(obj,e) {	
        	
        	var nRow = this.ds_annual.rowposition;	
        		
        	var annual_start = this.ds_annual.getColumn(nRow, "ANNUAL_START");
        	var annual_end = this.ds_annual.getColumn(nRow, "ANNUAL_END");	
        		
        	annual_start = annual_start.replace(" ", "").replace("-", "").replace("/", "");
        	annual_end = annual_end.replace(" ", "").replace("-", "").replace("/", "");
        	
        	var nDiffDate = this.getStrToDate(annual_end) - this.getStrToDate(annual_start);
        	var nDay = 1000*60*60*24;
        	
        	nDiffDate = parseInt(nDiffDate/nDay);
        	if(nDiffDate < 0) {
        		nDiffDate = nDiffDate - 1;		
        	} else {
        		nDiffDate = nDiffDate + 1;
        	}
        		
        	// setColumn이 먹히려면 dataset과 VO의 구성요소들이 전부 일치해야된다.
        	// 예를 들어서 DIFF_DAY가 dataset에만 있고 VO에 없다면 setColumn은 unidentify로 나오며 먹히지 않는다.
        	this.ds_annual.setColumn(nRow, "DIFF_DAY", nDiffDate);
        	
        	// 데스트용 코드. 데이터셋에 있는 것들을 전부 그리드에 뿌려준다.
        	// this.annual_grid.set_binddataset("ds_annual");
        	// this.annual_grid.createFormat();
        	
        }

        this.getStrToDate = function(sDate) {
        	var nYear = parseInt(sDate.substr(0, 4));
        	var nMonth = parseInt(sDate.substr(4, 2));
        	var nDate = parseInt(sDate.substr(6, 2));
        	
        	return new Date(nYear, nMonth, nDate);	
        }

        

        

        
        // 검색버튼을 눌렀을 때
        this.searchAnnual = function() {
        	this.ds_annual.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	
        	// 검색조건을 데이터셋에 저장.
        	var name = this.user_search_div.txt_name.value;	
        	var annual_start = this.user_search_div.cal_startdate.value;
        	var annual_end = this.user_search_div.cal_enddate.value;
        	
        	this.ds_search.setColumn(0, "MEMBER_NAME", name);
        	this.ds_search.setColumn(0, "ANNUAL_START", annual_start);
        	this.ds_search.setColumn(0, "ANNUAL_END", annual_end);	
        	
        	// 검색조건 체크
        	if(!name) {
        		this.alert("성명을 입력해 주시기 바랍니다.");
        		this.user_search_div.txt_name.setFocus(true);
        		return;
        	}
        	
        	var id = "AnnualService";
        	var url = application.services["svcurl"].url + "/annual/annualUserSearch.do";
        	var inDateset = "ds_search=ds_search";
        	var outDateset = "ds_annual=ds_annual";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        }

        

        

        // 올해년도 리턴 
        // 올해년도 데이터는 배경색을 흰색으로, 이전 년도 데이터는 회색으로 세팅하기 위함.
        this.fn_dateTostr = function() {
        	var objDate = new Date();
        	var sRtn = objDate.getFullYear();
        	return sRtn;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Annual_onload, this);
            this.div_grid_top.btn_delete.addEventHandler("onclick", this.btn_del_onclick, this);
            this.div_grid_top.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.div_grid_top.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.annual_grid.addEventHandler("oncellclick", this.grid_on_cell_click, this);
            this.user_search_div.btn_search.addEventHandler("onclick", this.searchAnnual, this);

        };

        this.loadIncludeScript("Annual.xfdl");

       
    };
}
)();
