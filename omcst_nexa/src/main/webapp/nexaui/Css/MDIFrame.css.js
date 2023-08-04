//CSS=MDIFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/img_MDI_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_MDI", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Form.frm_MDI", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static.sta_MDI_openList", "border", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_MDI_btn", "border", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_MDI_no_btn", "border", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "border", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MDI_Openlist>#body", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "border", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "border", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#incbutton", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#decbutton", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#incbutton", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#decbutton", "border", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#resizebutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Form.frm_MDI", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_btn", "bordertype", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_MDI_no_btn", "bordertype", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("PopupDiv.pdiv_TF_search", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_pop_close", "bordertype", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Grid.grd_MDI_Openlist>#resizebutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Form.frm_MDI", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_btn", "color", obj, ["mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#c0c0c0ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MDI_Tline", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#93959aff","","","0","0","0","0","true");
    this._addCss("Static.sta_MDI_Vline", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_MDI_openList", "align", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MDI_Openlist", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MDI_Openlist>#body", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_background("#0e559fff","theme://images/ico_MDI_openList.png","","0","0","0","50","true");
    this._addCss("Static.sta_MDI_openList", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Static.sta_MDI_openList", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_MDI_openList", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 1 30");
    this._addCss("Static.sta_MDI_openList", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_Home", "background", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Pre", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Nxt", "background", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Openlist", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Full", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Case", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_V", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_H", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Allclose", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_btn", "background", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI_no_btn", "background", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_MDI_Openlist", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_MDI_Openlist>#body", "background", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#incbutton", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#decbutton", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#incbutton", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#decbutton", "background", obj, ["normal"]);
    this._addCss("Grid.grd_MDI_Openlist>#resizebutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#dadadaff","","0","none","","","1","solid","#dadadaff","");
    this._addCss("Button.btn_MDI_Home", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_MDI_Home", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Pre", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Nxt", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Openlist", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Full", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Case", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_V", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_H", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Allclose", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "cursor", obj, ["normal"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_pop_close", "cursor", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_MDI_Openlist>#body", "cursor", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_HomeN.png");
    this._addCss("Button.btn_MDI_Home", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_MDI_Home", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Pre", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Nxt", "imagealign", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Openlist", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Full", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Case", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_V", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_H", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Allclose", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_pop_close", "imagealign", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button.btn_MDI_Home", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Pre", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Nxt", "padding", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Openlist", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Full", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Case", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_V", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_H", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Allclose", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_pop_close", "padding", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_Home", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_HomeO.png");
    this._addCss("Button.btn_MDI_Home", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_HomeP.png");
    this._addCss("Button.btn_MDI_Home", "image", obj, ["pushed"]);

    obj = new nexacro.Style_border("0","none","#216eb2ff","");
    this._addCss("Button.btn_MDI_Pre", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Nxt", "border", obj, ["normal", "focused", "selected", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_MDI_Openlist", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Full", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Case", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_V", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_H", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Allclose", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_PreN1.png");
    this._addCss("Button.btn_MDI_Pre", "image", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("50%");
    this._addCss("Button.btn_MDI_Pre", "opacity", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_MDI_Nxt", "opacity", obj, ["normal", "focused", "selected"]);
    this._addCss("Button.btn_MDI_Openlist", "opacity", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Full", "opacity", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Case", "opacity", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_V", "opacity", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_H", "opacity", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDI_Allclose", "opacity", obj, ["normal", "focused", "selected", "disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_PreO1.png");
    this._addCss("Button.btn_MDI_Pre", "image", obj, ["mouseover"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("100%");
    this._addCss("Button.btn_MDI_Pre", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Nxt", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Openlist", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Full", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Case", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_V", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_H", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_MDI_Allclose", "opacity", obj, ["mouseover", "pushed"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "opacity", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "opacity", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_PreP1.png");
    this._addCss("Button.btn_MDI_Pre", "image", obj, ["pushed"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "image", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_value("40");
    this._addCss("Button.btn_MDI_Pre", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_Nxt", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_NxtN.png");
    this._addCss("Button.btn_MDI_Nxt", "image", obj, ["normal", "focused", "selected"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_NxtO.png");
    this._addCss("Button.btn_MDI_Nxt", "image", obj, ["mouseover"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_NxtP.png");
    this._addCss("Button.btn_MDI_Nxt", "image", obj, ["pushed"]);
    this._addCss("Tab.tab_MDI_btn>#spindownbutton", "image", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_PreN.png");
    this._addCss("Button.btn_MDI_Nxt", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_OpenlistN.png");
    this._addCss("Button.btn_MDI_Openlist", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_OpenlistO.png");
    this._addCss("Button.btn_MDI_Openlist", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_OpenlistP.png");
    this._addCss("Button.btn_MDI_Openlist", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_FullN.png");
    this._addCss("Button.btn_MDI_Full", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_FullO.png");
    this._addCss("Button.btn_MDI_Full", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_FullP.png");
    this._addCss("Button.btn_MDI_Full", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_CaseN.png");
    this._addCss("Button.btn_MDI_Case", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_CaseO.png");
    this._addCss("Button.btn_MDI_Case", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_CaseP.png");
    this._addCss("Button.btn_MDI_Case", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_VN.png");
    this._addCss("Button.btn_MDI_V", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_VO.png");
    this._addCss("Button.btn_MDI_V", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_VP.png");
    this._addCss("Button.btn_MDI_V", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_HN.png");
    this._addCss("Button.btn_MDI_H", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_HO.png");
    this._addCss("Button.btn_MDI_H", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_HP.png");
    this._addCss("Button.btn_MDI_H", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_AllcloseN.png");
    this._addCss("Button.btn_MDI_Allclose", "image", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_AllcloseO.png");
    this._addCss("Button.btn_MDI_Allclose", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_MDI_AllcloseP.png");
    this._addCss("Button.btn_MDI_Allclose", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/bottom_tab_bgN.png","stretch","4","4","0","0","true");
    this._addCss("Tab.tab_MDI_btn", "buttonbackground", obj, ["normal", "disabled", "focused"]);
    this._addCss("Tab.tab_MDI_no_btn", "buttonbackground", obj, ["normal", "disabled", "focused", "selected"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Tab.tab_MDI_btn", "buttonborder", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn", "buttonborder", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.tab_MDI_btn", "buttonbordertype", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn", "buttonbordertype", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);

    obj = new nexacro.Style_padding("4 4 8 10");
    this._addCss("Tab.tab_MDI_btn", "buttonpadding", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn", "buttonpadding", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#aaaaaaff");
    this._addCss("Tab.tab_MDI_btn", "color", obj, ["normal", "disabled", "focused"]);
    this._addCss("Tab.tab_MDI_no_btn", "color", obj, ["normal", "disabled", "focused", "selected"]);

    obj = new nexacro.Style_value("default");
    this._addCss("Tab.tab_MDI_btn", "cursor", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn", "cursor", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Tab.tab_MDI_btn", "focusborder", obj, ["normal", "disabled", "focused"]);
    this._addCss("Tab.tab_MDI_no_btn", "focusborder", obj, ["normal", "disabled", "focused", "selected"]);

    obj = new nexacro.Style_font("bold antialias 10 malgun gothic, Tahoma, Arial");
    this._addCss("Tab.tab_MDI_btn", "font", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);
    this._addCss("Tab.tab_MDI_no_btn", "font", obj, ["normal", "disabled", "focused", "mouseover", "selected"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Tab.tab_MDI_btn", "showextrabutton", obj, ["normal", "disabled", "focused"]);
    this._addCss("Tab.tab_MDI_no_btn", "showextrabutton", obj, ["normal", "disabled", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/bottom_tab_bgO.png","stretch","4","4","0","0","true");
    this._addCss("Tab.tab_MDI_btn", "buttonbackground", obj, ["mouseover"]);
    this._addCss("Tab.tab_MDI_no_btn", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bottom_tab_bgS.png","stretch","4","4","0","0","true");
    this._addCss("Tab.tab_MDI_btn", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "align", obj, ["normal", "mouseover"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/extrabutton_N.png')");
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "image", obj, ["normal"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "width", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/extrabutton_O.png')");
    this._addCss("Tab.tab_MDI_btn>#extrabutton", "image", obj, ["mouseover"]);
    this._addCss("Tab.tab_MDI_no_btn>#extrabutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("PopupDiv.pdiv_TF_search", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#0e559fff","");
    this._addCss("PopupDiv.pdiv_TF_search", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_pop_close", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("0","none","#0c2d4eff","");
    this._addCss("Button.btn_pop_close", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_pop_closeN.png");
    this._addCss("Button.btn_pop_close", "image", obj, ["normal", "focused", "selected", "disabled", "pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_pop_closeO.png");
    this._addCss("Button.btn_pop_close", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_border("0","none","#216eb2ff","");
    this._addCss("Grid.grd_MDI_Openlist", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Grid.grd_MDI_Openlist", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#31465bff");
    this._addCss("Grid.grd_MDI_Openlist", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_MDI_Openlist", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellbackground", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellbackground2", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellcolor", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellcolor2", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellfont", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_border("0","none","#ebebebff","");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellline", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_padding("2 4 2 4");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellpadding", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_MDI_Openlist>#body", "selectbackground", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_border("0","none","#c8d5f1ff","");
    this._addCss("Grid.grd_MDI_Openlist>#body", "selectborder", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid.grd_MDI_Openlist>#body", "selectcolor", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_MDI_Openlist>#body", "selectfont", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_border("0","none","#c8d5f1ff","");
    this._addCss("Grid.grd_MDI_Openlist>#body", "selectline", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_color("#216eb2ff");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#216eb2ff");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss("Grid.grd_MDI_Openlist>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#0000001e","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","true","true");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "bordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "decbtnsize", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "decbtnsize", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("0");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "incbtnsize", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "incbtnsize", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("9");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "scrollbarsize", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "scrollbarsize", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#a0a4a9ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "background", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "barminsize", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "barminsize", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#898d93ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#74797fff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "background", obj, ["pushed", "selected"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("#c7c7c7ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_MDI_Openlist>#vscrollbar>#trackbar", "background", obj, ["disabled"]);
    this._addCss("Grid.grd_MDI_Openlist>#hscrollbar>#trackbar", "background", obj, ["disabled"]);

    obj = null;
    
//[add theme images]
  };
})();
