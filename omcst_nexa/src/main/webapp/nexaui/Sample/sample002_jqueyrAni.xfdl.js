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
                this.set_name("sample010");
                this.set_titletext("animation sample(3rdParty)");
                this._setFormPosition(0,0,1260,589);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("reset");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"withdrawn_account\" type=\"STRING\" size=\"256\"/><Column id=\"bank\" type=\"STRING\" size=\"256\"/><Column id=\"transaction_time\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"sender\" type=\"STRING\" size=\"256\"/><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"256\"/><Column id=\"withdrawn_amount\" type=\"STRING\" size=\"256\"/><Column id=\"deposited_amount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"balance\" type=\"STRING\" size=\"256\"/><Column id=\"branch\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new GroupBox("GroupBox02", "absolute", "6", "429", null, "138", "18", null, this);
            obj.set_text("Example");
            obj.set_taborder("22");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_color("black");
            obj.style.set_font("9 Verdana bold");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "14", "252", "97", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Run");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "216", "239", "34", null, null, this);
            obj.set_taborder("5");
            obj.set_text("1.jQuery animation");
            obj.set_cssclass("sample_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "35", "453", "446", "97", null, null, this);
            obj.set_taborder("7");
            obj.set_text("$(Ex.ani.jquery(this.Div00)).animate({left:0},'slow');\r\n\t$(Ex.ani.jquery(this.Div00)).animate({left:10},'fast');\r\n \t$(Ex.ani.jquery(this.Div00)).fadeOut(function(){\r\n \t\r\n \t   trace(\" this.callback\");\r\n \t});");
            obj.set_cssclass("sample_example");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "10", "299", null, "124", "15", null, this);
            obj.set_text("Preveiw");
            obj.set_taborder("17");
            obj.style.set_border("1 solid darkgray");
            obj.style.set_color("black");
            obj.style.set_font("9 Verdana bold");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "480", "318", "405", "55", null, null, this);
            obj.set_taborder("18");
            obj.style.set_border("1 solid red");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "22", "11", "174", "34", null, null, this.Div00);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "8", "-1", "195", "24", null, null, this);
            obj.set_taborder("20");
            obj.set_text("★.index.html element");
            obj.set_cssclass("sample_Title");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "2", "27", null, "181", "0", null, this);
            obj.set_taborder("21");
            obj.set_image("URL('image::sample010.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_align("left middle");
            obj.set_imagealign("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goCss", "absolute", "120", "252", "97", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("css");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 405, 55, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.style.set_border("1 solid red");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1260, 589, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("jquery_sample");
            		p.set_titletext("animation sample(3rdParty)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("sample002_jqueyrAni.xfdl", function() {

        

        this.form_onload= function(obj,e)
        {
          var h = 990;
          
          if(nexacro.Browser == "Runtime" || Eco.isEmpty(Iject.$.workFrame)){ 
              alert("실행할 수 없습니다."); 
             application.exit();
          return;
          };
          
          nexacro.loadJSLibraries(["./nexacro14lib/component/IjectJS/ExtApi/jquery-1.10.2.js"]);
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	$(Iject.Html5.jquery(this.Div00)).animate({"height": "100px"}, {"queue": false, "duration": 500})
                                         .animate({"width": "250px"}, 500);
        	$(Iject.Html5.jquery(this.Div00)).animate({left:0},'slow');
        	$(Iject.Html5.jquery(this.Div00)).animate({left:10},'fast');
         	
        }

        

        
        /**
        * index page onload element 생성
        * @return 
        * @example
        * @memberOf Ex.core
        */
        this.createElement = function()
        {

          var anchor = document.all["linkcss"];
           if(!Eco.isEmpty(anchor)){
        	   anchor.parentNode.removeChild(anchor);   
           }
           
           var csslink  = document.createElement('link');
           
        	   csslink .setAttribute('id', 'linkcss');
        	   csslink .setAttribute('rel', 'stylesheet');		  
        	   csslink .setAttribute('type', 'text/css');
        	   csslink .setAttribute('href', './nexacro14lib/component/ExLib/openapi/animate.css');
           document.getElementsByTagName("head")[0].insertBefore(csslink ,document.getElementsByTagName("title")[0]);

        }

        
        //ling page 
        this.btn_goCss_onclick = function(obj,e)
        {
        	var url =  "";
        	
        	system.execBrowser("http://daneden.github.io/animate.css/");
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.btn_goCss.addEventHandler("onclick", this.btn_goCss_onclick, this);

        };

        this.loadIncludeScript("sample002_jqueyrAni.xfdl");

       
    };
}
)();
