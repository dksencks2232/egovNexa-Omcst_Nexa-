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
                this.set_name("Pattern_07");
                this.set_titletext("팝업샘플");
                this._setFormPosition(0,0,800,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rtn_1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rtn_2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_test", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "0", null, "41", "0", null, this);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WF_searchBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "24", "7", "212", "39", null, null, this);
            obj.set_taborder("1");
            obj.set_text("모달(Modal) 팝업창 오픈");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_return", "absolute", "24", "54", null, null, "20", "249", this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "25", null, "374", "123", null, "72", this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_rtn_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "409", null, "374", "123", null, "72", this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_rtn_2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "26", null, "550", "45", null, "191", this);
            obj.set_taborder("5");
            obj.set_text("데이타셋을 전달받은 경우 확인용 그리드");
            obj.style.set_color("blue");
            obj.style.set_font("bold 12 arial");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "458", "7", "212", "39", null, null, this);
            obj.set_taborder("6");
            obj.set_text("팝업닫고 열기");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "241", "7", "212", "39", null, null, this);
            obj.set_taborder("7");
            obj.set_text("모달(Modaless) 팝업창 오픈");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 41, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WF_searchBg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Test035");
            		p.set_titletext("팝업샘플");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Pattern_07.xfdl", function() {
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
        this.form_onload = function (obj,e)
        {
          
            //폼로드시 공통함수 
        	Iject.formOnload(obj);
        }

        /**
         * 모달(Modal) 팝업창 오픈
         * @return 
         * @example
         *
         * @memberOf Iject
         */
        this.Button00_onclick = function(obj,e)
        {
        	

        	

        	this.txa_return.set_value("");
        	this.ds_rtn_1.clear();
        	this.ds_rtn_2.clear();
        		 
        		 var oData ={
                 sId  : "popup_sample",             //callback id
                 sUrl : "Pattern::Pattern_07p.xfdl",   //url
                 bshowtitlebar : true,     //title bar
                 bAutoSize  : true,       //autosize
                 bResize    : false,       //resize
                 bShowtatusbar : false,     //statusbar
                 sOpenalign    : "center middle",  //align
                oArgs :  {arg1:'1111111111111111111',
                          arg2:'2222222222222222222222222'         
                       }    
             };
           
             /**
        	 * @param {object} popup data object
        	 * @parma callback function
        	 * @return function callback
        	 * @example
        	 *
        	 * @memberOf Iject
        	 */
              //팝업 테스트
              Iject.showModal(this,oData,function(svcid,variant){
              
        		
        		  /* 
        		  * popup calllback
        		  *@param {string} this.svcid 
        		  *@param {string} this.variant
        		  */                   
                   switch(Eco._toString.call(variant))
                   {
                   
                     case "[object Array]" :
                   
                            var txt = "";
                            for( var i=0; i<variant.length;i++)
                            {
                              txt += "[" + i + "]===> variant : " + variant[i] + "\n";
                            }
        				
        					 this.txa_return.set_value(txt);
                         
                     break;
                     
                       case "[object Object]" :

                          this.txa_return.set_value(Eco.Json._objectToString(variant));  
                          
                     break;
                     
                     default : 
              
                     if(this.ds_rtn_1.rowcount > 0)
                     {
                          this.ds_rtn_2.loadXML(variant);
                     }
                        this.txa_return.set_value(variant);
                     
                     
                     break;
                     
                     
                   } 
                    

              
              });
            
            
          
        }

        
        //modaless 창 close
        this.Button02_onclick = function(obj,e)
        {
          var args ={arg1:'1111111111111111111',
                          arg2:'2222222222222222222222222'         
                       }; 
          Iject.open(this,"StringReturnSample","Pattern::Pattern_07p.xfdl",args);

        }

        this.Button01_onclick = function(obj,e)
        {

        	  var args ={arg1:'1111111111111111111',
                          arg2:'2222222222222222222222222'         
                       }; 
        	 if(Eco.isEmpty(this.getOwnerFrame().all["StringReturnSample"])==false)
        	 {
        	     this.getOwnerFrame().all["StringReturnSample"].form.close();
        	 }
        	Iject.open(this,"StringReturnSample","Pattern::Pattern_07p.xfdl",args);
        		
        	
        }

        this.Pattern_07_onclose = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onclose", this.Pattern_07_onclose, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Pattern_07.xfdl");

       
    };
}
)();
