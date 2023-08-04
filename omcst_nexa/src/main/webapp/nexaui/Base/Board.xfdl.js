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
                this.set_name("Board");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,800,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "1.75%", "17", null, "42", "1.88%", null, this);
            obj.set_taborder("0");
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "89.11%", "10", null, "26", "1.3%", null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "1.5%", "71", null, "342", "1.88%", null, this);
            obj.set_taborder("1");
            obj._setContents("<Formats></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "1.63%", "428", null, "57", "1.75%", null, this);
            obj.set_taborder("2");
            obj.set_url("Base::paging_comm.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 42, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("azure");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 800, this,
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
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "Base::paging_comm.xfdl");
        };
        
        // User Script
        this.registerScript("Board.xfdl", function() {

        this.Board_onload = function(obj,e)
        {
        	this.Div01.fn_initPageSet();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Board_onload, this);

        };

        this.loadIncludeScript("Board.xfdl");
        this.loadPreloadList();
       
    };
}
)();
