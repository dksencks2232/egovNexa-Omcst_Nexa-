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
                this.set_name("PROJ");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
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
        this.registerScript("np_Webbrowser.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	 this.form_create();
        }

        this.form_create = function() 
        {
        	alert("form_create");
        	 // Create Object  
        	var objWebBrowser = new WebBrowser();  
        	// var objWebBrowser = new WebBrowser("WebBrowser", "absolute", 30, 120, 196, 46, null, null);
        	var objWebBrowser = new WebBrowser("WebBrowser", "absolute", null, null, "100%", "100%", null, null);
        	objWebBrowser.set_url("http://localhost:8089/project/projectList.do");
        	
        	// Add Object to Parent Form  
        	this.addChild("WebBrowser", objWebBrowser); 
        	
        	// Insert Object to Parent Form  
        	this.insertChild(1, "WebBrowser", objWebBrowser); 
        	 
        	// Show Object  
        	objWebBrowser.show(); 
        	
        	/* 
        	// Remove Object form Parent Form  
        	this.removeChild("WebBrowser"); 
        	 
        	// Destroy Object  
        	objWebBrowser.destroy(); 
        	objWebBrowser = null;
        	*/
        }

        this.Button01_onclick = function(obj,e)
        {
         // 넥사14 와 넥사17 모두 해당 코딩으로 처리 하세요.
         alert("???");
         var vHtml = this.Web.getProperty("document").getProperty("body");  
         vHtml.setProperty( "innerHTML", "Added content using innerHTML type" );
        };

        	
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("np_Webbrowser.xfdl");

       
    };
}
)();
