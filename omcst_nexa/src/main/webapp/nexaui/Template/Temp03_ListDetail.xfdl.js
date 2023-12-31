﻿(function()
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
                this.set_name("Temp01_SingleDetail");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1030,876);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Grid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">3</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">4</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">5</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">6</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">7</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">8</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">9</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"순번\">10</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">11</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">12</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">13</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">14</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">15</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">16</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">17</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">18</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">19</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"Column0\">[Undefined]</Col><Col id=\"순번\">20</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column02\">전체</Col><Col id=\"Column03\">2015-00-00</Col><Col id=\"Column04\">expand</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column07\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "1010", "0", "20", "876", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search", "absolute", "0", "0", null, "43", "20", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "104", "10", "132", "21", null, null, this.div_Search);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "235", "10", "21", "21", null, null, this.div_Search);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_SearchSmall");
            this.div_Search.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "371", "10", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj = new Calendar("Calendar00", "absolute", "638", "10", "152", "21", null, null, this.div_Search);
            this.div_Search.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj = new Button("Button05", "absolute", null, "8", "60", "25", "11", null, this.div_Search);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "19", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("7");
            obj.set_text("조회라벨01");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "286", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("8");
            obj.set_text("조회라벨02");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "553", "10", "85", "21", null, null, this.div_Search);
            obj.set_taborder("10");
            obj.set_text("조회라벨03");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "2", "60", "250", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("리스트 그리드");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "2", "522", "250", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("디테일 항목");
            obj.set_cssclass("sta_WF_SubTitle1");
            this.addChild(obj.name, obj);

            obj = new Div("div_Detail", "absolute", "0", "547", null, "285", "20", null, this);
            obj.set_taborder("18");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "1", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "29", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "57", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "85", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "113", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "141", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "1", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("157");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "29", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("158");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "85", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("159");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "57", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("160");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "141", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("161");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "113", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("162");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "197", null, "88", "0", null, this.div_Detail);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "169", null, "29", "0", null, this.div_Detail);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_DetailLabel02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "169", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("166");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "197", "107", "88", null, null, this.div_Detail);
            obj.set_taborder("167");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "254", "1", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("169");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "254", "29", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("170");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "254", "57", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("171");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "254", "85", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("172");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "254", "113", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("173");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "254", "141", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("174");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "254", "169", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("175");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "110", "145", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("176");
            obj.set_displaynulltext("123,456,789");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "112", "173", "136", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.div_Detail.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택02</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("177");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Spin("Spin00", "absolute", "110", "89", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("178");
            obj.set_value("987");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "110", "61", "141", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("179");
            obj.set_displaynulltext("2015-00-00");
            obj = new Combo("Combo00", "absolute", "110", "33", "141", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("180");
            obj.set_text("전체선택");
            obj = new Edit("Edit00", "absolute", "110", "5", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("181");
            obj.set_displaynulltext("Enabled");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox01", "absolute", "180", "118", "71", "20", null, null, this.div_Detail);
            obj.set_taborder("182");
            obj.set_text("체크02");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "110", "118", "71", "20", null, null, this.div_Detail);
            obj.set_taborder("183");
            obj.set_text("체크01");
            obj.set_value("true");
            this.div_Detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "364", "145", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("184");
            obj.set_displaynulltext("123,456,789");
            obj.set_cssclass("essential");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "366", "173", "136", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.div_Detail.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택02</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("185");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            obj.set_index("1");
            obj = new Spin("Spin01", "absolute", "364", "89", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("186");
            obj.set_value("987");
            obj.set_cssclass("essential");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "364", "61", "141", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("187");
            obj.set_displaynulltext("2015-00-00");
            obj.set_cssclass("essential");
            obj = new Combo("Combo01", "absolute", "364", "33", "141", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("188");
            obj.set_text("전체선택");
            obj.set_cssclass("essential");
            obj = new Edit("Edit01", "absolute", "364", "5", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("189");
            obj.set_displaynulltext("Enabled");
            obj.set_cssclass("essential");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox02", "absolute", "434", "118", "71", "20", null, null, this.div_Detail);
            obj.set_taborder("190");
            obj.set_text("체크02");
            obj.set_cssclass("essential");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox03", "absolute", "364", "118", "71", "20", null, null, this.div_Detail);
            obj.set_taborder("191");
            obj.set_text("체크01");
            obj.set_value("true");
            obj.set_cssclass("essential");
            this.div_Detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit02", "absolute", "618", "145", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("192");
            obj.set_displaynulltext("123,456,789");
            obj.set_cssclass("readonly");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Radio("Radio02", "absolute", "620", "173", "136", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.div_Detail.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택02</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("193");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_cssclass("readonly");
            obj.set_index("1");
            obj = new Spin("Spin02", "absolute", "618", "89", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("194");
            obj.set_value("987");
            obj.set_cssclass("readonly");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Calendar("Calendar02", "absolute", "618", "61", "141", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("195");
            obj.set_displaynulltext("2015-00-00");
            obj.set_cssclass("readonly");
            obj = new Combo("Combo02", "absolute", "618", "33", "141", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("196");
            obj.set_text("전체선택");
            obj.set_cssclass("readonly");
            obj = new Edit("Edit02", "absolute", "618", "5", "141", "21", null, null, this.div_Detail);
            obj.set_taborder("197");
            obj.set_displaynulltext("Enabled");
            obj.set_cssclass("readonly");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox04", "absolute", "688", "118", "71", "20", null, null, this.div_Detail);
            obj.set_taborder("198");
            obj.set_text("체크02");
            obj.set_cssclass("readonly");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox05", "absolute", "618", "118", "71", "20", null, null, this.div_Detail);
            obj.set_taborder("199");
            obj.set_text("체크01");
            obj.set_value("true");
            obj.set_cssclass("readonly");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "508", "1", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("200");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "508", "29", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("201");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "508", "57", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("202");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "508", "85", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("203");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "508", "113", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("204");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "508", "141", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("205");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "508", "169", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("206");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit03", "absolute", "872", "145", "134", "21", null, null, this.div_Detail);
            obj.set_taborder("207");
            obj.set_displaynulltext("123,456,789");
            obj.set_enable("false");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Radio("Radio03", "absolute", "872", "173", null, "21", "20", null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            var Radio03_innerdataset = new Dataset("Radio03_innerdataset", this.div_Detail.Radio03);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택02</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_taborder("208");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_index("1");
            obj = new Spin("Spin03", "absolute", "872", "89", "134", "21", null, null, this.div_Detail);
            obj.set_taborder("209");
            obj.set_value("987");
            obj.set_enable("false");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Calendar("Calendar03", "absolute", "872", "61", "134", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("210");
            obj.set_displaynulltext("2015-00-00");
            obj.set_enable("false");
            obj = new Combo("Combo03", "absolute", "872", "33", "134", "21", null, null, this.div_Detail);
            this.div_Detail.addChild(obj.name, obj);
            obj.set_taborder("211");
            obj.set_text("전체선택");
            obj.set_enable("false");
            obj = new Edit("Edit03", "absolute", "872", "5", "134", "21", null, null, this.div_Detail);
            obj.set_taborder("212");
            obj.set_displaynulltext("Enabled");
            obj.set_enable("false");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox06", "absolute", "937", "118", "69", "20", null, null, this.div_Detail);
            obj.set_taborder("213");
            obj.set_text("체크02");
            obj.set_enable("false");
            this.div_Detail.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox07", "absolute", "872", "118", "66", "20", null, null, this.div_Detail);
            obj.set_taborder("214");
            obj.set_text("체크01");
            obj.set_value("true");
            obj.set_enable("false");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "762", "1", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("215");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "762", "29", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("216");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "762", "57", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("217");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "762", "85", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("218");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "762", "113", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("219");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "762", "141", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("220");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "762", "169", "107", "29", null, null, this.div_Detail);
            obj.set_taborder("221");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "508", "197", "107", "88", null, null, this.div_Detail);
            obj.set_taborder("222");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_DetailLabel01");
            this.div_Detail.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "110", "201", "395", "80", null, null, this.div_Detail);
            obj.set_taborder("224");
            obj.set_displaynulltext("가나다라마바사");
            this.div_Detail.addChild(obj.name, obj);
            obj = new TextArea("TextArea03", "absolute", "618", "201", "388", "80", null, null, this.div_Detail);
            obj.set_taborder("227");
            obj.set_displaynulltext("가나다라마바사");
            obj.set_cssclass("essential");
            this.div_Detail.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "0", "0", null, "2", "0", null, this.div_Detail);
            obj.set_taborder("228");
            obj.set_cssclass("sta_WF_DetailLine");
            this.div_Detail.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", null, "64", "100", "12", "319", null, this);
            obj.set_taborder("19");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", null, "64", "65", "12", "254", null, this);
            obj.set_taborder("20");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", null, "64", "65", "12", "189", null, this);
            obj.set_taborder("21");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", null, "60", "79", "21", "109", null, this);
            obj.set_taborder("22");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_Download");
            this.addChild(obj.name, obj);

            obj = new Button("Button16", "absolute", null, "60", "67", "21", "43", null, this);
            obj.set_taborder("23");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_Upload");
            this.addChild(obj.name, obj);

            obj = new Button("Button17", "absolute", null, "60", "21", "21", "20", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Extend");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "0", "86", null, "421", "20", null, this);
            obj.set_taborder("25");
            obj.set_binddataset("Grid");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"48\"/><Column size=\"153\"/><Column size=\"150\"/><Column size=\"152\"/><Column size=\"138\"/><Column size=\"143\"/><Column size=\"104\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" cssclass=\"CellEssential\" text=\"Essential Edit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"Expand\"/><Cell col=\"6\" text=\"Text\"/><Cell col=\"7\" text=\"Number\"/><Cell col=\"8\" text=\"Button\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" style=\"padding:3 3 3 3;\" text=\"bind:Column01\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"padding:3 3 3 3;\" text=\"bind:Column02\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"padding:3 3 3 3;\" text=\"bind:Column03\" calendardisplay=\"display\" calendardisplaynulltype=\"default\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"expand\" style=\"padding:3 3 3 3;\" text=\"bind:Column04\" expandshow=\"show\" expandsize=\"21\" expandimage=\"URL('img::btn_WF_SearchSmall.png')\"/><Cell col=\"6\" style=\"padding:3 3 3 3;\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align:right middle;padding:3 3 3 3;\" text=\"bind:Column06\"/><Cell col=\"8\" displaytype=\"button\" edittype=\"button\" style=\"align:center middle;padding:3 3 3 3;\" text=\"bind:Column07\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding:0 11 0 0;\" text=\"321456789\" mask=\"###,###,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "856", "1010", "20", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1010", "881", "33", "22", null, null, this);
            obj.set_taborder("28");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1037", "858", "33", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_Search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WF_SearchBg");

            	}
            );
            this.div_Search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 285, this.div_Detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_scrollbars("none");

            	}
            );
            this.div_Detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1030, 876, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Temp01_SingleDetail");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Temp03_ListDetail.xfdl", function() {
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

        this.form_onload = function (obj,e)
        {
            Iject.formOnload(obj);
        } 
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Temp03_ListDetail.xfdl");

       
    };
}
)();
