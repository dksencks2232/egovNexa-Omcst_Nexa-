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
                this.set_name("paging_comm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,750,53);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("paging_div", "absolute", "0", "0", "750", "53", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("antiquewhite");
            this.addChild(obj.name, obj);
            obj = new Div("paging", "absolute", "0", "0", "500", "53", null, null, this.paging_div);
            obj.set_taborder("0");
            obj.style.set_background("azure");
            this.paging_div.addChild(obj.name, obj);
            obj = new Button("btn_first", "absolute", "1.4%", "10", "25", "35", null, null, this.paging_div.paging);
            obj.set_taborder("0");
            obj.set_text("<<");
            this.paging_div.paging.addChild(obj.name, obj);
            obj = new Button("btn_prev", "absolute", "7%", "10", "25", "35", null, null, this.paging_div.paging);
            obj.set_taborder("1");
            obj.set_text("<");
            this.paging_div.paging.addChild(obj.name, obj);
            obj = new Button("btn_last", "absolute", "93.4%", "10", "25", "35", null, null, this.paging_div.paging);
            obj.set_taborder("2");
            obj.set_text(">>");
            this.paging_div.paging.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", "87.8%", "10", "25", "35", null, null, this.paging_div.paging);
            obj.set_taborder("3");
            obj.set_text(">");
            this.paging_div.paging.addChild(obj.name, obj);
            obj = new Div("number_div", "absolute", "13.4%", "0", null, "52", "13.6%", null, this.paging_div.paging);
            obj.set_taborder("4");
            this.paging_div.paging.addChild(obj.name, obj);

            obj = new Div("move_div", "absolute", null, "0", "250", "53", "0", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            obj = new Edit("input_nowPage", "absolute", "4.8%", "14", null, "25", "74.8%", null, this.move_div);
            obj.set_taborder("0");
            this.move_div.addChild(obj.name, obj);
            obj = new Static("label_total", "absolute", "28%", "11", null, "29", "30.4%", null, this.move_div);
            obj.set_taborder("1");
            obj.set_text("/");
            this.move_div.addChild(obj.name, obj);
            obj = new Button("btn_move", "absolute", "74.4%", "11", null, "31", "2.8%", null, this.move_div);
            obj.set_taborder("2");
            obj.set_text("이동");
            obj.set_cssclass("Red");
            this.move_div.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 52, this.paging_div.paging.number_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.paging_div.paging.number_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 500, 53, this.paging_div.paging,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("azure");

            	}
            );
            this.paging_div.paging.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 53, this.paging_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("antiquewhite");

            	}
            );
            this.paging_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 250, 53, this.move_div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.move_div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 53, this,
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
        this.registerScript("paging_comm.xfdl", function() {
        this.startPageNum = 1;
        this.endPageNum = 10;
        this.lastPageNum = 25;
        this.currentPageNum = 1;

        this.dataRowCount = 10;

        this.paging_comm_onload = function(obj,e)
        {

        }

        this.fn_initPageSet = function() {  

        	var btn_left = 10;
        	var btn_top = 10;
        	var btn_width = 25;
        	var btn_height = 35

        	
        	for(var i = 1; i <= 10; i++) {
        	
        		var objBtnId = "btn_page_"+i;
        		var button = this.paging_div.paging.number_div.all[objBtnId];
        		
        		if(button) {
        			button.destroy();
        		}
        	}
        	
        	var index = 1;
        	for(var i = this.startPageNum; i <= this.endPageNum; i++) {
        	
        		var objBtnId = "btn_page_"+index;
        		
        		var objButton = new Button();
        		
        		objButton.init(objBtnId, "absolute", btn_left, btn_top, btn_width, btn_height, null, null);
        		objButton.set_text(i);
        		
        		if(this.currentPageNum == i) {
        			objButton.set_enable(false);
        		} else {
        			objButton.set_enable(true);
        		}
        		
        		this.paging_div.paging.number_div.addChild(objBtnId, objButton);
        		
        		objButton.show();
        		
        		btn_left += 30; 
        		index++;
        	}
        	
        	this.move_div.input_nowPage.set_value(this.currentPageNum);
        	this.move_div.label_total.set_text(" / " + this.lastPageNum);

        }

        this.paging_div_paging_btn_first_onclick = function(obj,e)
        {
        	this.currentPageNum = 1;
        	this.startPageNum = 1;
        	this.endPageNum = 10;
        	
        	this.fn_initPageSet();
        }

        this.paging_div_paging_btn_last_onclick = function(obj,e)
        {
        	var mok = parseInt(this.lastPageNum / 10);
        	var other = this.lastPageNum % 10;
        	
        	this.currentPageNum = this.lastPageNum;
        	this.startPageNum = mok * 10 + 1;
        	this.endPageNum = other > 0 ? mok * 10 + other : (mok + 1) * 10;
        	
        	this.fn_initPageSet();
        }

        this.paging_div_paging_btn_prev_onclick = function(obj,e)
        {
        	if(this.currentPageNum == 1) {
        		this.alert("첫페이지 입니다.");
        	} else {
        	
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.paging_comm_onload, this);
            this.paging_div.paging.btn_first.addEventHandler("onclick", this.paging_div_paging_btn_first_onclick, this);
            this.paging_div.paging.btn_prev.addEventHandler("onclick", this.paging_div_paging_btn_prev_onclick, this);
            this.paging_div.paging.btn_last.addEventHandler("onclick", this.paging_div_paging_btn_last_onclick, this);

        };

        this.loadIncludeScript("paging_comm.xfdl");

       
    };
}
)();
