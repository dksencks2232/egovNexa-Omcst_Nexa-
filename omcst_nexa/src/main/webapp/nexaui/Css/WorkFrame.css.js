//CSS=WorkFrame.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("","theme://images/ico_sta_home.png","","0","0","0","100","true");
    this._addCss("Static.sta_WF_location", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Static.sta_WF_location", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_MainTitle", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Title", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFGC_tatal", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_tit", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_tit", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_data", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WFD_searchNu", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_calNu", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_comboNu", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_page", "border", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_pageS", "border", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WFD_addsample", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addsave", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addon", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addoff", "border", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_WFSA_label", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_gray", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_green", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_blue", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_white", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_bottom_point_red", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_bottom_point_bg", "border", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "border", obj, ["mouseover"]);
    this._addCss("Div.div_bottom_point_black_bg", "border", obj, ["normal"]);
    this._addCss("Div.div_bottom_point_gray_bg", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_NonSelect>#body", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#body", "border", obj, ["normal", "focused", "disabled", "mouseover"]);
    this._addCss("Button.btn_srcSmall", "border", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_tabbtn", "border", obj, ["pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_tabbtnS", "border", obj, ["normal", "focused", "pushed", "selected"]);
    this._addCss("Static.sta_pop_title", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_sessionOut", "border", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step01", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step02", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step03", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Static.sta_WF_location", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_message", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_MainTitle", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Title", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFGC_tatal", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LFclose", "bordertype", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_LFopen", "bordertype", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFclose", "bordertype", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFopen", "bordertype", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_help", "bordertype", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Div.div_WFSA_bg", "bordertype", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_bg2", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WFSA_bg2", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WFSA_bg3", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_label", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_GuideTi", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_Guidetxt", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WFBA", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_tabbtn", "bordertype", obj, ["normal", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_tabbtnS", "bordertype", obj, ["mouseover", "normal", "focused", "pushed", "selected"]);
    this._addCss("PopupDiv.pdiv_popup_box", "bordertype", obj, ["normal"]);
    this._addCss("Div.div_popup_box", "bordertype", obj, ["normal"]);
    this._addCss("Div.div_POP_message", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("TextArea.txt_POP_messageTxt", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Div.div_Activity_box", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.St_Activ_Txt", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_WF_sessionOut", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.St_POPTi_Blue", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_Activ_Txt_qstd", "bordertype", obj, ["normal", "pushed", "focused", "mouseover"]);
    this._addCss("Tab.Maintab", "bordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "bordertype", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Div.div_WF_Audit_progbg01", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_WF_CR_S", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_C", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_A", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_R", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_P", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 8 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_location", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFGC_tatal", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPoint", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescGuide", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_circle_data", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_gray", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_green", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_blue", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_white", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_S", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_C", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_A", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_R", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_P", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#aaaaaaff");
    this._addCss("Static.sta_WF_location", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left bottom");
    this._addCss("Static.sta_WF_location", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 16");
    this._addCss("Static.sta_WF_location", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_gray", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_green", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_blue", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_white", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/img_WF_Message.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_message", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#ddddddff","");
    this._addCss("Static.sta_WF_message", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_S", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_C", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_A", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_R", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_P", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_message", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfo", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfoN", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPointN", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LFclose", "font", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_LFopen", "font", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFclose", "font", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFopen", "font", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_help", "font", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_Custom", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom_fix", "font", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Search", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Save", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Excel", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_New", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Modify", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Spopup", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Complete", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_page", "font", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_WF_first", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_end", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_prev", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_next", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleT", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleB", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_search", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_add", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addplus", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addminus", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Static.sta_Detail_day", "font", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Grid.grd_WF_NonSelect>#body", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WFD_tree", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss(".grd_WF_SummaryBody1", "font", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody2", "font", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody3", "font", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody4", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_pageRecent", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_color("#69717aff");
    this._addCss("Static.sta_WF_message", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Static.sta_WF_message", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_MainTitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Title", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_subtitle", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFGC_tatal", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescGuide", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_green", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_blue", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_red", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_gray", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_greenpink", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_tit", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_data", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_help", "align", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Custom", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom_fix", "align", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Search", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Save", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Excel", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_New", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Modify", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Spopup", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Complete", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addrow", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_delrow", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_WFSA_label", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_bg", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelP", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_label", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_label", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bg", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgL", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgR", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_gray", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_green", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_blue", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_white", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_POP_messageTi", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_pop_title", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.St_POPTi_Blue", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_Audit_step01", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_CR_S", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_C", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_A", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_R", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_P", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 24");
    this._addCss("Static.sta_WF_message", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_MainTitle", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFGC_tatal", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfoN", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPointN", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_tit", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_data", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WFD_searchNu", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_calNu", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_comboNu", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_page", "background", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_pageS", "background", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WFD_addsample", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addsave", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addon", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addoff", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid.grd_WF_NonSelect>#body", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.St_Activ_Txt", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_Activ_Txt_qstd", "background", obj, ["normal", "pushed", "focused", "mouseover"]);
    this._addCss("Tab.Maintab", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_font("bold antialias 11 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_MainTitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_databg", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_titbg", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Static.sta_WF_MainTitle", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_red", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_gray", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_gray", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_green", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_red", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_recround_gray", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LFclose", "color", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_LFopen", "color", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFclose", "color", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFopen", "color", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_help", "color", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Static.sta_GridCondtion_bg", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgL", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgR", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_gray", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_green", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_blue", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_index_white", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_bottom_point_red", "color", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_bottom_point_bg", "color", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "color", obj, ["mouseover"]);
    this._addCss("Div.div_bottom_point_black_bg", "color", obj, ["normal"]);
    this._addCss("Div.div_bottom_point_gray_bg", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WFD_tree", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss(".grd_WF_SummaryBody1", "color", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody2", "color", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody3", "color", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody4", "color", obj, ["normal"]);
    this._addCss("TextArea.txt_POP_messageTxt", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Tab.Maintab", "color", obj, ["focused"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Static.sta_WF_MainTitle", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFGC_tatal", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfoN", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPointN", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whitepink", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whiteblue", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_bluewhite", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_gray", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_green", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_blue", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_red", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_recround_gray", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LFclose", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover"]);
    this._addCss("Button.btn_WF_LFopen", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover"]);
    this._addCss("Button.btn_WF_TFclose", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover"]);
    this._addCss("Button.btn_WF_TFopen", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover"]);
    this._addCss("Button.btn_WF_addrow", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_delrow", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_search", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_searchNu", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_calNu", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_combo", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFD_comboNu", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFD_delete", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Button.btn_WF_first", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_end", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_prev", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_next", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_search", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_add", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addplus", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addminus", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addsample", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFD_addsave", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFD_addon", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Button.btn_WFD_addoff", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_open", "padding", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WFSA_close", "padding", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_WFSA_bg2", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Detail_bg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_this", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_prev", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_next", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_SQ_STti", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_SQ_STBtxt", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_bottom_point_red", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_bottom_point_bg", "padding", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "padding", obj, ["mouseover"]);
    this._addCss("Div.div_bottom_point_black_bg", "padding", obj, ["normal"]);
    this._addCss("Div.div_bottom_point_gray_bg", "padding", obj, ["normal"]);
    this._addCss("Grid.grd_WFD_tree", "padding", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_srcSmall", "padding", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Button.btn_WF_tabbtn", "padding", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Button.btn_WF_tabbtnS", "padding", obj, ["mouseover"]);
    this._addCss("Static.St_Activ_Txt", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.sta_WF_sessionOut", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Activity_box2_qstd", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Activity_box2", "padding", obj, ["pushed"]);
    this._addCss("Static.St_Activ_Txt_qstd", "padding", obj, ["normal", "pushed", "focused", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "padding", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "padding", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "padding", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "padding", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/img_PWF_bulet.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_Title", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 10 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_Title", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_tit", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_subtit", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_addrow", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_Activity_box2_qstd", "font", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "font", obj, ["pushed"]);
    this._addCss("Div.div_Activity_box2_qstd", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.St_Activ_Txt_qstd", "font", obj, ["normal", "pushed", "focused", "mouseover"]);
    this._addCss("Tab.Maintab", "font", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#313131ff");
    this._addCss("Static.sta_WF_Title", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("-1 0 -1 16");
    this._addCss("Static.sta_WF_Title", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_subtitle.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_subtitle", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_subtitle", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_sub2title", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_local", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_green", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_blue", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_red", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_gray", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_greenpink", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whitepink", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whiteblue", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_bluewhite", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_gray", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_green", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_blue", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_red", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_recround_gray", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_delrow", "font", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_page", "font", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_pageS", "font", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_SQ_STti", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_SQ_STBtxt", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Mywork_tibg", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_this", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_label", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelCen", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelR", "font", obj, ["normal", "mouseover"]);
    this._addCss(".grd_WF_SubTitle", "font", obj, ["normal"]);
    this._addCss(".grd_WF_WeekTitle", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_total", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_srcSmall", "font", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_tabbtn", "font", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_tabbtnS", "font", obj, ["mouseover", "normal", "focused", "pushed", "selected"]);
    this._addCss("Static.sta_POP_messageTi", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_pop_title", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.St_POPTi_Blue", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "font", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "font", obj, ["selected"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step01", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step02", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step03", "font", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_Audit_tit", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#4c4c4cff");
    this._addCss("Static.sta_WF_subtitle", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 -1 16");
    this._addCss("Static.sta_WF_subtitle", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_sub2title.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_sub2title", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_local", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 8");
    this._addCss("Static.sta_WF_sub2title", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_local", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#40454f");
    this._addCss("Static.sta_WF_sub2title", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_local", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_label", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Static.sta_WFGC_tatal", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_WF_msg_info.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_DiscInfo", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("Static.sta_WF_DiscInfo", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfoN", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPoint", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPointN", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_blue", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_red", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_green", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_gray", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_gold", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_Guidetxt", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#516c7f");
    this._addCss("Static.sta_WF_DiscInfo", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfoN", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 19");
    this._addCss("Static.sta_WF_DiscInfo", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPoint", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("4");
    this._addCss("Static.sta_WF_DiscInfo", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscInfoN", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPoint", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPointN", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DescGuide", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_WF_msg_point.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_DiscPoint", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#da510f");
    this._addCss("Static.sta_WF_DiscPoint", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_DiscPointN", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_WF_dash_desc.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_DescGuide", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Static.sta_WF_DescGuide", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_greenpink", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whitepink", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whiteblue", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_subtit", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_tit", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result_data", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Custom", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Custom_fix", "color", obj, ["normal", "mouseover", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_WF_Search", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Save", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Delete", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Excel", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_New", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Modify", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Spopup", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Complete", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_page", "color", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_first", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_end", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_prev", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_next", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleT", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleB", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_search", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_add", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addplus", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addminus", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Static.sta_Weekrep_databg", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Static.sta_WF_CR_S", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_C", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_A", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_R", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_P", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_WF_DescGuide", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("9");
    this._addCss("Static.sta_WF_explain_blue", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_red", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_green", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_gray", "linespace", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_explain_gold", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#216eb2ff");
    this._addCss("Static.sta_WF_explain_blue", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LFclose", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_LFopen", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_TFclose", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_TFopen", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_help", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ff3c00ff");
    this._addCss("Static.sta_WF_explain_red", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#89bc00ff");
    this._addCss("Static.sta_WF_explain_green", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#808080ff");
    this._addCss("Static.sta_WF_explain_gray", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ddab32ff");
    this._addCss("Static.sta_WF_explain_gold", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_blue.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_blue", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_green.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_green", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_white.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_pink", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_gray.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_gray", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_violet.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_violet", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_red.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_red", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_red2.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_red2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_circle_orange.png","","0","0","50","50","true");
    this._addCss("Static.sta_WF_circle_orange", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ccccccff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_circle_line", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Static.sta_WF_circle_title", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_circle_data", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_circle_dataB", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_circle_data_small", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_circle_data_smallB", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whitepink", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_whiteblue", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_bluewhite", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_gray", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_green", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_blue", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_red", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_recround_gray", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_tit", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_subtit", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_LFclose", "align", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_LFopen", "align", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFclose", "align", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFopen", "align", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_page", "align", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_pageS", "align", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_first", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_end", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_prev", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_next", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleT", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleB", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_search", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_add", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addplus", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addminus", "align", obj, ["normal", "selected", "focused"]);
    this._addCss("Static.sta_WFSA_GuideTi", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_SQ_STti", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_SQ_STBtxt", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Mywork_tibg", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_this", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_day", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_Weekrep_databg", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_titbg", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelCen", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelCen", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_bottom_point_red", "align", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_bottom_point_bg", "align", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "align", obj, ["mouseover"]);
    this._addCss("Div.div_bottom_point_black_bg", "align", obj, ["normal"]);
    this._addCss("Div.div_bottom_point_gray_bg", "align", obj, ["normal"]);
    this._addCss("Grid.grd_WF_NonSelect>#body", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid.grd_WFD_tree", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#body", "align", obj, ["normal", "focused", "disabled"]);
    this._addCss("Button.btn_srcSmall", "align", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_tabbtn", "align", obj, ["normal", "focused"]);
    this._addCss("TextArea.txt_POP_messageTxt", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Static.St_Activ_Txt", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuYellow", "align", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuRed", "align", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "align", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "align", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "align", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "align", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Div.div_Activity_box2_qstd", "align", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Activity_box2", "align", obj, ["pushed"]);
    this._addCss("Static.St_Activ_Txt_qstd", "align", obj, ["normal", "pushed", "focused", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step02", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_Audit_tit", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 8 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_circle_title", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_circle_dataB", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("-2");
    this._addCss("Static.sta_WF_circle_title", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 7 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_circle_data_small", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 7 malgun gothic, Tahoma, Arial");
    this._addCss("Static.sta_WF_circle_data_smallB", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_green.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_green", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#004ba7ff");
    this._addCss("Static.sta_WF_arrow_green", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 2 8");
    this._addCss("Static.sta_WF_arrow_green", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_blue", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_red", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_gray", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_greenpink", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_blue.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_blue", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_bluewhite", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Static.sta_WF_arrow_blue", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_arrow_bluewhite", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_blue", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_tit", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Mywork_tibg", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_this", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_titbg", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_srcSmall", "color", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_tabbtn", "color", obj, ["normal", "focused", "pushed", "selected", "disabled"]);
    this._addCss("Button.btn_WF_tabbtnS", "color", obj, ["normal", "focused", "pushed", "selected"]);
    this._addCss("Static.St_RuYellow", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_Blue", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "color", obj, ["mouseover", "pushed"]);
    this._addCss("Button.btn_Activity_box2_qstd", "color", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "color", obj, ["pushed"]);
    this._addCss("Div.div_Activity_box2_qstd", "color", obj, ["mouseover"]);
    this._addCss("Static.St_Activ_Txt_qstd", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "color", obj, ["selected"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "color", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "color", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "color", obj, ["selected"]);
    this._addCss("Button.btn_WF_Audit_step01", "color", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step02", "color", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step03", "color", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_WF_Audit_tit", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_red.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_red", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_gray.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_gray", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_greenpink.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_greenpink", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_whitepink.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_whitepink", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_whiteblue.png","stretch","13","5","0","50","true");
    this._addCss("Static.sta_WF_arrow_whiteblue", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_rec_gray", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_rec_red", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_Guidetxt", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_this", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_prev", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_next", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_databg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_NonSelect", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_WF_tabbtn", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_tabbtnS", "background", obj, ["mouseover"]);
    this._addCss("PopupDiv.pdiv_popup_box", "background", obj, ["normal"]);
    this._addCss("Div.div_popup_box", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "background", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "background", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Div.div_WF_Audit_progbg02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#c2c5ccff","");
    this._addCss("Static.sta_WF_rec_gray", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_recround_gray", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#bde1aaff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_rec_green", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#9ec58bff","");
    this._addCss("Static.sta_WF_rec_green", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#295e9fff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_rec_blue", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_tit", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_Activity_box2_qstd", "background", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "background", obj, ["pushed"]);
    this._addCss("Div.div_Activity_box2_qstd", "background", obj, ["mouseover"]);
    this._addCss("Static.sta_WF_Audit_tit", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#295e9fff","");
    this._addCss("Static.sta_WF_rec_blue", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#e80f0fff","");
    this._addCss("Static.sta_WF_rec_red", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f0f6ffff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_recround_gray", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WF_Dash_status_bg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","14","14","true","true","true","true");
    this._addCss("Static.sta_WF_recround_gray", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 8 2 8");
    this._addCss("Static.sta_WF_Dash_tit", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_subtit", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_Dash_result", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_databg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_titbg", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f1f2f5ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Dash_subtit", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","1","solid","#cececeff","","0","none","#808080ff","","0","none","#808080ff","");
    this._addCss("Static.sta_WF_Dash_subtit", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#dbdbdbff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_Dash_result", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 12 malgun gothic, Tahoma, Arialrntpaddingttt: 0 8 2 8");
    this._addCss("Static.sta_WF_Dash_result_tit", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arialrntpaddingttt: 0 8 2 8");
    this._addCss("Static.sta_WF_Dash_result_data", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_right.png","","0","0","100","50","true");
    this._addCss("Div.div_WF_rec_arrow_bg", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#cececeff","");
    this._addCss("Div.div_WF_Dash_status_bg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_LFclose", "background", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_LFopen", "background", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFclose", "background", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFopen", "background", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_help", "background", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_first", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_end", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_prev", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_next", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_search", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_add", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addplus", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addminus", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Div.div_WFSA_bg", "background", obj, ["normal"]);
    this._addCss("Div.div_Activity_box", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Activity_box2_qstd", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","#d8dadeff","","1","solid","#d8dadeff","","1","solid","#d8dadeff","","0","none","#d8dadeff","");
    this._addCss("Button.btn_WF_LFclose", "border", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_LFopen", "border", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button.btn_WF_LFclose", "cursor", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_LFopen", "cursor", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFclose", "cursor", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFopen", "cursor", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_help", "cursor", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WFD_searchNu", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_calNu", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_comboNu", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_page", "cursor", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_pageS", "cursor", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_first", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_end", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_prev", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_next", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleT", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleB", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_search", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_add", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addplus", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addminus", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_addsample", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_addsave", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_addon", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_addoff", "cursor", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFSA_open", "cursor", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WFSA_close", "cursor", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Static.sta_SQ_STBtxt", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_srcSmall", "cursor", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_tabbtn", "cursor", obj, ["normal", "focused"]);
    this._addCss("Div.div_Activity_box2", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Div.div_Activity_box2S", "cursor", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Static.St_Activ_Txt", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuYellow", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuRed", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Button.btn_Activity_box2_qstd", "cursor", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2_qstd", "cursor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.St_Activ_Txt_qstd", "cursor", obj, ["normal", "pushed", "focused", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "cursor", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "cursor", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "cursor", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "cursor", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Div.div_WF_Audit_progbg01", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WF_Audit_progbg02", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_step01", "cursor", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WF_Audit_step02", "cursor", obj, ["normal", "selected", "disabled", "focused"]);
    this._addCss("Button.btn_WF_Audit_step03", "cursor", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f5f5f5");
    this._addCss("Button.btn_WF_LFclose", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_LFopen", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFclose", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_TFopen", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_help", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_first", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_end", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_prev", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_next", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_search", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_add", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_addplus", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_addminus", "gradation", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LFcloseN.png')");
    this._addCss("Button.btn_WF_LFclose", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button.btn_WF_LFclose", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_LFopen", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFclose", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFopen", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_addrow", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_delrow", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_search", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_searchNu", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_calNu", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_combo", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_comboNu", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_delete", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_first", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_end", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_prev", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_next", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_search", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_add", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addplus", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addminus", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addsample", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addsave", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addon", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WFD_addoff", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfefe 0,100 #f5f5f5");
    this._addCss("Button.btn_WF_LFclose", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_LFopen", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_TFclose", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_TFopen", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_help", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_first", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_end", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_prev", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_next", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleT", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleB", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_add", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addplus", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addminus", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_search", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LFcloseO.png')");
    this._addCss("Button.btn_WF_LFclose", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#0c2d4e");
    this._addCss("Button.btn_WF_LFclose", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_LFopen", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_TFclose", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_TFopen", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_help", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_first", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_prev", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_next", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_end", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleT", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleB", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_add", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addplus", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addminus", "color", obj, ["pushed"]);
    this._addCss("Button.btn_WF_search", "color", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d3d3d3 0,100 #fcfcfc [15% #fcfcfc]");
    this._addCss("Button.btn_WF_LFclose", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_LFopen", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_TFclose", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_TFopen", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_help", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_first", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_prev", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_next", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_end", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleT", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleB", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_add", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addplus", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addminus", "gradation", obj, ["pushed"]);
    this._addCss("Button.btn_WF_search", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LFcloseP.png')");
    this._addCss("Button.btn_WF_LFclose", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("1 0 -1 0");
    this._addCss("Button.btn_WF_LFclose", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WF_LFopen", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WF_TFclose", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WF_TFopen", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addrow", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WF_delrow", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_combo", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_comboNu", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_delete", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_addsample", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_addsave", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_addon", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_addoff", "padding", obj, ["pushed"]);
    this._addCss("Button.btn_srcSmall", "padding", obj, ["pushed", "selected"]);
    this._addCss("Button.btn_WF_tabbtn", "padding", obj, ["pushed", "selected"]);
    this._addCss("Button.btn_WF_tabbtnS", "padding", obj, ["normal", "focused", "pushed", "selected"]);

    obj = new nexacro.Style_value("60");
    this._addCss("Button.btn_WF_LFclose", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_LFopen", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_TFclose", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_TFopen", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_help", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LFopenN.png')");
    this._addCss("Button.btn_WF_LFopen", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LFopenO.png')");
    this._addCss("Button.btn_WF_LFopen", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_LFopenP.png')");
    this._addCss("Button.btn_WF_LFopen", "image", obj, ["pushed"]);

    obj = new nexacro.Style_border("0","none","#d8dadeff","","0","none","#d8dadeff","","1","solid","#d8dadeff","","1","solid","#d8dadeff","");
    this._addCss("Button.btn_WF_TFclose", "border", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_TFopen", "border", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_help", "border", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TFcloseN.png')");
    this._addCss("Button.btn_WF_TFclose", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TFcloseO.png')");
    this._addCss("Button.btn_WF_TFclose", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TFcloseP.png')");
    this._addCss("Button.btn_WF_TFclose", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TFopenN.png')");
    this._addCss("Button.btn_WF_TFopen", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TFopenO.png')");
    this._addCss("Button.btn_WF_TFopen", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_TFopenP.png')");
    this._addCss("Button.btn_WF_TFopen", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_helpN.png')");
    this._addCss("Button.btn_WF_help", "image", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_align("lefttext middle");
    this._addCss("Button.btn_WF_help", "imagealign", obj, ["normal", "selected", "focused", "disabled", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Custom", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom_fix", "imagealign", obj, ["pushed", "normal", "mouseover", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_WF_Search", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Save", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Excel", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_New", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Modify", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Spopup", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Complete", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("0 8 0 8");
    this._addCss("Button.btn_WF_help", "padding", obj, ["normal", "selected", "focused", "disabled", "mouseover"]);
    this._addCss("Static.sta_Mywork_tibg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_this", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_day", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Static.sta_Detail_bg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelP", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_label", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelCen", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelR", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bg", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgL", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgR", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_helpO.png')");
    this._addCss("Button.btn_WF_help", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_helpP.png')");
    this._addCss("Button.btn_WF_help", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("1 8 -1 8");
    this._addCss("Button.btn_WF_help", "padding", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Custom", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom_fix", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_Search", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Save", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Excel", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_New", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Modify", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Spopup", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Complete", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Div.div_Detail_bg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_bg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WFD_tree", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "focused", "disabled", "mouseover"]);
    this._addCss("TextArea.txt_POP_messageTxt", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_etcN.png')");
    this._addCss("Button.btn_WF_Custom", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom_fix", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("0 10 3 10");
    this._addCss("Button.btn_WF_Custom", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Custom_fix", "padding", obj, ["pushed", "normal", "mouseover", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_WF_Search", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Save", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Delete", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Excel", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_New", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Modify", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Spopup", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_Complete", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#eeeeeeff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Custom", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Custom_fix", "background", obj, ["normal", "mouseover", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_WF_Search", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Save", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Delete", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Excel", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_New", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Modify", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Spopup", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Complete", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addrow", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_delrow", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffffff 0,100 #eeeeeeff");
    this._addCss("Button.btn_WF_Custom", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Custom_fix", "gradation", obj, ["normal", "mouseover", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_WF_Search", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Save", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Delete", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Excel", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_New", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Modify", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Spopup", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Complete", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addrow", "gradation", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_delrow", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Button.btn_WF_Custom", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Custom_fix", "border", obj, ["normal", "mouseover", "disabled", "selected", "focused"]);
    this._addCss("Button.btn_WF_Search", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Save", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Delete", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Excel", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_New", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Modify", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Spopup", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Complete", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addrow", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_delrow", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_etcO.png')");
    this._addCss("Button.btn_WF_Custom", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Custom_fix", "image", obj, ["normal", "mouseover", "disabled", "selected", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_search_bkN.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_search_bkO.png')");
    this._addCss("Button.btn_WF_Search", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_saveN.png')");
    this._addCss("Button.btn_WF_Save", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_saveO.png')");
    this._addCss("Button.btn_WF_Save", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_deleteN.png')");
    this._addCss("Button.btn_WF_Delete", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_deleteO.png')");
    this._addCss("Button.btn_WF_Delete", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_excelN.png')");
    this._addCss("Button.btn_WF_Excel", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_excelO.png')");
    this._addCss("Button.btn_WF_Excel", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_newN.png')");
    this._addCss("Button.btn_WF_New", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_newO.png')");
    this._addCss("Button.btn_WF_New", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_modifyN.png')");
    this._addCss("Button.btn_WF_Modify", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_modifyO.png')");
    this._addCss("Button.btn_WF_Modify", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_spopupN.png')");
    this._addCss("Button.btn_WF_Spopup", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_spopupO.png')");
    this._addCss("Button.btn_WF_Spopup", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_completeN.png')");
    this._addCss("Button.btn_WF_Complete", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_completeO.png')");
    this._addCss("Button.btn_WF_Complete", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_addrow.png')");
    this._addCss("Button.btn_WF_addrow", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_addrow_O.png')");
    this._addCss("Button.btn_WF_addrow", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_delrow.png')");
    this._addCss("Button.btn_WF_delrow", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_delrow_O.png')");
    this._addCss("Button.btn_WF_delrow", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_TF_searchN.png");
    this._addCss("Button.btn_WFD_search", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_searchNu", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_TF_searchO.png");
    this._addCss("Button.btn_WFD_search", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WFD_searchNu", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_TF_searchP.png");
    this._addCss("Button.btn_WFD_search", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_searchNu", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_TF_searchD.png");
    this._addCss("Button.btn_WFD_search", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WFD_searchNu", "image", obj, ["disabled"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Button.btn_WFD_searchNu", "shadow", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Button.btn_WFD_calNu", "shadow", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Button.btn_WFD_comboNu", "shadow", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Button.btn_WFD_addsample", "shadow", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Button.btn_WFD_addsave", "shadow", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Button.btn_WFD_addon", "shadow", obj, ["normal", "selected", "focused", "mouseover"]);
    this._addCss("Button.btn_WFD_addoff", "shadow", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/cal_ico_N.png");
    this._addCss("Button.btn_WFD_calNu", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/cal_ico_O.png");
    this._addCss("Button.btn_WFD_calNu", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/cal_ico_P.png");
    this._addCss("Button.btn_WFD_calNu", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/cal_ico_D.png");
    this._addCss("Button.btn_WFD_calNu", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/cmb_drop_N.png");
    this._addCss("Button.btn_WFD_combo", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WFD_comboNu", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/cmb_drop_O.png");
    this._addCss("Button.btn_WFD_combo", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WFD_comboNu", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/cmb_drop_P.png");
    this._addCss("Button.btn_WFD_combo", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WFD_comboNu", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/cmb_drop_D.png");
    this._addCss("Button.btn_WFD_combo", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WFD_comboNu", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WFD_modify.png");
    this._addCss("Button.btn_WFD_delete", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Button.btn_WF_page", "bordertype", obj, ["normal", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_pageS", "bordertype", obj, ["normal", "focused", "mouseover", "pushed", "selected"]);
    this._addCss("Grid.grd_WF_NonSelect", "bordertype", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_WFD_tree", "bordertype", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss("Button.btn_WF_page", "padding", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Button.btn_WF_pageS", "padding", obj, ["normal", "focused", "mouseover"]);
    this._addCss("Static.St_RuYellow", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuRed", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#216eb2");
    this._addCss("Button.btn_WF_page", "color", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_first", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_end", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_prev", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_next", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleT", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleB", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_add", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addplus", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addminus", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_search", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_font("underline bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Button.btn_WF_page", "font", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_padding("2 0 -1 0");
    this._addCss("Button.btn_WF_page", "padding", obj, ["pushed", "selected"]);
    this._addCss("Button.btn_WF_pageS", "padding", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_color("#a2a2a2");
    this._addCss("Button.btn_WF_page", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#0e55a1");
    this._addCss("Button.btn_WF_pageS", "color", obj, ["normal", "focused", "mouseover", "pushed", "selected", "disabled"]);
    this._addCss("Static.sta_WF_total", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#b7b7b7ff","");
    this._addCss("Button.btn_WF_first", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_end", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_prev", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_next", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_search", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_add", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_addplus", "border", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Button.btn_WF_addminus", "border", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("Button.btn_WF_first", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_end", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_prev", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_next", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_search", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_add", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addplus", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_addminus", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_srcSmall", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "bordertype", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "bordertype", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Div.div_WF_Audit_progbg02", "bordertype", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2LN.png");
    this._addCss("Button.btn_WF_first", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_end", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_prev", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_next", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_search", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_add", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addplus", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_addminus", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#216eb2ff","");
    this._addCss("Button.btn_WF_first", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_end", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_prev", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_next", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleT", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleB", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_add", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addplus", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addminus", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_search", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2LO.png");
    this._addCss("Button.btn_WF_first", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_end", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_prev", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_next", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_add", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addplus", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_addminus", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_search", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#0f4e87ff","");
    this._addCss("Button.btn_WF_first", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_prev", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_next", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_end", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleT", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleB", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_add", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addplus", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addminus", "border", obj, ["pushed"]);
    this._addCss("Button.btn_WF_search", "border", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2LP.png");
    this._addCss("Button.btn_WF_first", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_prev", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_next", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_end", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_add", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addplus", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_addminus", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_search", "image", obj, ["pushed"]);

    obj = new nexacro.Style_color("##999999ff");
    this._addCss("Button.btn_WF_first", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_prev", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_next", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_end", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_add", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_addplus", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_addminus", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WF_search", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2LD.png");
    this._addCss("Button.btn_WF_first", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_prev", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_next", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_end", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_add", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_addplus", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_addminus", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_search", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("50");
    this._addCss("Button.btn_WF_first", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_prev", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_next", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_end", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleT", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleB", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_add", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_addplus", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_addminus", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_search", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WFD_addoff", "opacity", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2RN.png");
    this._addCss("Button.btn_WF_end", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2RO.png");
    this._addCss("Button.btn_WF_end", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2RP.png");
    this._addCss("Button.btn_WF_end", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllaw2RD.png");
    this._addCss("Button.btn_WF_end", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawLN.png");
    this._addCss("Button.btn_WF_prev", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawLO.png");
    this._addCss("Button.btn_WF_prev", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawLP.png");
    this._addCss("Button.btn_WF_prev", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawLD.png");
    this._addCss("Button.btn_WF_prev", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawRN.png");
    this._addCss("Button.btn_WF_next", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawRO.png");
    this._addCss("Button.btn_WF_next", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawRP.png");
    this._addCss("Button.btn_WF_next", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_pageAllawRD.png");
    this._addCss("Button.btn_WF_next", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleLN.png");
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleLO.png");
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleLP.png");
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleLD.png");
    this._addCss("Button.btn_WF_shuttleL", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleL_Txt", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleRN.png");
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["normal", "selected", "focused"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleRO.png");
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleRP.png");
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["pushed"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleRD.png");
    this._addCss("Button.btn_WF_shuttleR", "image", obj, ["disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleTN.png");
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleTO.png");
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleTP.png");
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleTD.png");
    this._addCss("Button.btn_WF_shuttleT", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleBN.png");
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleBO.png");
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleBP.png");
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_shuttleBD.png");
    this._addCss("Button.btn_WF_shuttleB", "image", obj, ["disabled"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Button.btn_WF_shuttleL_Txt", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Static.sta_WF_sessionOut", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Button.btn_WF_shuttleL_Txt", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("8 0 8 0");
    this._addCss("Button.btn_WF_shuttleL_Txt", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Button.btn_WF_shuttleR_Txt", "padding", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/img_filesample.png");
    this._addCss("Button.btn_WFD_addsample", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/img_filesave.png");
    this._addCss("Button.btn_WFD_addsave", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/img_fileon.png");
    this._addCss("Button.btn_WFD_addon", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/img_fileoff.png");
    this._addCss("Button.btn_WFD_addoff", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addN.png");
    this._addCss("Button.btn_WF_add", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addO.png");
    this._addCss("Button.btn_WF_add", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addP.png");
    this._addCss("Button.btn_WF_add", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addD.png");
    this._addCss("Button.btn_WF_add", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addplusN.png");
    this._addCss("Button.btn_WF_addplus", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addplusO.png");
    this._addCss("Button.btn_WF_addplus", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addplusP.png");
    this._addCss("Button.btn_WF_addplus", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addplusD.png");
    this._addCss("Button.btn_WF_addplus", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addminusN.png");
    this._addCss("Button.btn_WF_addminus", "image", obj, ["normal", "selected", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addminusO.png");
    this._addCss("Button.btn_WF_addminus", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addminusP.png");
    this._addCss("Button.btn_WF_addminus", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WF_addminusD.png");
    this._addCss("Button.btn_WF_addminus", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Button.btn_WFSA_open", "background", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WFSA_close", "background", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Static.sta_SQ_STBtxt", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_total", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_pageRecent", "background", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Activity_box2", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#577ca5ff","");
    this._addCss("Button.btn_WFSA_open", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WFSA_close", "border", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WFSA_searchopenN.png");
    this._addCss("Button.btn_WFSA_open", "image", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_align("right bottom");
    this._addCss("Button.btn_WFSA_open", "imagealign", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WFSA_close", "imagealign", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_shadow("outer 0,0 0 #00000026");
    this._addCss("Button.btn_WFSA_open", "shadow", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WFSA_close", "shadow", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl2", "shadow", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3", "shadow", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "shadow", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "shadow", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);
    this._addCss("Button.btn_WF_Audit_step01", "shadow", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_Audit_step02", "shadow", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_Audit_step03", "shadow", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_value("theme://images/btn_WFSA_searchopenO.png");
    this._addCss("Button.btn_WFSA_open", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WFSA_searchopenP.png");
    this._addCss("Button.btn_WFSA_open", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://images/btn_WFSA_searchcloseN.png");
    this._addCss("Button.btn_WFSA_close", "image", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_value("theme://images/btn_WFSA_searchcloseO.png");
    this._addCss("Button.btn_WFSA_close", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://images/btn_WFSA_searchcloseP.png");
    this._addCss("Button.btn_WFSA_close", "image", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#cececeff","");
    this._addCss("Div.div_WFSA_bg", "border", obj, ["normal"]);
    this._addCss("Div.div_WFSA_bg3", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WFBA", "border", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f8f8f8ff 0,100 #f8f8f8ff [15% #f8f8f8ff]");
    this._addCss("Div.div_WFSA_bg", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_shadow("outer 0,1 1 #ebebebff");
    this._addCss("Div.div_WFSA_bg", "shadow", obj, ["normal"]);
    this._addCss("Div.div_WFSA_bg3", "shadow", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f5f8f9ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WFSA_bg2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#b6d2d6ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.sta_WFSA_bg2", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fdf8f0ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFSA_bg2", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ded0bcff","");
    this._addCss("Div.div_WFSA_bg2", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_GuideTi", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_Guidetxt", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFSA_bg3", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_WFSA_labelB.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFSA_label", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 Malgun Gothic, Tahoma, Arial");
    this._addCss("Static.sta_WFSA_label", "font", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFSA_GuideTi", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("-1 0 0 8");
    this._addCss("Static.sta_WFSA_label", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f5ebdcff","","","0","0","0","0","true");
    this._addCss("Static.sta_WFSA_GuideTi", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#84715c");
    this._addCss("Static.sta_WFSA_GuideTi", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("antialias 9 Malgun Gothic, Tahoma, Arial");
    this._addCss("Static.sta_WFSA_Guidetxt", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Static.sta_WFSA_Guidetxt", "color", obj, ["normal", "mouseover"]);
    this._addCss("Grid.grd_WF_NonSelect", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid.grd_WF_NonSelect>#body", "color", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss(".grd_WF_SubTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("8 8 8 8");
    this._addCss("Static.sta_WFSA_Guidetxt", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("8");
    this._addCss("Static.sta_WFSA_Guidetxt", "linespace", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#dcdcdcff","");
    this._addCss("Div.div_Detail_bg", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_bg", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelP", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_label", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelCen", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelR", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_label", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelR", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#295e9fff","","2","solid","#295e9fff","","2","solid","#295e9fff","","2","solid","#295e9fff","");
    this._addCss("Div.div_Mywork_this", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#ffffffff","");
    this._addCss("Div.div_Mywork_prev", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_next", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("40");
    this._addCss("Div.div_Mywork_prev", "opacity", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_Mywork_next", "opacity", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#e7f0f8ff","","","0","0","0","0","true");
    this._addCss("Div.div_SQ_STDBox", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#90b8e1ff","");
    this._addCss("Div.div_SQ_STDBox", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#cddff1ff","","","0","0","0","0","true");
    this._addCss("Static.sta_SQ_STti", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#90b8e1ff","","1","solid","#90b8e1ff","","0","none","#90b8e1ff","","0","none","#90b8e1ff","");
    this._addCss("Static.sta_SQ_STti", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#295e9f");
    this._addCss("Static.sta_SQ_STti", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_tabbtn", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_tabbtnS", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_border("0","none","#90b8e1ff","","1","solid","#90b8e1ff","","0","none","#90b8e1ff","","0","none","#90b8e1ff","");
    this._addCss("Static.sta_SQ_STBtxt", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#4275b4");
    this._addCss("Static.sta_SQ_STBtxt", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#8cb4ddff","","","0","0","0","0","true");
    this._addCss("Static.sta_Mywork_tibg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_tabbtn", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_border("1","solid","#5791cdff","");
    this._addCss("Static.sta_Mywork_tibg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#295e9fff","","","0","0","0","0","true");
    this._addCss("Static.sta_Detail_this", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_titbg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "background", obj, ["selected"]);

    obj = new nexacro.Style_border("0","none","#dcdcdcff","");
    this._addCss("Static.sta_Detail_this", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Weekrep_titbg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#c1d2e1ff","","","0","0","0","0","true");
    this._addCss("Static.sta_Detail_day", "background", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#216eb2ff","","0","none","#dcdcdcff","","0","none","#dcdcdcff","","0","none","#dcdcdcff","");
    this._addCss("Static.sta_Detail_day", "border", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_color("#184a87");
    this._addCss("Static.sta_Detail_day", "color", obj, ["normal", "mouseover", "disabled"]);

    obj = new nexacro.Style_background("#e4e4e4ff","","","0","0","0","0","true");
    this._addCss("Static.sta_Detail_day", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#666666ff","","0","none","#dcdcdcff","","0","none","#dcdcdcff","","0","none","#dcdcdcff","");
    this._addCss("Static.sta_Detail_day", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Static.sta_Detail_day", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#5791cdff","");
    this._addCss("Static.sta_Weekrep_databg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#444444ff");
    this._addCss("Static.sta_Detail_bg", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelP", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_label", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelCen", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelR", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_label", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelCen", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelR", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f4f5f5ff","theme://images/bg_requiredT.png","no-repeat","7","7","0","0","true");
    this._addCss("Static.sta_Detail_labelP", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f4f5f5ff","","","0","0","0","0","true");
    this._addCss("Static.sta_Detail_label", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelCen", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_Detail_labelR", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Static.sta_Detail_labelR", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelR", "align", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_step03", "align", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#999999ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WF_schline", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Button.btn_srcSmall", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_tabbtn", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","#d9d9d9ff","");
    this._addCss("Static.sta_WF_schline", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#ebf4ffff","","","0","0","0","0","true");
    this._addCss("Static.sta_PopDetail_label", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelR", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 4 0 4");
    this._addCss("Static.sta_PopDetail_label", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelCen", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_PopDetail_labelR", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#f4f4f4ff","","","0","0","0","0","true");
    this._addCss("Static.sta_PopDetail_labelCen", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bg", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgL", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bgR", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#999999ff","","1","solid","#cececeff","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Static.sta_PopDetail_labelCen", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_GridCondtion_bg", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#999999ff","","0","none","","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Static.sta_GridCondtion_bgL", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#999999ff","","1","solid","#cececeff","","1","solid","#cececeff","","0","none","","");
    this._addCss("Static.sta_GridCondtion_bgR", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_index_gray.png","","0","0","0","50","true");
    this._addCss("Static.sta_index_gray", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_index_green.png","","0","0","0","50","true");
    this._addCss("Static.sta_index_green", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_index_blue.png","","0","0","0","50","true");
    this._addCss("Static.sta_index_blue", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_index_white.png","","0","0","0","50","true");
    this._addCss("Static.sta_index_white", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_arrow_bottom_red.png","","0","0","50","0","true");
    this._addCss("Static.sta_bottom_point_red", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_arrow_red_dash.png","repeat-y","0","0","50","0","true");
    this._addCss("Div.div_bottom_point_bg", "background", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_arrow_black_dash.png","repeat-y","0","0","50","0","true");
    this._addCss("Div.div_bottom_point_black_bg", "background", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/bg_arrow_gray_dash.png","repeat-y","0","0","50","0","true");
    this._addCss("Div.div_bottom_point_gray_bg", "background", obj, ["normal"]);
    this._addCss("Static.div_bottom_point_bg", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#999999ff","","1","solid","#cececeff","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Grid.grd_WF_InGrd", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d0d3dcff","","1","solid","#d0d3dcff","","1","solid","#d0d3dcff","","1","solid","#d0d3dcff","");
    this._addCss("Grid.grd_WF_NonSelect", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("Grid.grd_WF_NonSelect", "focusborder", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_line("1","dotted","#a5b6b6ff","");
    this._addCss("Grid.grd_WF_NonSelect", "treelinetype", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellalign", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellbackground2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d0d3dcff","");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellline", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_value("normal 0 0");
    this._addCss("Grid.grd_WF_NonSelect>#body", "celllinetype", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellcolor2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("2 4 2 4");
    this._addCss("Grid.grd_WF_NonSelect>#body", "cellpadding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("transparent");
    this._addCss("Grid.grd_WF_NonSelect>#body", "selectbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("0","none","#d0d3dcff","","0","none","#d0d3dcff","","1","solid","#d0d3dcff","","0","none","#d0d3dcff","");
    this._addCss("Grid.grd_WF_NonSelect>#body", "selectborder", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Grid.grd_WF_NonSelect>#body", "selectfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid.grd_WF_NonSelect>#body", "selectcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#d0d3dcff","");
    this._addCss("Grid.grd_WF_NonSelect>#body", "selectline", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#216eb2ff","","1","solid","#cececeff","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Grid.grd_WFD_tree", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_close.png')");
    this._addCss("Grid.grd_WFD_tree", "treeclosebuttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_WFD_tree", "treecollapseimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_WFD_tree", "treeexpandimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_item.png')");
    this._addCss("Grid.grd_WFD_tree", "treeitemimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_open.png')");
    this._addCss("Grid.grd_WFD_tree", "treeopenbuttonimage", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_background("#f1f1f1ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ebebebff","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("#e4eaf8ff");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ebebebff","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#00389aff");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#ebebebff","");
    this._addCss("Grid>#body", "selectline", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("Grid>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("Grid>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#e2f1cbff","","","0","0","0","0","true");
    this._addCss(".grd_WF_SummaryBody1", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss(".grd_WF_SummaryBody1", "color2", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody2", "color2", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody3", "color2", obj, ["normal"]);
    this._addCss(".grd_WF_SummaryBody4", "color2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d1dfbcff","","0","none","","","0","none","","","0","none","","");
    this._addCss(".grd_WF_SummaryBody1", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d1dfbcff","");
    this._addCss(".grd_WF_SummaryBody1", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d1dfbcff","");
    this._addCss(".grd_WF_SummaryBody1", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#d6f0efff","","","0","0","0","0","true");
    this._addCss(".grd_WF_SummaryBody2", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6deddff","","0","none","","","0","none","","","0","none","","");
    this._addCss(".grd_WF_SummaryBody2", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6deddff","");
    this._addCss(".grd_WF_SummaryBody2", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c6deddff","");
    this._addCss(".grd_WF_SummaryBody2", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#dce1f0ff","","","0","0","0","0","true");
    this._addCss(".grd_WF_SummaryBody3", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccd0deff","","0","none","","","0","none","","","0","none","","");
    this._addCss(".grd_WF_SummaryBody3", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccd0deff","");
    this._addCss(".grd_WF_SummaryBody3", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccd0deff","");
    this._addCss(".grd_WF_SummaryBody3", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#ecdaedff","","","0","0","0","0","true");
    this._addCss(".grd_WF_SummaryBody4", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dacadbff","","0","none","","","0","none","","","0","none","","");
    this._addCss(".grd_WF_SummaryBody4", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dacadbff","");
    this._addCss(".grd_WF_SummaryBody4", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dacadbff","");
    this._addCss(".grd_WF_SummaryBody4", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss(".grd_WF_SubTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss(".grd_WF_SubTitle", "background2", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss(".grd_WF_SubTitle", "color2", obj, ["normal"]);

    obj = new nexacro.Style_value("#f5f5f5");
    this._addCss(".grd_WF_SubTitle", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e2e2e2ff","");
    this._addCss(".grd_WF_SubTitle", "line", obj, ["normal"]);
    this._addCss(".grd_WF_WeekTitle", "line", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e2e2e2ff","");
    this._addCss(".grd_WF_SubTitle", "selectline", obj, ["normal"]);
    this._addCss(".grd_WF_WeekTitle", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss(".grd_WF_SubTitle", "selectfont", obj, ["normal"]);
    this._addCss(".grd_WF_WeekTitle", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1ecd4ff","","","0","0","0","0","true");
    this._addCss(".grd_WF_WeekTitle", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f1ecd4ff","","","0","0","0","0","true");
    this._addCss(".grd_WF_WeekTitle", "background2", obj, ["normal"]);

    obj = new nexacro.Style_color("#7e6d5a");
    this._addCss(".grd_WF_WeekTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#7e6d5a");
    this._addCss(".grd_WF_WeekTitle", "color2", obj, ["normal"]);

    obj = new nexacro.Style_value("#f1ecd4");
    this._addCss(".grd_WF_WeekTitle", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#7e6d5a");
    this._addCss(".grd_WF_WeekTitle", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f4f7ff","","","0","0","0","0","true");
    this._addCss("Div.div_WFBA", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Static.sta_WF_pageRecent", "color", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "color", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_background("#7a839aff","","","0","0","0","0","true");
    this._addCss("Button.btn_srcSmall", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("#0e55a1ff","","","0","0","0","0","true");
    this._addCss("Button.btn_srcSmall", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Button.btn_srcSmall", "bordertype", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Form.frm_POP_message", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#073362ff","","","0","0","0","0","true");
    this._addCss("Button.btn_srcSmall", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_border("1","solid","#799dc3ff","");
    this._addCss("Button.btn_WF_tabbtn", "border", obj, ["normal", "focused"]);
    this._addCss("Button.btn_Activity_box2_qstd", "border", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "border", obj, ["pushed"]);
    this._addCss("Div.div_Activity_box2_qstd", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#295e9fff","");
    this._addCss("Button.btn_WF_tabbtn", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_tabbtnS", "border", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_Audit_lvl4", "border", obj, ["selected"]);

    obj = new nexacro.Style_background("#0e559fff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_tabbtn", "background", obj, ["pushed", "selected"]);
    this._addCss("Button.btn_WF_tabbtnS", "background", obj, ["normal", "focused", "pushed", "selected"]);
    this._addCss("Static.sta_pop_title", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#e3f0feff","","","0","0","0","0","true");
    this._addCss("Form.frm_POP_message", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div.div_POP_message", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#317ecfff","");
    this._addCss("Form.frm_POP_message", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Div.div_POP_message", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("2","solid","#0e559fff","");
    this._addCss("PopupDiv.pdiv_popup_box", "border", obj, ["normal"]);
    this._addCss("Div.div_popup_box", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/ico_pop_massgeti.png","","0","0","0","50","true");
    this._addCss("Static.sta_POP_messageTi", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#0e559f");
    this._addCss("Static.sta_POP_messageTi", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 22");
    this._addCss("Static.sta_POP_messageTi", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#c3e1ff");
    this._addCss("Static.sta_pop_title", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 16");
    this._addCss("Static.sta_pop_title", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","#ccccccff","");
    this._addCss("TextArea.txt_POP_messageTxt", "border", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("text");
    this._addCss("TextArea.txt_POP_messageTxt", "cursor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("6 6 6 6");
    this._addCss("TextArea.txt_POP_messageTxt", "padding", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("TextArea.txt_POP_messageTxt", "selectcolor", obj, ["normal", "mouseover", "focused", "readonly"]);

    obj = new nexacro.Style_value("#ffffffff");
    this._addCss("TextArea.txt_POP_messageTxt", "selectbackground", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("6");
    this._addCss("TextArea.txt_POP_messageTxt", "linespace", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("TextArea.txt_POP_messageTxt", "color", obj, ["disabled"]);
    this._addCss("Tab.Maintab", "color", obj, ["disabled"]);

    obj = new nexacro.Style_value("#f7f7f7ff");
    this._addCss("TextArea.txt_POP_messageTxt", "selectbackground", obj, ["readonly"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ebedf1 0,100 #ffffff");
    this._addCss("Div.div_Activity_box", "gradation", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#b4baccff","");
    this._addCss("Div.div_Activity_box", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","");
    this._addCss("Div.div_Activity_box2", "border", obj, ["normal"]);
    this._addCss("Div.div_Activity_box2_qstd", "border", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","4","4","true","true","true","true");
    this._addCss("Div.div_Activity_box2", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Div.div_Activity_box2S", "bordertype", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#e6efffff","","","0","0","0","0","true");
    this._addCss("Div.div_Activity_box2", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Div.div_Activity_box2S", "background", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#9fbbf5ff","");
    this._addCss("Div.div_Activity_box2", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Div.div_Activity_box2S", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("0","none","#f17401ff","");
    this._addCss("Static.St_Activ_Txt", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_Activ_Txt_qstd", "border", obj, ["normal", "pushed", "focused", "mouseover"]);

    obj = new nexacro.Style_font("9 Dotum, Tahoma, Arial");
    this._addCss("Static.St_Activ_Txt", "font", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#405470");
    this._addCss("Static.St_Activ_Txt", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#9196a2ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuYellow", "background", obj, ["disabled"]);
    this._addCss("Static.St_RuRed", "background", obj, ["disabled"]);
    this._addCss("Static.St_RuGreen", "background", obj, ["disabled"]);
    this._addCss("Static.St_RuBlue", "background", obj, ["disabled"]);
    this._addCss("Static.St_RuPurple", "background", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("round","23","23","true","true","true","true");
    this._addCss("Static.St_RuYellow", "bordertype", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuRed", "bordertype", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "bordertype", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "bordertype", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "bordertype", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_font("bold antialias 10 Malgun Gothic, Dotum, Tahoma, Arial");
    this._addCss("Static.St_RuYellow", "font", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuRed", "font", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "font", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "font", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "font", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "font", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Static.St_RuYellow", "color", obj, ["disabled"]);
    this._addCss("Static.St_RuRed", "color", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "color", obj, ["disabled"]);
    this._addCss("Static.St_RuBlue", "color", obj, ["disabled"]);
    this._addCss("Static.St_RuPurple", "color", obj, ["disabled"]);
    this._addCss("Tab.Maintab", "color", obj, ["selected"]);

    obj = new nexacro.Style_shadow("outer 1,1 3 #0000004c");
    this._addCss("Static.St_RuYellow", "shadow", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuRed", "shadow", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGreen", "shadow", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuBlue", "shadow", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuPurple", "shadow", obj, ["disabled", "normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_RuGray", "shadow", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("100");
    this._addCss("Static.St_RuYellow", "opacity", obj, ["disabled"]);
    this._addCss("Static.St_RuRed", "opacity", obj, ["disabled"]);
    this._addCss("Static.St_RuGreen", "opacity", obj, ["disabled"]);
    this._addCss("Static.St_RuBlue", "opacity", obj, ["disabled"]);
    this._addCss("Static.St_RuPurple", "opacity", obj, ["disabled"]);
    this._addCss("Div.div_WF_Audit_progbg01", "opacity", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WF_Audit_progbg02", "opacity", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fe8d00ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuYellow", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#fead00ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuYellow", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#db2c53ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuRed", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#ec3860ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuRed", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#83b013ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuGreen", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#96c620ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuGreen", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#4e97f7ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuBlue", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#6babffff","","","0","0","0","0","true");
    this._addCss("Static.St_RuBlue", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#c15ae4ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuPurple", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("#d573f6ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuPurple", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#808994ff","","","0","0","0","0","true");
    this._addCss("Static.St_RuGray", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/img_sessionOut.png","","0","0","50","0","true");
    this._addCss("Static.sta_WF_sessionOut", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 14 Malgun Gothic, Dotum, Tahoma, Arial");
    this._addCss("Static.sta_WF_sessionOut", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#3c4858");
    this._addCss("Static.sta_WF_sessionOut", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/popup_titBlue_bg.gif","stretch","36","24","0","0","true");
    this._addCss("Static.St_POPTi_Blue", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Static.St_POPTi_Blue", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("0","none","#327be0ff","");
    this._addCss("Static.St_POPTi_Blue", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "border", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("2 30 0 20");
    this._addCss("Static.St_POPTi_Blue", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "padding", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_shadow("drop 0,0 0 #0000004c");
    this._addCss("Static.St_POPTi_Blue", "shadow", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Static.St_POPTi_BlueD", "shadow", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://images/popup_titBlueD_bg.gif","stretch","36","24","0","0","true");
    this._addCss("Static.St_POPTi_BlueD", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#6d86ad");
    this._addCss("Static.St_POPTi_BlueD", "color", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Button.btn_Activity_box2_qstd", "align", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "align", obj, ["pushed"]);

    obj = new nexacro.Style_bordertype("round","10","10","true","true","true","true");
    this._addCss("Button.btn_Activity_box2_qstd", "bordertype", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "bordertype", obj, ["pushed"]);
    this._addCss("Div.div_Activity_box2_qstd", "bordertype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_padding("10 0 0 0");
    this._addCss("Button.btn_Activity_box2_qstd", "padding", obj, ["mouseover"]);
    this._addCss("Div.div_Activity_box2", "padding", obj, ["pushed"]);

    obj = new nexacro.Style_background("#a7c6e4ff","","","0","0","0","0","true");
    this._addCss("Div.div_Activity_box2_qstd", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Div.div_Activity_box2_qstd", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#295e9fff");
    this._addCss("Static.St_Activ_Txt_qstd", "color", obj, ["normal", "pushed", "focused"]);

    obj = new nexacro.Style_border("2","solid","#3866c5ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.Maintab", "border", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tab.Maintab", "buttonbackground", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("1 solid #dfdfdfff");
    this._addCss("Tab.Maintab", "buttonborder", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab.Maintab", "buttonbordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_padding("6 11 6 10");
    this._addCss("Tab.Maintab", "buttonpadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#777777ff");
    this._addCss("Tab.Maintab", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("default");
    this._addCss("Tab.Maintab", "cursor", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("2","solid","#c9c9c9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Tab.Maintab", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Tab.Maintab", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_padding("6 10 6 10");
    this._addCss("Tab.Maintab", "buttonpadding", obj, ["disabled", "focused", "selected"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("Tab.Maintab", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#3866c5ff");
    this._addCss("Tab.Maintab", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #3866c5ff");
    this._addCss("Tab.Maintab", "buttonborder", obj, ["focused"]);

    obj = new nexacro.Style_background("#3866c5ff","","","0","0","0","0","true");
    this._addCss("Tab.Maintab", "buttonbackground", obj, ["selected"]);

    obj = new nexacro.Style_value("2 solid #3866c5ff");
    this._addCss("Tab.Maintab", "buttonborder", obj, ["selected"]);

    obj = new nexacro.Style_border("1","solid","#ddddddff","");
    this._addCss("Button.btn_WF_Audit_lvl2", "border", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_color("#6a737c");
    this._addCss("Button.btn_WF_Audit_lvl2", "color", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#6197e2ff","");
    this._addCss("Button.btn_WF_Audit_lvl2", "border", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("#6197e2ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_lvl2", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("#a6aeb6ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_lvl3", "background", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_background("#5d9dfaff","","","0","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_lvl3", "background", obj, ["mouseover", "pushed", "selected"]);
    this._addCss("Button.btn_WF_Audit_lvl3_Acti", "background", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#dbdbdbff","","1","solid","#dbdbdbff","","2","solid","#295e9fff","","1","solid","#dbdbdbff","");
    this._addCss("Button.btn_WF_Audit_lvl4", "border", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_bordertype("round","1","1","true","true","true","true");
    this._addCss("Button.btn_WF_Audit_lvl4", "bordertype", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_padding("0 0 2 0");
    this._addCss("Button.btn_WF_Audit_lvl4", "padding", obj, ["normal", "selected", "disabled", "focused", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#aaaaaaff","","1","solid","#aaaaaaff","","2","solid","#295e9fff","","1","solid","#aaaaaaff","");
    this._addCss("Button.btn_WF_Audit_lvl4", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#295e9fff","","1","solid","#295e9fff","","2","solid","#295e9fff","","1","solid","#295e9fff","");
    this._addCss("Button.btn_WF_Audit_lvl4", "border", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("Div.div_WF_Audit_progbg01", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#d2d2d2ff","");
    this._addCss("Div.div_WF_Audit_progbg01", "border", obj, ["normal", "mouseover"]);
    this._addCss("Div.div_WF_Audit_progbg02", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Div.div_WF_Audit_progbg01", "background", obj, ["disabled"]);
    this._addCss("Div.div_WF_Audit_progbg02", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e7e7e7ff","");
    this._addCss("Div.div_WF_Audit_progbg01", "border", obj, ["disabled"]);
    this._addCss("Div.div_WF_Audit_progbg02", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("arrow");
    this._addCss("Div.div_WF_Audit_progbg01", "cursor", obj, ["disabled"]);
    this._addCss("Div.div_WF_Audit_progbg02", "cursor", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/img_step01_B_D.png","stretch","29","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_step01", "background", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("Button.btn_WF_Audit_step01", "padding", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/img_step01_B_N.png","stretch","29","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_step01", "background", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/img_step02_B_D.png","stretch","29","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_step02", "background", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_padding("0 10 0 0");
    this._addCss("Button.btn_WF_Audit_step02", "padding", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/img_step02_B_N.png","stretch","29","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_step02", "background", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/img_step05_B_D.png","stretch","29","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_step03", "background", obj, ["normal", "selected", "disabled", "focused"]);

    obj = new nexacro.Style_padding("0 30 0 0");
    this._addCss("Button.btn_WF_Audit_step03", "padding", obj, ["normal", "selected", "disabled", "focused", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/img_step05_B_N.png","stretch","29","0","0","0","true");
    this._addCss("Button.btn_WF_Audit_step03", "background", obj, ["mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_border("1","solid","#295e9fff","");
    this._addCss("Static.sta_WF_Audit_tit", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("round","0","0","true","true","true","true");
    this._addCss("Static.sta_WF_Audit_tit", "bordertype", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 5 2 5");
    this._addCss("Static.sta_WF_Audit_tit", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/CR_S.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_CR_S", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("0 0 0 18");
    this._addCss("Static.sta_WF_CR_S", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_C", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_A", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_R", "padding", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_CR_P", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/CR_C.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_CR_C", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/CR_A.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_CR_A", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/CR_R.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_CR_R", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/CR_P.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_CR_P", "background", obj, ["normal", "mouseover"]);

    obj = null;
    
//[add theme images]
  };
})();
