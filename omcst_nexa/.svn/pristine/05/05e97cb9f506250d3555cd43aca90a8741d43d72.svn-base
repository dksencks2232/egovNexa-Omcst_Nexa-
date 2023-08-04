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
                this.set_name("WorkTitle");
                this._setFormPosition(0,0,1164,36);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static50", "absolute", "4", "7", "380", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Title");
            obj.set_text("dsfdsafasfsadfdsaf");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1164, 36, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("WorkTitle");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("WorkTitle.xfdl", function() {
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("WorkTitle.xfdl");

       
    };
}
)();
