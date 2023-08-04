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
                this.set_name("Project_attend");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,900,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_projectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJ_START\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_END\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_START_YYYY\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_START_MM\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_END_YYYY\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_END_MM\" type=\"STRING\" size=\"11\"/><Column id=\"M_BWN\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_NAME\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_SEQ\" type=\"STRING\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_projectmbetween", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" name=\"년도\" type=\"STRING\" size=\"7\"/><Column id=\"M_COUNT\" name=\"년도별 개월수\" type=\"STRING\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_projectTotalMonthList", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" name=\"년월\" type=\"STRING\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_projectAttend", this);
            obj._setContents("<ColumnInfo><Column id=\"DEV_SEQ\" name=\"개발자 시퀀스\" type=\"STRING\" size=\"11\"/><Column id=\"DEV_NAME\" name=\"개발자 이름\" type=\"STRING\" size=\"11\"/><Column id=\"ATTEND_STR_DATE\" name=\"투입월\" type=\"STRING\" size=\"11\"/><Column id=\"ATTEND_END_YEAR\" name=\"철수월\" type=\"STRING\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cmbprojectlist", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" name=\"프로젝트 시퀀스\" type=\"STRING\" size=\"11\"/><Column id=\"PROJ_NAME\" name=\"프로젝트 이름\" type=\"STRING\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("projectAttend_grid", "absolute", "1.78%", "94", null, "388", "1.44%", null, this);
            obj.set_taborder("1");
            obj.set_useselcolor("false");
            obj.set_autofittype("none");
            obj.set_selecttype("row");
            obj.set_fillareatype("none");
            obj.set_extendsizetype("none");
            obj.set_enableevent("true");
            obj.set_autoupdatetype("none");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"프로젝트명\"/><Cell col=\"1\" colspan=\"2\" text=\"2020\"/><Cell col=\"3\" colspan=\"4\" text=\"2021\"/><Cell row=\"1\" col=\"1\" text=\"11\"/><Cell row=\"1\" col=\"2\" text=\"12\"/><Cell row=\"1\" col=\"3\" text=\"01\"/><Cell row=\"1\" col=\"4\" text=\"02\"/><Cell row=\"1\" col=\"5\" text=\"03\"/><Cell row=\"1\" col=\"6\" text=\"04\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_project", "absolute", "1.78%", "32", null, "37", "82.22%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_cmbprojectlist");
            obj.set_datacolumn("PROJ_NAME");
            obj.set_codecolumn("SEQ");
            obj.set_displaynulltext("프로젝트 선택");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 500, this,
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
        this.registerScript("Project_attend.xfdl", function() {
        this.ProjectAttend_onload = function(obj,e)
        {
        	this.getSelectProjectList();
        }

        //콤보박스용 프로젝트 리스트 호출

        this.getSelectProjectList = function() {
        	
        	var id = "CmbProjectListService";
        	var url = application.services["svcurl"].url + "/project/projectList.do";
        	var inDateset = "";
        	var outDateset = "ds_cmbprojectlist=ds_project";
        	var arg = "";
        	var callback = "getSelectProjectListCallBack";
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        	
        }

        //콤보박스용 프로젝트 리스트 콜백함수.
        this.getSelectProjectListCallBack = function(id,code,msg) {
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

        // 리스트 호출
        this.getSelect = function(obj,e) {
        	// this.ds_projectInfo.clearData();
        	this.ds_projectmbetween.clearData();
        	
        	var id = "ProjectAttendService";
        	var url = application.services["svcurl"].url + "/projectAttend/projectAttendList.do";
        	var inDateset = "ds_projectInfo=ds_projectInfo";
        	var outDateset = "ds_projectInfo=ds_projectInfo ds_projectmbetween=ds_projectmbetween ds_projectTotalMonthList=ds_projectTotalMonthList ds_projectAttend=ds_projectAttend";
        	var arg = "";
        	var callback = "getSelectCallBack";
        	this.transaction(id, url, inDateset, outDateset, arg, callback);
        	
        }

        // 셀렉트 콜백함수.
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
        	// 그리드를 그립시당...
        	this.showhead();
        }

        this.showhead = function() {	
             
             // trace(this.ds_projectInfo.saveXML());
             
             // trace(this.ds_projectmbetween.saveXML());     
             /*
             trace(this.ds_projectmbetween.getRowCount());
             trace(this.ds_projectmbetween.getColCount());
             trace("YEAR >>>>>> "+this.ds_projectmbetween.getColumn(0, "YEAR"));
             trace("M_COUNT >>>>>>>> "+this.ds_projectmbetween.getColumn(0, "m_COUNT"));
              */
              
             var format = '<Formats>';
        		format += '<Format id="default">';
        		format += '	<Columns>';
        		format += '		<Column size="80"/>';				
        		for(var i = 0; i < this.ds_projectmbetween.getRowCount(); i++) {
        			for(var j = 0; j < this.ds_projectmbetween.getColumn(i, "m_COUNT"); j++) {
        				format += '		<Column size="80"/>';				
        			}
        		}		
        		format += '	</Columns>';
        		format += '	<Rows>';
        		format += '		<Row size="24" band="head"/>';
        		format += '		<Row size="24" band="head"/>';		
        		format += '	</Rows>';
        		format += '	<Band id="head">';		
        		// 프로젝트명
        		format += '		<Cell rowspan="2" col="0" text="'+this.ds_projectInfo.getColumn(0, "PROJ_NAME")+'"/>';
        		// 기간
        		var colNum = 1;
        		var colMonth = this.ds_projectInfo.getColumn(0, "PROJ_START_MM");
        		for(var i = 0; i < this.ds_projectmbetween.getRowCount(); i++) {			
        			format += '		<Cell col="'+colNum+'" colspan="'+this.ds_projectmbetween.getColumn(i, "m_COUNT")+'" text="'+this.ds_projectmbetween.getColumn(i, "YEAR")+'"/>';
        			for(var j = 0; j < this.ds_projectmbetween.getColumn(i, "m_COUNT"); j++) {								
        				format += '		<Cell row="1" col="'+colNum+'" text="'+colMonth+'"/>';		
        				colNum += 1;
        				colMonth = (colMonth%12)+1;
        			}
        		}		
        		format += '	</Band>';              				
        		format += '	</Format>';   
        		format += '	</Formats>';   
             // trace(format);
             this.projectAttend_grid.set_formats(format);
             
             /********************************************************************
             // dataset 생성 순서 : addColumn -> addRow -> setColumn
             // http://demo.nexacro.com/developer_guide/17/guide.html 참고.
             *********************************************************************/
             
             // body에 넣을 dataset 생성.     
             var ds_projectAttendView = new Dataset();
             ds_projectAttendView.set_name("ds_projectAttendView");
             
             // dataset에 column 생성
             for(var i = 0; i <= this.ds_projectInfo.getColumn(0, "m_BWN"); i++) {
        		ds_projectAttendView.addColumn("col_"+i,"string");
        		ds_projectAttendView.addColumn("tooltip_"+i,"string");
             }
                      
             //trace("ds_projectTotalMonthList >>>>"+this.ds_projectTotalMonthList.saveXML());
             //trace("ds_projectAttend >>>>"+this.ds_projectAttend.saveXML());
             
             // dataset에 column에 데이터 입력.
             for(var j=0; j < this.ds_projectAttend.getRowCount(); j++) {     
        		 var nRow = ds_projectAttendView.addRow();		 
        		 ds_projectAttendView.setColumn(nRow, "col_"+0, this.ds_projectAttend.getColumn(j, "DEV_NAME"));		 	// 개발자명
        		 var attend_str_date = this.ds_projectAttend.getColumn(j, "ATTEND_STR_DATE");						// 투입일
        		 var attend_end_date = this.ds_projectAttend.getColumn(j, "ATTEND_END_DATE");						// 철수일
        		 		 
        		 for(var k = 1; k <= this.ds_projectTotalMonthList.getRowCount(); k++) {
        			var k_date = this.ds_projectTotalMonthList.getColumn(k-1, "YYYYMM");
        			if(attend_str_date <= k_date && k_date <= attend_end_date ) {
        				ds_projectAttendView.setColumn(nRow, "col_"+k, "Y");										//투입이 되었다면 Y				
        			} else {		
        				ds_projectAttendView.setColumn(nRow, "col_"+k, "N");										//투입x라면 X
        			}
        			ds_projectAttendView.setColumn(nRow, "tooltip_"+k, k_date.substring(0,4)+"년 "+k_date.substring(4,7)+"월");			//툴팁.
        		 }
        	 }     
                 
             // 그리드에 데이터셋을 바인드
             this.projectAttend_grid.set_binddataset(ds_projectAttendView);     
                  
             // 그리드의 body에 행 추가.
             this.projectAttend_grid.appendContentsRow("Body");                 
             
             // 그리드에 데이터셋의 값 입력, 색상 세팅.
             // 0행에 이름 입력
             var colinfo_0 = ds_projectAttendView.getColumnInfo(0);
             this.projectAttend_grid.setCellProperty("body", 0, "text", "bind:"+colinfo_0.name);	
             // 나머지행에는 투입된 달에만 녹색으로...
             for(var i = 1; i < ds_projectAttendView.getColCount(); i++) {
        		var colinfo = ds_projectAttendView.getColumnInfo(i);		
        		// this.projectAttend_grid.setCellProperty("body", i, "text", "bind:"+colinfo.name);				
        		this.projectAttend_grid.setCellProperty("body", i, "background", "expr:col_"+i+"=='Y'?'green':'white'");
        		this.projectAttend_grid.setCellProperty("body", i, "background2", "expr:col_"+i+"=='Y'?'green':'white'");		
        		this.projectAttend_grid.setCellProperty("body", i, "tooltiptext", "bind:tooltip_"+i);				
             }      
        }

        
        this.cmb_project_onitemchange = function(obj,e)
        {
        	if(obj.value) {
        		this.ds_projectInfo.clearData();
        		this.ds_projectInfo.addRow();
        		this.ds_projectInfo.setColumn(0, "PROJ_SEQ", obj.value);
        		this.getSelect();
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.ProjectAttend_onload, this);
            this.cmb_project.addEventHandler("onitemchanged", this.cmb_project_onitemchange, this);

        };

        this.loadIncludeScript("Project_attend.xfdl");

       
    };
}
)();
