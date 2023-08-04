//CSS=LeftFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/img_LF_bg.png","repeat-y","0","0","100","50","true");
    this._addCss("Form.frm_LF", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Form.frm_LF", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Form.frm_LF", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Form.frm_LF", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid.grd_LF_menu", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#5791cdff","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_MenuTi", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#fc6219ff","");
    this._addCss("Static.sta_LF_MenuTi", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Static.sta_LF_MenuTi", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Dbg", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Team", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Name", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_LF_menu", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu01", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_LF_refresh", "bordertype", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Static.sta_LF_MenuTi", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Dbg", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 10 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_LF_MenuTi", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Dbg", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_LF_MenuTi", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f1f1f3ff","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_Dbg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#e3e3e5ff","","0","none","#e3e3e5ff","","0","none","#e3e3e5ff","","0","none","#e3e3e5ff","");
    this._addCss("Static.sta_LF_Dbg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Static.sta_LF_Dbg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Team", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Name", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_LF_setup", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_refresh", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.sta_LF_Team", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Name", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_LF_refresh", "background", obj, ["normal", "selected", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#e3e3e5ff","");
    this._addCss("Static.sta_LF_Team", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_LF_Name", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#848e9c");
    this._addCss("Static.sta_LF_Team", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 8 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_LF_Team", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#1950a8");
    this._addCss("Static.sta_LF_Name", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_LF_Name", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_LF_menu", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu>#body", "align", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "align", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu>#body", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","#e5e5e5ff","");
    this._addCss("Grid.grd_LF_menu", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu>#body", "border", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_menu01", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "border", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Button.btn_LF_refresh", "border", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_LF_menu", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu01", "font", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_LF_close.png')");
    this._addCss("Grid.grd_LF_menu", "treeclosebuttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_menu", "treecollapseimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_menu", "treeexpandimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_LF_item.png')");
    this._addCss("Grid.grd_LF_menu", "treeitemimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_LF_open.png')");
    this._addCss("Grid.grd_LF_menu", "treeopenbuttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground2", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor2", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_LF_menu>#body", "cellfont", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "cellfont", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","#e5e5e5ff","");
    this._addCss("Grid.grd_LF_menu>#body", "cellline", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "cellline", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss("Grid.grd_LF_menu>#body", "celllinetype", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "celllinetype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("2 5 2 5");
    this._addCss("Grid.grd_LF_menu>#body", "cellpadding", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_menu01>#body", "cellpadding", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Grid.grd_LF_menu>#body", "cursor", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Grid.grd_LF_menu01>#body", "cursor", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_value("#f8f8f8ff");
    this._addCss("Grid.grd_LF_menu>#body", "selectbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid.grd_LF_menu>#body", "selectborder", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "selectborder", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#216eb2ff");
    this._addCss("Grid.grd_LF_menu>#body", "selectcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_LF_menu>#body", "selectfont", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "selectfont", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("0","none","#e5e5e5ff","");
    this._addCss("Grid.grd_LF_menu>#body", "selectline", obj, ["normal", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "selectline", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground", obj, ["mouseover", "disabled"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground2", obj, ["mouseover", "disabled"]);

    obj = new nexacro.Style_color("#216eb2ff");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#216eb2ff");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("bold underline antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_LF_menu>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor2", obj, ["disabled"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu01", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_LF_menu01>#body", "background", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Grid.grd_LF_menu01", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://imsges/tree_LF_2depth.png')");
    this._addCss("Grid.grd_LF_menu01", "treeclosebuttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://imsges/tree_LF_2depth.png')");
    this._addCss("Grid.grd_LF_menu01", "treecollapseimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://imsges/tree_LF_2depth.png')");
    this._addCss("Grid.grd_LF_menu01", "treeexpandimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_menu01", "treeitemimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://imsges/tree_LF_2depth.png')");
    this._addCss("Grid.grd_LF_menu01", "treeopenbuttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu01>#body", "cellbackground", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu01>#body", "cellbackground2", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Grid.grd_LF_menu01>#body", "cellcolor", obj, ["normal", "focused", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Grid.grd_LF_menu01>#body", "cellcolor2", obj, ["normal", "focused", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("#222222ff");
    this._addCss("Grid.grd_LF_menu01>#body", "selectbackground", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Grid.grd_LF_menu01>#body", "selectcolor", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#222222ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu01>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#222222ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu01>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_LF_menu01>#body", "cellfont", obj, ["mouseover"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_LF_setup", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_LF_refresh", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_LF_setupN.png')");
    this._addCss("Button.btn_LF_setup", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_LF_setupO.png')");
    this._addCss("Button.btn_LF_setup", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_LF_setupP.png')");
    this._addCss("Button.btn_LF_setup", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_refresh_N.png')");
    this._addCss("Button.btn_LF_refresh", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Button.btn_LF_refresh", "shadow", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_refresh_O.png')");
    this._addCss("Button.btn_LF_refresh", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#4683c1ff","","","0","0","0","0","true");
    this._addCss("Button.btn_LF_refresh", "background", obj, ["pushed"]);

    obj = null;
    
//[add theme images]
  };
})();
