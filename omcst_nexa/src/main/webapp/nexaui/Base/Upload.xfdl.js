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
                this.set_name("Upload");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "3.5%", "27", null, "148", "9%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "67.86%", "55", null, "42", "21%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "82%", "53", null, "32", "10.57%", null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "47.57%", "58", null, "43", "40%", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "14.12%", "202", null, "149", "12.88%", null, this);
            obj.set_taborder("1");
            obj._setContents("<Formats></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 148, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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
        this.registerScript("Upload.xfdl", function() {
        this.Upload_onload = function(obj,e)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Upload_onload, this);

        };

        this.loadIncludeScript("Upload.xfdl");

       
    };
}
)();
