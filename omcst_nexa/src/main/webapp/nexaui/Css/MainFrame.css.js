//CSS=MainFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Div.div_MF_group1", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#dcdcdcff","");
    this._addCss("Div.div_MF_group1", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Static.sta_MF_title1", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_blue", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_green", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_red", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_blue", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_red", "align", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#007dc3");
    this._addCss("Static.sta_MF_title1", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_subtitle_Blue", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_blue", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_blue", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 22 Malgun Gothic");
    this._addCss("Static.sta_MF_title1", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#242424");
    this._addCss("Static.sta_MF_subtitle", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_cardTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 12 Malgun Gothic");
    this._addCss("Static.sta_MF_subtitle", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_subtitle_Blue", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#00639c");
    this._addCss("Static.sta_MF_subtitle_Blue2", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_collection", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_deploy", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 9 Malgun Gothic");
    this._addCss("Static.sta_MF_subtitle_Blue2", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_subtitle_White", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#6e6e6e");
    this._addCss("Static.sta_MF_subtitle_Gray", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 8 Malgun Gothic");
    this._addCss("Static.sta_MF_subtitle_Gray", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Static.sta_MF_subtitle_White", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartArea", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_chartAreaNum", "color", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_blue", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_red", "color", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_MF_Link1", "color", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_MF_Link2", "color", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_MF_Link3", "color", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_MF_Link4", "color", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_MF_Link5", "color", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_PE_goMain", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_Alert_title", "color", obj, ["normal"]);
    this._addCss("Button.btn_Alert_Close", "color", obj, ["normal", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Static.sta_BF_info", "color", obj, ["normal"]);
    this._addCss("Static.sta_BF_message", "color", obj, ["normal"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Static.sta_MF_subtitle_circle", "align", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_circleBox.png","","0","0","50","0","true");
    this._addCss("Static.sta_MF_subtitle_circle", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#737373");
    this._addCss("Static.sta_MF_subtitle_circle", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 10 Malgun Gothic");
    this._addCss("Static.sta_MF_subtitle_circle", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartArea", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_MF_status_collection", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_deploy", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_blue", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_red", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticeTitle", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_PE_info2", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Static.sta_MF_subtitle_circle", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Static.sta_MF_chartBg_blue", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_green", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_red", "align", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_chart_blue.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_chartBg_blue", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 Malgun Gothic");
    this._addCss("Static.sta_MF_chartBg_blue", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_green", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_red", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticeContents", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_BF_info", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 37 0");
    this._addCss("Static.sta_MF_chartBg_blue", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_green", "padding", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartBg_red", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_chart_green.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_chartBg_green", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Static.sta_MF_chartBg_green", "border", obj, ["normal", "disabled"]);
    this._addCss("Combo.cmb_MF_familySite", "border", obj, ["normal", "selected", "disabled"]);
    this._addCss("Combo.cmb_MF_familySite>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_PE_goMain", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_Alert_Close", "border", obj, ["normal", "disabled", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_color("#2e6f06");
    this._addCss("Static.sta_MF_chartBg_green", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_green", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_chart_red.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_chartBg_red", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#9b2e1d");
    this._addCss("Static.sta_MF_chartBg_red", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_red", "color", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 44 Malgun Gothic");
    this._addCss("Static.sta_MF_chartNum_blue", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_green", "font", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_chartNum_red", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#2686bcff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_chartArea", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#5ea7ceff","","0","none","","");
    this._addCss("Static.sta_MF_chartArea", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 10");
    this._addCss("Static.sta_MF_chartArea", "padding", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Static.sta_Alert_title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_MF_chartArea", "align", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Button.btn_MF_Link1", "align", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link2", "align", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link3", "align", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link4", "align", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link5", "align", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Static.sta_MF_chartAreaNum", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static.sta_MF_status_deploy", "align", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_chartAreaNum", "background", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Combo.cmb_MF_familySite>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_Alert_Close", "background", obj, ["normal", "disabled", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_font("bold antialias 20 Malgun Gothic");
    this._addCss("Static.sta_MF_chartAreaNum", "font", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_collection.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_status_collection", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 46");
    this._addCss("Static.sta_MF_status_collection", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_deploy.png","","0","0","100","50","true");
    this._addCss("Static.sta_MF_status_deploy", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 49 0 0");
    this._addCss("Static.sta_MF_status_deploy", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#00639cff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_status_roundBox_blue", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Static.sta_MF_status_roundBox_blue", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_status_roundBox_red", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#d62522ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_status_roundBox_red", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#e83d45ff","theme://images/bg_MF_link1.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link1", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e83d45ff","","1","solid","#ec575eff","","1","solid","#ec575eff","","1","solid","#e83d45ff","");
    this._addCss("Button.btn_MF_Link1", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_MF_Link2", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_MF_Link1", "bordertype", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link2", "bordertype", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link3", "bordertype", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link4", "bordertype", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link5", "bordertype", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_Alert_Close", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 11 Malgun Gothic");
    this._addCss("Button.btn_MF_Link1", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link2", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link3", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link4", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link5", "font", obj, ["normal", "selected", "disabled"]);
    this._addCss("Static.sta_MF_cardTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_PE_code", "font", obj, ["normal"]);
    this._addCss("Static.sta_PE_info1", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 88");
    this._addCss("Button.btn_MF_Link1", "padding", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link2", "padding", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link3", "padding", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link4", "padding", obj, ["normal", "selected", "disabled"]);
    this._addCss("Button.btn_MF_Link5", "padding", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_background("#d0262eff","theme://images/bg_MF_link1.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link1", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e83d45ff","theme://images/bg_MF_link2.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link2", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_background("#d0262eff","theme://images/bg_MF_link2.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link2", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e83d45ff","theme://images/bg_MF_link3.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link3", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e83d45ff","","1","solid","#e83d45ff","","1","solid","#ec575eff","","1","solid","#e83d45ff","");
    this._addCss("Button.btn_MF_Link3", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_MF_Link4", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#d0262eff","theme://images/bg_MF_link3.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link3", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e83d45ff","theme://images/bg_MF_link4.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link4", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_background("#d0262eff","theme://images/bg_MF_link4.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link4", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#e83d45ff","theme://images/bg_MF_link5.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link5", "background", obj, ["normal", "selected", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e83d45ff","","1","solid","#e83d45ff","","1","solid","#e83d45ff","","1","solid","#e83d45ff","");
    this._addCss("Button.btn_MF_Link5", "border", obj, ["normal", "selected", "disabled", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#d0262eff","theme://images/bg_MF_link5.png","","0","0","0","50","true");
    this._addCss("Button.btn_MF_Link5", "background", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_cardBG.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_cardBG", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Static.sta_MF_cardBG", "cursor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.sta_MF_cardTitle", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_MF_help", "cursor", obj, ["normal"]);
    this._addCss("Static.sta_MF_noticeLink", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticeContents", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticePause", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticePlay", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticeStep_N", "cursor", obj, ["normal"]);
    this._addCss("Static.noticeStep_N", "cursor", obj, ["disabled"]);
    this._addCss("Static.sta_MF_noticeStep_S", "cursor", obj, ["normal"]);
    this._addCss("Static.noticeStep_S", "cursor", obj, ["disabled"]);
    this._addCss("Static.sta_PE_info2_Link", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_cardBG_O.png","","0","0","0","0","true");
    this._addCss("Static.sta_MF_cardBG", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_cardTitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_cardTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 49");
    this._addCss("Static.sta_MF_cardTitle", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#e8e8e8ff","theme://images/bg_MF_help.png","","0","0","0","50","true");
    this._addCss("Static.sta_MF_help", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Static.sta_MF_help", "color", obj, ["normal"]);
    this._addCss("Static.sta_MF_noticeTitle", "color", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticeContents", "color", obj, ["normal", "disabled"]);
    this._addCss("Combo.cmb_MF_familySite", "color", obj, ["normal"]);
    this._addCss("Combo.cmb_MF_familySite>#comboedit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);

    obj = new nexacro.Style_font("antialias 10 Malgun Gothic");
    this._addCss("Static.sta_MF_help", "font", obj, ["normal"]);
    this._addCss("Combo.cmb_MF_familySite>#comboedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 53");
    this._addCss("Static.sta_MF_help", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_noticeLink.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_noticeLink", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e83841ff","");
    this._addCss("Static.sta_MF_noticeLink", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Static.sta_MF_noticeContents", "align", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_PE_info1", "align", obj, ["normal"]);
    this._addCss("Static.sta_PE_info2", "align", obj, ["normal"]);
    this._addCss("Static.sta_PE_info2_Link", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_noticePause.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_noticePause", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#a5a5a5ff","");
    this._addCss("Static.sta_MF_noticePause", "border", obj, ["normal", "disabled"]);
    this._addCss("Static.sta_MF_noticePlay", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/bg_MF_noticePlay.png","","0","0","50","50","true");
    this._addCss("Static.sta_MF_noticePlay", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#ccccccff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_noticeStep_N", "background", obj, ["normal"]);
    this._addCss("Static.noticeStep_N", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e83d44ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MF_noticeStep_S", "background", obj, ["normal"]);
    this._addCss("Static.noticeStep_S", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("#e8e8e8ff","theme://images/bg_MF_familySite.png","","0","0","0","50","true");
    this._addCss("Combo.cmb_MF_familySite", "background", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("66");
    this._addCss("Combo.cmb_MF_familySite", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Combo.cmb_MF_familySite", "color", obj, ["disabled"]);
    this._addCss("Combo.cmb_MF_familySite>#comboedit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 4 0 50");
    this._addCss("Combo.cmb_MF_familySite>#comboedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_MF_Drop.png')");
    this._addCss("Combo.cmb_MF_familySite>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/img_error403.png","","0","0","50","50","true");
    this._addCss("Static.sta_PE_ico403", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_error404.png","","0","0","50","50","true");
    this._addCss("Static.sta_PE_ico404", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_error500.png","","0","0","50","50","true");
    this._addCss("Static.sta_PE_ico500", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_error501.png","","0","0","50","50","true");
    this._addCss("Static.sta_PE_ico501", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/img_error502.png","","0","0","50","50","true");
    this._addCss("Static.sta_PE_ico502", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#303030");
    this._addCss("Static.sta_PE_code", "color", obj, ["normal"]);
    this._addCss("Static.sta_PE_info2", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Static.sta_PE_code", "padding", obj, ["normal"]);
    this._addCss("Static.sta_PE_info1", "padding", obj, ["normal"]);
    this._addCss("Static.sta_PE_info2", "padding", obj, ["normal"]);
    this._addCss("Static.sta_PE_info2_Link", "padding", obj, ["normal"]);
    this._addCss("Static.sta_BF_info", "padding", obj, ["normal"]);
    this._addCss("Static.sta_BF_message", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#e83d45");
    this._addCss("Static.sta_PE_info1", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("5");
    this._addCss("Static.sta_PE_info2", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_color("#256d9c");
    this._addCss("Static.sta_PE_info2_Link", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold underline antialias 10 Malgun Gothic");
    this._addCss("Static.sta_PE_info2_Link", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#478fbfff","","","0","0","0","0","true");
    this._addCss("Button.btn_PE_goMain", "background", obj, ["normal", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#5aa3ccff","","","0","0","0","0","true");
    this._addCss("Button.btn_PE_goMain", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/bg_Alert.png","stretch","27","27","0","0","true");
    this._addCss("Form.frm_Alert_bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#3a7db7ff","","","0","0","0","0","true");
    this._addCss("Static.sta_Alert_title", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Static.sta_Alert_title", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_Alert_close.png')");
    this._addCss("Button.btn_Alert_Close", "image", obj, ["normal", "disabled", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_Alert_Close", "imagealign", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("70");
    this._addCss("Button.btn_Alert_Close", "opacity", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("100");
    this._addCss("Button.btn_Alert_Close", "opacity", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_Alert_Close", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Static.sta_BF_message", "font", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
