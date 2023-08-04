//CSS=Common.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#e3e8f1ff","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#002c5fff","");
    this._addCss("MainFrame", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("MainFrame", "bordertype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("MainFrame>#titlebar>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("MainFrame>#statusbar", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame", "bordertype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ChildFrame>#titlebar", "bordertype", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ChildFrame>#titlebar>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("ChildFrame>#statusbar", "bordertype", obj, ["normal"]);
    this._addCss("StatusBar", "bordertype", obj, ["normal"]);
    this._addCss("*>#resizebutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Form", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit", "bordertype", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Edit.readonly", "bordertype", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("TextArea", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("Spin", "bordertype", obj, ["mouseover"]);
    this._addCss("SpinControl", "bordertype", obj, ["mouseover"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlspin", "bordertype", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#hscrollbar", "bordertype", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("GroupBox", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("ImageViewer", "bordertype", obj, ["disabled"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("PopupMenu>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ExportProgress", "bordertype", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "bordertype", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "bordertype", obj, ["normal"]);
    this._addCss("Tab", "bordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tooltip", "bordertype", obj, ["normal"]);
    this._addCss("Static.Guide_lineH", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_lineV", "bordertype", obj, ["normal", "mouseover"]);
    this._addCss("Button.btn_burger", "bordertype", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_TW_pw", "bordertype", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_logout", "bordertype", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("false");
    this._addCss("MainFrame", "showzoomcombo", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_value("0");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_value("24");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal", "deactivate", "disabled"]);

    obj = new nexacro.Style_border("2","solid","#acadadff","");
    this._addCss("MainFrame", "border", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("MainFrame>#titlebar", "align", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar", "align", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("Static", "align", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("Combo.readonly>#comboedit", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Spin.readonly>#spinedit", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["normal"]);
    this._addCss("SpinControl.readonly>#spinedit", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "align", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("CheckBox", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal", "selected"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "align", obj, ["normal"]);
    this._addCss("Menu", "align", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("FileUpload.btn_fileUpload", "align", obj, ["normal", "selected"]);
    this._addCss("DatePickerControl>#yearspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spinedit", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.pseudo", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_Vsize", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_Hsize", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#002c5fff","","","0","0","0","0","true");
    this._addCss("MainFrame>#titlebar", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("MainFrame>#titlebar", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("MainFrame>#titlebar", "border", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#minbutton", "border", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#maxbutton", "border", obj, ["normal"]);
    this._addCss("MainFrame>#statusbar", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar", "border", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("ChildFrame>#titlebar>#minbutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#maxbutton", "border", obj, ["normal"]);
    this._addCss("FrameSet", "border", obj, ["normal"]);
    this._addCss("HFrameSet", "border", obj, ["normal"]);
    this._addCss("StatusBar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("Form", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static", "border", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal"]);
    this._addCss("Combo.readonly>#comboedit", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo.readonly>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Spin.readonly>#spinedit", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("SpinControl.readonly>#spinedit", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "border", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled", "readonly"]);
    this._addCss("Calendar.readonly>#dropbutton", "border", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar.readonly>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar.readonly>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Button.calendar_ico", "border", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("CheckBox", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("FileDownload", "border", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("FileUpload", "border", obj, ["normal", "selected"]);
    this._addCss("Grid>#body", "border", obj, ["normal", "focused", "disabled", "mouseover"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Grid>#controlspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "border", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "border", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "border", obj, ["normal"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);
    this._addCss("ProgressBar", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ExportProgress>#statustext", "border", obj, ["normal"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "border", obj, ["normal", "selected"]);
    this._addCss("FileDownload.btn_FileDownload", "border", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("DatePickerControl>#yearspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("DatePickerControl>#yearspin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#monthspin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Static.sta_WF_lineH", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("MainFrame>#titlebar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "color", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "color", obj, ["normal"]);
    this._addCss("Tooltip", "color", obj, ["normal"]);
    this._addCss("Static.title_name", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Static.sta_TF_user", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("bold antialias 9 Malgun Gothic, Dotum, Tahoma, Arial");
    this._addCss("MainFrame>#titlebar", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame>#titlebar", "icon", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 -20");
    this._addCss("MainFrame>#titlebar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_MinN.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#minbutton", "background", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#minbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("MainFrame>#titlebar>#minbutton", "padding", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#maxbutton", "padding", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#normalbutton", "padding", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#minbutton", "padding", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#maxbutton", "padding", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#normalbutton", "padding", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#closebutton", "padding", obj, ["normal"]);
    this._addCss("Spin", "padding", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl", "padding", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar", "padding", obj, ["normal", "readonly"]);
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar.readonly", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar.readonly>#dropbutton", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Grid>#controlcalendar", "padding", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "padding", obj, ["normal", "readonly"]);
    this._addCss("PopupMenu", "padding", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_MinO.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#minbutton", "background", obj, ["mouseover"]);
    this._addCss("ChildFrame>#titlebar>#minbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_MinP.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#minbutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#titlebar>#minbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_MaxN.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#maxbutton", "background", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#maxbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_MaxO.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#maxbutton", "background", obj, ["mouseover"]);
    this._addCss("ChildFrame>#titlebar>#maxbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_MaxP.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#maxbutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#titlebar>#maxbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_NormalN.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#normalbutton", "background", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#normalbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("MainFrame>#titlebar>#normalbutton", "border", obj, ["normal"]);
    this._addCss("MainFrame>#titlebar>#closebutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#normalbutton", "border", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#closebutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_NormalO.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#normalbutton", "background", obj, ["mouseover"]);
    this._addCss("ChildFrame>#titlebar>#normalbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_NormalP.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#normalbutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#titlebar>#normalbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_CloseN.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#closebutton", "background", obj, ["normal"]);
    this._addCss("ChildFrame>#titlebar>#closebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 -10 0 0");
    this._addCss("MainFrame>#titlebar>#closebutton", "margin", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_CloseO.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#closebutton", "background", obj, ["mouseover"]);
    this._addCss("ChildFrame>#titlebar>#closebutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://images/btn_TB_CloseP.png","","0","0","50","50","true");
    this._addCss("MainFrame>#titlebar>#closebutton", "background", obj, ["pushed"]);
    this._addCss("ChildFrame>#titlebar>#closebutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("#3b64abff","","","0","0","0","0","true");
    this._addCss("MainFrame>#statusbar", "background", obj, ["normal"]);
    this._addCss("StatusBar", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#ebeef5ff");
    this._addCss("MainFrame>#statusbar", "color", obj, ["normal"]);
    this._addCss("StatusBar", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 8 malgun gothic, Tahoma, Arial");
    this._addCss("MainFrame>#statusbar", "font", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/img_grip.png')");
    this._addCss("MainFrame>#statusbar", "gripimage", obj, ["normal"]);
    this._addCss("StatusBar", "gripimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 2 2 16");
    this._addCss("MainFrame>#statusbar", "padding", obj, ["normal"]);
    this._addCss("StatusBar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("MainFrame>#statusbar", "progressbarheight", obj, ["normal"]);
    this._addCss("ChildFrame>#statusbar", "progressbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("MainFrame>#statusbar", "progressbarwidth", obj, ["normal"]);
    this._addCss("ChildFrame>#statusbar", "progressbarwidth", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ChildFrame", "background", obj, ["normal", "deactivate", "disabled"]);
    this._addCss("*>#resizebutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Form", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Edit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo", "background", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal"]);
    this._addCss("Spin", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("SpinControl", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("Button.calendar_ico", "background", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "focused", "disabled", "mouseover"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["mouseover"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlspin", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal", "mouseover", "selected", "focused"]);
    this._addCss("ImageViewer", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("PopupMenu", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Tabpage", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spindownbutton", "background", obj, ["readonly"]);

    obj = new nexacro.Style_border("2","solid","#002c5fff","");
    this._addCss("ChildFrame", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("28");
    this._addCss("ChildFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("28");
    this._addCss("ChildFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#868c9cff","");
    this._addCss("ChildFrame", "border", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_value("27");
    this._addCss("ChildFrame", "titlebarheight", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_background("#002c5fff","","","0","0","0","0","true");
    this._addCss("ChildFrame>#titlebar", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("ChildFrame>#titlebar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["selected"]);
    this._addCss("Static.title_name", "font", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("ChildFrame>#titlebar", "color", obj, ["normal"]);
    this._addCss("Combo>#combolist", "color", obj, ["focused", "selected"]);
    this._addCss("ListBox", "color", obj, ["selected"]);
    this._addCss("FileDownload", "color", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["focused", "selected"]);
    this._addCss("Menu", "color", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("PopupMenu", "color", obj, ["pushed", "focused", "selected"]);
    this._addCss("FileDownload.btn_FileDownload", "color", obj, ["pushed"]);
    this._addCss("Static.tipGuide", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#acadadff","","","0","0","0","0","true");
    this._addCss("ChildFrame>#titlebar", "background", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Ariarntcolorttt: #ffffffff");
    this._addCss("ChildFrame>#titlebar", "font", obj, ["deactivate", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/img_WF_Message.png","","0","0","0","50","true");
    this._addCss("ChildFrame>#statusbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","","0","none","#808080ff","","0","none","#808080ff","","0","none","#808080ff","");
    this._addCss("ChildFrame>#statusbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#69717aff");
    this._addCss("ChildFrame>#statusbar", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("ChildFrame>#statusbar", "font", obj, ["normal"]);
    this._addCss("Form", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static", "font", obj, ["normal", "mouseover"]);
    this._addCss("Button", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("SpinControl", "font", obj, ["normal"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("FileDownload", "font", obj, ["mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal", "selected", "focused"]);
    this._addCss(".readonly", "font", obj, ["normal"]);
    this._addCss("ExportProgress", "font", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Tab", "font", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("FileDownload.btn_FileDownload", "font", obj, ["mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Static.tipGuide", "font", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("");
    this._addCss("ChildFrame>#statusbar", "gripimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 34");
    this._addCss("ChildFrame>#statusbar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("VFrameSet", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("7 Dotum, Tahoma, Arial");
    this._addCss("StatusBar", "font", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d9d9d9ff","","0","none","","","0","none","","","1","solid","#d9d9d9ff","");
    this._addCss("*>#resizebutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","0","none","","","0","none","","","1","solid","#e0e0e0ff","");
    this._addCss("*>#resizebutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#vscrollbar", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#hscrollbar", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_value("30");
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#vscrollbar", "barminsize", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#hscrollbar", "barminsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("17");
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#vscrollbar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#hscrollbar", "decbtnsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("17");
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#vscrollbar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#hscrollbar", "incbtnsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("16");
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#vscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Grid>#hscrollbar", "scrollbarsize", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl", "background", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("TextArea.readonly", "background", obj, ["disabled"]);
    this._addCss("Combo>#combolist", "background", obj, ["disabled"]);
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("Spin.readonly", "background", obj, ["disabled"]);
    this._addCss("SpinControl", "background", obj, ["disabled"]);
    this._addCss("SpinControl.readonly", "background", obj, ["disabled"]);
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Calendar.readonly", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlspin", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["disabled"]);
    this._addCss("Grid>#vscrollbar", "background", obj, ["disabled"]);
    this._addCss("Grid>#hscrollbar", "background", obj, ["disabled"]);
    this._addCss("ImageViewer", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Static", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "background", obj, ["disabled"]);
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected", "disabled", "readonly"]);
    this._addCss("Calendar.readonly>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("CheckBox", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("FileUpload", "background", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Grid>#controlspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "background", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("GroupBox", "background", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "background", obj, ["normal"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "background", obj, ["normal", "selected"]);
    this._addCss("DatePickerControl>#yearspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("DatePickerControl>#yearspin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spinedit", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("DatePickerControl>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Static.Guide_lineH", "background", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_lineV", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/Vdec_ico_N.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal", "disabled"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("Button", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal", "selected", "focused"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss(".link", "cursor", obj, ["normal"]);
    this._addCss(".link_B", "cursor", obj, ["normal"]);
    this._addCss(".link_R", "cursor", obj, ["normal"]);
    this._addCss(".link_G", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal", "mouseover"]);
    this._addCss("Tab>#extrabutton", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_background("#e0e0e0ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["mouseover"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "background", obj, ["mouseover"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "background", obj, ["mouseover"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "background", obj, ["mouseover"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/Vdec_ico_O.png')");
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("#d1d1d1ff","","","0","0","0","0","true");
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["pushed"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#decbutton", "background", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "background", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "background", obj, ["pushed"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/Vinc_ico_N.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/Vinc_ico_O.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/Vinc_ico_D.png')");
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#vscrollbar>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/trackbar_bg_N.png","stretch","4","4","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "background", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://images/trackbar_bg_O.png","stretch","4","4","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://images/trackbar_bg_P.png","stretch","4","4","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["pushed"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("Grid>#hscrollbar>#trackbar", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/trackbar_bg_D.png","stretch","4","4","0","0","true");
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["disabled"]);
    this._addCss("Grid>#vscrollbar>#trackbar", "background", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/Hdec_ico_N.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/Hdec_ico_O.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/Hdec_ico_D.png')");
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#hscrollbar>#decbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/Hinc_ico_N.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/Hinc_ico_O.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/Hinc_ico_D.png')");
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#hscrollbar>#incbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Form", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Static", "color", obj, ["normal", "mouseover"]);
    this._addCss("Edit", "color", obj, ["normal", "mouseover", "focused", "readonly"]);
    this._addCss("Edit.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("MaskEdit", "color", obj, ["normal", "readonly"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("TextArea", "color", obj, ["normal", "readonly"]);
    this._addCss("TextArea.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Button", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("Combo", "color", obj, ["normal", "readonly"]);
    this._addCss("Combo>#combolist", "color", obj, ["normal", "readonly"]);
    this._addCss("Combo.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("ListBox", "color", obj, ["normal", "readonly"]);
    this._addCss("ListBox.readonly", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "color", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl", "color", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar", "color", obj, ["normal", "readonly"]);
    this._addCss("Calendar.readonly", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar.readonly>#calendaredit", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("CheckBox", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlspin", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcheckbox", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal", "selected", "focused"]);
    this._addCss("GroupBox", "color", obj, ["normal", "mouseover"]);
    this._addCss("ImageViewer", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("PopupMenu", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["normal", "focused", "selected"]);
    this._addCss("Edit.comIndisp", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("MaskEdit.comIndisp", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("TextArea.comIndisp", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Spin.comIndisp", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo.comIndisp", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.comIndisp", "color", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Static", "bordertype", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("Spin", "bordertype", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Button.calendar_ico", "bordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlspin", "bordertype", obj, ["normal", "readonly"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("Edit.readonly", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("MaskEdit.readonly", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("TextArea.readonly", "color", obj, ["disabled"]);
    this._addCss("Button", "color", obj, ["disabled"]);
    this._addCss("Combo", "color", obj, ["disabled"]);
    this._addCss("Combo.readonly", "color", obj, ["disabled"]);
    this._addCss("Combo>#combolist", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("Spin", "color", obj, ["disabled"]);
    this._addCss("Spin.readonly", "color", obj, ["disabled"]);
    this._addCss("SpinControl", "color", obj, ["disabled"]);
    this._addCss("SpinControl.readonly", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Calendar.readonly", "color", obj, ["disabled"]);
    this._addCss("FileDownload", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlspin", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);
    this._addCss("GroupBox", "color", obj, ["disabled"]);
    this._addCss("ImageViewer", "color", obj, ["disabled"]);
    this._addCss("PopupMenu", "color", obj, ["disabled"]);
    this._addCss("Tab", "color", obj, ["disabled"]);
    this._addCss("FileDownload.btn_FileDownload", "color", obj, ["disabled"]);
    this._addCss("Static.pseudo", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Edit", "border", obj, ["normal", "readonly"]);
    this._addCss("Edit.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("MaskEdit", "border", obj, ["normal", "readonly"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("TextArea", "border", obj, ["normal", "readonly"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Button", "border", obj, ["normal", "selected", "focused"]);
    this._addCss("Combo", "border", obj, ["normal", "readonly"]);
    this._addCss("Combo>#combolist", "border", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Combo.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("ListBox", "border", obj, ["normal", "readonly"]);
    this._addCss("ListBox.readonly", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "border", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl", "border", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar", "border", obj, ["normal", "readonly"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlspin", "border", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal", "readonly"]);
    this._addCss("ImageViewer", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_value("text");
    this._addCss("Edit", "cursor", obj, ["normal"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal"]);
    this._addCss("TextArea", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 6 0 6");
    this._addCss("Edit", "padding", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Edit.readonly", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("MaskEdit", "padding", obj, ["normal", "disabled", "readonly"]);
    this._addCss("MaskEdit.readonly", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Button", "padding", obj, ["normal", "selected", "focused", "mouseover", "disabled"]);
    this._addCss("Combo>#comboedit", "padding", obj, ["normal"]);
    this._addCss("Combo.readonly>#comboedit", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal", "selected", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Edit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Edit.readonly", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("MaskEdit.readonly", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("TextArea", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("TextArea.readonly", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Combo.readonly", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo.readonly>#comboedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("ListBox", "selectcolor", obj, ["readonly"]);
    this._addCss("ListBox.readonly", "selectcolor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly>#spinedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly>#spinedit", "selectcolor", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectcolor", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectcolor", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_value("#ffffffff");
    this._addCss("Edit", "selectbackground", obj, ["normal"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["normal"]);
    this._addCss("TextArea", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#4f81bdff","");
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Button", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Combo", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlspin", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Edit", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Calendar>#calendaredit", "selectcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controledit", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "selectcolor", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectcolor", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectcolor", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("#4f81bdff");
    this._addCss("Edit", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "selectbackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["disabled", "readonly"]);
    this._addCss("Edit.readonly", "background", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss(".readonly", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Edit", "border", obj, ["disabled"]);
    this._addCss("Edit.readonly", "border", obj, ["disabled"]);
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["disabled"]);
    this._addCss("TextArea", "border", obj, ["disabled"]);
    this._addCss("TextArea.readonly", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["disabled"]);
    this._addCss("Combo.readonly", "border", obj, ["disabled"]);
    this._addCss("Combo>#combolist", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("Spin.readonly", "border", obj, ["disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("SpinControl.readonly", "border", obj, ["disabled"]);
    this._addCss("Calendar", "border", obj, ["disabled"]);
    this._addCss("Calendar.readonly", "border", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlspin", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["disabled"]);
    this._addCss("ImageViewer", "border", obj, ["disabled"]);

    obj = new nexacro.Style_value("#f7f7f7ff");
    this._addCss("Edit", "selectbackground", obj, ["readonly"]);
    this._addCss("MaskEdit", "selectbackground", obj, ["readonly"]);
    this._addCss("TextArea", "selectbackground", obj, ["readonly"]);

    obj = new nexacro.Style_value("#f7f7f7ff");
    this._addCss("Edit.readonly", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("MaskEdit.readonly", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("TextArea.readonly", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["disabled", "readonly"]);
    this._addCss("Combo.readonly>#comboedit", "selectbackground", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo.readonly", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("ListBox", "selectbackground", obj, ["readonly"]);
    this._addCss("ListBox.readonly", "selectbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["readonly"]);
    this._addCss("Spin.readonly>#spinedit", "selectbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["readonly"]);
    this._addCss("SpinControl.readonly>#spinedit", "selectbackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["readonly"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectbackground", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["readonly"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["readonly"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["readonly"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectbackground", obj, ["readonly"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["readonly"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("MaskEdit.readonly", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Spin", "align", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl", "align", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#summ", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "align", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlspin", "align", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("MaskEdit", "color", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "color", obj, ["mouseover", "focused"]);
    this._addCss("Combo", "color", obj, ["mouseover", "focused"]);
    this._addCss("Combo>#combolist", "color", obj, ["mouseover"]);
    this._addCss("ListBox", "color", obj, ["mouseover", "focused"]);
    this._addCss("Spin", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("SpinControl", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controledit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "color", obj, ["mouseover"]);
    this._addCss("Grid>#controlspin", "color", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("MaskEdit", "background", obj, ["readonly"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("TextArea", "background", obj, ["readonly"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo", "background", obj, ["disabled", "readonly"]);
    this._addCss("Combo.readonly", "background", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo>#combolist", "background", obj, ["readonly"]);
    this._addCss("Combo.readonly>#comboedit", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Combo.readonly>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("ListBox", "background", obj, ["readonly"]);
    this._addCss("ListBox.readonly", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin", "background", obj, ["readonly"]);
    this._addCss("Spin.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Spin.readonly>#spinedit", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("SpinControl", "background", obj, ["readonly"]);
    this._addCss("SpinControl.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl.readonly>#spinedit", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar", "background", obj, ["readonly"]);
    this._addCss("Calendar.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar.readonly>#calendaredit", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar.readonly>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar.readonly>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Calendar.readonly>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Grid>#controledit", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["readonly"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlspin", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["readonly"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("TextArea.readonly", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);

    obj = new nexacro.Style_padding("6 6 6 6");
    this._addCss("TextArea", "padding", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("TextArea.readonly", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Tabpage", "padding", obj, ["normal", "mouseover", "disabled"]);
    this._addCss("TextArea.comIndisp", "padding", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("6");
    this._addCss("TextArea", "linespace", obj, ["normal"]);
    this._addCss("TextArea.readonly", "linespace", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Button", "align", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Calendar>#dropbutton", "align", obj, ["readonly"]);
    this._addCss("Calendar.readonly>#dropbutton", "align", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("FileDownload", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid", "align", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#body", "align", obj, ["normal", "focused", "disabled"]);
    this._addCss("Grid>#controledit", "align", obj, ["readonly"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["readonly"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlprogressbar", "align", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("ExportProgress", "align", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "align", obj, ["normal"]);
    this._addCss("FileDownload.btn_FileDownload", "align", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("DatePickerControl", "align", obj, ["normal"]);
    this._addCss("Static.Guide_number", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_color", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_area", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_area02", "align", obj, ["normal", "mouseover"]);
    this._addCss("Static.tipGuide", "align", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Button", "background", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#head", "background", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Grid>#controlprogressbar", "background", obj, ["normal"]);
    this._addCss("ExportProgress>#progressbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("Button", "bordertype", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("FileDownload.btn_FileDownload", "bordertype", obj, ["normal", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f5f5f5");
    this._addCss("Button", "gradation", obj, ["normal", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Button", "image", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlbutton", "image", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Button", "imagealign", obj, ["normal", "selected", "focused", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlbutton", "imagealign", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_color("#01387aff");
    this._addCss("Button", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfefe 0,100 #f5f5f5");
    this._addCss("Button", "gradation", obj, ["mouseover"]);
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d3d3d3 0,100 #fcfcfc [10% #fcfcfc]");
    this._addCss("Button", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_padding("1 6 -1 6");
    this._addCss("Button", "padding", obj, ["pushed"]);
    this._addCss("Grid>#controlbutton", "padding", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#b7b7b7ff","");
    this._addCss("Button", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "border", obj, ["normal", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("60");
    this._addCss("Button", "opacity", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo", "background", obj, ["normal", "selected"]);
    this._addCss("PopupMenu>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("ExportProgress", "background", obj, ["normal"]);
    this._addCss("DatePickerControl>#yearspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#monthspin", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Button.btn_TW_pw", "background", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_logout", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("19");
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("22");
    this._addCss("Combo", "itemheight", obj, ["normal"]);
    this._addCss("Combo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("ListBox", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "itemheight", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemheight", obj, ["normal"]);
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#009549ff","");
    this._addCss("Combo", "border", obj, ["selected"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["selected"]);

    obj = new nexacro.Style_value("21");
    this._addCss("Combo", "buttonsize", obj, ["readonly"]);
    this._addCss("Combo.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["readonly"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("#4f81bdff");
    this._addCss("Combo>#comboedit", "selectbackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("ListBox", "selectbackground", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectbackground", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Combo>#comboedit", "selectcolor", obj, ["disabled"]);
    this._addCss("Combo.readonly>#comboedit", "selectcolor", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "selectcolor", obj, ["disabled"]);
    this._addCss("Spin.readonly>#spinedit", "selectcolor", obj, ["disabled"]);
    this._addCss("SpinControl>#spinedit", "selectcolor", obj, ["disabled"]);
    this._addCss("SpinControl.readonly>#spinedit", "selectcolor", obj, ["disabled"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["normal"]);
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Combo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("Combo>#combolist", "itempadding", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#eeeeeeff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#4f81bdff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["focused", "selected"]);
    this._addCss("ListBox", "itembackground", obj, ["selected"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["focused", "selected"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["disabled"]);
    this._addCss("ListBox", "itembackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("Combo>#combolist", "itembackground", obj, ["readonly"]);
    this._addCss("ListBox", "itembackground", obj, ["readonly"]);
    this._addCss("ListBox.readonly", "itembackground", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["readonly"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Combo>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "disabled", "readonly"]);
    this._addCss("Combo.readonly>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("DatePickerControl>#prevbutton", "background", obj, ["normal"]);
    this._addCss("DatePickerControl>#nextbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#e5e5e5ff","");
    this._addCss("Combo>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Combo.readonly>#dropbutton", "border", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);
    this._addCss("Spin.readonly>#spinedit", "border", obj, ["disabled"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_drop_N.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_drop_O.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_drop_P.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("1 0 -1 0");
    this._addCss("Combo>#dropbutton", "padding", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/cmb_drop_D.png')");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Combo.readonly>#dropbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("ListBox", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("ListBox", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("ListBox", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ebedf0ff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("ListBox", "itemcolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("ListBox", "itemcolor", obj, ["selected"]);
    this._addCss("Menu", "itemcolor", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("17");
    this._addCss("Spin", "buttonsize", obj, ["normal", "readonly"]);
    this._addCss("Spin.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal", "readonly"]);
    this._addCss("SpinControl.readonly", "buttonsize", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controlspin", "buttonsize", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_padding("0 6 0 0");
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffffff");
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "selectbackground", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("#fafafaff");
    this._addCss("Spin>#spinedit", "selectbackground", obj, ["disabled"]);
    this._addCss("Spin.readonly>#spinedit", "selectbackground", obj, ["disabled"]);
    this._addCss("SpinControl>#spinedit", "selectbackground", obj, ["disabled"]);
    this._addCss("SpinControl.readonly>#spinedit", "selectbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlspin>#spinedit", "selectbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/spin_up_N.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "image", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("DatePickerControl>#yearspin>#spinupbutton", "image", obj, ["normal", "readonly"]);
    this._addCss("DatePickerControl>#monthspin>#spinupbutton", "image", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Spin.readonly>#spinupbutton", "imagealign", obj, ["disabled"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Spin.readonly>#spindownbutton", "imagealign", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("SpinControl.readonly>#spinupbutton", "imagealign", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("SpinControl.readonly>#spindownbutton", "imagealign", obj, ["disabled"]);
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("PopupMenu>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("DatePickerControl>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("DatePickerControl>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("DatePickerControl>#yearspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#yearspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#monthspin>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#monthspin>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/spin_up_O.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("DatePickerControl>#yearspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("DatePickerControl>#monthspin>#spinupbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/spin_up_D.png')");
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("Spin.readonly>#spinupbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("SpinControl.readonly>#spinupbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("Calendar.readonly>#spinupbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Grid>#controlspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("DatePickerControl>#yearspin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/spin_dn_N.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "image", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("DatePickerControl>#yearspin>#spindownbutton", "image", obj, ["normal", "readonly"]);
    this._addCss("DatePickerControl>#monthspin>#spindownbutton", "image", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/spin_dn_O.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("DatePickerControl>#yearspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("DatePickerControl>#monthspin>#spindownbutton", "image", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ececec 0,100 #ffffff");
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/spin_dn_D.png')");
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("Spin.readonly>#spindownbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("SpinControl.readonly>#spindownbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("Calendar.readonly>#spindownbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Grid>#controlspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("DatePickerControl>#yearspin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 5 0 0");
    this._addCss("Spin.readonly>#spinedit", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("SpinControl>#spinedit", "padding", obj, ["normal"]);
    this._addCss("SpinControl.readonly>#spinedit", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "readonly"]);
    this._addCss("Grid>#controlspin>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #ececec");
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Calendar.readonly", "daybackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal", "disabled", "readonly"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly", "dayborder", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal", "mouseover", "selected", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl", "dayborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "daycolor", obj, ["normal"]);

    obj = new nexacro.Style_value("22 22");
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 8 malgun gothic, Tahoma, Arial");
    this._addCss("Calendar", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/cal_bg.png","repeat-x","2","2","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#0c2d4eff","");
    this._addCss("Calendar", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly", "popupborder", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("174 190");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#bababaff");
    this._addCss("Calendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "trailingdaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "trailingdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Calendar", "usetrailingday", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "usetrailingday", obj, ["normal"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Calendar", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly", "viewmonthspin", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "viewmonthspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_value("false");
    this._addCss("Calendar", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.readonly", "viewyearspin", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "viewyearspin", obj, ["normal", "mouseover", "selected", "focused", "disabled"]);

    obj = new nexacro.Style_background("#e8eaedff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/cal_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["mouseover", "disabled", "readonly"]);
    this._addCss("Calendar.readonly", "popupbackground", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["mouseover", "disabled", "readonly"]);

    obj = new nexacro.Style_background("#7ebd1bff","","","0","0","0","0","true");
    this._addCss("Calendar", "daybackground", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Calendar", "daycolor", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["selected", "focused"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Ariarntpopupbackgroundtt: #ffffffff URL('theme://images/cal_bg.png') repeat-x");
    this._addCss("Calendar", "dayfont", obj, ["selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["selected", "focused"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Calendar>#calendaredit", "accessibility", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "accessibility", obj, ["disabled"]);
    this._addCss("Calendar>#dropbutton", "accessibility", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "accessibility", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Calendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "bordertype", obj, ["disabled"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("Calendar>#dropbutton", "color", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#calendaredit", "cursor", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "cursor", obj, ["disabled"]);
    this._addCss("PopupMenu>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 2 0 7");
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal"]);
    this._addCss("Calendar.readonly>#calendaredit", "padding", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);

    obj = new nexacro.Style_value("#3b64abff");
    this._addCss("Calendar>#calendaredit", "selectbackground", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_align("");
    this._addCss("Calendar>#dropbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Calendar>#dropbutton", "font", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_ico_N.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Button.calendar_ico", "image", obj, ["normal", "selected"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Calendar>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Calendar>#dropbutton", "shadow", obj, ["normal"]);
    this._addCss("Grid>#controlprogressbar", "shadow", obj, ["normal"]);
    this._addCss("PopupMenu>#spindownbutton", "shadow", obj, ["normal"]);
    this._addCss("PopupMenu>#spinupbutton", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_ico_O.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["mouseover", "focused", "pushed", "selected"]);
    this._addCss("Button.calendar_ico", "image", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_ico_D.png')");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled", "readonly"]);
    this._addCss("Calendar.readonly>#dropbutton", "image", obj, ["disabled", "normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Button.calendar_ico", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled", "readonly"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Dotum, Tahoma, arial");
    this._addCss("Calendar>#popupcalendar", "headerfont", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_font("antialias 8 malgun gothic, Dotum, Tahoma, arial");
    this._addCss("Calendar>#popupcalendar", "weekfont", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("Calendar.readonly", "popupborder", obj, ["normal", "mouseover", "pushed", "focused", "selected", "readonly"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_ico_0.png')");
    this._addCss("Button.calendar_ico", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Radio", "buttonbackground", obj, ["normal", "focused", "selected"]);
    this._addCss("Tab", "buttonbackground", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_value("1 solid #ccccccff");
    this._addCss("CheckBox", "buttonborder", obj, ["normal", "pushed", "focused", "readonly"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcheckbox", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/chk_btn_ico.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("15");
    this._addCss("CheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("Radio", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("CheckBox", "color", obj, ["normal"]);
    this._addCss(".readonly", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("CheckBox", "textpadding", obj, ["normal"]);
    this._addCss("Grid>#controlcheckbox", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f8fbff","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover"]);
    this._addCss("Radio", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #4f81bdff");
    this._addCss("CheckBox", "buttonborder", obj, ["mouseover"]);
    this._addCss("Tab", "buttonborder", obj, ["focused"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["pushed"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["pushed"]);
    this._addCss("Radio", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["disabled"]);
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("Tab", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #e0e0e0ff");
    this._addCss("CheckBox", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/chk_btn_ico_D.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f7f7f7ff","","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["readonly"]);
    this._addCss("Grid>#controlcheckbox", "buttonbackground", obj, ["readonly"]);
    this._addCss("Radio", "buttonbackground", obj, ["readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/chk_btn_ico_R.png')");
    this._addCss("CheckBox", "buttonimage", obj, ["readonly"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_N.png","stretch","5","5","0","0","true");
    this._addCss("FileDownload", "background", obj, ["normal"]);
    this._addCss("FileDownload.btn_FileDownload", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_O.png","stretch","5","5","0","0","true");
    this._addCss("FileDownload", "background", obj, ["mouseover", "focused"]);
    this._addCss("FileDownload.btn_FileDownload", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_color("#4f81bdff");
    this._addCss("FileDownload", "color", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["mouseover"]);
    this._addCss("Tab", "color", obj, ["mouseover"]);
    this._addCss("FileDownload.btn_FileDownload", "color", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_P.png","stretch","5","5","0","0","true");
    this._addCss("FileDownload", "background", obj, ["pushed"]);
    this._addCss("FileDownload.btn_FileDownload", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_D.png","stretch","5","5","0","0","true");
    this._addCss("FileDownload", "background", obj, ["disabled"]);
    this._addCss("FileDownload.btn_FileDownload", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d2d5d7ff","");
    this._addCss("FileDownload", "border", obj, ["disabled"]);
    this._addCss("FileDownload.btn_FileDownload", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_N.png","stretch","5","5","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "buttonbackground", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("FileUpload", "buttonborder", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "buttonbordertype", obj, ["normal", "selected", "mouseover", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_value("81");
    this._addCss("FileUpload", "buttonsize", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "buttonsize", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("파일업로드");
    this._addCss("FileUpload", "buttontext", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "buttontext", obj, ["normal", "selected"]);

    obj = new nexacro.Style_border("1","solid","#ccccccff","");
    this._addCss("FileUpload", "editborder", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "editborder", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("FileUpload", "editcolor", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "editcolor", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("20");
    this._addCss("FileUpload", "itemheight", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "itemheight", obj, ["normal", "selected"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("FileUpload", "editpadding", obj, ["normal", "selected"]);
    this._addCss("FileUpload.btn_fileUpload", "editpadding", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_O.png","stretch","5","5","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["mouseover", "focused"]);
    this._addCss("FileUpload.btn_fileUpload", "buttonbackground", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("#f5f8fbff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("FileUpload.btn_fileUpload", "editbackground", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_border("1","solid","#4f81bdff","");
    this._addCss("FileUpload", "editborder", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("FileUpload.btn_fileUpload", "editborder", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("FileUpload", "editcolor", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("FileUpload.btn_fileUpload", "editcolor", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_color("#4f81bdff");
    this._addCss("FileUpload", "buttoncolor", obj, ["mouseover", "focused"]);
    this._addCss("FileUpload.btn_fileUpload", "buttoncolor", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_P.png","stretch","5","5","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["pushed"]);
    this._addCss("FileUpload.btn_fileUpload", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("FileUpload", "buttoncolor", obj, ["pushed"]);
    this._addCss("FileUpload.btn_fileUpload", "buttoncolor", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://images/btn_WF_D.png","stretch","5","5","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #d2d5d7ff");
    this._addCss("FileUpload", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "editbackground", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("FileUpload", "editborder", obj, ["disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "editborder", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("FileUpload", "editcolor", obj, ["disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "editcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("FileUpload", "buttoncolor", obj, ["disabled"]);
    this._addCss("FileUpload.btn_fileUpload", "buttoncolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#999999ff","","1","solid","#cececeff","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Grid", "border", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Dotum, Tahoma, Arial");
    this._addCss("Grid", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_close.png')");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_collapse.png')");
    this._addCss("Grid", "treecollapseimage", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_expand.png')");
    this._addCss("Grid", "treeexpandimage", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_item.png')");
    this._addCss("Grid", "treeitemimage", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/tree_open.png')");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_border("2","solid","#216eb2ff","","1","solid","#cececeff","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Grid", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#216eb2ff","","1","solid","#cececeff","","1","solid","#cececeff","","1","solid","#cececeff","");
    this._addCss("Grid", "border", obj, ["readonly"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#cececeff","","0","none","","");
    this._addCss("Grid>#head", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f4f4f4 0,100 #f4f4f4");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f4f4f4 0,100 #f4f4f4");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 4 2 4");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Dotum, Tahoma, Arial");
    this._addCss("Grid>#head", "cellfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summ", "cellfont", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cececeff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Dotum, Tahoma, Arial");
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#ebebebff","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_padding("2 4 2 4");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "focused", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("#e4eaf8ff");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c8d5f1ff","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#00389aff");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Dotum, Tahoma, Arial");
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#c8d5f1ff","");
    this._addCss("Grid>#body", "selectline", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("Grid>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#000000ff");
    this._addCss("Grid>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#e7e2b9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#summ", "border", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "border", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#faf4c8ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#faf4c8ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#e7e2b9ff","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "cellline", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#f0f0f0ff","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Grid>#controledit", "padding", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal", "mouseover", "focused", "selected", "disabled", "readonly"]);

    obj = new nexacro.Style_padding("5 5 0 5");
    this._addCss("Grid>#controledit", "padding", obj, ["readonly"]);

    obj = new nexacro.Style_padding("2 0 2 0");
    this._addCss("Grid>#controlspin", "padding", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_padding("0 2 0 5");
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #ccccccff");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["normal", "mouseover", "pushed", "focused", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_chk_ico.png')");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("13");
    this._addCss("Grid>#controlcheckbox", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #e0e0e0ff");
    this._addCss("Grid>#controlcheckbox", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_chk_ico_D.png')");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/grd_chk_ico_R.png')");
    this._addCss("Grid>#controlcheckbox", "buttonimage", obj, ["readonly"]);

    obj = new nexacro.Style_border("1","solid","#216eb2ff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#0f4e87ff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["pushed"]);

    obj = new nexacro.Style_color("#0c2d4e");
    this._addCss("Grid>#controlbutton", "color", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #d3d3d3 0,100 #fcfcfc [15% #fcfcfc]");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c7c7c7 0,100 #c7c7c7 [25% #c7c7c7]");
    this._addCss("Grid>#controlprogressbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("3 3 3 3");
    this._addCss("Grid>#controlprogressbar", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("100%");
    this._addCss("Grid>#controlprogressbar", "opacity", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["mouseover"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["mouseover"]);

    obj = new nexacro.Style_blur("");
    this._addCss("Grid>#controlprogressbar", "blur", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlprogressbar", "outerglow", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlprogressbar", "transformation", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("Grid>#controlprogressbar", "smooth", obj, ["normal"]);
    this._addCss("ProgressBar", "smooth", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ExportProgress>#progressbar", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_color("@gradation");
    this._addCss("Grid>#controlprogressbar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #3866c5 0,100 #3866c5 [50% #3866c5]");
    this._addCss("Grid>#controlprogressbar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("Grid>#controlprogressbar", "direction", obj, ["normal"]);
    this._addCss("ProgressBar", "direction", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ExportProgress>#progressbar", "direction", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlprogressbar", "startimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlprogressbar", "endimage", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controlprogressbar", "progressimage", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("Grid>#controlprogressbar", "bartype", obj, ["normal"]);
    this._addCss("ProgressBar", "bartype", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("ExportProgress>#progressbar", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_value("30%");
    this._addCss("Grid>#controlprogressbar", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#d9d9d9ff","");
    this._addCss("Grid>#vscrollbar", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#e0e0e0ff","");
    this._addCss("Grid>#vscrollbar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d9d9d9ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#hscrollbar", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Grid>#hscrollbar", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#00448d");
    this._addCss(".link", "color", obj, ["normal"]);
    this._addCss(".link_B", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#00448d");
    this._addCss(".link", "color2", obj, ["normal"]);
    this._addCss(".link_B", "color2", obj, ["normal"]);

    obj = new nexacro.Style_font("underline antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss(".link", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("underline antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss(".link", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#00448d");
    this._addCss(".link", "selectcolor", obj, ["normal"]);
    this._addCss(".link_B", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold underline antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss(".link_B", "font", obj, ["normal"]);
    this._addCss(".link_R", "font", obj, ["normal"]);
    this._addCss(".link_G", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("bold underline antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss(".link_B", "selectfont", obj, ["normal"]);
    this._addCss(".link_R", "selectfont", obj, ["normal"]);
    this._addCss(".link_G", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ff3c00");
    this._addCss(".link_R", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#ff3c00");
    this._addCss(".link_R", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#ff3c00");
    this._addCss(".link_R", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#659900");
    this._addCss(".link_G", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#659900");
    this._addCss(".link_G", "color2", obj, ["normal"]);

    obj = new nexacro.Style_color("#659900");
    this._addCss(".link_G", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss(".readonly", "background2", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss(".readonly", "color2", obj, ["normal"]);

    obj = new nexacro.Style_value("#f5f5f5ff");
    this._addCss(".readonly", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss(".readonly", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss(".readonly", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e6e6e6ff","");
    this._addCss("GroupBox", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#f0f0f0ff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("ImageViewer", "bordertype", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("#4f81bdff","","","0","0","0","0","true");
    this._addCss("Menu", "background", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/chk_btn_ico_R.png')");
    this._addCss("Menu", "checkboximage", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_pmnu_expandO.png')");
    this._addCss("Menu", "expandimage", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("PopupMenu", "expandimage", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#b4cfeeff");
    this._addCss("Menu", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 12 Malgun Gothic, Dotum, Tahoma, Arial");
    this._addCss("Menu", "font", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Menu", "itemalign", obj, ["normal"]);
    this._addCss("PopupMenu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555ff");
    this._addCss("Menu", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 35 0 35");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#4f81bdff","theme://images/img_TF_bg.png","no-repeat","0","0","100","50","true");
    this._addCss("Menu", "itembackground", obj, ["normal", "mouseover", "focused", "selected", "pushed", "disabled"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Menu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#4f81bdff","");
    this._addCss("Menu", "popupborder", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#333333ff");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_value("26");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 20");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal", "mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/ico_pmnu_bulet.png","","0","0","0","50","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Menu", "popupitemalign", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("Menu", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#4f81bdff","theme://images/ico_pmnu_bulet.png","","0","0","0","50","true");
    this._addCss("Menu", "popupitembackground", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("#4f81bdff","theme://images/img_TF_bg.png","no-repeat","0","0","100","50","true");
    this._addCss("Menu", "background", obj, ["pushed"]);

    obj = new nexacro.Style_border("2","solid","#0c2d4eff","");
    this._addCss("Menu", "popupborder", obj, ["pushed"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Menu", "itemcolor", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#4f81bdff","");
    this._addCss("PopupMenu", "border", obj, ["normal", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/chk_btn_ico.png')");
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/ico_pmnu_expandN.png')");
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://images/ico_pmnu_bulet.png","","0","0","0","50","true");
    this._addCss("PopupMenu", "itembackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","dotted","#ccccccff","","0","none","","");
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 20");
    this._addCss("PopupMenu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("PopupMenu", "popuptype", obj, ["normal"]);

    obj = new nexacro.Style_border("2","solid","#0c2d4eff","");
    this._addCss("PopupMenu", "border", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#0c4582");
    this._addCss("PopupMenu", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#cbdbf3ff","theme://images/ico_pmnu_bulet.png","","0","0","0","50","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#0c2d4eff","theme://images/ico_pmnu_bulet.png","","0","0","0","50","true");
    this._addCss("PopupMenu", "itembackground", obj, ["pushed"]);

    obj = new nexacro.Style_background("#4f81bdff","theme://images/ico_pmnu_bulet.png","","0","0","0","50","true");
    this._addCss("PopupMenu", "itembackground", obj, ["focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#f5f5f5ff","","0","none","#f5f5f5ff","","0","none","#f5f5f5ff","","0","none","#f5f5f5ff","");
    this._addCss("PopupMenu>#spindownbutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_shuttleBN.png')");
    this._addCss("PopupMenu>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_shuttleBO.png')");
    this._addCss("PopupMenu>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_shuttleBP.png')");
    this._addCss("PopupMenu>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_border("0","none","#f5f5f5ff","","0","none","#f5f5f5ff","","1","solid","#f5f5f5ff","","0","none","#f5f5f5ff","");
    this._addCss("PopupMenu>#spinupbutton", "border", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_shuttleTN.png')");
    this._addCss("PopupMenu>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_shuttleTO.png')");
    this._addCss("PopupMenu>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/btn_WF_shuttleTP.png')");
    this._addCss("PopupMenu>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_background("#d7d7d7ff","","","0","0","0","0","true");
    this._addCss("ProgressBar", "background", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_color("#4f81bdff");
    this._addCss("ProgressBar", "barcolor", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_color("#999999ff");
    this._addCss("ProgressBar", "barcolor", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#6b777dff","");
    this._addCss("ExportProgress", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("ExportProgress", "color", obj, ["normal"]);
    this._addCss("ExportProgress>#statustext", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("20");
    this._addCss("ExportProgress", "padding", obj, ["normal"]);

    obj = new nexacro.Style_shadow("drop 2,2 2 #00000026");
    this._addCss("ExportProgress", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 0 0 2");
    this._addCss("ExportProgress>#statustext", "margin", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#00688fff","");
    this._addCss("ExportProgress>#progressbar", "border", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #dbdbdb 0,100 #f7f7f7 [20% #f7f7f7]");
    this._addCss("ExportProgress>#progressbar", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_color("#216eb2");
    this._addCss("ExportProgress>#progressbar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss("ExportProgress>#progressbar", "focusborder", obj, ["normal"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #ccccccff");
    this._addCss("Radio", "buttonborder", obj, ["normal", "pushed", "focused", "selected", "readonly"]);

    obj = new nexacro.Style_value("URL('theme://images/rdo_btn_ico.png')");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("Radio", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 16 0 0");
    this._addCss("Radio", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #4f81bdff");
    this._addCss("Radio", "buttonborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #e3e3e3ff");
    this._addCss("Radio", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/rdo_btn_ico_D.png')");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/rdo_btn_ico_R.png')");
    this._addCss("Radio", "buttonimage", obj, ["readonly"]);

    obj = new nexacro.Style_border("2","solid","#4f81bdff","","1","solid","#dfdfdfff","","1","solid","#dfdfdfff","","1","solid","#dfdfdfff","");
    this._addCss("Tab", "border", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("1 solid #dfdfdfff");
    this._addCss("Tab", "buttonborder", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab", "buttonbordertype", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_burger", "buttonbordertype", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Button.btn_TW_pw", "buttonbordertype", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_logout", "buttonbordertype", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("4 11 6 10");
    this._addCss("Tab", "buttonpadding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("default");
    this._addCss("Tab", "cursor", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("2","solid","#c9c9c9ff","","1","solid","#dfdfdfff","","1","solid","#dfdfdfff","","1","solid","#dfdfdfff","");
    this._addCss("Tab", "border", obj, ["disabled"]);

    obj = new nexacro.Style_padding("4 10 6 10");
    this._addCss("Tab", "buttonpadding", obj, ["disabled", "focused", "selected"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_value("2 solid #4f81bdff");
    this._addCss("Tab", "buttonborder", obj, ["selected"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_N.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_value("70%");
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["normal", "pushed", "focused"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["normal", "pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_P.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spinup_D.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("60%");
    this._addCss("Tab>#spinupbutton", "opacity", obj, ["disabled"]);
    this._addCss("Tab>#spindownbutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindown_N.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindown_P.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_value("URL('theme://images/tab_spindown_D.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://images/extrabutton_N.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/extrabutton_O.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("FileUpload.btn_fileUpload", "buttonborder", obj, ["normal", "selected", "mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_value("1 solid #d2d5d7ff");
    this._addCss("FileUpload.btn_fileUpload", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_padding("30 9 9 9");
    this._addCss("DatePickerControl", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePickerControl", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("DatePickerControl", "dayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#16519bff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePickerControl", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Arial");
    this._addCss("DatePickerControl", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("DatePickerControl", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.mm");
    this._addCss("DatePickerControl", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("30");
    this._addCss("DatePickerControl", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePickerControl", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#0058ccff");
    this._addCss("DatePickerControl", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePickerControl", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#ed0010ff");
    this._addCss("DatePickerControl", "sundaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#4f81bdff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePickerControl", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffffff");
    this._addCss("DatePickerControl", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "trailingdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePickerControl", "trailingdayborder", obj, ["normal"]);

    obj = new nexacro.Style_background("#d8daddff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("DatePickerControl", "viewmonthspin", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("DatePickerControl", "viewyearspin", obj, ["normal"]);

    obj = new nexacro.Style_background("#e8eaedff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_prev_N.png')");
    this._addCss("DatePickerControl>#prevbutton", "image", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 20 0 0");
    this._addCss("DatePickerControl>#prevbutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_prev_O.png')");
    this._addCss("DatePickerControl>#prevbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_prev_P.png')");
    this._addCss("DatePickerControl>#prevbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_padding("0 0 0 20");
    this._addCss("DatePickerControl>#nextbutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_next_N.png')");
    this._addCss("DatePickerControl>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_next_O.png')");
    this._addCss("DatePickerControl>#nextbutton", "image", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_next_P.png')");
    this._addCss("DatePickerControl>#nextbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("URL('theme://images/cal_next_D.png')");
    this._addCss("DatePickerControl>#nextbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#16519bff","");
    this._addCss("DatePickerControl>#yearspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#monthspin", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_value("8");
    this._addCss("DatePickerControl>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("DatePickerControl>#monthspin", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#16519b");
    this._addCss("DatePickerControl>#yearspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);
    this._addCss("DatePickerControl>#monthspin", "color", obj, ["normal", "mouseover", "pushed", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Aria");
    this._addCss("DatePickerControl>#yearspin", "font", obj, ["normal"]);
    this._addCss("DatePickerControl>#monthspin", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 9 malgun gothic, Tahoma, Ariarntpaddingttt: 0 0 0 0");
    this._addCss("DatePickerControl>#yearspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);
    this._addCss("DatePickerControl>#monthspin>#spinedit", "font", obj, ["normal", "mouseover", "focused", "disabled"]);

    obj = new nexacro.Style_background("#7ba800ff","","","0","0","0","0","true");
    this._addCss("Tooltip", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#709900ff","");
    this._addCss("Tooltip", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("3 7 3 7");
    this._addCss("Tooltip", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("antialias 9 malgun gothic, Dotum, Arial, Tahoma");
    this._addCss("Tooltip", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#fff7cfff","theme://images/bg_requiredT.png","no-repeat","7","7","0","0","true");
    this._addCss("Edit.comIndisp", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("MaskEdit.comIndisp", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("TextArea.comIndisp", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Spin.comIndisp", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Combo.comIndisp", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);
    this._addCss("Calendar.comIndisp", "background", obj, ["normal", "mouseover", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_background("@gradation","theme://images/bg_requiredT.png","no-repeat","7","7","0","0","true");
    this._addCss(".comIndisp", "background", obj, ["normal"]);
    this._addCss(".PM", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","theme://images/bg_requiredT.png","no-repeat","7","7","0","0","true");
    this._addCss(".comIndisp", "background2", obj, ["normal"]);
    this._addCss(".PM", "background2", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e3ecf4 0,100 #d4e0eb");
    this._addCss(".comIndisp", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e3ecf4 0,100 #d4e0eb");
    this._addCss(".comIndisp", "gradation2", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffe4b4 0,100 #ffdb9b");
    this._addCss(".PM", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffe4b4 0,100 #ffdb9b");
    this._addCss(".PM", "gradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","dashed","#e6e6e6ff","","0","none","","","0","none","","","0","none","","");
    this._addCss("Static.Guide_lineH", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","dashed","#e6e6e6ff","");
    this._addCss("Static.Guide_lineV", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/sta_WF_lineH.png","repeat-x","0","0","0","0","true");
    this._addCss("Static.sta_WF_lineH", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#f80000ff");
    this._addCss("Static.Guide_number", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.Guide_area", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ff9197ff","","","0","0","0","0","true");
    this._addCss("Static.Guide_color", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_value("70");
    this._addCss("Static.Guide_color", "opacity", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#1b6ba8ff");
    this._addCss("Static.Guide_class", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/Guide_Vsize.png","stretch","0","4","0","0","true");
    this._addCss("Static.Guide_Vsize", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/Guide_Hsize.png","stretch","4","0","0","0","true");
    this._addCss("Static.Guide_Hsize", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ff000033","","","0","0","0","0","true");
    this._addCss("Static.Guide_area", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#881cec66","","","0","0","0","0","true");
    this._addCss("Static.Guide_area02", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#4b0196ff");
    this._addCss("Static.Guide_area02", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#ff00ff99","","","0","0","0","0","true");
    this._addCss("Static.tipGuide", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#333333ff","","","0","0","0","0","true");
    this._addCss("Div.bg_titlebar", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","2","solid","#ff9805ff","","0","none","","");
    this._addCss("Div.bg_titlebar", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("","theme://images/ico_h_menu.png","no-repeat","0","0","0","0","true");
    this._addCss("Button.btn_burger", "background", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Button.btn_burger", "border", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_background("#515151ff","","","0","0","0","0","true");
    this._addCss("Static.sta_line", "background", obj, ["normal", "mouseover", "foucesed", "selected"]);

    obj = new nexacro.Style_background("","theme://images/ico_logo.png","no-repeat","0","0","0","0","true");
    this._addCss("Static.sta_logo", "background", obj, ["normal", "mouseover", "focused", "selected"]);

    obj = new nexacro.Style_border("0","solid","#4e73dfff","");
    this._addCss("Button.btn_TW_pw", "border", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_logout", "border", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_TW_pw", "color", obj, ["normal"]);
    this._addCss("Button.btn_TF_logout", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#fb953f");
    this._addCss("Button.btn_TW_pw", "color", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Button.btn_TF_logout", "color", obj, ["mouseover", "pushed", "focused"]);

    obj = null;
    
//[add theme images]
  };
})();
