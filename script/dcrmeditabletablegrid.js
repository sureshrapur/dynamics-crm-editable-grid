
String.prototype.capitalizeFirstLetter = function () {
        return (this.length > 0) ? this.charAt(0).toUpperCase() + this.slice(1) : '';
    };

// data.contains(str, true);
String.prototype.contains = function (str, exactMatch) {
        exactMatch = exactMatch || false;
        return (!exactMatch) ? (this.indexOf(str) != -1) : (this.toLowerCase().indexOf(str.toLowerCase()) != -1);
    };

// data.startswith(str)
String.prototype.startsWith = function (str) {
        return this.slice(0, str.length) == str;
    };

// data.endswith(str)
String.prototype.endsWith = function (str) {
        return this.slice(-str.length) == str;
    };

Array.prototype.ExactMatchExists = function (str) {
        for (var i = 0; i < this.length; i++) {
            if (str == this[i]) {
                return true;
            }
        }
        return false;
    };

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

(function ($) {
    $.extend(true, window, {
        "DCrmEditableGrid": {
            "Globals": {
                "xrmPage": undefined,
                "LoggedInUserID": undefined,
                "Translation_Labels": {},

                "CrmFieldTypes": {
                    LookupType: "lookup",
                    CustomerType: 'customer',
                    OwnerType: 'owner',
                    BooleanType: "boolean",
                    OptionSetType: "picklist",
                    DateTimeType: "datetime",
                    TextType: "string",
                    MemoType: "memo",
                    IntegerType: "integer",
                    DoubleType: "double",
                    DecimalType: "decimal",
                    MoneyType: "money",
                    State: 'state', // Status statecode
                    Status: 'status' // Status Reason statuscode
                },
                "_SEPERATOR": '||',
                "_OuterSeperator": '[]',
                "_pSeperator": '%%',
                "ParentFieldsFormType": '',
                "FormIsReadOnly": false,
                "ParentEntityName": '',
                "ParentEntityId": '',
                "TargetOutputEncSeed": '5CD566B7B6D04BE19572',

                "userDatetimeSettings": undefined,
                "userCurrencySettings": undefined,

                "DefaultCountry": "ca",
                "DCrmEGConfiguration": [],
                "_tableOrdinence": 0,
                "ToolTipAttrName": "data-tooltip",
                // Excel - Pre-defined strings to build a minimal XLSX file
                "excelStrings":  {
                    "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
                    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\
	                    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>\
                    </Relationships>',

                    "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
                    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\
	                    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\
                    </Relationships>',

                    "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
                    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\
	                    <Default Extension="xml" ContentType="application/xml"/>\
	                    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\
	                    <Default Extension="jpeg" ContentType="image/jpeg"/>\
	                    <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\
	                    <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\
                    </Types>',

                    "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
                    <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\
	                    <fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/>\
	                    <workbookPr showInkAnnotation="0" autoCompressPictures="0"/>\
	                    <bookViews>\
		                    <workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/>\
	                    </bookViews>\
	                    <sheets>\
		                    <sheet name="Sheet1" sheetId="1" r:id="rId1"/>\
	                    </sheets>\
                    </workbook>',

                    "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
                    <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">\
	                    <sheetData>\
		                    __DATA__\
	                    </sheetData>\
                    </worksheet>'
                },
                "Debug": false
            }
        }
    });

    $.extend(true, window, {
        "DCrmEditableGrid": {
            "Editors": {
                "Text": 0,
                "Numeric": 1,
                "DatePicker": 2,
                "Checkbox": 3,
                "OptionSet": 4,
                "Description": 5,
                "Lookup": 6,
                "Decimal": 7,
                "Currency": 8,
                "DateTimePicker": 9,
                "None": 10
            }
        }
    });

    $.extend(true, window, {
        "DCrmEditableGrid": {
            "DefaultCrmUserSettings": {
                "DateSeparator": "/",
                "DateFormat": "M/d/yyyy",
                "TimeFormat": "h:mm tt",
                "TimeSeparator": ":",
                "DefaultCountryCode": "+1",
                "LanguageId": "1033",
                "CurrencySymbol": "$",
                "NumberSeparator": ",",
                "DecimalSymbol": ".",
                "CurrencyDecimalPrecision": 2,
                "NumberGroupFormat": 3
            }
        }
    });

    $.extend(true, window, {
        "DCrmEditableGrid": {
            "Keys": {
                "KEY0": 48,
                "KEY9": 57,
                "_KEY0": 96,
                "_KEY9": 105,
                "CTRLKEY": 17,
                "DEL": 46,
                "ENTER": 13,
                "ESC": 27,
                "BACKSPACE": 8,
                "ARROWLEFT": 37,
                "ARROWUP": 38,
                "ARROWRIGHT": 39,
                "ARROWDOWN": 40,
                "TAB": 9,
                "HYPHON": 45
            }
        }
    });

    $.extend(true, window, {
        "DCrmEditableGrid": {
            "Helper": {
                "Movement": function (element, keycode) {
                    if (keycode === DCrmEditableGrid.Keys.ARROWRIGHT) {
                        return element.next('td');
                    } else if (keycode === DCrmEditableGrid.Keys.ARROWLEFT) {
                        return element.prev('td');
                    } else if (keycode === DCrmEditableGrid.Keys.ARROWUP) {
                        return element.parent().prev().children().eq(element.index());
                    } else if (keycode === DCrmEditableGrid.Keys.ARROWDOWN) {
                        return element.parent().next().children().eq(element.index());
                    }
                    return [];
                },
                "GenerateUUID": function () {
                    var d = new Date().getTime();
                    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = (d + Math.random() * 16) % 16 | 0;
                        d = Math.floor(d / 16);
                        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
                    });
                    return uuid;
                },
                "GenerateRandomLetters": function (len) {
                    var text = '';
                    var thislen = len || 10;
                    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

                    for (var i = 0; i < thislen; i++) {
                        text += possible.charAt(Math.floor(Math.random() * possible.length));
                    }
                    return text;
                },
                "CopyTextToClipboard": function (text) {

                    // Works on Chrome + IE. No FF support!

                    if ((!text) && (text.length > 0)) {
                        //LogIt("Nothing to copy to clipboard.");
                        return;
                    }

                    var textArea = document.createElement("textarea");

                    // Place in top-left corner of screen regardless of scroll position.
                    textArea.style.position = 'fixed';
                    textArea.style.top = 0;
                    textArea.style.left = 0;

                    // Ensure it has a small width and height. Setting to 1px / 1em
                    // doesn't work as this gives a negative w/h on some browsers.
                    textArea.style.width = '2em';
                    textArea.style.height = '2em';

                    // We don't need padding, reducing the size if it does flash render.
                    textArea.style.padding = 0;

                    // Clean up any borders.
                    textArea.style.border = 'none';
                    textArea.style.outline = 'none';
                    textArea.style.boxShadow = 'none';

                    // Avoid flash of white box if rendered for any reason.
                    textArea.style.background = 'transparent';
                    textArea.value = text;
                    document.body.appendChild(textArea);
                    textArea.select();

                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                        //LogIt('Copying text command was ' + msg);
                    } catch (err) {
                        LogEx('Exception: unable to copy the value to clipboard');
                    }
                    document.body.removeChild(textArea);
                },
                "AddCurrencyFormat": function (value, Precision) {
                    var fval = value + '';
                    var num = parseFloat(fval);
                    var isNegative = false;
                    if ((!isNaN(num)) && (num < 0)) {
                        isNegative = true;
                    }

                    if ((Precision == undefined) || (Precision == 'undefined')) {
                        Precision = _thisGlobals.userCurrencySettings.CurrencyDecimalPrecision;
                    }

                    fval = num.toFixed(Precision) + "";
                    var tmp = fval.split(_thisGlobals.userCurrencySettings.DecimalSymbol);
                    fval = tmp[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + _thisGlobals.userCurrencySettings.NumberSeparator) + _thisGlobals.userCurrencySettings.DecimalSymbol + tmp[1];

                    if (isNegative) {
                        switch (_thisGlobals.userCurrencySettings.NegativeCurrencyFormatCode) {
                            case 1:
                                fval = '-' + _thisGlobals.userCurrencySettings.CurrencySymbol + fval.replace('-', "");
                                break;
                            case 0:
                                fval += '(' + _thisGlobals.userCurrencySettings.CurrencySymbol + fval.replace('-', "") + ')';
                                break;
                            case 2:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + '-' + fval.replace('-', "");
                                break;
                            case 3:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + fval + '-';
                                break;
                            case 4:
                                fval = '(' + fval.replace('-', "") + _thisGlobals.userCurrencySettings.CurrencySymbol + ')';
                                break;
                            case 5:
                                fval += '-' + fval.replace('-', "") + _thisGlobals.userCurrencySettings.CurrencySymbol;
                                break;
                            case 6:
                                fval = fval.replace('-', "") + '-' +  _thisGlobals.userCurrencySettings.CurrencySymbol;
                                break;
                            case 7:
                                fval = fval.replace('-', "") + _thisGlobals.userCurrencySettings.CurrencySymbol + '-';
                                break;
                            case 8:
                                fval = '-'+ fval.replace('-', "") + ' ' + _thisGlobals.userCurrencySettings.CurrencySymbol;
                                break;
                            case 9:
                                fval += '-' + _thisGlobals.userCurrencySettings.CurrencySymbol + ' ' + fval.replace('-', "") + ')';
                                break;
                            case 10:
                                fval = fval.replace('-', "") + ' ' + _thisGlobals.userCurrencySettings.CurrencySymbol + '-';
                                break;
                            case 11:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + ' ' + fval.replace('-', "") + '-';
                                break;
                            case 12:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + ' -' + fval.replace('-', "");
                                break;
                            case 13:
                                fval += fval.replace('-', "") + '- ' + _thisGlobals.userCurrencySettings.CurrencySymbol;
                                break;
                            case 14:
                                fval = '(' + _thisGlobals.userCurrencySettings.CurrencySymbol + ' ' + fval.replace('-', "") + ')';
                                break;
                            case 15:
                                fval = '(' + fval.replace('-', "") + _thisGlobals.userCurrencySettings.CurrencySymbol + ')';
                                break;

                            default:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + fval;
                                break;
                        }
                    } else {
                        switch (_thisGlobals.userCurrencySettings.CurrencyFormatCode) {
                            case 0:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + fval;
                                break;
                            case 1:
                                fval += _thisGlobals.userCurrencySettings.CurrencySymbol;
                                break;
                            case 2:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + ' ' + fval;
                                break;
                            case 3:
                                fval = fval + ' ' + _thisGlobals.userCurrencySettings.CurrencySymbol;
                                break;
                            default:
                                fval = _thisGlobals.userCurrencySettings.CurrencySymbol + fval;
                                break;
                        }
                    }
                    return fval;
                },
                "AddDecimalFormat": function (value, Precision) {
                    var fval = value + '';
                    var num = parseFloat(fval);
                    var isNegative = false;
                    if ((!isNaN(num)) && (num < 0)) {
                        isNegative = true;
                    }

                    if ((Precision == undefined) || (Precision == 'undefined')) {
                        Precision = _thisGlobals.userCurrencySettings.CurrencyDecimalPrecision;
                    }

                    fval = num.toFixed(Precision) + "";
                    var tmp = fval.split(_thisGlobals.userCurrencySettings.DecimalSymbol);
                    fval = tmp[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + _thisGlobals.userCurrencySettings.NumberSeparator) + _thisGlobals.userCurrencySettings.DecimalSymbol + tmp[1];

                    if (isNegative) {
                        switch (_thisGlobals.userCurrencySettings.NegativeNumberFormatCode) {
                            case 0:
                                fval = '(' + fval.replace('-', "") + ')';
                                break;
                            case 1:
                                // Already has -
                                break;
                            case 2:
                                fval = '- ' + fval.replace('-', "");
                                break;
                            case 3:
                                fval = fval.replace('-', "") + '-';
                                break;
                            case 4:
                                fval = fval.replace('-', "") + ' -';
                                break;
                            default:
                                break;
                        }
                    }

                    return fval;
                },
                "AddIntegerFormat": function (value) {
                    var fval = value + '';
                    var num = parseInt(fval);
                    var isNegative = false;
                    if ((!isNaN(num)) && (num < 0)) {
                        isNegative = true;
                    }
                    fval = fval.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + _thisGlobals.userCurrencySettings.NumberSeparator);

                    if(isNegative) {
                        switch(_thisGlobals.userCurrencySettings.NegativeNumberFormatCode) {
                            case 0:
                                fval = '(' + fval.replace('-', "") + ')';
                                break;
                            case 1:
                                // Already has -
                                break;
                            case 2:
                                fval = '- ' + fval.replace('-', "");
                                break;
                            case 3:
                                fval = fval.replace('-', "") + '-';
                                break;
                            case 4:
                                fval = fval.replace('-', "") + ' -';
                                break;
                            default:
                                break;
                        }
                    }
                    return fval;
                },
                "RemoveNumericFormat": function (txt) {
                    var isNegative = (txt.contains('-') || txt.contains('('));
                    // /[\$,()-]/g
                    var p = txt.replace(_thisGlobals.userCurrencySettings.RemoveCurrenyFormatRegEx, "");
                    var arr = p.trim().split("");
                    p = '';
                    for (var i = 0; i < arr.length; i++) {
                        if ((arr[i].length > 0) && ($.isNumeric(arr[i]) || (arr[i] == _thisGlobals.userCurrencySettings.DecimalSymbol))) {
                            p += arr[i];
                        }
                    }
                    return ((isNegative) ? '-' : "") + p;
                },
                "IsValidEmail": function (value) {
                    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
                },
                "IsValidUrl": function (value) {
                    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(value);
                },
                "IsvalidPhoneNumber": function (value) {
                    // get rid of none digits
                    // +1 21 234 234 5657
                    if (($.isNumeric(value)) || (value.contains('-') || value.contains('('))) {
                        var txt = value.replace(/[^0-9]/g, '');
                        if (txt.trim().length == 0) {
                            return false;
                        }
                        //LogIt("Phone " + txt);
                        return (($.isNumeric(txt)) && (txt.length >= 7));
                    } else {
                        return false;
                    }
                },
                "FormatPhoneNumber": function (value) {
                    var txt = value.replace(/[^0-9]/g, '');

                    // If the number has a valid length, format the number.
                    switch (txt.length) {
                        case "4105551212".length:
                            return "(" + txt.substr(0, 3) + ") " + txt.substr(3, 3) + "-" + txt.substr(6, 4);
                            //return txt.substr(0, 3) + "-" + txt.substr(3, 3) + "-" + txt.substr(6, 4);
                            break;

                        case "5551212".length:
                            return txt.substr(0, 3) + "-" + txt.substr(3, 4);
                            break;
                    }
                    return value;
                },
                "WaitDialog": function (show) {
                    if (show) {
                        $('#dcrmegProcessingDialog').show();
                    } else {
                        $('#dcrmegProcessingDialog').hide();
                    }
                },
                "SetActiveCellText": function ($cell, txt) {
                    var span = $cell.find('span:first');
                    if ((span) && (span.length)) {
                        span.text(txt);
                        span.attr(DCrmEditableGrid.Globals.ToolTipAttrName, txt);
                        span.parent().attr(DCrmEditableGrid.Globals.ToolTipAttrName, txt);
                    }
                },
                "GetActiveCellText": function ($cell) {
                    var span = $cell.find('span:first');
                    if ((span) && (span.length)) {
                        return span.text();
                    }
                    return '';
                },
                "SelectAllRows": function (schemaname, checked) {
                    var dcrmeg = FindDCrmEGConfigurationBySchema(schemaname);
                    var manager = dcrmeg.ThisGrid.tableDataManager;

                    if (checked) {
                        var totalRows = manager.options.allRows.length;

                        for (var i = 0; i < totalRows; ++i) {
                            var $row = $(manager.options.allRows[i]);

                            $row.addClass(manager.options.rowSelectedCss);
                            $row.find('input:first').prop('checked', true);
                            manager.options.selectedRows[manager.options.selectedRows.length] = manager.options.allRows[i];
                        }
                    } else {
                        // de select all rows
                        for (var i = manager.options.selectedRows.length - 1; i >= 0; i--) {
                            var $row = $(manager.options.selectedRows[i]);
                            $row.removeClass(manager.options.rowSelectedCss);
                            $row.find('input:first').prop('checked', false);
                        }
                        manager.options.selectedRows = [];
                    }
                }
            }
        }
    });
})(jQuery);

var _thisGlobals = DCrmEditableGrid.Globals;
var _thisHelpers = DCrmEditableGrid.Helper;

_thisGlobals.xrmPage = window.parent.Xrm.Page;
_thisGlobals.LoggedInUserID = _thisGlobals.xrmPage.context.getUserId();

function LogIt(s) {
    if ( (_thisGlobals.Debug) && (typeof console != "undefined") && (typeof console.debug != "undefined")) {
        console.log(s);
    }
}

function LogEx(s) {
    if (typeof console != "undefined" && typeof console.debug != "undefined") {
        console.error(s);
    }
}

Date.parseDate = function (input, format) {
    format = format || _thisGlobals.userDatetimeSettings.DateFormat;

    if (input.trim().length == 0) {
        return new Date();
    }

    var arr = input.trim().split(" ");
    var d = arr[0].trim().split(_thisGlobals.userDatetimeSettings.DateSeparator);
    var t = undefined;

    // parse time as well?
    if (format.contains(_thisGlobals.userDatetimeSettings.TimeFormat)) {
        t = arr[1].trim().split(_thisGlobals.userDatetimeSettings.TimeSeparator);
    }
    // dd/MM/yyyy
    // M/dd/yyyy
    // yyyy/dd/M
    var dformat = format.toLowerCase().split(_thisGlobals.userDatetimeSettings.DateSeparator);
    d[0] = d[0].trim();
    d[1] = d[1].trim();
    d[2] = d[2].trim();

    var year = '';
    var month = '';
    var day = '';

    if (dformat[0].startsWith('y')) {
        year = d[0];
    } else if (dformat[1].startsWith('y')) {
        year = d[1];
    } else if (dformat[2].startsWith('y')) {
        year = d[2];
    }

    if (dformat[0].startsWith('m')) {
        month = d[0];
    } else if (dformat[1].startsWith('m')) {
        month = d[1];
    } else if (dformat[2].startsWith('m')) {
        month = d[2];
    }

    if (dformat[0].startsWith('d')) {
        day = d[0];
    } else if (dformat[1].startsWith('d')) {
        day = d[1];
    } else if (dformat[2].startsWith('d')) {
        day = d[2];
    }

    var val;
    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    // Month is zero based
    if (t) {
        val = new Date(year, month - 1, day, t[0].trim(), t[1].trim());
    } else {
        val = new Date(year, month - 1, day);
    }

    //LogIt("parseDate Date " + val + "] Format [" + format + "]");
    return val;
};

Date.prototype.dateFormat = function (mask) {
    var t = new XDate(this).toString(mask);
    //LogIt("Mask [" + mask + "] DateFormat [" + t + "]");
    return t;
};

$.fn.DCrmEditableGrid = function () {
    return this;
};

$.fn.DCrmEditableGrid.TextBox = function (table, editorsArrayi, requiredErrorContainer, inputFormatErrorContainer) {
    'use strict';

    var $editor = $("<INPUT type=text />").addClass('TextEditors').hide().appendTo(table.parent());
    if (editorsArrayi.editor != DCrmEditableGrid.Editors.Text) {
        $editor.addClass('NumericTextbox');
    }
    $editor.EditorType = editorsArrayi.editor;
    var active;
    var validator = editorsArrayi.validator;
    var required = editorsArrayi.RequireValue;
    var $errorcontainer = requiredErrorContainer;
    var $inputformaterror = inputFormatErrorContainer;
    var UrlRegEx = new RegExp("^(http|https|ftp|ftps|mailto)://", "i");
    $editor.PossibleMove = undefined;
    var TabCalled = false;

    var CrmFieldInfo = {
        FieldSchemaName: editorsArrayi.FieldSchemaName,
        FieldLabel: editorsArrayi.FieldLabel,
        ParentEntitySchemaName: editorsArrayi.ParentEntitySchemaname,
        ParentEntityLabel: editorsArrayi.ParentEntityName
    }

    $editor.theUpdater = undefined;
    $editor.CalculateNumericSummary = undefined;
    $editor.RefreshOnSave = false;

    var inputFormat = editorsArrayi.Format;
    if (inputFormat == 'A') {
        inputFormat = undefined;
    } else {
        inputFormat = inputFormat.toLowerCase();
    }

    $editor.EditorFormat = inputFormat;

    var MaxLength = undefined;
    if (editorsArrayi.MaxLength != 'A') {
        MaxLength = parseInt(editorsArrayi.MaxLength);
        if (isNaN(MaxLength)) {
            MaxLength = undefined;
        } else {
            $editor.attr('maxlength', MaxLength);
        }
    }

    var MaxValue = undefined;
    if (editorsArrayi.MaxValue != 'A') {
        MaxValue = parseFloat(editorsArrayi.MaxValue);
    }
    var MinValue = undefined;
    if (editorsArrayi.MinValue != 'A') {
        MinValue = parseFloat(editorsArrayi.MinValue);
    } else {
        MinValue = parseFloat('0.00');
    }

    var Precision = _thisGlobals.userCurrencySettings.CurrencyDecimalPrecision; // default
    if (editorsArrayi.Precision != 'A') {
        Precision = parseInt(editorsArrayi.Precision);
    }

    var setupInvalidFormat = function (txt) {
        var etop = active.offset().top - ($inputformaterror.height() + 8);
        var eleft = active.offset().left;
        $inputformaterror.text(txt).css("left", eleft).css("top", etop).width(active.width() - 20).show();
        $editor.focus();
    }

    var setActiveText = function () {
        active = table.activeCell;
        if ((active === undefined) || (active.length === 0)) {
            //LogEx('TextBox: Unable to find active cell.');
            return true;
        }

        var text = $editor.val();
        

        var activetext = _thisHelpers.GetActiveCellText(active);
        var originalVal = activetext;

        if ((required) && ((text === undefined) || (text === null) || (text.trim().length == 0))) {
            var etop = active.offset().top - ($errorcontainer.height() + 8);
            var eleft = active.offset().left;
            $errorcontainer.css("left", eleft).css("top", etop).width(active.width() - 20).show();
            $editor.focus();
            return false;
        }

        if (($editor.EditorType == DCrmEditableGrid.Editors.Currency) ||
            ($editor.EditorType == DCrmEditableGrid.Editors.Decimal) ||
            ($editor.EditorType == DCrmEditableGrid.Editors.Numeric) ) {
            activetext = _thisHelpers.RemoveNumericFormat(activetext);
            //LogIt("Parsing   [" + parseFloat(activetext) + "]");
        }

        if (activetext === text) {
            return true;
        }

        if (text.length > 0) {
            if ($editor.EditorType == DCrmEditableGrid.Editors.Text) {
                if (inputFormat) {
                    if (inputFormat == 'url') {
                        if (!_thisHelpers.IsValidUrl(text)) {
                            setupInvalidFormat(_thisGlobals.Translation_Labels.IncorrectFormat);
                            return false;
                        }
                    } else if (inputFormat == 'email') {
                        if (!_thisHelpers.IsValidEmail(text)) {
                            setupInvalidFormat(_thisGlobals.Translation_Labels.IncorrectFormat);
                            return false;
                        }
                    }
                    //else if (inputFormat == 'phone') {
                    //    if (!_thisHelpers.IsvalidPhoneNumber(text)) {
                    //        setupInvalidFormat('Invalid format.');
                    //        return false;
                    //    }
                    //}
                }

                //if (MaxLength) {
                //    if ((!isNaN(MaxLength)) && (text.length > MaxLength)) {
                //        setupInvalidFormat('Max length ' + MaxLength);
                //        return false;
                //    }
                //}
            } else {
                if (MaxValue) {
                    var p = parseFloat(text);
                    if ((!isNaN(p)) && (!isNaN(MaxValue)) && (p > MaxValue)) {
                        setupInvalidFormat(_thisGlobals.Translation_Labels.MaxValue + ' ' + MaxValue);
                        return false;
                    }
                }

                var p = parseFloat(text);
                if ((!isNaN(p)) && (!isNaN(MinValue)) && (p < MinValue)) {
                    setupInvalidFormat(_thisGlobals.Translation_Labels.MinValue + ' ' + MinValue);
                    return false;
                }
            }


            var ValidationResult = true;
            var textUpdated = true;
            if (validator != undefined) {

                var orgNoFormat = _thisHelpers.GetActiveCellText(active); //active.text();
                if ($editor.EditorType != DCrmEditableGrid.Editors.Text) {
                    orgNoFormat = _thisHelpers.RemoveNumericFormat(orgNoFormat);
                    orgNoFormat = parseFloat(orgNoFormat);
                }

                var param = { EditorType: $editor.EditorType, OriginalValue: orgNoFormat, NewValue: text };

                ValidationResult = validator(param, CrmFieldInfo);

                if (ValidationResult === true) {
                    if ($editor.EditorType == DCrmEditableGrid.Editors.Currency) {
                        // adds , seperator and if needed .00
                        text = _thisHelpers.AddCurrencyFormat(text, Precision);

                    } else if ($editor.EditorType == DCrmEditableGrid.Editors.Decimal) {
                        text = _thisHelpers.AddDecimalFormat(text, Precision);

                    } else if ($editor.EditorType == DCrmEditableGrid.Editors.Numeric) {
                        text = _thisHelpers.AddIntegerFormat(text);

                    } else if ($editor.EditorType == DCrmEditableGrid.Editors.Text) {

                        if (inputFormat == 'url') {
                            if (!(UrlRegEx.test(text))) {
                                text = 'http://' + text;
                            }
                        }
                        //else if (inputFormat == 'phone') {
                        //    text = _thisHelpers.FormatPhoneNumber(text);
                        //}

                    }
                    //active.text(text);
                    _thisHelpers.SetActiveCellText(active, text);
                } else {
                    textUpdated = false;
                }
            } else {
                if ($editor.EditorType == DCrmEditableGrid.Editors.Currency) {
                    // adds , seperator and if needed .00
                    text = _thisHelpers.AddCurrencyFormat(text, Precision);

                } else if ($editor.EditorType == DCrmEditableGrid.Editors.Decimal) {
                    text = _thisHelpers.AddDecimalFormat(text, Precision);

                } else if ($editor.EditorType == DCrmEditableGrid.Editors.Numeric) {
                    text = _thisHelpers.AddIntegerFormat(text);

                } else if ($editor.EditorType == DCrmEditableGrid.Editors.Text) {
                    if (inputFormat == 'url') {
                        if (!(UrlRegEx.test(text))) {
                            text = 'http://' + text;
                        }
                    }
                    //else if (inputFormat == 'phone') {
                    //    text = _thisHelpers.FormatPhoneNumber(text);
                    //}

                }
                // active.text(text);
                _thisHelpers.SetActiveCellText(active, text);
            }
        } else {
            // active.text(text);
            _thisHelpers.SetActiveCellText(active, text);
            textUpdated = true;
        }

        if (textUpdated) {
            // update TableManager cache
            $editor.theUpdater.updateCell(active, originalVal);
            if ($editor.EditorType != DCrmEditableGrid.Editors.Text) {
                $editor.CalculateNumericSummary();
            }
            return true;
        }
        return false;
    };

    var HideError = function () {
        if ($errorcontainer.is(':visible')) {
            $errorcontainer.hide();
        }
        if ($inputformaterror.is(':visible')) {
            $inputformaterror.hide();
        } 
    };

    $editor.CloseEditor = function () {
        if ($editor.is(':visible')) {
            $editor.hide();
        }
        if ($inputformaterror.is(':visible')) {
            $inputformaterror.hide();
        }
    };

    $editor.on('blur', function (e) {
        if (!TabCalled) {
            setActiveText();
            if ((!$errorcontainer.is(':visible')) && !($inputformaterror.is(':visible'))) {
                active = table.activeCell;
                $editor.hide();
                if ((active) && (active.length)) {
                    active.focus();
                }
            }
        }
        e.stopPropagation();
        return false;

    }).on('keypress', function (e) {
        
        if ($editor.EditorType != DCrmEditableGrid.Editors.Text) {
            var tkey = e.which || e.keycode;
            var prevente = false;
            var curPos = this.selectionStart;
            //LogIt("TextBox: Editor keypress key [" + tkey + "]");

            if ((tkey === _thisGlobals.userCurrencySettings.CurrencySymbolCharCode) || (tkey === _thisGlobals.userCurrencySettings.NumberSeparatorCharCode)) {
                prevente = true; //($editor.EditorType == DCrmEditableGrid.Editors.Text);

            } else if (tkey === _thisGlobals.userCurrencySettings.DecimalSymbolCharCode) { // . only allow one instance for none numeric
                if ($editor.EditorType == DCrmEditableGrid.Editors.Numeric) {
                    prevente = true;
                } else if (($editor.EditorType == DCrmEditableGrid.Editors.Decimal) ||
                    ($editor.EditorType == DCrmEditableGrid.Editors.Currency)) {
                    var dot = $editor.val();
                    if ((dot.length > 0) && (dot.contains(_thisGlobals.userCurrencySettings.DecimalSymbol))) {
                        prevente = true;
                    }
                }

            } else if (tkey === DCrmEditableGrid.Keys.HYPHON) {
                var dot = $editor.val();
                if ((curPos != 0) || (dot.contains('-'))) {
                    prevente = true;
                }

            } else if (e.shiftKey || (tkey < DCrmEditableGrid.Keys.KEY0 || tkey > DCrmEditableGrid.Keys.KEY9)) { // Allow numbers only
                prevente = true;
            }

            if (prevente) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    }).on('keydown', function (e) {
        var tkey = e.which || e.keycode;
        var prevent = false;
        TabCalled = false;

        HideError();
        if (tkey === DCrmEditableGrid.Keys.ENTER) {
            if (setActiveText()) {
                $editor.hide();
                active = table.activeCell;
                if ((active) && (active.length)) {
                    active.focus();
                }
            }
            prevent = true;

        } else if (tkey === DCrmEditableGrid.Keys.ESC) {
            setTimeout(HideError, 10);
            active = table.activeCell;
            $editor.hide();
            if ((active) && (active.length)) {
                active.focus();
            }
            prevent = true;

        } else if (tkey === DCrmEditableGrid.Keys.TAB) {
            TabCalled = true;
            prevent = true;
            setActiveText();
            if ((!$errorcontainer.is(':visible')) || (!$inputformaterror.is(':visible'))) {
                $editor.hide();
                if (!$editor.RefreshOnSave) {
                    active = table.activeCell;
                    if ((active) && (active.length)) {
                        active.focus();
                    }

                    var possibleMove = _thisHelpers.Movement(active, DCrmEditableGrid.Keys.ARROWRIGHT);
                    if ((possibleMove) && (possibleMove.length) && (possibleMove.length > 0)) {
                        $editor.PossibleMove = possibleMove;
                        setTimeout(function () {
                            $editor.PossibleMove.focus();
                            $editor.PossibleMove.trigger("click");
                        }, 50);
                    }
                }
            }
        }

        if (prevent) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }).on('paste', function (e) {
        setTimeout(HideError, 10);
        $editor.attr('data-item-inputeditor-value', $editor.val());

        //break the callstack to let the event finish  $87,7659.87   $98,98.765.98
        setTimeout(function () { 
            if ($editor.EditorType != DCrmEditableGrid.Editors.Text) {
                var val = $editor.val().trim(); //read the value of the input field 
                val = _thisHelpers.RemoveNumericFormat(val);
                
                var org = $editor.attr('data-item-inputeditor-value');
                // Is it numeric
                if ($.isNumeric(val)) {
                    if ($editor.EditorType == DCrmEditableGrid.Editors.Numeric) {
                        var index = val.indexOf(_thisGlobals.userCurrencySettings.DecimalSymbol);
                        if (index != -1) {
                            try {
                                val = val.substr(0, val.length - index);
                            } catch (e) {
                                $editor.val(org);
                                return;
                            }
                        }
                    }
                    $editor.val(val);
                } else {
                    $editor.val(org);
                }
            }
        }, 2);

    });

    $editor.DestroyEditor = function () {
        $editor.off('blur').off('keypress').off('keydown').off('paste');
        $editor.remove();
    };

    return $editor;
};

$.fn.DCrmEditableGrid.DatePicker = function (table, editorsArrayi, requiredErrorContainer) {
    'use strict';

    // 6/13/2014 10:51 AM
    var DateFormat = _thisGlobals.userDatetimeSettings.DateFormat;
    var TimeFormat = _thisGlobals.userDatetimeSettings.TimeFormat;
    var DatePickerDateFormat = DateFormat;

    var CrmFieldInfo = {
        FieldSchemaName: editorsArrayi.FieldSchemaName,
        FieldLabel: editorsArrayi.FieldLabel,
        ParentEntitySchemaName: editorsArrayi.ParentEntitySchemaname,
        ParentEntityLabel: editorsArrayi.ParentEntityName
    }
    var divid = _thisHelpers.GenerateUUID();
    var inputid = _thisHelpers.GenerateUUID();

    var $editor = $("<div style=\"position:absolute;display:none;\" id=\"" + divid + "\" ><input id=\"" + inputid + "\" type=text  readonly=\"readonly\" style=\"position:absolute;border:none;\" /></div>").appendTo(table.parent());
    $editor.EditorType = editorsArrayi.editor;
    var hasTime = ($editor.EditorType == DCrmEditableGrid.Editors.DateTimePicker);
    if (hasTime) {
        DatePickerDateFormat += ' ' + TimeFormat;
    }
    var active, OriginalValue;
    var HasChanged = false;
    var validator = editorsArrayi.validator;
    var required = editorsArrayi.RequireValue;
    var $errorcontainer = requiredErrorContainer;

    $editor.theUpdater = undefined;
    $editor.RefreshOnSave = false;

    $editor.SetInternals = function (curText) {
        $('#' + inputid).width($('#' + divid).width()).height($('#' + divid).height());
        $('#' + inputid).val(curText.trim()).focus();
    };

    $editor.CloseEditor = function () {
        if ($editor.is(':visible')) {
            $("#" + inputid).datetimepicker('hide');
            $editor.hide();
        }
    };

    var HideInput = function () {
        if ($errorcontainer.is(':visible')) {
            $errorcontainer.hide();
        }
        if ($editor.is(':visible')) {
            $editor.hide();
        }
    };

    $("#" + inputid).datetimepicker({
        timepicker: hasTime,
        format: DatePickerDateFormat,
        formatDate: DateFormat,
        formatTime: TimeFormat,
        onShow: function (dp, $input) {
            OriginalValue = undefined;
            active = table.activeCell;
            if ((active === undefined) || (active.length === 0)) {
                return;
            }

            OriginalValue = _thisHelpers.GetActiveCellText(active);
        },
        onChangeDateTime: function (dp, $input) {
            if ((dp === undefined) || (dp === null) || (dp.getDay() == 0)) {
                //LogIt('DatePicker: onChangeDateTime No dp available.');
                HasChanged = false;
            } else {
                HasChanged = true;
            }
        },
        onClose: function (dp, $input) {
            if ($editor.is(':visible')) {

                active = table.activeCell;
                if ((active === undefined) || (active.length === 0)) {
                    return;
                }

                if (HasChanged == false) {
                    HideInput();
                    active.focus();
                    return;
                }

                var dvalue = $input.val();
                var originalVal = OriginalValue;

                if (dvalue.trim().length == 0) {
                    var txt = _thisHelpers.GetActiveCellText(active);
                    if (required) {
                        var etop = active.offset().top - ($errorcontainer.height() + 8);
                        var eleft = active.offset().left;
                        $errorcontainer.css("left", eleft).css("top", etop).width(active.width() - 20).show();
                        $input.val(txt);
                        $input.focus();
                        return;
                    } else if (txt.length > 0) {
                        _thisHelpers.SetActiveCellText(active, '');
                        $editor.theUpdater.updateCell(active, originalVal);
                    }
                }

                try {
                    var text = dp.dateFormat(DatePickerDateFormat);

                    if ((OriginalValue) && (text.toLowerCase() == OriginalValue.toLowerCase())) {
                        HideInput();
                        active.focus();
                        return;
                    }

                    OriginalValue = OriginalValue || '';

                    var ValidationResult = true;
                    var textUpdated = true;
                    if (validator != undefined) {

                        var param = { EditorType: $editor.EditorType, OriginalValue: OriginalValue, NewValue: text };

                        ValidationResult = validator(param, CrmFieldInfo);
                        if (ValidationResult === true) {
                            _thisHelpers.SetActiveCellText(active, text);
                        } else {
                            textUpdated = false;
                        }
                    } else {
                        _thisHelpers.SetActiveCellText(active, text);
                    }

                    if (textUpdated) {
                        $editor.theUpdater.updateCell(active, originalVal);
                    }
                } catch (e) {

                }

                HideInput();
                active.focus();
            }
        }
    });

    $editor.DestroyEditor = function () {
        $("#" + inputid).datetimepicker('destroy');
        $editor.empty();
        $editor.remove();
    };

    return $editor;
};

$.fn.DCrmEditableGrid.CheckBox = function (table, editorsArrayi) {
    'use strict';

    var Div_ID = _thisHelpers.GenerateUUID();
    var Input_ID = _thisHelpers.GenerateUUID();
    var Label_ID = _thisHelpers.GenerateUUID();
    
    var active;
    var validator = editorsArrayi.validator;
    var CheckedText = editorsArrayi.CheckText;
    var UncheckedText = editorsArrayi.UncheckedText;
    var CrmFieldInfo = {
        FieldSchemaName: editorsArrayi.FieldSchemaName,
        FieldLabel: editorsArrayi.FieldLabel,
        ParentEntitySchemaName: editorsArrayi.ParentEntitySchemaname,
        ParentEntityLabel: editorsArrayi.ParentEntityName
    }

    var $editor = $('<div></div>')
        .attr('id', Div_ID)
        .addClass('GridCheckboxContainer')
        .hide().appendTo(table.parent());
    $editor.theUpdater = undefined;
    $editor.RefreshOnSave = false;

    $editor.EditorType = editorsArrayi.editor;
    $editor.CheckedLabel = CheckedText;
    $editor.UncheckedLabel = UncheckedText;

    var $input = $('<input type="checkbox" />')
        .attr('id', Input_ID)
        .appendTo($editor);
    var $CheckboxLabel = $('<label></label>').attr('id', Label_ID).attr('for', Input_ID).appendTo($editor);

    $editor.SetInternals = function (curText) {
        var initVal = (curText == CheckedText) ? true : false;
        $input.prop('checked', initVal);
        $CheckboxLabel.text(initVal ? CheckedText : UncheckedText);
        $editor.show();
        $input.focus();

        $(window.document).off('mousedown').on('mousedown', function (e) {
            if (e.target) {
                var ctlid = $(e.target).attr('id');
                if ((ctlid == Input_ID) || (ctlid == Label_ID) || (ctlid == Div_ID)) {
                    return false;
                } else {
                    $(window.document).off('mousedown');
                    $editor.hide();
                    $(e.target).focus();
                }
            }
        });
    };

    $editor.CloseEditor = function () {
        if ($editor.is(':visible')) {
            $editor.hide();
        }
    };

    $input.on('click', function (e) {
        active = table.activeCell;
        if ((active === undefined) || (active.length === 0)) {
            //LogEx('CheckBox: Unable to find active cell.');
            return;
        }

        var text = $input.is(':checked') ? CheckedText : UncheckedText;
        var activecelltext = _thisHelpers.GetActiveCellText(active);
        var originalVal = activecelltext;

        if (activecelltext === text) {
            return true;
        }

        var ValidationResult = true;
        var textUpdated = true;
        if (validator != undefined) {
            var param = { EditorType: $editor.EditorType, OriginalValue: activecelltext, NewValue: text, IsChecked: ($input.is(':checked') ? true : false) };

            ValidationResult = validator(param, CrmFieldInfo);
            if (ValidationResult === true) {
                //active.text(text);
                _thisHelpers.SetActiveCellText(active, text);
            } else {
                textUpdated = false;
            }
        } else {
            //active.text(text);
            _thisHelpers.SetActiveCellText(active, text);
        }

        if (textUpdated) {
            // update TableManager cache
            $editor.theUpdater.updateCell(active, originalVal);
            $CheckboxLabel.text(text);
        } else {
            // Reset
            $input.prop("checked", !$input.prop('checked'));
        }
    })
        .on('keydown', function (e) {
            var tkey = e.which || e.keycode;

            if (tkey === DCrmEditableGrid.Keys.ESC) {
                $editor.hide();
                active = table.activeCell;
                if ((active) && (active.length)) {
                    active.focus();
                }
                e.preventDefault();
                e.stopPropagation();
                return false;               
            }

            if (tkey == DCrmEditableGrid.Keys.TAB) {
                tkey = DCrmEditableGrid.Keys.ARROWRIGHT;
            }

            if ((tkey >= DCrmEditableGrid.Keys.ARROWLEFT) && (tkey <= DCrmEditableGrid.Keys.ARROWDOWN)) { // Arrow keys
                if (!$editor.RefreshOnSave) {
                    active = table.activeCell;
                    if ((active) && (active.length)) {
                        var possibleMove = _thisHelpers.Movement(active, tkey);
                        if (possibleMove.length > 0) {
                            $editor.hide();
                            possibleMove.focus();
                            e.preventDefault();
                            e.stopPropagation();
                            return false;
                        }
                    }
                }
            }
        });

    $editor.DestroyEditor = function () {
        $input.off('click').off('keydown');
        $editor.empty();
        $editor.remove();
    };

    return $editor;
};

$.fn.DCrmEditableGrid.Description = function (table, editorsArrayi, requiredErrorContainer) {
    'use strict';

    var active;
    var validator = editorsArrayi.validator;
    var required = editorsArrayi.RequireValue;
    var $errorcontainer = requiredErrorContainer;
    var CrmFieldInfo = {
        FieldSchemaName: editorsArrayi.FieldSchemaName,
        FieldLabel: editorsArrayi.FieldLabel,
        ParentEntitySchemaName: editorsArrayi.ParentEntitySchemaname,
        ParentEntityLabel: editorsArrayi.ParentEntityName
    }

    var DivContainer_ID = _thisHelpers.GenerateUUID();
    var Textarea_ID = _thisHelpers.GenerateUUID();
    var BtnOk_ID = _thisHelpers.GenerateUUID();
    var BtnCancel_ID = _thisHelpers.GenerateUUID();

    var $editor = $('<DIV class="DescriptionBox"></DIV>')
        .attr('id', DivContainer_ID)
        .hide()
        .appendTo('body');
    $editor.EditorType = editorsArrayi.editor;
    $editor.theUpdater = undefined;
    $editor.RefreshOnSave = false;

    var $input = $("<TEXTAREA rows=5>")
        .attr('id', BtnCancel_ID)
        .on('keydown', function (e) {
            var tkey = e.which || e.keycode;
            setTimeout(HideError, 10);
            if (tkey == DCrmEditableGrid.Keys.ESC) {
                HideError();
                $editor.hide();
                active = table.activeCell;
                if ((active) && (active.length)) {
                    active.focus();
                }
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        })
        .appendTo($editor);

    var MaxLength = undefined;
    if (editorsArrayi.MaxLength != 'A') {
        MaxLength = parseInt(editorsArrayi.MaxLength);
        if (isNaN(MaxLength)) {
            MaxLength = undefined;
        } else {
            $input.attr('maxlength', MaxLength);
        }
    }

    var $btndiv = $('<div class="flyout-ButtonContainer"></div>')
    .appendTo($editor);

    var btnOk = $("<BUTTON></BUTTON>")
        .attr('id', BtnOk_ID)
        .text(_thisGlobals.Translation_Labels.Ok)
        .on('click', function (e) {
            active = table.activeCell;
            if ((active === undefined) || (active.length === 0)) {
                //LogEx('Description: Unable to find active cell.');
                HideError();
                $editor.hide();
                return false;
            }

            var text = $input.val();
            

            if ((required) && ((text === undefined) || (text === null) || (text.trim().length == 0))) {
                var etop = active.offset().top - ($errorcontainer.height() + 8);
                var eleft = active.offset().left;
                $errorcontainer.css("left", eleft).css("top", etop).width(active.width() - 20).show();
                return false;
            }

            var activecelltext = _thisHelpers.GetActiveCellText(active);
            var originalVal = activecelltext;

            if (activecelltext === text) {
                HideError();
                $editor.hide();
                active.focus();
                return false;
            }

            var ValidationResult = true;
            var textUpdated = true;
            if (validator != undefined) {
                var param = { EditorType: $editor.EditorType, OriginalValue: activecelltext, NewValue: text };

                ValidationResult = validator(param, CrmFieldInfo);
                if (ValidationResult === true) {
                    //active.text(text);
                    _thisHelpers.SetActiveCellText(active, text);
                } else {
                    textUpdated = false;
                }
            } else {
                //active.text(text);
                _thisHelpers.SetActiveCellText(active, text);
            }

            if (textUpdated) {
                $editor.theUpdater.updateCell(active, originalVal);
                HideError();
                $editor.hide();
                active.focus();
            }
        })
        .appendTo($btndiv);

    var btnCancel = $("<BUTTON></BUTTON>")
        .attr('id', BtnCancel_ID)
        .text(_thisGlobals.Translation_Labels.Cancel)
        .on('click', function (e) {
            $editor.hide();
            HideError();
            active = table.activeCell;
            if ((active) && (active.length)) {
                active.focus()
            }
        })
        .appendTo($btndiv);

    $editor.SetInternals = function (curText) {
        $input.val(curText.trim()).focus();
        $input.focus();

        $(window.document).off('mousedown').on('mousedown', function (e) {
            if (e.target) {
                var ctlid = $(e.target).attr('id');
                if ((ctlid == DivContainer_ID) || (ctlid == Textarea_ID) || (ctlid == BtnOk_ID) || (ctlid == BtnCancel_ID)) {
                } else {
                    $(window.document).off('mousedown');
                    HideError();
                    $editor.hide();
                    $(e.target).focus();
                }
            }
        });
    };

    var HideError = function () {
        if ($errorcontainer.is(':visible')) {
            $errorcontainer.hide();
        }
    };

    $editor.CloseEditor = function () {
        $editor.hide();
    };

    $editor.DestroyEditor = function () {
        btnOk.off('click');
        btnCancel.off('click');
        $input.off('keydown');
        $editor.empty();
        $editor.remove();
    };

    return $editor;
};

$.fn.DCrmEditableGrid.OptionSet = function (table, editorsArrayi, requiredErrorContainer) {
    'use strict';

    var active;
    var validator = editorsArrayi.validator;
    var required = editorsArrayi.RequireValue;
    var $errorcontainer = requiredErrorContainer;
    // get the data
    var optionsData = editorsArrayi.OptionSetData;
    var CrmFieldInfo = {
        FieldSchemaName: editorsArrayi.FieldSchemaName,
        FieldLabel: editorsArrayi.FieldLabel,
        ParentEntitySchemaName: editorsArrayi.ParentEntitySchemaname,
        ParentEntityLabel: editorsArrayi.ParentEntityName
    }

    var elemId = _thisHelpers.GenerateUUID();
    var $editor = $("<SELECT class='OptionsetEditor' tabIndex='0'></SELECT>")
        .attr('id', elemId)
    .on('blur', function (e) {
        HideError();
        $editor.hide();
    })
    .on('change', function (e) {
        HideError();

        var selected = $editor.find(":selected");

        $editor.hide();

        active = table.activeCell;
        if ((active) && (active.length)) {

            var ValidationResult = true;
            var updateValue = true;
            var originalVal = _thisHelpers.GetActiveCellText(active);

            if (validator != undefined) {
                var param = {
                    EditorType: $editor.EditorType,
                    OriginalLabel: originalVal,
                    OriginalValue: active.attr('data-item-optionset-selectedvalue'),
                    NewLabel: selected.text(),
                    NewValue: selected.val()
                };

                ValidationResult = validator(param, CrmFieldInfo);
                if (ValidationResult !== true) {
                    updateValue = false;
                }
            }

            if (updateValue) {
                //active.text(selected.text());
                _thisHelpers.SetActiveCellText(active, selected.text());
                active.attr('data-item-optionset-selectedvalue', selected.val());
                active.attr('data-item-ChangedAttrValue', selected.val());
                $editor.theUpdater.updateCell(active, originalVal, 'op');
            }
            active.focus();
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }).on('keydown',function (e) {
        var tkey = e.which || e.keycode;
        if (tkey === DCrmEditableGrid.Keys.ESC) {
            HideError();
            $editor.hide();
            active = table.activeCell;
            if ((active) && (active.length)) {
                active.focus();
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

    })
    .css('position', 'absolute').hide()
    .appendTo(table.parent());

    $editor.EditorType = editorsArrayi.editor;   
    $editor.theUpdater = undefined;
    $editor.RefreshOnSave = false;
    $editor.EditorId = elemId;

    $.each(optionsData, function (i, item) {
        $editor.append($('<option>', {
            value: item.value,
            text: item.text
        }));
    });

    $editor.SetInternals = function (curText) {
        $.each(optionsData, function (i, item) {
            if (item.text == curText) {
                $editor.val(item.value);
            }
        });
        $editor.focus();
    };

    var HideError = function () {
        if ($errorcontainer.is(':visible')) {
            $errorcontainer.hide();
        }
    };

    $editor.CloseEditor = function () {
        if ($editor.is(':visible')) {
            $editor.hide();
        }
    };

    $editor.DestroyEditor = function () {
        $editor.off('blur').off('change').off('keydown');
        $editor.remove();
    };

    return $editor;
};

$.fn.DCrmEditableGrid.Lookup = function (table, editorsArrayi, requiredErrorContainer, inputFormatErrorContainer) {
    'use strict';

    var active;
    var validator = editorsArrayi.validator;
    var required = editorsArrayi.RequireValue;
    var $errorcontainer = requiredErrorContainer;
    var $inputformaterror = inputFormatErrorContainer;
    var CrmFieldInfo = {
        FieldSchemaName: editorsArrayi.FieldSchemaName,
        FieldLabel: editorsArrayi.FieldLabel,
        ParentEntitySchemaName: editorsArrayi.ParentEntitySchemaname,
        ParentEntityLabel: editorsArrayi.ParentEntityName
    }

    /*
        LookupId: id, (576dfa60-6456-e511-80c0-080027c01cb9)
        LookupLogicalName: logicalName, (incident, owner, customer, lead)
        LookupName: name, (Average order shipment time (sample))
        SchemaNames: EntityTargets[0] + 'id' (incidentid)
        EntityTargets: {"account", "contact"]
    */

    var listData = editorsArrayi.LookupData;
    // How many menus we display
    var dropdownMenuSize = (listData.EntityTargets.length == 1) ? 5 : 3;

    var $editor = $('<div class="LookupContainer"></div>').hide().appendTo(table.parent());
    $editor.EditorType = editorsArrayi.editor;
    $editor.theUpdater = undefined;
    $editor.RefreshOnSave = false;
    $editor.HasLookupInitialized = false;

    var Input_ID = _thisHelpers.GenerateUUID();
    var $input = $('<input class="LookupInput" type="text" />').attr('id', Input_ID).appendTo($editor);

    var Img_ID = _thisHelpers.GenerateUUID();
    var $img = $('<button class="LookupSearchBtn"></button>')
        .attr('id', Img_ID)
        .on('click', function (e) {
            e.stopPropagation();

            if (!$editor.HasLookupInitialized) {
                $editor.HasLookupInitialized = true;
                FetchAndPopulate();
            }

            HideError();
            $menu.show();
        })
        .appendTo($editor);
    var $menu = $('<ul class="lookupDropDown"><div class="gutterLine"></div></ul>')
        .hide()
        .css({ 'left': 25, 'top': 0 })
        .appendTo(table.parent());

    var entityObjectTypeCode = [];
    var entityPrimaryName = [];

    function InitializaLookupData() {
        for (var i = 0; i < listData.EntityTargets.length; i++) {
        
            // EntityTargets
            entityObjectTypeCode[i] = XrmServiceToolkit.Common.GetObjectTypeCode(listData.EntityTargets[i]);
            entityPrimaryName[i] = '';
            listData.SchemaNames[i] = listData.EntityTargets[i] + 'id';

            var result = XrmServiceToolkit.Soap.RetrieveEntityMetadata(['Attributes'], listData.EntityTargets[i], true);
            if (result.length > 0) {
                var ent = undefined;
                for (var index = 0, j = result[0].Attributes.length; index < j; index++) {
                    ent = result[0].Attributes[index];
                    if ((ent) && (ent.IsPrimaryName)) {
                        entityPrimaryName[i] = ent.SchemaName.toLowerCase();
                        break;
                    }
                }
            }
        }
    }

    function DoesAttributeExists(entityname, attrname) {
        try {
            var attr = XrmServiceToolkit.Soap.RetrieveAttributeMetadata(entityname, attrname, true);
        } catch (e) {
            LogIt("Attribute " + attrname + " does not exist in " + entityname);
            return false;
        }
        return true;
    }

    function FetchtargetEntity(i) {
        if (listData.EntityTargets[i].length == 0) {
            return [];
        }

        if (DoesAttributeExists(listData.EntityTargets[i], listData.SchemaNames[i])) {
            var fetch = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" page="1" count="' + dropdownMenuSize + '">' +
              '<entity name="' + listData.EntityTargets[i] + '">' +
                '<attribute name="' + listData.SchemaNames[i] + '" />' +
                '<attribute name="' + entityPrimaryName[i] + '" />' +
                '<order attribute="' + entityPrimaryName[i] + '" descending="false" />' +
                //'<filter type="and">' +
                //  '<condition attribute="statecode" operator="eq" value="0" />' +
                //'</filter>' +
              '</entity>' +
            '</fetch>';
            return XrmServiceToolkit.Soap.Fetch(fetch);
        }

        return '';
    }

    function FetchtargetEntityPartial(searchfor, i) {
        if (listData.EntityTargets[i].length == 0) {
            return [];
        }
        searchfor = searchfor.replace('&', '&amp;').replace('<', "&lt;").replace('>', "&gt;");
        LogIt("FetchtargetEntityPartial " + searchfor);
        var fetch = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" page="1" count="' + dropdownMenuSize + '">' +
          '<entity name="' + listData.EntityTargets[i] + '">' +
            '<attribute name="' + listData.SchemaNames[i] + '" />' +
            '<attribute name="' + entityPrimaryName[i] + '" />' +
            '<order attribute="' + entityPrimaryName[i] + '" descending="false" />' +
            '<filter type="and">' +
              //'<condition attribute="statecode" operator="eq" value="0" />' +
               '<condition attribute="' + entityPrimaryName[i] + '" operator="like" value="%' + searchfor + '%" />' +
            '</filter>' +
          '</entity>' +
        '</fetch>';
        return XrmServiceToolkit.Soap.Fetch(fetch);
    }

    function FetchtargetEntityExact(searchfor, i) {
        if (listData.EntityTargets[i].length == 0) {
            return [];
        }
        searchfor = searchfor.replace('&', '&amp;').replace('<', "&lt;").replace('>', "&gt;");
        LogIt("FetchtargetEntityExact " + searchfor);
        var fetch = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" page="1" count="' + dropdownMenuSize + '">' +
          '<entity name="' + listData.EntityTargets[i] + '">' +
            '<attribute name="' + listData.SchemaNames[i] + '" />' +
            '<attribute name="' + entityPrimaryName[i] + '" />' +
            '<order attribute="' + entityPrimaryName[i] + '" descending="false" />' +
            '<filter type="and">' +
              //'<condition attribute="statecode" operator="eq" value="0" />' +
               '<condition attribute="' + entityPrimaryName[i] + '" operator="eq" value="' + searchfor + '" />' +
            '</filter>' +
          '</entity>' +
        '</fetch>';
        return XrmServiceToolkit.Soap.Fetch(fetch);
    }

    function FetchAndValidateExcat(text) {
        for (var i = 0; i < listData.EntityTargets.length; i++) {
            var result = FetchtargetEntityExact(text, i);
            if(result.length == 1) {
                $input.attr('data-item-lookup-guid', result[0].attributes[listData.SchemaNames[i]].value);
                $input.attr('data-item-lookup-logicalname', listData.EntityTargets[i]);
                return true;
            }
        }
        return false;
    }

    function FetchAndPopulatePartial(text) {
        $menu.find('li').remove();
        var haveAnyRec = 0;
        for (var i = 0; i < listData.EntityTargets.length; i++) {
            $('<li>' + listData.EntityTargets[i].capitalizeFirstLetter() + '</li>').addClass('header').appendTo($menu);
            haveAnyRec += PopulateDropDown(FetchtargetEntityPartial(text, i), i);
        }
        AddMenuTail();
        return haveAnyRec;
    }

    function FetchAndPopulate() {
        $menu.find('li').remove();
        var haveAnyRec = 0;

        for (var i = 0; i < listData.EntityTargets.length; i++) {
            $('<li>' + listData.EntityTargets[i].capitalizeFirstLetter() + '</li>').addClass('header').appendTo($menu);
            haveAnyRec += PopulateDropDown(FetchtargetEntity(i), i);
        }
        AddMenuTail();
        return haveAnyRec;
    }

    function AddMenuTail() {
        // Add a sep and "Lookup more records" as a last menu item 
        // Way unsupported
        $('<li></li>').addClass('divider').appendTo($menu);
        var $row = $('<li></li>').appendTo($menu);
        var $href = $('<a href="#" class="LookupLink"></a>')
            .click(function (e) {
                //var url = "/_controls/lookup/lookupsingle.aspx?objecttypes=1,2";
                var url = "/_controls/lookup/lookupsingle.aspx?objecttypes=" + entityObjectTypeCode.join(',');

                /*
                Query String Parameters for Customer (account, contact)
AllowFilterOff:0
DefaultType:1
DefaultViewId:{A9AF0AB8-861D-4CFA-92A5-C6281FED7FAB}
DisableQuickFind:0
DisableViewPicker:0
IsInlineMultiLookup:0
LookupStyle:single
ShowNewButton:1
ShowPropButton:1
browse:false
currentObjectType:112
currentid:{5B6DFA60-6456-E511-80C0-080027C01CB9}
dType:1
mrsh:false
objecttypes:1,2

Request URL:http://localhost/Demo/_controls/lookup/lookupinfo.aspx?AllowFilterOff=0&DefaultType=1&DefaultViewId=%7bA9AF0AB8-861D-4CFA-92A5-C6281FED7FAB%7d&DisableQuickFind=0&DisableViewPicker=0&IsInlineMultiLookup=0&LookupStyle=single&ShowNewButton=1&ShowPropButton=1&browse=false&currentObjectType=112&currentid=%7b5B6DFA60-6456-E511-80C0-080027C01CB9%7d&dType=1&mrsh=false&objecttypes=1%2c2
                */

                //Dialog Options would be set here
                var DialogOptions = new window.parent.Xrm.DialogOptions();
                DialogOptions.width = 500;
                DialogOptions.height = 500;
                window.parent.Xrm.Internal.openDialog(
                    window.parent.Mscrm.CrmUri.create(url).toString(),
                    DialogOptions, null, null, CallbackFunction);
                $menu.hide();
                return false;
            })
            .appendTo($row);
        var $span = $('<span class="LookupLinkSpan"></span>')
            .text(_thisGlobals.Translation_Labels.LookupMoreRecords)
            .addClass('itemTitle')
            .appendTo($href);
    }

    //Call back function for the Lookup
    function CallbackFunction(returnValue) {
        if ((returnValue) && (returnValue.items) && (returnValue.items[0].id) && (returnValue.items[0].name)) {
            //LogIt("name " + returnValue.items[0].name + " GUID " + returnValue.items[0].id); // Includes {}
            listData.LookupName = returnValue.items[0].name;
            listData.LookupId = returnValue.items[0].id.replace('{','').replace('}','');
            // returnValue.items[0].type "112"
            listData.LookupLogicalName = returnValue.items[0].typename // 'incident" LogicalName

            active = table.activeCell;
            if ((active === undefined) || (active.length === 0)) {
                $input.val(listData.LookupName).attr('data-item-lookup-guid', listData.LookupId);
                $menu.hide();
                $input.focus();
                return false;
            }

            var originalVal = _thisHelpers.GetActiveCellText(active);

            if (InvokeValidator(
                listData.LookupName,
                listData.LookupId,
                listData.LookupLogicalName,
                originalVal,
                active.attr('data-item-lookup-guid'),
                active.attr('data-item-lookup-logicalname'))) {
                //active.text(listData.LookupName);
                _thisHelpers.SetActiveCellText(active, listData.LookupName);
                    active.attr('data-item-lookup-guid', listData.LookupId);
                    active.attr('data-item-lookup-logicalname', listData.LookupLogicalName);
                    $editor.theUpdater.updateCell(active, originalVal, 'lo');
                    $editor.hide();
                    $menu.hide();
                    //$bg.hide();
                    active.focus();
                    return false;
            } else {
                $menu.hide();
                //$bg.hide();
                $input.focus();
                return false;
            }
        }
    }

    function PopulateDropDown(list, dataIndex) {
        var listlen = dropdownMenuSize;
        if (list.length < dropdownMenuSize) {
            listlen = list.length;
        }

        if (listlen == 0) {
            return listlen;
        }
        var $row, $href, $span, icon;

        for (var i = 0; i < listlen; i++) {
            if (!list[i].attributes[entityPrimaryName[dataIndex]]) {
                continue;
            }
            var $row = $('<li></li>').appendTo($menu);
            var $href = $('<a href="#" class="LookupLink"></a>')
                .attr('data-item-lookup-guid', list[i].attributes[listData.SchemaNames[dataIndex]].value)
                .attr('data-item-lookup-name', list[i].attributes[entityPrimaryName[dataIndex]].value)
                .attr('data-item-lookup-logicalname', listData.EntityTargets[dataIndex])
                .on('click', function (e) {
                    HideError();
                    listData.LookupId = $(this).attr('data-item-lookup-guid');
                    listData.LookupName = $(this).attr('data-item-lookup-name');
                    listData.LookupLogicalName = $(this).attr('data-item-lookup-logicalname');

                    active = table.activeCell;
                    if ((active === undefined) || (active.length === 0)) {
                        $input.val(listData.LookupName).attr('data-item-lookup-guid', listData.LookupId).attr('data-item-lookup-logicalname', listData.LookupLogicalName);
                        $menu.hide();
                        //$bg.hide();
                        $input.focus();
                        return false;
                    }

                    var originalVal = _thisHelpers.GetActiveCellText(active);
                    if (InvokeValidator(
                        listData.LookupName,
                        listData.LookupId,
                        listData.LookupLogicalName,
                        originalVal,
                        active.attr('data-item-lookup-guid'),
                        active.attr('data-item-lookup-logicalname'))) {
                        //active.text(listData.LookupName);
                        _thisHelpers.SetActiveCellText(active, listData.LookupName);
                            active.attr('data-item-lookup-guid', listData.LookupId);
                            active.attr('data-item-lookup-logicalname', listData.LookupLogicalName);
                            $editor.theUpdater.updateCell(active, originalVal, 'lo');
                            $editor.hide();
                            $menu.hide();
                            //$bg.hide();
                            active.focus();
                            return false;
                    } else {
                        $menu.hide();
                        //$bg.hide();
                        $input.focus();
                        return false;
                    }

                })
                .appendTo($row);
            var $span = $('<span class="LookupLinkSpan"></span>')
                .text(list[i].attributes[entityPrimaryName[dataIndex]].value)
                .addClass('itemTitle')
                .appendTo($href);

            //var icon = $('<img>');
            //icon.attr('src', 'dcrmeg_record');
            //icon.insertBefore($row.find('.itemTitle'));
        }

        return listlen;
    }

    // Sort the data for searching
    function compare(a, b) {
        if (a.Name < b.Name)
            return -1;
        if (a.Name > b.Name)
            return 1;
        return 0;
    }

    function compareids(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }

    $input.on('keydown', function (e) {
        var tkey = e.which || e.keycode;
        HideError();

        if (tkey === DCrmEditableGrid.Keys.ENTER) {

            setTimeout(HideError, 10);
            active = table.activeCell;
            if ((active === undefined) || (active.length === 0)) {
                //LogEx('Description: Unable to find active cell.');
                $editor.hide();
                $menu.hide();
                //$bg.hide();
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            var originalVal = _thisHelpers.GetActiveCellText(active);
            var orgGuid = active.attr('data-item-lookup-guid');
            var orgLogicalName = active.attr('data-item-lookup-logicalname');
            var text = $input.val();

            if (text.trim().length == 0) {

                if (required) {
                    var etop = active.offset().top - ($errorcontainer.height() + 8);
                    var eleft = active.offset().left;
                    $errorcontainer.css("left", eleft).css("top", etop).width(active.width() - 20).show();
                    $input.focus().select();
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }

                //active.text(text);
                _thisHelpers.SetActiveCellText(active, text);
                active.attr('data-item-lookup-guid', "");
                $editor.theUpdater.updateCell(active, originalVal, 'lo');
                $editor.hide();
                $menu.hide();
                //$bg.hide();
                active.focus();
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            if (!FetchAndValidateExcat(text)) {
                // Not valid entity reference
                setTimeout(function () { setupInvalidFormat(_thisGlobals.Translation_Labels.NotaValidEntry); }, 10);
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            if (originalVal === text) {
                $editor.hide();
                $menu.hide();
                //$bg.hide();
                active.focus();
                e.preventDefault();
                e.stopPropagation();
                return false;
            }

            var guid = $input.attr('data-item-lookup-guid');
            var newLogicalName = $input.attr('data-item-lookup-logicalname');
            if (InvokeValidator(text, guid, newLogicalName, originalVal, orgGuid, orgLogicalName)) {
                // update TableManager cache
                $editor.theUpdater.updateCell(active, originalVal, 'lo');
                $editor.hide();
                $menu.hide();
                //$bg.hide();
                active.focus();
            }

            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if (tkey === DCrmEditableGrid.Keys.ESC) {
            setTimeout(HideError, 10);
            $editor.hide();
            $menu.hide();
            //$bg.hide();
            active = table.activeCell;
            if ((active) && (active.length)) {
                active.focus();
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        if (tkey === DCrmEditableGrid.Keys.TAB) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

    }).on('cut paste', function (e) {
        setTimeout(HideError, 10);
        setTimeout(function () {
            var val = $input.val();
            if (val.trim().length > 0) {
                val = val.toLowerCase();
                //LogIt("Cut Paste input value " + val);
                if (FetchAndPopulatePartial(val) > 0) {
                    $menu.show();
                } else {
                    $menu.hide();
                }
            }
        }, 5);
    }).on('keyup', function(e) {
        var text = $input.val();
        //LogIt("Key up text " + text);
        if (text.trim().length > 0) {
            if (FetchAndPopulatePartial(text) > 0) {
                $menu.show();
            } else {
                $menu.hide();
            }
        } else {
            if (FetchAndPopulate() > 0) {
                $menu.show();
            } else {
                $menu.hide();
            }
        }
    });

    $editor.SetInternals = function (curText, Guid, LogicalName) {
        //$bg.show();
        $editor.show();
        $input
            .width($editor.width() - 30)
            .height($editor.height())
            .attr('data-item-lookup-guid', Guid)
            .attr('data-item-lookup-logicalname', LogicalName)
            .val(curText)
            .focus()
            .select();

        listData.LookupName = curText;
        listData.LookupId = Guid;
        listData.LookupLogicalName = LogicalName;

        var edWidth = $editor.width();
        var left = 0;

        // Try right side first
        if (($editor.offset().left + edWidth + $menu.width()) < $(window).width()) {
            left = $editor.offset().left + edWidth;
        } else {
            left = $editor.offset().left - 5;
            if (left < $menu.width()) {
                left = $editor.offset().left + edWidth;
            } else {
                left -= $menu.width();
            }
        }

        var top = $editor.offset().top;
        var h = $menu.outerHeight() + $editor.offset().top + 2;
        if ((h - $(window).height()) > 0) {
            top = $(window).height() - $menu.outerHeight() - 15;
        }

        $menu.css({ 'left': left, 'top': top });

        $(window.document).off('mousedown').on('mousedown', function (e) {
            if (e.target) {
                var ctlid = $(e.target).attr('id');

                if ((ctlid == Input_ID) || (ctlid == Img_ID) || ($(e.target).hasClass('LookupLinkSpan'))) {
                } else {
                    $(window.document).off('mousedown');
                    $editor.CloseEditor();
                    $(e.target).focus();
                }
            }
        });
    };

    var InvokeValidator = function (newText, newGuid, newLogicalName, OrgText, OrgGuid, OrgLogicalName) {
        var ValidationResult = true;
        var textUpdated = true;
        if (validator != undefined) {

            var param = {
                EditorType: $editor.EditorType,
                OriginalLabel: OrgText,
                OriginalGuid: OrgGuid,
                OriginalLogicalName: OrgLogicalName,
                NewLabel: newText,
                NewGuid: newGuid,
                NewLogicalName: newLogicalName
            };

            textUpdated = validator(param, CrmFieldInfo);
        }

        if (textUpdated) {
            //active.text(newText);
            _thisHelpers.SetActiveCellText(active, newText);
            active.attr('data-item-lookup-guid', newGuid);
            active.attr('data-item-lookup-logicalname', newLogicalName);

            //active.attr('data-item-OriginalAttrValue', OrgGuid);
            active.attr('data-item-ChangedAttrValue', newGuid);
        }

        return textUpdated;
    };

    var HideError = function () {
        if ($errorcontainer.is(':visible')) {
            $errorcontainer.hide();
        }
        if ($inputformaterror.is(':visible')) {
            $inputformaterror.hide();
        }
    };

    var setupInvalidFormat = function (txt) {
        var etop = active.offset().top - ($inputformaterror.height() + 8);
        var eleft = active.offset().left;
        $inputformaterror.text(txt).css("left", eleft).css("top", etop).width(active.width() - 20).show();
        $input.focus();
    }

    $editor.CloseEditor = function () {
        if ($editor.is(':visible')) {
            $editor.hide();
            $menu.hide();
        }
    };

    $editor.DestroyEditor = function () {
        $editor.off('keydown').off('cut').off('paste').off('keyup');
        var tt = $menu.find('a');
        if ((tt) && (tt.length)) {
            tt.off('click');
        }
        $menu.remove();
        $editor.remove();
    };

    InitializaLookupData();

    return $editor;
};

var CrmEditableGrid = (function () {
    
    function CrmEditableGrid($table, options) {
        var self = this;
        // Jquery object $('#xxxx')
        // self.MainTable.parent() or self.MainTable[0].thead
        // Consulting
        self.mainTable = $table;
        self.activeOptions = options;

        self.errorcontainer = $("#" + self.activeOptions.RequiredErrorContainer);
        self.inputFormatErrorContainer = $('#' + self.activeOptions.InputFormatErrorContainer);

        self.GridEditors = CreateEditors(self.activeOptions.columneditors, self.mainTable, self.errorcontainer, self.inputFormatErrorContainer);
        self.activeCell = undefined;
        self.defaultPagerSize = self.activeOptions.PagerSize;
        self.activateOnSingleClick = true;
        self.autoSave = self.activeOptions.AutoSaveChanges;
        self.contextMenuTarget = undefined;
        self.SelectedRecordGuid = undefined;
        
        self.showEditor = function (e) {
            self.mainTable.activeCell = undefined;
            self.activeCell = undefined;
            self.activeCell = self.mainTable.find('td:focus');
            self.mainTable.activeCell = self.activeCell;

            if ((self.activeCell) && (self.activeCell.length) && (self.activeCell[0].cellIndex > 0) && (self.activeCell.attr('data-item-footer-cell') != '0')) {

                if (self.activeCell.hasClass('IsDirty')) {
                    $('#' + self.activeOptions.GridContainerIds.UndoChanges).removeClass('GreyImage');
                } else {
                    $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                }

                var curEditor = self.GridEditors[self.activeCell[0].cellIndex];
                if (curEditor === null) {
                    self.mainTable.activeCell = undefined;
                    LogIt("Read-only column. No editor");
                    return;
                }

                var curText = _thisHelpers.GetActiveCellText(self.activeCell);

                if ((curEditor.EditorType == DCrmEditableGrid.Editors.Text) ||
                    (curEditor.EditorType == DCrmEditableGrid.Editors.Numeric) ||
                    (curEditor.EditorType == DCrmEditableGrid.Editors.Decimal) ||
                    (curEditor.EditorType == DCrmEditableGrid.Editors.Currency)) {

                    if ((curEditor.EditorType == DCrmEditableGrid.Editors.Currency) ||
                        (curEditor.EditorType == DCrmEditableGrid.Editors.Decimal) ||
                        (curEditor.EditorType == DCrmEditableGrid.Editors.Numeric)) {
                        curText = _thisHelpers.RemoveNumericFormat(curText);
                    }

                    curEditor.val(curText)
                        .show()
                        .css({ 'left': self.activeCell.offset().left, 'top': self.activeCell.offset().top })
                        .width(self.activeCell.width() - 5)
                        .height(self.activeCell.height() - 2)
                        .focus()
                        .select();

                } else if ((curEditor.EditorType == DCrmEditableGrid.Editors.DatePicker) ||
                    (curEditor.EditorType == DCrmEditableGrid.Editors.DateTimePicker)) {
                    curEditor.show()
                        .offset(self.activeCell.offset())
                        .width(self.activeCell.width())
                        .height(self.activeCell.height())
                        .SetInternals(curText);
                } else if (curEditor.EditorType == DCrmEditableGrid.Editors.Description) {
                    var left = self.activeCell.offset().left, top = self.activeCell.offset().top + 5;
                    if (top + curEditor.height() >= $(window).height()) {
                        top -= curEditor.height();
                    }
                    if (left + curEditor.width() >= $(window).width()) {
                        left -= curEditor.width();
                    }

                    curEditor
                        .show()
                        .css({ 'left': left, 'top': top })
                        .SetInternals(curText);
                } else if (curEditor.EditorType == DCrmEditableGrid.Editors.Checkbox) {
                    curEditor
                        .css('left', self.activeCell.offset().left)
                        .css('top', self.activeCell.offset().top)
                        .width(self.activeCell.width())
                        .height(self.activeCell.outerHeight() - 1)
                        .SetInternals(curText);
                } else if (curEditor.EditorType == DCrmEditableGrid.Editors.OptionSet) {
                    curEditor.show()
                        .css('left', self.activeCell.offset().left)
                        .css('top', self.activeCell.offset().top + 1)
                        .width(self.activeCell.width() - 1)
                        .focus()
                        .SetInternals(curText);
                } else if (curEditor.EditorType == DCrmEditableGrid.Editors.Lookup) {
                    curEditor
                        //.show()
                        .css('left', self.activeCell.offset().left)
                        .css('top', self.activeCell.offset().top + 1)
                        .width(self.activeCell.width())
                        .height(self.activeCell.height() - 2)
                        .SetInternals(curText, self.activeCell.attr('data-item-lookup-guid'), self.activeCell.attr('data-item-lookup-logicalname'));
                }
            }
            else {
                self.activeCell = undefined;
                self.mainTable.activeCell = undefined;
                $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                HideError(self);
                for (var i = 0; i < self.GridEditors.length; i++) {
                    if (self.GridEditors[i] != null) {
                        self.GridEditors[i].CloseEditor();
                    }
                }
            }
            return true;
        }

        SetupButtons(self);

        self.mainTable
            .on('click', function (e) {
                if ((e.target) && ((e.target.tagName == 'TD') || (e.target.tagName == 'SPAN'))) {

                    e.stopPropagation();

                    self.activeCell = undefined;
                    if (e.target.tagName == 'TD') {
                        self.activeCell = $(e.target);
                    } else if ($(e.target).parent()[0].tagName == 'TD') {
                        self.activeCell = $(e.target).parent();
                    }

                    if ((self.activeCell == undefined) ||
                        (self.activeCell.attr('data-item-footer-cell') == '0') ||
                        (self.activeCell.parent().attr('data-subgrid-id'))) {
                        //LogIt("Click subgrid ");
                        $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                        self.activeCell = undefined;
                        return;
                    }

                    if (self.activeCell[0].cellIndex > 0) {
                        self.mainTable.focus();
                        self.activeCell.focus();
                        if (self.activeCell.hasClass('IsDirty')) {
                            $('#' + self.activeOptions.GridContainerIds.UndoChanges).removeClass('GreyImage');
                        } else {
                            $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                        }

                        //if (self.activateOnSingleClick) {
                            self.showEditor();
                        //}
                    } else {
                        $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                        self.activeCell = undefined;
                    }

                } else {
                    $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                    self.activeCell = undefined;
                }
            })
            .on('contextmenu', function (e) {
                if ((e.target) && ((e.target.tagName == 'TD') || (e.target.tagName == 'TH') || (e.target.tagName == 'SPAN'))) {
                    e.stopPropagation();
                    if (e.target.tagName == 'TH') {
                        self.contextMenuTarget = undefined;
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    } else if (e.target.tagName == 'TD') {
                        self.contextMenuTarget = $(e.target);
                    } else if ($(e.target).parent()[0].tagName == 'TD') {
                        self.contextMenuTarget = $(e.target).parent();
                    } else {
                        self.contextMenuTarget = undefined;
                        e.preventDefault();
                        return false;
                    }

                    if (self.contextMenuTarget.parent().attr('data-subgrid-id')) {
                        LogIt("On contextmenu");
                        self.contextMenuTarget = undefined;
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }

                    // Cover rest of page with invisible div that when clicked will cancel the popup.
                    var $bg = $('<div></div>')
                      .addClass('InvisibleFrame')
                      .appendTo('body')
                      .on('contextmenu click', function () {
                          $bg.remove();
                          menu.remove();
                          // If click or right click anywhere else on page: remove clean up.
                          if (self.contextMenuTarget) {
                              self.contextMenuTarget.focus();
                              self.contextMenuTarget = undefined;
                          }
                          return false;
                      }).show();

                    var haveanymenu = false;

                    var menu = $('<ul class="contextMenuPlugin"><div class="gutterLine"></div></ul>').appendTo('body');
                    var contextMenuTargetText = _thisHelpers.GetActiveCellText(self.contextMenuTarget).trim();

                    if (contextMenuTargetText.length > 0) {
                        haveanymenu = true;
                        $('<li><a href="#" class="contextMenuLink" id="CopytoClipboardCtxMenuItem"><span class="itemTitle">' + _thisGlobals.Translation_Labels.CopyValueToClipboard + '</span></a></li>').appendTo(menu);
                    }

                    if (self.contextMenuTarget.attr('data-item-footer-cell') != '0') {
                        if (haveanymenu) {
                            $('<li class="divider"></li>').appendTo(menu);
                        }
                        haveanymenu = true;
                        $('<li><a href="#" class="contextMenuLink" id="OpenRecordCtxMenuItem"><span class="itemTitle">' + _thisGlobals.Translation_Labels.OpenRecordInNewWindow + '</span></a></li>').appendTo(menu);
                    }

                    if ((self.contextMenuTarget.attr('data-item-lookup-guid')) && (self.contextMenuTarget.attr('data-item-lookup-guid').trim().length > 0)) {
                        if (haveanymenu) {
                            $('<li class="divider"></li>').appendTo(menu);
                        }
                        haveanymenu = true;
                        $('<li><a href="#" class="contextMenuLink" id="OpenLookupRecordCtxMenuItem"><span class="itemTitle">' + _thisGlobals.Translation_Labels.OpenLookupInNewWindow + '</span></a></li>').appendTo(menu);
                    }

                    var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th');
                    var index = self.contextMenuTarget[0].cellIndex;
                    var isrequiered = $($theadcells[index]).attr('data-item-header-field-required');

                    if ((!self.activeOptions.ParentFormIsReadOnly) && (isrequiered == '0') && (contextMenuTargetText.length > 0)) {
                        var ed = parseInt($($theadcells[index]).attr('data-item-header-editortype'));
                        if ((ed == DCrmEditableGrid.Editors.DatePicker) || (ed == DCrmEditableGrid.Editors.DateTimePicker)) {
                            haveanymenu = true;
                            $('<li class="divider"></li>').appendTo(menu);
                            $('<li><a href="#" class="contextMenuLink" id="ClearValueCtxMenuItem"><span class="itemTitle">' + _thisGlobals.Translation_Labels.ClearValue + '</span></a></li>').appendTo(menu);
                        }
                    }

                    if (self.contextMenuTarget.attr('data-fieldformat') == 'url') {
                        if (haveanymenu) {
                            $('<li class="divider"></li>').appendTo(menu);
                        }
                        haveanymenu = true;
                        $('<li><a href="#" class="contextMenuLink" id="OpenUrlInNewWindowCtxMenuItem"><span class="itemTitle">' + _thisGlobals.Translation_Labels.OpenUrlInNewWindow + '</span></a></li>').appendTo(menu);
                    }

                    if (!haveanymenu) {
                        $bg.remove();
                        menu.remove();
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }

                    menu.find('a').click(function (e) {
                        var id = $(this).attr('id');
                        if (id == 'CopytoClipboardCtxMenuItem') {
                            if (self.contextMenuTarget) {
                                _thisHelpers.CopyTextToClipboard(_thisHelpers.GetActiveCellText(self.contextMenuTarget));
                            }
                        } else if (id == 'OpenRecordCtxMenuItem') {
                            if (self.contextMenuTarget) {
                                var $row = self.contextMenuTarget.parent();
                                if (($row) && ($row.length > 0)) {
                                    //window.parent.Xrm.Utility.openEntityForm(self.activeOptions.entityschemaName, $($row).attr('data-record-guid'));
                                    openEntityRecord(self.activeOptions.entityschemaName, $($row).attr('data-record-guid'));
                                }
                            }
                        } else if (id == 'OpenLookupRecordCtxMenuItem') {
                            openEntityRecord(self.contextMenuTarget.attr('data-item-lookup-logicalname'), self.contextMenuTarget.attr('data-item-lookup-guid'));

                        } else if (id == 'ClearValueCtxMenuItem') {
                            if (self.contextMenuTarget) {

                                try {
                                    var index = (self.contextMenuTarget)[0].cellIndex;
                                    var validator = self.activeOptions.columneditors[index - 1].validator;

                                    if (validator) {
                                        var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th');

                                        var param = {
                                            EditorType: parseInt($($theadcells[index]).attr('data-item-header-editortype')),
                                            OriginalValue: _thisHelpers.GetActiveCellText(self.contextMenuTarget),
                                            NewValue: ''
                                        };


                                        var CrmFieldInfo = {
                                            FieldSchemaName: self.activeOptions.columneditors[index - 1].FieldSchemaName,
                                            FieldLabel: self.activeOptions.columneditors[index - 1].FieldLabel,
                                            ParentEntitySchemaName: self.activeOptions.columneditors[index - 1].ParentEntitySchemaname,
                                            ParentEntityLabel: self.activeOptions.columneditors[index - 1].ParentEntityName
                                        }
                                        if (validator(param, CrmFieldInfo)) {
                                            _thisHelpers.SetActiveCellText(self.contextMenuTarget, '');
                                            self.tableDataManager.updateCell(self.contextMenuTarget);
                                        }
                                    }
                                } catch (e) {

                                }
                            }
                        } else if (id == 'OpenUrlInNewWindowCtxMenuItem') {
                            window.open(_thisHelpers.GetActiveCellText(self.contextMenuTarget), '_blank');
                        }

                        $bg.remove();
                        menu.remove();
                        if (self.contextMenuTarget) {
                            if (self.contextMenuTarget.attr('data-item-footer-cell') != '0') {
                                self.activeCell = self.contextMenuTarget;
                                self.contextMenuTarget.focus();
                            }
                            self.contextMenuTarget = undefined;
                        }
                        return false;
                    });

                    menu.show();

                    var left = e.pageX + 5, top = e.pageY;
                    if (top + menu.height() >= $(window).height()) {
                        top -= menu.height();
                    }
                    if (left + menu.width() >= $(window).width()) {
                        left -= menu.width();
                    }
                    menu.css({ zIndex: 100006, left: left, top: top })
                        .on('contextmenu', function () {
                            if (self.contextMenuTarget) {
                                self.contextMenuTarget.focus();
                                self.contextMenuTarget = undefined;
                            }
                            return false;
                        });

                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            })
            .on('keydown' ,function (e) {
                var tkey = e.which || e.keycode;
                var prevent = false;
                //LogIt("Table e.which [" + tkey + "]");

                if (tkey == DCrmEditableGrid.Keys.TAB) {
                    tkey = DCrmEditableGrid.Keys.ARROWRIGHT;
                }

                if ((tkey >= DCrmEditableGrid.Keys.ARROWLEFT) && (tkey <= DCrmEditableGrid.Keys.ARROWDOWN)) {
                    var possibleMove = _thisHelpers.Movement($(e.target), tkey);
                    if ((possibleMove) && (possibleMove.length) && (possibleMove.length > 0)) {
                        self.mainTable.focus();
                        possibleMove.focus();
                        if (possibleMove.attr('data-item-footer-cell') != '0') {
                            self.activeCell = $(possibleMove);
                            if (self.activeCell.hasClass('IsDirty')) {
                                $('#' + self.activeOptions.GridContainerIds.UndoChanges).removeClass('GreyImage');
                            } else {
                                $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                            }
                        } else {
                            $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                            self.activeCell = undefined;
                        }
                        prevent = true;
                    }
                } else if (tkey == DCrmEditableGrid.Keys.ENTER) {
                    self.activeCell = self.mainTable.find('td:focus');
                    prevent = ((self.activeCell) && (self.activeCell.length) && (self.activeCell[0].cellIndex > 0) && (self.activeCell.attr('data-item-footer-cell') != '0'));
                    if (prevent) {
                        $(self.activeCell).focus();
                        self.showEditor(e, self);
                    } else {
                        self.activeCell = undefined;
                    }
                }

                e.stopPropagation();
                if (prevent) {
                    e.preventDefault();
                    return false;
                }
            });
        
        // ensure events are fired for tds
        self.mainTable.find('td').prop('tabindex', 1);

        self.HideEditors = function () {
            for (var i = 0; i < self.GridEditors.length; i++) {
                if (self.GridEditors[i] != null) {
                    self.GridEditors[i].CloseEditor();
                }
            }
        };

        self.clearTableBody = function () {
            //$(table.tBodies[0]).empty();
            if (/Trident\/[4-9]/.test(navigator.userAgent)) {
                function empty() {
                    while (this.firstChild)
                        this.removeChild(this.firstChild);
                }
                empty.apply(self.mainTable[0].tBodies[0]);
            } else {
                self.mainTable[0].tBodies[0].innerHTML = "";
            }
        };

        self.ResetColResizerHeight = function () {
            try {
                if (self.ColumnResizer) {
                    self.ColumnResizer.UpdatecolResizable();
                }
            } catch (e) {
                LogEx("Resizer Exception: " + e.message);
            }
        }
        
        self.ResetTooltips = function () {
            CreateTooltips(self);
        }

        self.PageniationDone = function (pagersize) {
            LogIt("PageniationDone");
            if (self.defaultPagerSize != pagersize) {
                self.defaultPagerSize = pagersize;
            }

            $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
            HideError(self);
            for (var i = 0; i < self.GridEditors.length; i++) {
                if (self.GridEditors[i] != null) {
                    self.GridEditors[i].CloseEditor();
                }
            }

            self.ResetColResizerHeight();
            CreateTooltips(self);

            AdjustChildGrids(self);
        }

        var op = {
            container: $("#" + self.activeOptions.GridContainerIds.Pager),
            size: self.defaultPagerSize,
            positionFixed: false,
            TableOrdinence: self.activeOptions.TableOrdinence,
            ParentControlClass: self
        };
        self.Appender = new TablePaginator(op);

        op = {
            HasChildGrids: self.activeOptions.HasChildGrids,
            Country: self.activeOptions.Country,
            TargetEntitySchemaName: self.activeOptions.entityschemaName,
            DateFormat: _thisGlobals.userDatetimeSettings.DateFormat,
            TimeFormat: _thisGlobals.userDatetimeSettings.TimeFormat,
            CurrencySymbol: _thisGlobals.userCurrencySettings.CurrencySymbol,
            TableOrdinence: self.activeOptions.TableOrdinence,
            ParentControlClass: self,
            TableIsReadOnly: self.activeOptions.ParentFormIsReadOnly,
            UserCanDelete: self.activeOptions.UserCanDelete,
            UserCanUpdate: self.activeOptions.UserCanUpdate,
            DisplayFieldsSum: self.activeOptions.DisplayFieldsSum,
            TooltipTargetClass: self.activeOptions.TooltipController.TargettingClass,
            HaveNumericFields: self.activeOptions.HaveNumericFields
        };

        self.tableDataManager = new TableManager(op);

        self.CalculateNumericSummary = function () {
            if ((self.activeOptions.DisplayFieldsSum) && (self.activeOptions.HaveNumericFields)) {
                CalculateSummary(self);
                CreateTooltips(self);
            }
        }

        for (var i = 0; i < self.GridEditors.length; i++) {
            if (self.GridEditors[i] != null) {
                self.GridEditors[i].RefreshOnSave = self.activeOptions.RefreshAfterSave;
                self.GridEditors[i].theUpdater = self.tableDataManager;
                if ((self.GridEditors[i].EditorType == DCrmEditableGrid.Editors.Numeric) ||
                    (self.GridEditors[i].EditorType == DCrmEditableGrid.Editors.Currency) ||
                    (self.GridEditors[i].EditorType == DCrmEditableGrid.Editors.Decimal)) {
                    self.GridEditors[i].CalculateNumericSummary = self.CalculateNumericSummary;
                }
            }
        }

        self.HeaderOnDragHandler = function (e) {
            var columns = $(e.currentTarget).find("th");

            if ((columns) && (self.activeCell) && (self.activeCell.length)) {
                var column = $(columns[self.activeCell[0].cellIndex]);
                var curEditor = self.GridEditors[self.activeCell[0].cellIndex];

                if (curEditor.is(':visible')) {
                    curEditor.offset({ top: curEditor.offset().top, left: column.offset().left }).width(column.width());
                }
                if (self.errorcontainer.is(':visible')) {
                    var etop = curEditor.offset().top - (self.errorcontainer.height() + 8);
                    self.errorcontainer.css("left", column.offset().left).css("top", etop).width(curEditor.width() - 20);
                }
                if (self.inputFormatErrorContainer.is(':visible')) {
                    var etop = curEditor.offset().top - (self.inputFormatErrorContainer.height() + 8);
                    self.inputFormatErrorContainer.css("left", column.offset().left).css("top", etop).width(curEditor.width() - 20);
                }
            }
        };

        op = {
            liveDrag: true,
            firstColumnResizable: false,
            ParentControlClass: self,
            onDrag: self.HeaderOnDragHandler
        };
        self.ColumnResizer = new colResizable(op);

        self.UpdateCellDone = function () {
            MultiActions(self);
            if (self.autoSave) {
                $('#' + self.activeOptions.GridContainerIds.SaveChanges).trigger("click");
            }
        }

        self.UndoCellDone = function () {
            MultiActions(self);
        }

        self.SortEnd = function () {
            self.ResetColResizerHeight();
            MultiActions(self);
            AdjustChildGrids(self);
        }

        self.SortStart = function () {
            //LogIt("Sort Started");
            _thisHelpers.WaitDialog(true);
        }

        self.UndoChangesEnabled = function (e, enable) {
            if (enable) {
                $('#' + self.activeOptions.GridContainerIds.UndoChanges).removeClass('GreyImage');
            } else {
                $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
            }
        }

        self.SaveUndoCancelEnable = function (enable) {
            if (enable) {
                $('#' + self.activeOptions.GridContainerIds.UndoChanges).removeClass('GreyImage');
                $('#' + self.activeOptions.GridContainerIds.SaveChanges).removeClass('GreyImage');
                $('#' + self.activeOptions.GridContainerIds.CancelAllChanges).removeClass('GreyImage');
            } else {
                $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                $('#' + self.activeOptions.GridContainerIds.SaveChanges).addClass('GreyImage');
                $('#' + self.activeOptions.GridContainerIds.CancelAllChanges).addClass('GreyImage');
            }
        }

        $(window).on('resize', function () {
            if ((self.activeCell) && (self.activeCell.length)) {
                var curEditor = self.GridEditors[self.activeCell[0].cellIndex];

                if ((curEditor != null) && (curEditor.is(':visible'))) {
                    curEditor.offset(self.activeCell.offset())
                    .width(self.activeCell.width())
                    .height(self.activeCell.height());
                }
            }
        });
 
        self.DestroyGrid = function() {
            self.mainTable.off('dblclick').off('click').off('contextmenu').off('keydown');
            self.Appender = null;
            // de couple header click event
            // clear all the globals (allEows, ...)
            self.tableDataManager.DestroyData();
            self.tableDataManager = null;

            // Remove all the JC handlers
            // move css to css and rename things
            self.ColumnResizer.destroy();
            self.ColumnResizer = null;
        }

        if ((self.activeOptions.DisplayFieldsSum) && (self.activeOptions.HaveNumericFields)) {
            if (self.mainTable[0].tBodies[0].rows.length > 0) {
                CalculateSummary(self);
            }
        } else {
            // remove footer all together
            self.mainTable.find('tfoot:first').empty().remove();
        }

        if (self.mainTable[0].tBodies[0].rows.length == 0) {
            CreateTooltips(self);
        }
    }

    function openEntityRecord(enityLogicalName, guid) {
        var randomnumber = 100000000 + Math.floor(Math.random() * 900000000);

        if (!guid.startsWith('{')) {
            guid = "{" + guid + "}";
        }

        var baseUrl = window.parent.Xrm.Page.context.getClientUrl();
        if (!baseUrl.endsWith('/')) {
            baseUrl += "/";
        }

        /*
http://localhost/Demo/main.aspx?etc=112&extraqs=?_CreateFromId=%7b5B6DFA60-6456-E511-80C0-080027C01CB9%7d&_CreateFromType=112&histKey=21597565&id={5B6DFA60-6456-E511-80C0-080027C01CB9}&newWindow=true&pagetype=entityrecord&sitemappath=CS|CS|nav_cases#204924143
        */
        var url = baseUrl + "main.aspx?etn=" + enityLogicalName + "&extraqs=&histKey=" + randomnumber + "&id=" + guid + "&newWindow=true&pagetype=entityrecord";
        window.open(url, "", "status=0,resizable=1,width=1000px,height=800px");

    }

    function CreateEditors(editorsArray, parent, requiredContainer, inputFormatErrorContainer) {
        var alleditors = [];
        alleditors[0] = null;
        var index = 0;
        for (var i = 0; i < editorsArray.length; i++) {
            index++;
            switch (editorsArray[i].editor) {
                case DCrmEditableGrid.Editors.Text:
                case DCrmEditableGrid.Editors.Numeric:
                case DCrmEditableGrid.Editors.Decimal:
                case DCrmEditableGrid.Editors.Currency:
                    alleditors[index] = new $.fn.DCrmEditableGrid.TextBox(parent, editorsArray[i], requiredContainer, inputFormatErrorContainer);
                    break;
                case DCrmEditableGrid.Editors.DatePicker:
                case DCrmEditableGrid.Editors.DateTimePicker:
                    alleditors[index] = new $.fn.DCrmEditableGrid.DatePicker(parent, editorsArray[i], requiredContainer);
                    break;
                case DCrmEditableGrid.Editors.Checkbox:
                    alleditors[index] = new $.fn.DCrmEditableGrid.CheckBox(parent, editorsArray[i], requiredContainer);
                    break;
                case DCrmEditableGrid.Editors.Description:
                    alleditors[index] = new $.fn.DCrmEditableGrid.Description(parent, editorsArray[i], requiredContainer);
                    break;
                case DCrmEditableGrid.Editors.OptionSet:
                    alleditors[index] = new $.fn.DCrmEditableGrid.OptionSet(parent, editorsArray[i], requiredContainer);
                    break;
                case DCrmEditableGrid.Editors.Lookup:
                    alleditors[index] = new $.fn.DCrmEditableGrid.Lookup(parent, editorsArray[i], requiredContainer, inputFormatErrorContainer);
                    break;
                default:
                    alleditors[index] = null;
                    break;
            }
        }
        return alleditors;
    }

    function SetupButtons (who) {
        var self = who;

        $('#' + self.activeOptions.GridContainerIds.SearchGridBox).keydown(function (e) {
            var tkey = e.which || e.keycode;
            e.stopPropagation();

            if (tkey === DCrmEditableGrid.Keys.ENTER) {
                if (self.tableDataManager.options.allRows.length > 0) {
                    var val = $(this).val();
                    if (val.trim().length > 0) {
                        self.tableDataManager.searchGrid(val);
                    }
                }
            }
        });

        //$('#' + self.activeOptions.GridContainerIds.EditorDbClickActivationCheck).click(function (e) {
        //    self.activateOnSingleClick = !$(this).is(':checked');
        //});

        $('#' + self.activeOptions.GridContainerIds.RefreshGrid).click(function (e) {
            e.stopPropagation();

            self.SaveUndoCancelEnable(false);
            
            var SelectedFields = self.activeOptions.GridSelectedFields;
            var FetchtargetEntity = self.activeOptions.GridFetch;

            self.clearTableBody();

            self.tableDataManager.options.selectedRows = [];
            self.tableDataManager.options.allRows = [];
            self.tableDataManager.options.DirtyCells = [];

            var fieldsresult = XrmServiceToolkit.Soap.Fetch(FetchtargetEntity);
            if ((fieldsresult) && (fieldsresult.length) && (fieldsresult.length > 0)) {

                $('#' + self.activeOptions.GridContainerIds.TotalRecords).text(_thisGlobals.Translation_Labels.TotalRecords + ' ' + fieldsresult.length);

                // Add data
                var $tbody = $('#' + self.activeOptions.GridContainerIds.Table).find('tbody:first');
                var fval = '';
                var tmpLcase = '';
                var selectedOptionsetValue = undefined;
                var refreshTrs = [];
                var ceditors = undefined;

                for (var i = 0; i < fieldsresult.length; i++) {
                    var item = fieldsresult[i];

                    $tr = $('<tr></tr>').attr('data-record-guid', item.id).appendTo($tbody);
                    for (var iinner = 0; iinner < SelectedFields.length; iinner++) {
                        var inneritem = SelectedFields[iinner];
                        var inneritemSchemaName = inneritem.SchemaName.toLowerCase();
                        tmpLcase = inneritem.AttrType.toLowerCase();
                        fval = '';
                        selectedOptionsetValue = undefined;
                        ceditors = self.activeOptions.columneditors[iinner];

                        if ((tmpLcase == _thisGlobals.CrmFieldTypes.OptionSetType) ||
                            (tmpLcase == _thisGlobals.CrmFieldTypes.BooleanType) ||
                            (tmpLcase == _thisGlobals.CrmFieldTypes.MoneyType) ||
                            (tmpLcase == _thisGlobals.CrmFieldTypes.DecimalType) ||
                            (tmpLcase == _thisGlobals.CrmFieldTypes.DoubleType) ||
                            (tmpLcase == _thisGlobals.CrmFieldTypes.IntegerType)) {

                            if (item.attributes[inneritemSchemaName]) {
                                fval = item.attributes[inneritemSchemaName].formattedValue;
                                if (tmpLcase == _thisGlobals.CrmFieldTypes.OptionSetType) {
                                    selectedOptionsetValue = item.attributes[inneritemSchemaName].value;
                                }
                            }
                        } else if ((tmpLcase == _thisGlobals.CrmFieldTypes.LookupType) || (tmpLcase == _thisGlobals.CrmFieldTypes.CustomerType) || (tmpLcase == _thisGlobals.CrmFieldTypes.OwnerType)) {

                            if (item.attributes[inneritemSchemaName]) {
                                fval = item.attributes[inneritemSchemaName].name || '';
                                ceditors.LookupData.LookupId = item.attributes[inneritemSchemaName].id || '';
                                ceditors.LookupData.LookupLogicalName = item.attributes[inneritemSchemaName].logicalName;
                                ceditors.LookupData.LookupName = fval;

                            }

                        } else if ((tmpLcase == _thisGlobals.CrmFieldTypes.TextType) || (tmpLcase == _thisGlobals.CrmFieldTypes.MemoType)) {
                            if (item.attributes[inneritemSchemaName]) {
                                fval = item.attributes[inneritemSchemaName].value;

                                if (((ceditors.Format == 'Text') || (ceditors.Format == 'Phone'))
                                    && (_thisHelpers.IsvalidPhoneNumber(fval + ''))) {
                                    ceditors.Format = "Phone";
                                }
                            }
                        } else if (tmpLcase == _thisGlobals.CrmFieldTypes.DateTimeType) {
                            if (item.attributes[inneritemSchemaName]) {
                                fval = item.attributes[inneritemSchemaName].formattedValue;
                            }
                        }

                        var $thistr = $('<td tabindex="1"></td>')
                            .html('<span class="' + self.activeOptions.TooltipController.TargettingClass + '" ' + _thisGlobals.ToolTipAttrName + '="' + fval + '">' + fval + '</span>')
                                .appendTo($tr);

                        if ((tmpLcase == _thisGlobals.CrmFieldTypes.TextType) && (ceditors.Format)) {
                            $thistr.attr('data-fieldformat', ceditors.Format.toLowerCase());
                        }

                        if (ceditors.LookupData) {
                            $thistr
                                .attr('data-item-lookup-guid', ceditors.LookupData.LookupId)
                                .attr('data-item-lookup-logicalname', ceditors.LookupData.LookupLogicalName)
                                .attr('data-item-OriginalAttrValue', ceditors.LookupData.LookupId)
                            .attr('data-item-lookup-originallogicalname', ceditors.LookupData.LookupLogicalName);
                        } else if (tmpLcase == _thisGlobals.CrmFieldTypes.OptionSetType) {
                            $thistr
                                .attr('data-item-optionset-selectedvalue', selectedOptionsetValue + '')
                            .attr('data-item-OriginalAttrValue', selectedOptionsetValue + '');
                        }
                    }
                    refreshTrs.push($tr);
                }

                if (fieldsresult.length <= 5) {
                    $('#' + self.activeOptions.GridContainerIds.Pager).hide();
                    $('#' + self.activeOptions.GridContainerIds.SearchGridBox).hide();
                }

            } else {
                $('#' + self.activeOptions.GridContainerIds.TotalRecords).text(_thisGlobals.Translation_Labels.TotalRecords + ' 0');
                $('#' + self.activeOptions.GridContainerIds.Pager).hide();
                $('#' + self.activeOptions.GridContainerIds.SearchGridBox).hide();
            }

            if (refreshTrs.length == 0) {
                return;
            }

            self.tableDataManager.RebuildCache();
            self.CalculateNumericSummary();
        });

        $('#' + self.activeOptions.GridContainerIds.AutoSave).click(function (e) {
            e.stopPropagation();
            self.autoSave = $(this).is(':checked');
        });

        $('#' + self.activeOptions.GridContainerIds.UndoChanges).click(function (e) {

            if ($(this).hasClass('GreyImage')) {
                LogIt("Undo is disabled");
                return;
            }

            if ((self.activeCell) && (self.activeCell.length)) {
                var rows = self.tableDataManager.options.DirtyCells;
                var item;

                if (rows.length == 0) {
                    return;
                }

                for (var i = 0; i < rows.length; i++) {
                    item = rows[i];
                    if (self.activeCell.attr('id') == item.id) {

                        item.CurrentUndoIndex--;
                        if (item.CurrentUndoIndex < 0) {
                            item.CurrentUndoIndex = (item.Changes.length - 1);
                        }
                        var tochagneto = item.Changes[item.CurrentUndoIndex];

                        if (item.originalContent == tochagneto) {

                            item.TargetCell.removeClass('IsDirty fieldvaluechanged');
                            $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                            if (rows.length == 1) {
                                $('#' + self.activeOptions.GridContainerIds.SaveChanges).addClass('GreyImage');
                                $('#' + self.activeOptions.GridContainerIds.CancelAllChanges).addClass('GreyImage');
                                self.tableDataManager.options.DirtyCells = [];
                            } else {
                                self.tableDataManager.options.DirtyCells.splice(i, 1);
                            }
                        }

                        //item.TargetCell.text(tochagneto);
                        _thisHelpers.SetActiveCellText(item.TargetCell, tochagneto);

                        if (item.AdditionalAttr.length > 0) {
                            var tmp = item.AdditionalAttr[0];
                            if (tmp) {
                                var cellindex = item.TargetCell[0].cellIndex;
                                var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th');
                                var ed = parseInt($($theadcells[cellindex]).attr('data-item-header-editortype'));

                                if (ed == DCrmEditableGrid.Editors.OptionSet) {

                                    item.TargetCell.attr('data-item-optionset-selectedvalue', tmp);
                                } else if (ed == DCrmEditableGrid.Editors.Lookup) {
                                    item.TargetCell.attr('data-item-lookup-guid', tmp);
                                    item.TargetCell.attr('data-item-lookup-logicalname', item.AdditionalAttr[1]);
                                }
                            }
                        }

                        // update the cache via undo
                        self.tableDataManager.undoCell(self.activeCell);
                        self.CalculateNumericSummary();
                        self.activeCell.focus();
                        return false;
                    }
                }
            } else {
                LogIt("No self.activeCell cell ");
            }
        }).addClass('GreyImage');

        $('#' + self.activeOptions.GridContainerIds.CancelAllChanges).click(function (e) {

            if ($(this).hasClass('GreyImage')) {
                LogIt("Undo all is disabled");
                return;
            }
            var rows = self.tableDataManager.options.DirtyCells;
            var $cell;
            for (var i = 0; i < rows.length; i++) {
                $cell = rows[i].TargetCell;
                //$cell.text(rows[i].originalContent);
                _thisHelpers.SetActiveCellText($cell, rows[i].originalContent);
                $cell.removeClass('IsDirty fieldvaluechanged');

                if ((rows[i].AdditionalAttr) && (rows[i].AdditionalAttr.length) && (rows[i].AdditionalAttr.length > 0)) {
                    var tmp = rows[i].AdditionalAttr[0];
                    if (tmp) {
                        var cellindex = rows[i].TargetCell[0].cellIndex;
                        var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th');
                        var ed = parseInt($($theadcells[cellindex]).attr('data-item-header-editortype'));

                        if (ed == DCrmEditableGrid.Editors.OptionSet) {
                            $cell.attr('data-item-optionset-selectedvalue', tmp);
                        } else if (ed == DCrmEditableGrid.Editors.Lookup) {
                            $cell.attr('data-item-lookup-guid', tmp);
                            $cell.attr('data-item-lookup-logicalname', rows[i].AdditionalAttr[1]);
                        }
                    }
                }
                self.tableDataManager.undoCell($cell);
            };
            self.tableDataManager.options.DirtyCells = [];
            self.SaveUndoCancelEnable(false);
            self.CalculateNumericSummary();

        }).addClass('GreyImage');

        $('#' + self.activeOptions.GridContainerIds.SaveChanges).click(function () {
            if (($(this).hasClass('GreyImage')) && (!self.autoSave)) {
                LogIt("Save is disabled");
                return;
            }

            var dirty = who.tableDataManager.options.DirtyCells;
            if (dirty.length > 0) {
                _thisHelpers.WaitDialog(true);

                var toSave = [];

                var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th'); // th:not(:first-child)

                $.each(dirty, function (index, item) {
                    var $cell = item.TargetCell;
                    var cellindex = item.TargetCell[0].cellIndex;
                    var activecelltext = _thisHelpers.GetActiveCellText($cell);

                    // Store in a temp struc
                    toSave.push({
                        RecGuid: $cell.parent().attr('data-record-guid'),
                        ValueToSave: activecelltext,
                        FieldSchemaName: $($theadcells[cellindex]).attr('data-item-header-field-schemaname'),
                        InternalEditorType: parseInt($($theadcells[cellindex]).attr('data-item-header-editortype')),
                        InternalEditorFormat: self.GridEditors[cellindex].EditorFormat,

                        OptionSetValue: $cell.attr('data-item-optionset-selectedvalue'),
                        CheckAttribute: (self.GridEditors[cellindex].CheckedLabel == activecelltext) ? true : false,
                        LookupLogicalName: $cell.attr('data-item-lookup-logicalname'),
                        LookupId: $cell.attr('data-item-lookup-guid')
                    });

                    $cell.removeClass('IsDirty fieldvaluechanged').addClass('fieldvaluesaved');
                });


                if (window.parent.DCrmEgGridSaving) {
                    if (!window.parent.DCrmEgGridSaving(toSave, self.activeOptions.ParentEntityInfo)) {
                        _thisHelpers.WaitDialog();
                        LogIt("Save Cancelled by User");
                        return;
                    }
                }

                who.tableDataManager.options.DirtyCells = [];
                $('#' + self.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                $('#' + self.activeOptions.GridContainerIds.SaveChanges).addClass('GreyImage');
                $('#' + self.activeOptions.GridContainerIds.CancelAllChanges).addClass('GreyImage');

                try {
                    UpdateCrmField(toSave, who);
                } catch (ex) {
                    LogEx("Exception saving " + ex.message);
                }
                if (self.activeOptions.RefreshAfterSave) {
                    setTimeout(function () {
                        //self.HideEditors();
                        $('#' + self.activeOptions.GridContainerIds.RefreshGrid).trigger('click');
                    }, 100);
                }
                _thisHelpers.WaitDialog();
            }

        }).addClass('GreyImage');

        $('#' + self.activeOptions.GridContainerIds.ExportToExcel).click(function (e) {
            e.stopPropagation();

            var menu = $('<ul class="contextMenuPlugin"><div class="gutterLine"></div></ul>').appendTo('body');
            var $bg = $('<div></div>')
              .addClass('InvisibleFrame')
              .appendTo('body')
              .on('contextmenu click', function (e) {
                  e.stopPropagation();
                  $bg.remove();
                  menu.remove();
                  return false;
              }).show();

            var $row = $('<li><a href="#" class="contextMenuLink" id="ExportGridToExcel"><span class="itemTitle">Excel</span></a></li>').appendTo(menu);
            var icon = $('<img>');
            icon.attr('src', 'dcrmeg_excel');
            icon.insertBefore($row.find('.itemTitle'));

            $row = $('<li><a href="#" class="contextMenuLink" id="ExportGridToCSV"><span class="itemTitle">CSV</span></a></li>').appendTo(menu);
            icon = $('<img>');
            icon.attr('src', 'dcrmeg_csv16');
            icon.insertBefore($row.find('.itemTitle'));

            $row = $('<li><a href="#" class="contextMenuLink" id="ExportGridToPdf"><span class="itemTitle">PDF</span></a></li>').appendTo(menu);
            icon = $('<img>');
            icon.attr('src', 'dcrmeg_pdf16');
            icon.insertBefore($row.find('.itemTitle'));

            menu.find('a').click(function (e) {
                var id = $(this).attr('id');
                var msg = undefined;

                if (id == 'ExportGridToExcel') {
                    try {
                        SaveGridAsExcel(self);
                    } catch (e) {
                        msg = e.message;
                    }
                } else if (id == 'ExportGridToCSV') {
                    try {
                        SaveGridAsCsv(self);
                    } catch (e) {
                        msg = e.message;
                    }
                } else if (id == 'ExportGridToPdf') {
                    try {
                        SaveGridAsPdf(self);
                    } catch (e) {
                        msg = e.message;
                    }
                }

                $bg.remove();
                menu.remove();
                e.stopPropagation();
                if (msg) {
                    window.parent.Xrm.Utility.alertDialog("Unable to export due to exception:\r" + msg);
                }
                return false;
            });

            menu.show();

            $this = $(this);
            menu.css({ zIndex: 100006, left: $this.offset().left, top: ($this.offset().top + $this.outerHeight() + 2) })
                .on('contextmenu', function () {
                    e.stopPropagation();
                    return false;
                });
        });

        $('#' + self.activeOptions.GridContainerIds.AddNewRec).click(function (e) {

            e.stopPropagation();

            var menu = $('<ul class="contextMenuPlugin"><div class="gutterLine"></div></ul>').appendTo('body');
            var $bg = $('<div></div>')
              .addClass('InvisibleFrame')
              .appendTo('body')
              .on('contextmenu click', function (e) {
                  e.stopPropagation();
                  $bg.remove();
                  menu.remove();
                  return false;
              }).show();

            var $row = $('<li><a href="#" class="contextMenuLink" id="newinline"><span class="itemTitle">Inline</span></a></li>').appendTo(menu);
            $row = $('<li><a href="#" class="contextMenuLink" id="newwindow"><span class="itemTitle">Window</span></a></li>').appendTo(menu);

            menu.find('a').click(function (e) {
                var id = $(this).attr('id');
                var msg = undefined;

                if (id == 'newinline') {
                    try {

                        var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th');
                        var $cloneRow = $('<tr></tr>');
                        var cells = undefined;
                        var $cell = undefined;
                        var tmpLookupStruc = {Index: -1};

                        for (var i = 0; i < $theadcells.length; i++) {
                            if (i > 0) {
                                $('<td tabindex="1"></td>')
                                .html('<span class="' + self.activeOptions.TooltipController.TargettingClass + '"></span>')
                                .appendTo($cloneRow);
                            } else {
                                var $tmpCell = $('<td style="text-align:center"></td>').appendTo($cloneRow);

                                if ((!self.tableDataManager.options.TableIsReadOnly) && (self.tableDataManager.options.UserCanDelete) && (self.activeOptions.AllowDelete)) {
                                    // Select row checkbox
                                    $chk = $("<input type='checkbox' />")
                                        .addClass(self.tableDataManager.options.TooltipTargetClass)
                                        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.SelectRecord)
                                        .click(function (e) {
                                            var row = $(this).parent().parent();

                                            if ((row) && (row.length)) {

                                                if ($(this).is(':checked')) {
                                                    // add to selected rows
                                                    self.tableDataManager.options.selectedRows[self.tableDataManager.options.selectedRows.length] = row[0];
                                                    $(row[0]).addClass(self.tableDataManager.options.rowSelectedCss);
                                                } else {
                                                    $(row[0]).removeClass(self.tableDataManager.options.rowSelectedCss);
                                                    // remove from selected rows
                                                    for (var i = self.tableDataManager.options.selectedRows.length - 1; i >= 0; i--) {
                                                        if ($(self.tableDataManager.options.selectedRows[i]).attr(self.tableDataManager.options.realRowIndex) === $(row[0]).attr(self.tableDataManager.options.realRowIndex)) {
                                                            self.tableDataManager.options.selectedRows.splice(i, 1);
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            e.stopPropagation();
                                        }).appendTo($tmpCell);
                                }

                                if (self.activeOptions.HasChildGrids) {
                                    $openRec = $('<button></button>')
                                        .addClass('ToolbarAdd firstColOpenImg')
                                        .addClass(self.tableDataManager.options.TooltipTargetClass)
                                        .attr('data-child-open', '0')
                                        .click(function (e) {
                                            e.stopPropagation();
                                            $this = $(this);
                                            var $parentrow = $this.parent().parent();

                                            if ($this.attr('data-child-open') == '0') {
                                                $this.attr('data-child-open', '1');
                                                $this.removeClass('ToolbarAdd');
                                                $this.addClass('ToolbarMinus');

                                                var subgridid = _thisHelpers.GenerateUUID();
                                                var subgridrowid = _thisHelpers.GenerateUUID();
                                                // Call parent passing only the subgrid div id
                                                var $tr = $('<tr><td colspan="' + self.tableDataManager.options.headerList.length + '"></td></tr>')
                                                    .attr('id', subgridrowid)
                                                    .attr('data-subgrid-id', subgridid)
                                                    .insertAfter($this.parent().parent());

                                                $parentrow.attr('data-subgrid-row-id', subgridrowid);
                                                $parentrow[0].DSubGridRow = $tr;

                                                $gridParentDiv = $('<div></div>')
                                                    .attr('id', subgridid)
                                                    .addClass('subgridparentdiv')
                                                    .appendTo($tr.find('td:first'));

                                                $parentrow.addClass('bgSelectedSubGridRow');

                                                self.SelectedRecordGuid = $parentrow.attr('data-record-guid');
                                                _thisHelpers.WaitDialog(true);
                                                ParentGridSelectedRecord(self, $gridParentDiv);
                                                self.ResetColResizerHeight();

                                            } else {
                                                $this.attr('data-child-open', '0');
                                                $this.removeClass('ToolbarMinus');
                                                $this.addClass('ToolbarAdd');
                                                $parentrow.removeClass('bgSelectedSubGridRow');

                                                var rowid = $parentrow.attr('data-subgrid-row-id');
                                                if (rowid) {
                                                    if ($parentrow[0].DSubGridRow) {
                                                        var subgridid = $parentrow[0].DSubGridRow.attr('data-subgrid-id');
                                                        $parentrow[0].DSubGridRow = undefined;

                                                        self.SelectedRecordGuid = $parentrow.attr('data-record-guid');
                                                        ParentGridSelectedRecord(self, subgridid, true);
                                                    }

                                                    $('#' + rowid).empty().remove();
                                                    $parentrow.removeAttr('data-subgrid-row-id');
                                                    self.ResetColResizerHeight();
                                                }
                                            }

                                        }).appendTo($tmpCell);
                                } else {
                                    $openRec = $('<img></img>')
                                        .attr('src', self.tableDataManager.options.OpenRecordIcon)
                                        .addClass(self.tableDataManager.options.TooltipTargetClass)
                                        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.OpenRecord)
                                        .attr('data-child-open', '0')
                                        .click(function (e) {
                                            e.stopPropagation();

                                            var $parentrow = $(this).parent().parent();
                                            if (($parentrow) && ($parentrow.length > 0)) {
                                                window.parent.Xrm.Utility.openEntityForm(self.tableDataManager.options.TargetEntitySchemaName,
                                                    $($parentrow).attr('data-record-guid'));
                                            }
                                        }).appendTo($tmpCell);
                                }

                            }
                        }

                        cells = $cloneRow[0].cells;

                        var recSchema = self.activeOptions.entityschemaName;

                        var recNew = new XrmServiceToolkit.Soap.BusinessEntity(recSchema);
                        var exclude = ['transactioncurrencyid', 'createdby', 'createdon', , 'modifiedby', 'modifiedon', 'ownerid'];

                        if (self.activeOptions.ParentChildLookupInfo.Related) {
                            recNew.attributes[self.activeOptions.ParentChildLookupInfo.LookupSchemaName] = {
                                id: self.activeOptions.ParentChildLookupInfo.Guid,
                                logicalName: self.activeOptions.ParentChildLookupInfo.ParentSchemaName,
                                type: self.activeOptions.ParentChildLookupInfo.Type
                            };
                        }

                        var val = undefined;
                        for (var i = 1; i < $theadcells.length; i++) {
                            $cell = $(cells[i]);
                            $cell.addClass(self.activeOptions.TooltipController.TargettingClass);

                            var $thcell = $($theadcells[i]);
                            var ed = parseInt($thcell.attr('data-item-header-editortype'));
                            var schema = $thcell.attr('data-item-header-field-schemaname');
                            var requier = ($thcell.attr('data-item-header-field-required') == '1') ? true : false;
                            var defaultVal = $thcell.attr('data-item-header-createdefault');

                            if (ed == DCrmEditableGrid.Editors.None) {
                                ed = parseInt($thcell.attr('data-item-header-readonly-editortype'));
                            }

                            if (!exclude.ExactMatchExists(schema)) {
                                if ((ed == DCrmEditableGrid.Editors.Text) || (ed == DCrmEditableGrid.Editors.Description)) {
                                    if (defaultVal) {
                                        recNew.attributes[schema] = defaultVal;
                                        _thisHelpers.SetActiveCellText($cell, recNew.attributes[schema]);
                                    } else if (requier) {
                                        recNew.attributes[schema] = _thisHelpers.GetActiveCellText($thcell) + Math.floor((Math.random() * 1000) + 1);
                                        _thisHelpers.SetActiveCellText($cell, recNew.attributes[schema]);
                                    }                                    
                                    
                                } else if (ed == DCrmEditableGrid.Editors.Numeric) {
                                    if (defaultVal) {
                                        recNew.attributes[schema] = { value: parseInt(defaultVal), type: "int" };
                                        _thisHelpers.SetActiveCellText($cell, _thisHelpers.AddIntegerFormat(defaultVal));
                                    } else if (requier) {
                                        recNew.attributes[schema] = { value: 1, type: "int" };
                                        _thisHelpers.SetActiveCellText($cell, _thisHelpers.AddIntegerFormat(recNew.attributes[schema].value));
                                    }

                                } else if (ed == DCrmEditableGrid.Editors.Decimal) {
                                    if (defaultVal) {
                                        recNew.attributes[schema] = { value: parseFloat(defaultVal), type: "decimal" };
                                        _thisHelpers.SetActiveCellText($cell, _thisHelpers.AddDecimalFormat(recNew.attributes[schema].value,
                                            self.activeOptions.columneditors[i - 1].Precision));
                                    } else if (requier) {
                                        recNew.attributes[schema] = { value: 1.0, type: "decimal" };
                                        _thisHelpers.SetActiveCellText($cell, _thisHelpers.AddDecimalFormat(recNew.attributes[schema].value,
                                            self.activeOptions.columneditors[i - 1].Precision));
                                    }

                                } else if (ed == DCrmEditableGrid.Editors.Currency) {
                                    if (defaultVal) {
                                        recNew.attributes[schema] = { value: parseFloat(defaultVal), type: "Money" };
                                        _thisHelpers.SetActiveCellText($cell, _thisHelpers.AddCurrencyFormat(recNew.attributes[schema].value,
                                            self.activeOptions.columneditors[i - 1].Precision));
                                    } else if (requier) {
                                        recNew.attributes[schema] = { value: 1.0, type: "Money" };
                                        _thisHelpers.SetActiveCellText($cell, _thisHelpers.AddCurrencyFormat(recNew.attributes[schema].value,
                                            self.activeOptions.columneditors[i - 1].Precision));
                                    }

                                } else if (ed == DCrmEditableGrid.Editors.DatePicker) {
                                    if (defaultVal) {
                                        val = Date.parseDate(defaultVal);
                                        recNew.attributes[schema] = val;
                                        _thisHelpers.SetActiveCellText($cell, val.dateFormat(_thisGlobals.userDatetimeSettings.DateFormat));
                                    } else if (requier) {
                                        val = new Date();
                                        recNew.attributes[schema] = val;
                                        _thisHelpers.SetActiveCellText($cell, val.dateFormat(_thisGlobals.userDatetimeSettings.DateFormat));
                                    }

                                } else if (ed == DCrmEditableGrid.Editors.DateTimePicker) {
                                    if (defaultVal) {
                                        val = Date.parseDate(defaultVal);
                                        recNew.attributes[schema] = { value: val, type: "dateTime" };
                                        _thisHelpers.SetActiveCellText($cell, val.dateFormat(_thisGlobals.userDatetimeSettings.DateFormat + ' ' + _thisGlobals.userDatetimeSettings.TimeFormat));
                                    } else if (requier) {
                                        val = new Date();
                                        recNew.attributes[schema] = { value: val, type: "dateTime" };
                                        _thisHelpers.SetActiveCellText($cell, val.dateFormat(_thisGlobals.userDatetimeSettings.DateFormat + ' ' + _thisGlobals.userDatetimeSettings.TimeFormat));
                                    }

                                } else if (ed == DCrmEditableGrid.Editors.Checkbox) {
                                    if (defaultVal) {
                                        var parts = defaultVal.split("{}");
                                        var checked = (parts[1] == '1') ? true : false;
                                        recNew.attributes[schema] = {
                                            value: checked,
                                            type: "boolean"
                                        };
                                        _thisHelpers.SetActiveCellText($cell, parts[0]);
                                    } else if (requier) {
                                        recNew.attributes[schema] = {
                                            value: true,
                                            type: "boolean"
                                        };
                                        _thisHelpers.SetActiveCellText($cell, self.activeOptions.columneditors[i - 1].CheckText);
                                    }

                                } else if (ed == DCrmEditableGrid.Editors.OptionSet) {
                                    if (defaultVal) {
                                        var parts = defaultVal.split("{}");
                                        val = parts[1];
                                        recNew.attributes[schema] = { value: parseInt(val), type: "OptionSetValue" };
                                        _thisHelpers.SetActiveCellText($cell, parts[0]);

                                        $cell.attr('data-item-optionset-selectedvalue', val)
                                            .attr('data-item-OriginalAttrValue', val);
                                    } else if (requier) {
                                        val = self.activeOptions.columneditors[i - 1].OptionSetData[0].value;
                                        recNew.attributes[schema] = { value: parseInt(val), type: "OptionSetValue" };
                                        _thisHelpers.SetActiveCellText($cell, self.activeOptions.columneditors[i - 1].OptionSetData[0].text);

                                        $cell.attr('data-item-optionset-selectedvalue', val)
                                            .attr('data-item-OriginalAttrValue', val);
                                    }
                                }
                            }

                            if ((ed == DCrmEditableGrid.Editors.Text) && (self.activeOptions.columneditors[i - 1]) &&
                                (self.activeOptions.columneditors[i - 1].Format)) {
                                $cell.attr('data-fieldformat', self.activeOptions.columneditors[i - 1].Format.toLowerCase());
                            }

                            if ((ed == DCrmEditableGrid.Editors.Numeric) ||
                                (ed == DCrmEditableGrid.Editors.Decimal) ||
                                (ed == DCrmEditableGrid.Editors.Currency)) {
                                $cell.addClass('NumericTextbox');
                            }

                            if ((ed == DCrmEditableGrid.Editors.Lookup) || (ed == DCrmEditableGrid.Editors.CustomerType)) {
                                if (self.activeOptions.ParentChildLookupInfo.LookupSchemaName == schema) {

                                    tmpLookupStruc.Index = i;
                                    tmpLookupStruc.Schema = schema;
                                    tmpLookupStruc.UiType = recNew.attributes[schema].logicalName;

                                    self.activeOptions.columneditors[i - 1].LookupData.LookupId = recNew.attributes[schema].id || '';
                                    self.activeOptions.columneditors[i - 1].LookupData.LookupLogicalName = recNew.attributes[schema].logicalName;

                                    $cell
                                        .attr('data-item-lookup-guid', recNew.attributes[schema].id)
                                        .attr('data-item-lookup-logicalname', recNew.attributes[schema].logicalName)
                                        .attr('data-item-OriginalAttrValue', recNew.attributes[schema].id)
                                        .attr('data-item-lookup-originallogicalname', recNew.attributes[schema].logicalName);

                                    //LogIt("Schema [" + schema + "] logicalname [" +
                                    //    recNew.attributes[schema].logicalName + "] ID [" +
                                    //    recNew.attributes[schema].id + "] type [" +
                                    //    recNew.attributes[schema].type + "]");

                                } else if (defaultVal) {
                                    var parts = defaultVal.split("{}");
                                    //LogIt("Label [" + parts[0] + "] LogicalName [" + parts[2] + "] Guid [{" + parts[1] + "}]");

                                    recNew.attributes[schema] = {
                                        id: "{" + parts[1] + "}",
                                        logicalName: parts[2],
                                        type: "EntityReference"
                                    };

                                    tmpLookupStruc.Index = i;
                                    tmpLookupStruc.Schema = schema;
                                    tmpLookupStruc.UiType = recNew.attributes[schema].logicalName;

                                    self.activeOptions.columneditors[i - 1].LookupData.LookupId = recNew.attributes[schema].id || '';
                                    self.activeOptions.columneditors[i - 1].LookupData.LookupLogicalName = recNew.attributes[schema].logicalName;

                                    $cell
                                        .attr('data-item-lookup-guid', recNew.attributes[schema].id)
                                        .attr('data-item-lookup-logicalname', recNew.attributes[schema].logicalName)
                                        .attr('data-item-OriginalAttrValue', recNew.attributes[schema].id)
                                        .attr('data-item-lookup-originallogicalname', recNew.attributes[schema].logicalName);

                                    self.activeOptions.columneditors[tmpLookupStruc.Index - 1].LookupName = parts[0];
                                    $cell = $($cloneRow[0].cells[tmpLookupStruc.Index]);
                                    _thisHelpers.SetActiveCellText($cell, parts[0]);
                                }
                            }

                        }

                        var newRecGuid = XrmServiceToolkit.Soap.Create(recNew);
                        $cloneRow.attr('data-record-guid', newRecGuid);
                        $cloneRow.attr('data-child-open', '0');

                        if ((self.activeOptions.ParentChildLookupInfo.Related) &&  (tmpLookupStruc.Index > -1)) {
                            val = GetLookupDisplayName(recSchema, tmpLookupStruc.Schema, tmpLookupStruc.UiType, self.activeOptions.ParentChildLookupInfo.Guid);
                            self.activeOptions.columneditors[tmpLookupStruc.Index - 1].LookupName = val;
                            $cell = $($cloneRow[0].cells[tmpLookupStruc.Index]);
                            _thisHelpers.SetActiveCellText($cell, val);
                        }

                        self.tableDataManager.AddNewRow($cloneRow);
                        $('#' + self.activeOptions.GridContainerIds.TotalRecords).text(_thisGlobals.Translation_Labels.TotalRecords + ' ' + self.tableDataManager.options.allRows.length);

                        if (self.tableDataManager.options.allRows.length > 5) {
                            $('#' + self.activeOptions.GridContainerIds.Pager).show();
                            $('#' + self.activeOptions.GridContainerIds.SearchGridBox).show();
                        }
                        CreateTooltips(self);

                        // If refresh after create 
                        if (self.activeOptions.RefreshAfterCreate) {
                            $('#' + self.activeOptions.GridContainerIds.RefreshGrid).trigger('click');
                        }

                    } catch (e) {
                        msg = e.message;
                    }

                } else if (id == 'newwindow') {
                    try {
                        window.parent.Xrm.Utility.openEntityForm(self.activeOptions.entityschemaName);
                    } catch (e) {
                        msg = e.message;
                    }
                }

                $bg.remove();
                menu.remove();
                e.stopPropagation();
                if (msg) {
                    window.parent.Xrm.Utility.alertDialog("Unable to create new record due to exception:\r" + msg);
                }
                return false;
            });

            menu.show();

            $this = $(this);
            menu.css({ zIndex: 100006, left: $this.offset().left, top: ($this.offset().top + $this.outerHeight() + 2) })
                .on('contextmenu', function () {
                    e.stopPropagation();
                    return false;
                });
        });

        $('#' + self.activeOptions.GridContainerIds.DeleteRec).click(function (e) {

            var selRows = self.tableDataManager.options.selectedRows;
            if (selRows.length == 0) {
                return;
            }
            var toDel = [];
            var toDelGuids = [];
            var toCheckForSubgrid = [];
            var $row = undefined;
            for (var i = 0; i < selRows.length; i++) {
                $row = $(selRows[i]);
                
                var dirtycells = $row.find('td.IsDirty');
                if ((dirtycells) && (dirtycells.length)) {
                    if (confirm('The record "' + _thisHelpers.GetActiveCellText($(dirtycells[0])) + '" contains unsaved changes.\n\nProceed to delete the record anyway?') == true) {
                        toDel.push(parseInt($row.attr('data-item-realRowindex')));
                        toDelGuids.push($row.attr('data-record-guid'));
                        toCheckForSubgrid.push($row);
                    } else {
                        continue;
                    }
                } else {
                    toDel.push(parseInt($row.attr('data-item-realRowindex')));
                    toDelGuids.push($row.attr('data-record-guid'));
                    toCheckForSubgrid.push($row);
                }
                
            };

            if ((toDelGuids.length > 0) && (confirm('Proceed to delete "' + toDelGuids.length + '" record?') == true)) {

                if (window.parent.DCrmEgGridDeleting) {
                    if (!window.parent.DCrmEgGridDeleting(toDelGuids, self.activeOptions.ParentEntityInfo)) {
                        //LogIt("Deleting cancelled by user");
                        window.parent.Xrm.Utility.alertDialog("Delete operation cancelled by javascript callback.");
                        return;
                    }
                }

                _thisHelpers.WaitDialog(true);

                var finalToDel = [];
                var finalToCheck = [];

                var haveErrors = '';

                for (var i = 0; i < toDelGuids.length; i++) {
                    try {
                        XrmServiceToolkit.Soap.Delete(self.activeOptions.entityschemaName, toDelGuids[i]);
                        finalToDel.push(toDel[i]);
                        finalToCheck.push(toCheckForSubgrid[i]);
                    } catch (e) {
                        LogEx("Exception: Deleting Record " + e.message);
                        haveErrors += e.message;
                    } 
                }
                _thisHelpers.WaitDialog();

                if (finalToDel.length > 0) {

                    // Delete subgrids for this row if any exists
                    try {
                        for (var i = 0; i < finalToCheck.length; i++) {
                            var rowid = finalToCheck[i].attr('data-subgrid-row-id');
                            if (rowid) {
                                if (finalToCheck[i][0].DSubGridRow) {
                                    LogIt("Deleting subgrids before deleting row");
                                    var subgridid = finalToCheck[i][0].DSubGridRow.attr('data-subgrid-id');
                                    finalToCheck[i][0].DSubGridRow = undefined;

                                    if (self.options.HasChildGrids) {
                                        self.SelectedRecordGuid = finalToCheck[i].attr('data-record-guid');
                                        ParentGridSelectedRecord(self, subgridid, true);
                                    }
                                }

                                $('#' + rowid).empty().remove();
                                finalToCheck[i].removeAttr('data-subgrid-row-id');
                            }
                        }
                    } catch (e) {
                        LogEx("Exception: deleting subgrids " + e.message);
                    }

                    self.tableDataManager.DeleteRows(finalToDel);
                    self.ResetColResizerHeight();
                    self.CalculateNumericSummary();
                    $('#' + self.activeOptions.GridContainerIds.TotalRecords)
                        .text(_thisGlobals.Translation_Labels.TotalRecords + ' ' + self.tableDataManager.options.allRows.length);

                    if (self.tableDataManager.options.allRows.length <= 5) {
                        $('#' + self.activeOptions.GridContainerIds.Pager).hide();
                        $('#' + self.activeOptions.GridContainerIds.SearchGridBox).hide();
                    }
                }

                if (haveErrors) {
                    window.parent.Xrm.Utility.alertDialog("Error encountered during deletion.\r" + haveErrors);
                }
            }
        });
        return true;
    }

    function MultiActions(who) {
        var self = who;
        _thisHelpers.WaitDialog();
        CreateTooltips(self);
    }

    function CreateTooltips(who) {
        var self = who;

        if (self.activeOptions.TooltipController != undefined) {
            self.activeOptions.TooltipController.UnHookTooltips();
        }
        self.activeOptions.TooltipController.HookTooltips();
    }

    function UpdateCrmField(toSave, who) {
        //Update Entity
        $.each(toSave, function (i, field) {
            var updateEntity = new XrmServiceToolkit.Soap.BusinessEntity(who.activeOptions.entityschemaName, field.RecGuid);
            // If value to save is empty, we need to pass null to empty the contents of the crm field
            var val = null;
            var tmp = null;

            if (field.InternalEditorType == DCrmEditableGrid.Editors.Text) {
                if (field.ValueToSave.length > 0) {
                    //if ((field.InternalEditorFormat) && (field.InternalEditorFormat.toLowerCase() == 'phone')) {
                    //    // remove formatting
                    //    val = field.ValueToSave.replace(/[()-]/g, "").replace(" ", "");
                    //} else {
                    //    val = field.ValueToSave;
                    //}
                    val = field.ValueToSave;
                }

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.Numeric) {
                if (field.ValueToSave.length > 0) {
                    tmp = parseInt(_thisHelpers.RemoveNumericFormat(field.ValueToSave));
                }
                val = { value: tmp, type: "int" };

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.DatePicker) {
                if (field.ValueToSave.length > 0) {
                    val = Date.parseDate(field.ValueToSave);
                }

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.Checkbox) {
                val = { value: field.CheckAttribute, type: "boolean" };

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.OptionSet) {
                if ((field.ValueToSave.trim().length == 0) || (field.OptionSetValue == '-1')) {
                    val = { value: tmp, type: 'OptionSetValue' };
                } else {
                    val = { value: parseInt(field.OptionSetValue), type: 'OptionSetValue' };
                }

                // If statecode and statuscode
                // XrmServiceToolkit.Soap.SetState("cta_caseactivity", activityid, 1, 2);

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.Description) {
                if (field.ValueToSave.length > 0) {
                    val = field.ValueToSave;
                }

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.Lookup) {
                if ((field.LookupId) && (field.LookupId.length > 0)) {
                    val = { id: field.LookupId, logicalName: field.LookupLogicalName, type: 'EntityReference' };
                } else {
                    val = { value: tmp, type: 'EntityReference' };
                }

                if (field.FieldSchemaName == 'ownerid') {
                    // Set the owner
                    try {
                        var res = XrmServiceToolkit.Soap.Assign(who.activeOptions.entityschemaName, field.RecGuid, field.LookupLogicalName, field.LookupId);
                    } catch (e) {
                        LogEx("Exception: Setting owner " + e.message);
                    }
                    return;
                }

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.Decimal) {
                if (field.ValueToSave.length > 0) {
                    tmp = parseFloat(_thisHelpers.RemoveNumericFormat(field.ValueToSave));
                }
                // decimal and flaot types are treated the same
                val = { value: tmp, type: "decimal" };

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.Currency) {
                if (field.ValueToSave.length > 0) {
                    tmp = parseFloat(_thisHelpers.RemoveNumericFormat(field.ValueToSave));
                }
                val = { value: tmp, type: "Money" };

            } else if (field.InternalEditorType == DCrmEditableGrid.Editors.DateTimePicker) {
                if (field.ValueToSave.length > 0) {
                    tmp = Date.parseDate(field.ValueToSave, _thisGlobals.userDatetimeSettings.DateTimeFormat);
                }
                val = { value: tmp, type: "dateTime" };
            }

            //LogIt("Saving val [" + val + "] val.value [" + val.value + "]");

            updateEntity.attributes[field.FieldSchemaName] = val;
            try {
                var updateResponse = XrmServiceToolkit.Soap.Update(updateEntity);
            } catch (e) {
                LogEx("Exception: " + e.message);
            }
        });
    }

    function CalculateSummary(who) {
        var self = who;

        if ((!who.activeOptions.DisplayFieldsSum) || (!who.activeOptions.HaveNumericFields)) {
            return;
        }

        var $theadcells = self.mainTable.find('thead:first').find('tr:first').find('th');
        if (($theadcells) && ($theadcells.length)) {
            var len = $theadcells.length;
            for (var i = 1; i < len; i++) {
                var ed = parseInt($($theadcells[i]).attr('data-item-header-editortype'));
                if ((ed == DCrmEditableGrid.Editors.Numeric) ||
                    (ed == DCrmEditableGrid.Editors.Decimal) ||
                    (ed == DCrmEditableGrid.Editors.Currency)) {
                    DisplaySummary(i, ed, self);
                }
            }
        }
    }

    function DisplaySummary(cellindex, ed, who) {
        var self = who;

        var $theader = self.mainTable.find('thead:first').find('tr:first').find('th');
        var percision = undefined;

        if (($theader) && ($theader.length)) {
            var tmp = $($theader[cellindex]).attr('data-item-header-Precision');
            if (tmp != 'A') {
                percision = parseInt(tmp);
            }
        }

        var $tfooter = self.mainTable.find('tfoot:first').find('tr:first');
        var rows = self.tableDataManager.options.allRows;
        var finalVal = 0.00;

        if ((rows) && (rows.length)) {
            for (var i = 0; i < rows.length; i++) {
                var row = (rows[i])[0].cells;
                var $cell = $(row[cellindex]);
                var activecelltext = _thisHelpers.GetActiveCellText($cell);

                if (activecelltext.length > 0) {
                    finalVal += parseFloat(_thisHelpers.RemoveNumericFormat(activecelltext));
                }
            }
        }

        var $tmpActiveCell = $($tfooter[0].cells[cellindex]);
        if (finalVal > 0) {
            if (ed == DCrmEditableGrid.Editors.Numeric) {
                finalVal = _thisHelpers.AddIntegerFormat(finalVal);
            } else if (ed == DCrmEditableGrid.Editors.Decimal) {
                finalVal = _thisHelpers.AddDecimalFormat(finalVal, percision);
            } else {
                finalVal = _thisHelpers.AddCurrencyFormat(finalVal, percision);
            }
            //$($tfooter[0].cells[cellindex]).html('<span>' + finalVal + '</span>').attr(_thisGlobals.ToolTipAttrName, finalVal);
            _thisHelpers.SetActiveCellText($tmpActiveCell, finalVal);
            $tmpActiveCell.attr(_thisGlobals.ToolTipAttrName, finalVal);
        } else {
            //$($tfooter[0].cells[cellindex]).html('<span></span>').removeAttr(_thisGlobals.ToolTipAttrName);
            _thisHelpers.SetActiveCellText($tmpActiveCell, '');
            $tmpActiveCell.removeAttr(_thisGlobals.ToolTipAttrName);
        }
    }

    function HideError(who) {
        var self = who;

        if (self.errorcontainer.is(':visible')) {
            self.errorcontainer.hide();
        }
        if (self.inputFormatErrorContainer.is(':visible')) {
            self.inputFormatErrorContainer.hide();
        }

        return true;
    }

    function AdjustChildGrids(who) {
        try {

            var config = FindDCrmEGConfigurationBySchema(who.activeOptions.ParentEntityInfo.ParentEntitySchemaname);
            var tt = undefined;

            for (var index = 0; index < config.ChildConfigurations.length; index++) {
                tt = config.ChildConfigurations[index].ThisGrid;

                if (tt) {
                    if (tt.HasChildGrids) {
                        AdjustChildGrids(tt);
                    }

                    $('#' + tt.activeOptions.GridContainerIds.UndoChanges).addClass('GreyImage');
                    for (var i = 0; i < tt.GridEditors.length; i++) {
                        if (tt.GridEditors[i] != null) {
                            tt.GridEditors[i].CloseEditor();
                        }
                    }

                    tt.ResetTooltips();
                    tt.ResetColResizerHeight();
                }
            }
        } catch (e) {
            LogEx("Exception: Adjust Subgrid UI " + e.message);
        }
    }

    // return the instance
    return CrmEditableGrid;
})();

var TablePaginator = (function () {

    function TablePaginator(settings) {
        var self = this;

        var config = {
            size: 10,
            offset: 0,
            page: 0,
            totalRows: 0,
            totalPages: 0,
            container: null,
            cssNext: '.ToolbarGoToNext',
            cssPrev: '.ToolbarGoToPrev',
            cssFirst: '.ToolbarGoToFirst',
            cssLast: '.ToolbarGoToLast',
            cssPageDisplay: '.pagedisplay',
            cssPageSize: '.pagesize',
            seperator: "/",
            positionFixed: true
        };

        self.options = $.extend({}, config, settings);

        var pager = self.options.container;

        self.options.size = parseInt($(".pagesize", pager).val());

        self.appender = function (table, rows) {

            var c = self.options;

            c.rowsCopy = rows;
            c.totalRows = rows.length;
            c.totalPages = Math.ceil(c.totalRows / c.size);

            renderTable(table, rows, self);
        };

        // Navigation button click handlers

        $(self.options.cssFirst, pager).click(function () {
            moveToFirstPage(self);
            return false;
        });
        $(self.options.cssNext, pager).click(function () {
            moveToNextPage(self);
            return false;
        });
        $(self.options.cssPrev, pager).click(function () {
            moveToPrevPage(self);
            return false;
        });
        $(self.options.cssLast, pager).click(function () {
            moveToLastPage(self);
            return false;
        });
        $(self.options.cssPageSize, pager).change(function () {
            setPageSize(self, parseInt($(self.options.cssPageSize, self.options.container).val()));
            return false;
        });

    }

    function updatePageDisplay(c) {
        var s = $(c.cssPageDisplay, c.container).text((c.page + 1) + c.seperator + c.totalPages);
    }

    function setPageSize(who, size) {
        var c = who.options;
        c.size = size;
        c.totalPages = Math.ceil(c.totalRows / c.size);
        c.pagerPositionSet = false;
        moveToPage(who);
        fixPosition(who);
    }

    function fixPosition(who) {
        var c = who.options;
        if (!c.pagerPositionSet && c.positionFixed) {
            var o = c.ParentControlClass.mainTable;
            if (o.offset) {
                c.container.css({
                    top: o.offset().top + o.height() + 'px',
                    position: 'absolute'
                });
            }
            c.pagerPositionSet = true;
        }
    }

    function moveToFirstPage(who) {
        var c = who.options;
        c.page = 0;
        moveToPage(who);
    }

    function moveToLastPage(who) {
        var c = who.options;
        c.page = (c.totalPages - 1);
        moveToPage(who);
    }

    function moveToNextPage(who) {
        var c = who.options;
        c.page++;
        if (c.page >= (c.totalPages - 1)) {
            c.page = (c.totalPages - 1);
        }
        moveToPage(who);
    }

    function moveToPrevPage(who) {
        var c = who.options;
        c.page--;
        if (c.page <= 0) {
            c.page = 0;
        }
        moveToPage(who);
    }

    function moveToPage(who) {
        var c = who.options;
        if (c.page < 0 || c.page > (c.totalPages - 1)) {
            c.page = 0;
        }

        renderTable(c.ParentControlClass.mainTable[0], c.rowsCopy, who);
    }

    function renderTable(table, rows, who) {

        var c = who.options;
        var l = rows.length;
        var s = (c.page * c.size);
        var e = (s + c.size);
        if (e > rows.length) {
            e = rows.length;
        }

        var tableBody = $(table.tBodies[0]);

        // clear the table body
        who.options.ParentControlClass.clearTableBody();

        for (var i = s; i < e; i++) {
            tableBody.append(rows[i]);

            // .attr('data-subgrid-row-id')
            if (rows[i][0].DSubGridRow) {
                LogIt("Appending subgrid");
                tableBody.append(rows[i][0].DSubGridRow);
            }

            //var o = rows[i];
            //var l = o.length;
            //for (var j = 0; j < l; j++) {
            //	tableBody[0].appendChild(o[j]);
            //}
        }

        fixPosition(who);

        if (c.page >= c.totalPages) {
            moveToLastPage(who);
        }

        updatePageDisplay(c);
        who.options.ParentControlClass.PageniationDone($(who.options.cssPageSize, who.options.container).val() + "");
    }

    // return the instance
    return TablePaginator;
})();

var colResizable = (function () {

    function colResizable(options) {
        var self = this;
        var defaults = {

            //attributes:
            draggingClass: 'JCLRgripDrag',	//css-class used when a grip is being dragged (for visual feedback purposes)
            gripInnerHtml: '',				//if it is required to use a custom grip it can be done using some custom HTML				
            liveDrag: false,				//enables table-layout updating while dragging	
            fixed: true,                    //table width does not change if columns are resized
            minWidth: 15, 					//minimum width value in pixels allowed for a column 
            headerOnly: false,				//specifies that the size of the the column resizing anchors will be bounded to the size of the first row 
            hoverCursor: "e-resize",  		//cursor to be used on grip hover
            dragCursor: "e-resize",  		//cursor to be used while dragging
            postbackSafe: false, 			//when it is enabled, table layout can persist after postback or page refresh. It requires browsers with sessionStorage support (it can be emulated with sessionStorage.js). 
            flush: false, 					//when postbakSafe is enabled, and it is required to prevent layout restoration after postback, 'flush' will remove its associated layout data 
            marginLeft: null,				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
            marginRight: null, 				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
            disable: false,					//disables all the enhancements performed in a previously colResized table	
            partialRefresh: false,			//can be used in combination with postbackSafe when the table is inside of an updatePanel
            firstColumnResizable: true,

            //events:
            onDrag: null, 					//callback function to be fired during the column resizing process if liveDrag is enabled
            onResize: null					//callback function fired when the dragging process is over
        }

        self.doc = $(document); 		//window object
        self.head = $("head");			//head object
        self.drag = null;			//reference to the current grip that is being dragged
        //self.count = 0;				//internal count to create unique IDs when needed.

        //common strings for packing
        self.ID = "id";
        self.PX = "px";
        self.SIGNATURE = "JColResizer";
        self.FLEX = "JCLRFlex";

        //short-cuts
        //self.I = parseInt;
        //self.M = Math;
        self.IE = /Trident\/[4-9]/.test(navigator.userAgent); // navigator.userAgent.indexOf('Trident/4.0')>0
        self.SessionStrage;
        try { self.SessionStrage = sessionStorage; } catch (e) { }	//Firefox crashes when executed as local file system

        //append required CSS rules  
        self.head.append("<style type='text/css'>  .JColResizer{table-layout:fixed;} .JColResizer td, .JColResizer th{overflow:hidden;padding-left:0!important; padding-right:0!important;}  .JCLRgrips{ height:0px; position:relative;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; } .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: e-resize;top:0px} .JCLRLastGrip{position:absolute; width:1px; } .JCLRgripDrag{ border-left:1px dotted black;	} .JCLRFlex{width:auto!important;}</style>");

        self.options = $.extend(defaults, options);

        self.UpdatecolResizable = function () {
            //LogIt("UpdatecolResizable Called");
            self.syncGrips(self.options.ParentControlClass.mainTable);
        };

        /**
         * Function to allow column resizing for table objects. It is the starting point to apply the plugin.
         * @param {DOM node} tb - reference to the DOM table object to be enhanced
         * @param {Object} options	- some customization values
         */

        var tmpTable = self.options.ParentControlClass.mainTable;										//the table object is wrapped

        var id = tmpTable.id = tmpTable.attr(self.ID) || self.SIGNATURE + self.options.TableOrdinence;	//its id is obtained, if null new one is generated		
        tmpTable.p = self.options.postbackSafe; 							//short-cut to detect postback safe 		
        if (!tmpTable.is("table") && !self.options.partialRefresh) return; 		//if the object is not a table or if it was already processed then it is ignored.
        tmpTable.addClass(self.SIGNATURE).attr(self.ID, id).before('<div class="JCLRgrips"/>');	//the grips container object is added. Signature class forces table rendering in fixed-layout mode to prevent column's min-width

        tmpTable.g = []; tmpTable.c = []; tmpTable.w = tmpTable.width(); tmpTable.gc = tmpTable.prev(); tmpTable.f = self.options.fixed;	//tmpTable.c and tmpTable.g are arrays of columns and grips respectively				
        if (self.options.marginLeft) tmpTable.gc.css("marginLeft", self.options.marginLeft);  	//if the table contains margins, it must be specified
        if (self.options.marginRight) tmpTable.gc.css("marginRight", self.options.marginRight);  	//since there is no (direct) way to obtain margin values in its original units (%, em, ...)

        tmpTable.cs = parseInt(self.IE ? tmpTable[0].cellSpacing || tmpTable[0].currentStyle.borderSpacing : tmpTable.css('border-spacing')) || 2;	//table cellspacing (not even jQuery is fully cross-browser)
        tmpTable.b = parseInt(self.IE ? [0].border || tmpTable[0].currentStyle.borderLeftWidth : tmpTable.css('border-left-width')) || 1;	//outer border width (again cross-browser issues)

        /**
         * This function allows to remove any enhancements performed by this plugin on a previously processed table.
         * @param {jQuery ref} t - table object
         */
        self.destroy = function () {
            //var id = t.attr(self.ID), t = tables[id];		//its table object is found
            //if (!t || !t.is("table")) return;			//if none, then it wasn't processed	 
            self.options.ParentControlClass.mainTable.removeClass(self.SIGNATURE + " " + self.FLEX).gc.remove();	//class and grips are removed
        };


        /**
         * Function to create all the grips associated with the table given by parameters 
         * @param {jQuery ref} t - table object
         */
        self.createGrips = function (t, firstGripResizable) {

            var th = t.find(">thead>tr>th,>thead>tr>td");	//if table headers are specified in its semantically correct tag, are obtained
            if (!th.length) th = t.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td");	 //but headers can also be included in different ways
            th = th.filter(":visible");					//filter invisible columns
            t.cg = t.find("col"); 						//a table can also contain a colgroup with col elements		
            t.ln = th.length;							//table length is stored	
            if (t.p && self.SessionStrage && self.SessionStrage[t.id]) self.memento(t, th);		//if 'postbackSafe' is enabled and there is data for the current table, its coloumn layout is restored
            th.each(function (i) {						//iterate through the table column headers			
                var c = $(this); 						//jquery wrap for the current column			
                var g = $(t.gc.append('<div class="JCLRgrip"></div>')[0].lastChild); //add the visual node to be used as grip
                g.append(self.options.gripInnerHtml).append('<div class="' + self.SIGNATURE + '"></div>');
                if (i == t.ln - 1) {
                    g.addClass("JCLRLastGrip");
                    if (t.f) g.html("");
                }

                if (i > 0) {
                    g.bind('touchstart mousedown', self.onGripMouseDown); //bind the mousedown event to start dragging 
                } else if ((i == 0) && (self.options.firstGripResizable)) {
                    g.bind('touchstart mousedown', self.onGripMouseDown);
                } else {
                    g.html("");
                }

                g.t = t; g.i = i; g.c = c; c.w = c.width();		//some values are stored in the grip's node data
                t.g.push(g); t.c.push(c);						//the current grip and column are added to its table object
c.width(c.w).removeAttr("width");				//the width of the column is converted into pixel-based measurements
                g.data(self.SIGNATURE, { i: i, t: t.attr(self.ID), last: i == t.ln - 1 });	 //grip index and its table name are stored in the HTML 												
            });
            t.cg.removeAttr("width");	//remove the width attribute from elements in the colgroup 
            self.syncGrips(t); 				//the grips are positioned according to the current table layout			
            //there is a small problem, some cells in the table could contain dimension values interfering with the 
            //width value set by this plugin. Those values are removed
            t.find('td, th').not(th).not('table th, table td').each(function () {
                $(this).removeAttr('width');	//the width attribute is removed from all table cells which are not nested in other tables and dont belong to the header
            });
            if (!self.FLEX) {
                t.removeAttr('width').addClass(self.FLEX); //if not fixed, let the table grow as needed
            }


        };


        /**
         * Function to allow the persistence of columns dimensions after a browser postback. It is based in
         * the HTML5 sessionStorage object, which can be emulated for older browsers using sessionstorage.js
         * @param {jQuery ref} t - table object
         * @param {jQuery ref} th - reference to the first row elements (only set in deserialization)
         */
        self.memento = function (t, th) {
            var w, m = 0, i = 0, aux = [], tw;
            if (th) {										//in deserialization mode (after a postback)
                t.cg.removeAttr("width");
                if (self.options.flush) { self.SessionStrage[t.id] = ""; return; } 	//if flush is activated, stored data is removed
                w = self.SessionStrage[t.id].split(";");					//column widths is obtained
                tw = w[t.ln + 1];
                if (!t.f && tw) t.width(tw);			//it not fixed and table width data available its size is restored
                for (; i < t.ln; i++) {						//for each column
                    aux.push(100 * w[i] / w[t.ln] + "%"); 	//width is stored in an array since it will be required again a couple of lines ahead
                    th.eq(i).css("width", aux[i]); 	//each column width in % is restored
                }
                for (i = 0; i < t.ln; i++)
                    t.cg.eq(i).css("width", aux[i]);	//this code is required in order to create an inline CSS rule with higher precedence than an existing CSS class in the "col" elements
            } else {							//in serialization mode (after resizing a column)
                self.SessionStrage[t.id] = "";				//clean up previous data
                for (; i < t.c.length; i++) {	//iterate through columns
                    w = t.c[i].width();		//width is obtained
                    self.SessionStrage[t.id] += w + ";";		//width is appended to the sessionStorage object using ID as key
                    m += w;					//carriage is updated to obtain the full size used by columns
                }
                self.SessionStrage[t.id] += m;							//the last item of the serialized string is the table's active area (width), 
                //to be able to obtain % width value of each columns while deserializing
                if (!self.FLEX) self.SessionStrage[t.id] += ";" + t.width(); 	//if not fixed, table width is stored
            }
        };


        /**
         * Function that places each grip in the correct position according to the current table layout	 
         * @param {jQuery ref} t - table object
         */
        self.syncGrips = function (t) {
            t.gc.width(t.w);			//the grip's container width is updated				
            for (var i = 0; i < t.ln; i++) {	//for each column
                var c = t.c[i];
                t.g[i].css({			//height and position of the grip is updated according to the table layout
                    left: c.offset().left - t.offset().left + c.outerWidth(false) + t.cs / 2 + self.PX,
                    height: self.options.headerOnly ? t.c[0].outerHeight(false) : t.outerHeight(false)
                });
            }
        };



        /**
        * This function updates column's width according to the horizontal position increment of the grip being
        * dragged. The function can be called while dragging if liveDragging is enabled and also from the onGripDragOver
        * event handler to synchronize grip's position with their related columns.
        * @param {jQuery ref} t - table object
        * @param {number} i - index of the grip being dragged
        * @param {bool} isOver - to identify when the function is being called from the onGripDragOver event	
        */
        self.syncCols = function (t, i, isOver) {
            var inc = self.drag.x - self.drag.l, c = t.c[i], c2 = t.c[i + 1];
            var w = c.w + inc; var w2 = c2.w - inc;	//their new width is obtained					
            c.width(w + self.PX);
            t.cg.eq(i).width(w + self.PX);
            if (t.f) { //if fixed mode
                c2.width(w2 + self.PX);
                t.cg.eq(i + 1).width(w2 + self.PX);
            }
            if (isOver) {
                c.w = w;
                c2.w = t.f ? w2 : c2.w;
            }
        };


        /**
        * This function updates all columns width according to its real width. It must be taken into account that the 
        * sum of all columns can exceed the table width in some cases (if fixed is set to false and table has some kind 
        * of max-width).
        * @param {jQuery ref} t - table object	
        */
        self.applyBounds = function (t) {
            var w = $.map(t.c, function (c) {			//obtain real widths
                return c.width();
            });
            t.width(t.width()).removeClass(self.FLEX);	//prevent table width changes
            $.each(t.c, function (i, c) {
                c.width(w[i]).w = w[i];				//set column widths applying bounds (table's max-width)
            });
            t.addClass(self.FLEX);						//allow table width changes
        };


        /**
         * Event handler used while dragging a grip. It checks if the next grip's position is valid and updates it. 
         * @param {event} e - mousemove event binded to the window object
         */
        self.onGripDrag = function (e) {
            if (!self.drag) return;
            var t = self.drag.t;		//table object reference 
            var oe = e.originalEvent.touches;
            var ox = oe ? oe[0].pageX : e.pageX;    //original position (touch or mouse)
            var x = ox - self.drag.ox + self.drag.l;	        //next position according to horizontal mouse position increment
            var mw = self.options.minWidth, i = self.drag.i;	//cell's min width
            var l = t.cs * 1.5 + mw + t.b;
            var last = i == t.ln - 1;                 			//check if it is the last column's grip (usually hidden)
            var min = i ? t.g[i - 1].position().left + t.cs + mw : l;	//min position according to the contiguous cells
            var max = t.f ? 	//fixed mode?
                i == t.ln - 1 ?
                    t.w - l :
                    t.g[i + 1].position().left - t.cs - mw :
                Infinity; 								//max position according to the contiguous cells 
            x = Math.max(min, Math.min(max, x));				//apply bounding		
            self.drag.x = x; self.drag.css("left", x + self.PX); 	//apply position increment	
            if (last) {									//if it is the last grip
                var c = t.c[self.drag.i];					//width of the last column is obtained
                self.drag.w = c.w + x - self.drag.l;
            }
            if (self.options.liveDrag) { 			//if liveDrag is enabled
                if (last) {
                    c.width(self.drag.w);
                    t.w = t.width();
                } else {
                    self.syncCols(t, i); 			//columns are synchronized
                }
                self.syncGrips(t);
                var cb = self.options.onDrag;							//check if there is an onDrag callback
                if (cb) { e.currentTarget = t[0]; cb(e); }		//if any, it is fired			
            }
            return false; 	//prevent text selection while dragging				
        };


        /**
         * Event handler fired when the dragging is over, updating table layout
         */
        self.onGripDragOver = function (e) {

            self.doc.unbind('touchend.' + self.SIGNATURE + ' mouseup.' + self.SIGNATURE).unbind('touchmove.' + self.SIGNATURE + ' mousemove.' + self.SIGNATURE);
            $("head :last-child").remove(); 				//remove the dragging cursor style	
            if (!self.drag) return;
            self.drag.removeClass(self.options.draggingClass);		//remove the grip's dragging css-class
            var t = self.drag.t;
            var cb = self.options.onResize; 	    //get some values	
            var i = self.drag.i;                 //column index
            var last = i == t.ln - 1;         //check if it is the last column's grip (usually hidden)
            var c = t.g[i].c;               //the column being dragged
            if (last) {
                c.width(self.drag.w);
                c.w = self.drag.w;
            } else {
                self.syncCols(t, i, true);	//the columns are updated
            }
            if (!self.FLEX) self.applyBounds(t);	//if not fixed mode, then apply bounds to obtain real width values
            self.syncGrips(t);				//the grips are updated
            if (cb) { e.currentTarget = t[0]; cb(e); }	//if there is a callback function, it is fired
            if (t.p && self.SessionStrage) self.memento(t); 						//if postbackSafe is enabled and there is sessionStorage support, the new layout is serialized and stored
            self.drag = null;									//since the grip's dragging is over									
        };


        /**
         * Event handler fired when the grip's dragging is about to start. Its main goal is to set up events 
         * and store some values used while dragging.
         * @param {event} e - grip's mousedown event
         */
        self.onGripMouseDown = function (e) {
            var o = $(this).data(self.SIGNATURE);			//retrieve grip's data
            var t = self.options.ParentControlClass.mainTable, g = t.g[o.i];			//shortcuts for the table and grip objects
            var oe = e.originalEvent.touches;           //touch or mouse event?
            g.ox = oe ? oe[0].pageX : e.pageX;            //the initial position is kept
            g.l = g.position().left;
            self.doc.bind('touchmove.' + self.SIGNATURE + ' mousemove.' + self.SIGNATURE, self.onGripDrag).bind('touchend.' + self.SIGNATURE + ' mouseup.' + self.SIGNATURE, self.onGripDragOver);	//mousemove and mouseup events are bound
            self.head.append("<style type='text/css'>*{cursor:" + self.options.dragCursor + "!important}</style>"); 	//change the mouse cursor
            g.addClass(self.options.draggingClass); 	//add the dragging class (to allow some visual feedback)				
            self.drag = g;							//the current grip is stored as the current dragging object
            if (t.c[o.i].l) for (var i = 0, c; i < t.ln; i++) { c = t.c[i]; c.l = false; c.w = c.width(); } 	//if the colum is locked (after browser resize), then c.w must be updated		
            return false; 	//prevent text selection
        };


        /**
         * Event handler fired when the browser is resized. The main purpose of this function is to update
         * table layout according to the browser's size synchronizing related grips 
         */
        self.onResize = function () {
            var t = self.options.ParentControlClass.mainTable, i, mw = 0;
            t.removeClass(self.SIGNATURE);						//firefox doesn't like layout-fixed in some cases
            if (t.f && t.w != t.width()) {					//if the the table's width has changed and it is in fixed mode
                t.w = t.width();							//its new value is kept the active cells area is obtained
                for (i = 0; i < t.ln; i++) mw += t.c[i].w;
                //cell rendering is not as trivial as it might seem, and it is slightly different for
                //each browser. In the beginning i had a big switch for each browser, but since the code
                //was extremely ugly now I use a different approach with several re-flows. This works 
                //pretty well but it's a bit slower. For now, lets keep things simple...   
                for (i = 0; i < t.ln; i++) t.c[i].css("width", Math.round(1000 * t.c[i].w / mw) / 10 + "%").l = true;
                //c.l locks the column, telling us that its c.w is outdated									
            }
            self.syncGrips(t.addClass(self.SIGNATURE));
        };

        //bind resize event, to update grips position 
        $(window).bind('resize.' + self.SIGNATURE, self.onResize);

        self.createGrips(tmpTable, self.options.firstColumnResizable);		//grips are created

    }

    // return the instance
    return colResizable;
})();

var TableManager = (function () {

    function TableManager(settings) {
        var self = this;

        self.parsers = [
            {
                id: "text",
                is: function (s) {
                    return true;
                }, format: function (s) {
                    if (s.length == 0) {
                        return '';
                    }
                    return $.trim(s.toLocaleLowerCase());
                }, type: "text"
            },
            {
                id: "digit",
                is: function (s) {
                    return true;
                }, format: function (s) {
                    if (s.length == 0) {
                        return 0;
                    }
                    return self.formatFloat(_thisHelpers.RemoveNumericFormat(s));
                }, type: "numeric"
            },
            {
                id: "date",
                is: function (s) {
                    return true;
                }, format: function (s, tconfig) {
                    if (s.length == 0) {
                        return 0;
                    }
                    return self.formatFloat(Date.parseDate(s, tconfig.DateFormat).getTime());
                }, type: "numeric"
            },
            {
                id: "dateTime",
                is: function (s) {
                    return true;
                }, format: function (s, tconfig) {
                    if (s.length == 0) {
                        return 0;
                    }
                    return self.formatFloat(Date.parseDate(s, tconfig.DateFormat + ' ' + tconfig.TimeFormat).getTime());
                }, type: "numeric"
            }
        ];

        var defaults = {
            cssHeader: "header",
            cssAsc: "headerSortUp",
            cssDesc: "headerSortDown",
            cssChildRow: "expand-child",
            sortInitialOrder: "asc",
            sortMultiSortKey: "shiftKey",
            sortForce: null,
            sortAppend: null,
            sortLocaleCompare: true,
            textExtraction: "simple",
            realRowIndex: "data-item-realRowindex",
            rowSelectedCss: 'rowselected',
            OpenRecordIcon: "dcrmeg_openrec",

            TargetEntitySchemaName: '',

            parsers: [],
            headerList: [], selectedRows: [], allRows: [], DirtyCells: [],
            headers: {},
            widthFixed: false,
            cancelSelection: true,
            sortList: [],
            Country: "us",
            decimal: '/\.|\,/g',
            onRenderHeader: null,
            selectorHeaders: 'thead th',
            debug: false
        };

        // merge and extend.
        self.options = $.extend({}, defaults, settings);

        // store common expression for speed $this mainTable
        self.TableJq = self.options.ParentControlClass.mainTable;
        self.TableHtml = self.options.ParentControlClass.mainTable[0];

        // if no thead or tbody quit.
        if (!self.TableHtml.tHead || !self.TableHtml.tBodies) return;

        // save the settings where they read
        //$.data(self.TableHtml, "TableManager" + self.options.TableOrdinence, self.options);

        self.formatFloat = function (s) {
            var i = parseFloat(s);
            return (isNaN(i)) ? 0 : i;
        };
        self.formatInt = function (s) {
            var i = parseInt(s);
            return (isNaN(i)) ? 0 : i;
        };
        self.isDigit = function (s, config) {
            // replace all an wanted chars and match.
            return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
        };

        // build headers
        self.headers = buildHeaders(self);

        // try to auto detect column type, and store in tables config
        self.options.parsers = buildParserCache(self, self.headers);

        // build the cache for the tbody cells
        self.cache = buildCache(self);

        // fixate columns if the users supplies the fixedWidth option
        fixColumnWidth(self);

        SetupHeaderClickHandler(self);

        self.AddNewRow = function (rowtoadd) {
            var parsers = self.options.parsers;
            var cols = [];

            self.options.allRows.insert(0, rowtoadd);
            self.cache.row.insert(0, rowtoadd);

            var cells = rowtoadd.find('td');
            for (var i = 0; i < cells.length; i++) {
                cols.push(parsers[i].format(_thisHelpers.GetActiveCellText($(cells[i])), self.options));
            }
 
            cols.push(self.cache.normalized.length);
            self.cache.normalized.insert(0, cols);

            for (var i = 0; i < self.options.allRows.length; i++) {
                $(self.options.allRows[i]).attr(self.options.realRowIndex, i);
            }
            var n = self.cache.normalized;
            var checkCell = (n[0].length - 1);
            // Readjust the position of rows variable
            for (var i = 0; i < n.length; i++) {
                n[i][checkCell] = i; //pos - 1;
            }

            appendToTable(self);
        }
        self.DeleteRows = function (rowstoDel) {
            var counter = 0;
            // 0,1,2,3
            rowstoDel.sort(function (a, b) { return a - b });

            $.each(rowstoDel, function (index, item) {
                // Find any dirty cells and adjust DirtyCells array
                var targetcells = $(self.options.allRows[item]).find('td.IsDirty');
                if ((targetcells) && (targetcells.length)) {

                    $.each(targetcells, function (i, cell) {
                        var cellid = $(cell).attr('id');
                        var foundcell = [];
                        $.each(self.options.DirtyCells, function (i, item) {
                            if (item.id == cellid) {
                                foundcell.push(i);
                                return;
                            }
                        });
                        var counter1 = 0;
                        $.each(foundcell, function (i, val) {
                            val -= counter1;
                            counter1++;
                            self.options.DirtyCells.splice(val, 1);
                        });
                    });

                    if (self.options.DirtyCells.length == 0) {
                        // Replace this with 
                        self.options.ParentControlClass.SaveUndoCancelEnable(false);
                    } else {
                        self.options.ParentControlClass.UndoChangesEnabled(false);
                    }
                }

                item -= counter;
                counter++;

                self.options.allRows.splice(item, 1);
                self.cache.row.splice(item, 1);
                self.cache.normalized.splice(item, 1);

            });

            // Rsset all rows realIndex attr
            if (self.options.allRows.length > 0) {
                for (var i = 0; i < self.options.allRows.length; i++) {
                    $(self.options.allRows[i]).attr(self.options.realRowIndex, i);
                }
                var n = self.cache.normalized;
                var checkCell = (n[0].length - 1);
                // Readjust the position of rows variable
                for (var i = 0; i < n.length; i++) {
                    n[i][checkCell] = i; //pos - 1;
                }
                appendToTable(self);
            } else {
                self.TableJq.find('tbody:first').empty();
            }

            self.options.selectedRows = [];
        }
        self.undoCell = function (cell) {
            var config = self.options;
            var txt = _thisHelpers.GetActiveCellText(cell);
            var pos = [parseInt(cell.parent().attr(config.realRowIndex)), cell[0].cellIndex];
            self.cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(txt, config);
            cell.attr(_thisGlobals.ToolTipAttrName, txt);
            config.ParentControlClass.UndoCellDone();
        };
        self.update = function () {
            setTimeout(function () {
                // rebuild parsers.
                self.options.parsers = buildParserCache(self, self.headers);
                // rebuild the cache map
                self.cache = buildCache(self);
            }, 1);
        };
        self.updateCell = function (cell, originalVal, param) {
            var $thiscell = cell;
            // Add record
            // try to edit and cancel
            // refresh
            // try again and see the difference if any
            var config = self.options;
            var pos = [parseInt($thiscell.parent().attr(config.realRowIndex)), cell[0].cellIndex];

            // Mark the cell as dirty
            $thiscell.removeClass('fieldvaluesaved').addClass('IsDirty fieldvaluechanged');
            var original, changed, orgLogicalName, newLogicalName;

            if (param == 'op') {
                original = $thiscell.attr("data-item-OriginalAttrValue");
                changed = $thiscell.attr("data-item-ChangedAttrValue");
            } else if (param == 'lo') {
                original = $thiscell.attr("data-item-OriginalAttrValue");
                changed = $thiscell.attr("data-item-ChangedAttrValue");

                orgLogicalName = $thiscell.attr('data-item-lookup-originallogicalname');
                newLogicalName = $thiscell.attr('data-item-lookup-logicalname');
            }

            var cellid = $thiscell.attr("id");
            if ((cellid === undefined) || (cellid === null) || (cellid == '')) {
                cellid = _thisHelpers.GenerateUUID();
                $thiscell.attr("id", cellid);
            }

            var foundcell = false;
            var activecelltext = _thisHelpers.GetActiveCellText($thiscell);

            $.each(config.DirtyCells, function (i, item) {
                if (item.id == cellid) {
                    foundcell = true;
                    if (item.CurrentUndoIndex == (item.Changes.length - 1)) {
                        item.Changes.push(activecelltext);
                        if (changed) {
                            item.AdditionalAttr.push(changed);
                        }
                        if (orgLogicalName) {
                            item.AdditionalAttr.push(orgLogicalName);
                        }
                        if (newLogicalName) {
                            item.AdditionalAttr.push(newLogicalName);
                        }

                    } else {
                        item.Changes.splice(item.CurrentUndoIndex + 1, 0, activecelltext);
                        if (changed) {
                            item.AdditionalAttr.splice(item.CurrentUndoIndex + 1, 0, changed);
                        }
                        if (orgLogicalName) {
                            item.AdditionalAttr.splice(item.CurrentUndoIndex + 1, 0, orgLogicalName);
                        }
                        if (newLogicalName) {
                            item.AdditionalAttr.splice(item.CurrentUndoIndex + 1, 0, newLogicalName);
                        }
                    }
                    item.CurrentUndoIndex++;
                    return;
                }
            });

            if (!foundcell) {
                var rec = {
                    id: cellid,
                    CurrentUndoIndex: 1,
                    originalContent: (((originalVal) && (originalVal != 'undefined')) ? originalVal : ''),
                    TargetCell: cell
                };

                rec.Changes = new Array();
                rec.AdditionalAttr = new Array();

                rec.Changes.push(rec.originalContent);
                if (original) {
                    rec.AdditionalAttr.push(original);
                }
                if (orgLogicalName) {
                    rec.AdditionalAttr.push(orgLogicalName);
                }

                rec.Changes.push(activecelltext);
                if (changed) {
                    rec.AdditionalAttr.push(changed);
                }
                if (newLogicalName) {
                    rec.AdditionalAttr.push(newLogicalName);
                }

                config.DirtyCells.push(rec);
            }

            // adjust the undo and save btn
            config.ParentControlClass.SaveUndoCancelEnable(true);

            LogIt("changing from " + self.cache.normalized[pos[0]][pos[1]]);
            // update cache
            self.cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(activecelltext, config);
            LogIt("changed to " + self.cache.normalized[pos[0]][pos[1]]);

            // Reset tooltip text
            $thiscell.attr(_thisGlobals.ToolTipAttrName, activecelltext);
            config.ParentControlClass.UpdateCellDone();
        };
        self.searchGrid = function (txt) {
            txt = txt.toLocaleLowerCase();

            var matches = [];
            var totalCells = (self.TableHtml.tBodies[0].rows[0] && self.TableHtml.tBodies[0].rows[0].cells.length) || 0;
            var index = -1;
            var compare = '';
            var totlalrowtxt = '';
            var len = self.cache.normalized.length;
            var i = 0;
            var tmprow = undefined;

            while (true) {

                for (var c = 1; c < totalCells; c++) {
                    tmprow = self.cache.row[i];

                    compare = _thisHelpers.GetActiveCellText($(tmprow[0].cells[c]));
                    if (compare.length > 0) {
                        totlalrowtxt += compare.toLocaleLowerCase();
                    }
                }

                index = totlalrowtxt.indexOf(txt);
                if (index != -1) {
                    matches.push({ result: index, normalized: self.cache.normalized[i], row: self.cache.row[i] });
                    self.cache.row.splice(i, 1);
                    self.cache.normalized.splice(i, 1);
                    i--;
                }

                totlalrowtxt = '';
                i++;
                if (i >= self.cache.normalized.length) {
                    break;
                }

            }

            if (matches.length > 0) {
                matches.sort(compareids);

                for (var i = matches.length - 1; i >= 0; i--) {
                    self.cache.row.unshift(matches[i].row);
                    self.cache.normalized.unshift(matches[i].normalized);
                }

                // Rsset all rows realIndex attr
                for (var i = 0; i < self.options.allRows.length; i++) {
                    $(self.options.allRows[i]).attr(self.options.realRowIndex, i);
                }
                var n = self.cache.normalized;
                var checkCell = (n[0].length - 1);
                // Readjust the position of rows variable
                for (var i = 0; i < n.length; i++) {
                    n[i][checkCell] = i; //pos - 1;
                }

                // Render
                appendToTable(self);
            }
        };

        self.RebuildCache = function () {
            self.cache = buildCache(self);
            appendToTable(self);
        }

        self.DestroyData = function() {
            self.headers.off('click').off('mousedown');
            self.options.parsers = [];
            self.options.sortList = [];
            self.options.headerList = [];
            self.options.selectedRows = [];
            self.options.allRows = [];
            self.options.DirtyCells = [];
        }

        if (self.TableHtml.tBodies[0].rows.length > 0) {
            appendToTable(self);
        }
    }

    function compareids(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }

    function buildHeaders(who) {
        var table = who.TableHtml;
        var meta = false;

        //var header_index = computeTableHeaderCellIndexes(table);
        if ((!who.options.TableIsReadOnly) && (who.options.UserCanDelete) && (who.options.ParentControlClass.activeOptions.AllowDelete)) {
            var $chk = $("<input type='checkbox' />")
                .addClass(who.options.TooltipTargetClass)
                .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.SelectAllRecords)
                .on('click', function (e) {
                    e.stopPropagation();
                    var schemaname = $(this).parent().parent().parent().parent().attr('data-item-schema');
                    _thisHelpers.SelectAllRows(schemaname, ($(this).is(':checked')));
                });
            var $chkHeader = $("<th></th>").addClass('firstColCheckbox').append($chk);
            $("thead th:first", table).before($chkHeader);
        } else {
            var $chkHeader = $("<th></th>").addClass('firstColNoCheckbox');
            $("thead th:first", table).before($chkHeader);
        }

        var readonlyheader = false;

        var $footer = $(table).find('tfoot:first').find('tr:first');
        var internaleditors = '';

        $tableHeaders = $(who.options.selectorHeaders, table).each(function (index) {
            // Add footer
            var $footercell = $('<td><span></span></td>')
                .addClass(who.options.TooltipTargetClass)
                .addClass('tfooterdummy')
                .attr('data-item-footer-cell', '0')
                .appendTo($footer);

            internaleditors = parseInt($(this).attr('data-item-header-editortype'));
            if ((internaleditors == DCrmEditableGrid.Editors.Numeric) ||
                (internaleditors == DCrmEditableGrid.Editors.Decimal) ||
                (internaleditors == DCrmEditableGrid.Editors.Currency)) {
                $footercell.addClass('NumericTextbox');
            }

            this.column = this.cellIndex || index; // header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
            //this.column = index;
            if ((who.options.DisplayFieldsSum) &&
                (this.column == 0) &&
                (who.options.HaveNumericFields) &&
                (!who.options.TableIsReadOnly) &&
                (who.options.UserCanUpdate)) {

                var checkid = _thisHelpers.GenerateUUID();

                $('<span>' + _thisGlobals.Translation_Labels.Sum + '</span>').appendTo($footercell);

                $footercell
                    .addClass(who.options.TooltipTargetClass)
                    .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.Sum);
            }

            this.order = formatSortingOrder(who.options.sortInitialOrder);

            this.count = this.order;

            //if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
            //if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);

            if (!this.sortDisabled) {
                var $th = $(this).addClass(who.options.cssHeader);
                if (who.options.onRenderHeader) who.options.onRenderHeader.apply($th);
            }

            // add cell to headerList
            who.options.headerList[index] = this;
        });

        return $tableHeaders;

    };

    function buildParserCache(who, $headers) {
        var list = [];

        for (var i = 0; i < $headers.length; i++) {
            var dataSorterType = $($headers[i]).attr('data-item-header-datasortertype');
            var p = who.parsers[0];
            //LogIt("Text parser");
            if ((dataSorterType) && (dataSorterType.length > 0)) {
                if (dataSorterType == 'numeric') {
                    //LogIt("Numberic parser");
                    p = who.parsers[1];
                } else if (dataSorterType == 'date') {
                    //LogIt("Date parser");
                    p = who.parsers[2];
                } else if (dataSorterType == 'datetime') {
                    //LogIt("DateTime parser");
                    p = who.parsers[3];
                }
            }
            list.push(p);
        }
        return list;
    };

    function buildCache(who) {
        var table = who.TableHtml;

        var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
            totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
            parsers = who.options.parsers,
            cache = {
                row: [],
                normalized: []
            };

        if (totalRows == 0) {
            return cache;
        }

        // First td for selction is added after
        totalCells++;
        
        var $tmpCell = null;
        var $chk = null;
        var $openRec = null;
        for (var i = 0; i < totalRows; ++i) {

            /** Add the table data to main data array */
            var c = $(table.tBodies[0].rows[i]),
                cols = [];

            $tmpCell = $('<td style="text-align:center"></td>'); //
            if ((!who.options.TableIsReadOnly) && (who.options.UserCanDelete) && (who.options.ParentControlClass.activeOptions.AllowDelete)) {
                // Select row checkbox
                $chk = $("<input type='checkbox' />")
                    .addClass(who.options.TooltipTargetClass)
                    .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.SelectRecord)
                    .click(function (e) {
                        var row = $(this).parent().parent();

                        if ((row) && (row.length)) {

                            if ($(this).is(':checked')) {
                                // add to selected rows
                                who.options.selectedRows[who.options.selectedRows.length] = row[0];
                                $(row[0]).addClass(who.options.rowSelectedCss);
                            } else {
                                $(row[0]).removeClass(who.options.rowSelectedCss);
                                // remove from selected rows
                                for (var i = who.options.selectedRows.length - 1; i >= 0; i--) {
                                    if ($(who.options.selectedRows[i]).attr(who.options.realRowIndex) === $(row[0]).attr(who.options.realRowIndex)) {
                                        who.options.selectedRows.splice(i, 1);
                                        break;
                                    }
                                }
                            }
                        }
                        e.stopPropagation();
                    }).appendTo($tmpCell);
            }

            if (who.options.HasChildGrids) {
                // Open record
                $openRec = $('<button></button>')
                    //.attr('src', who.options.OpenRecordIcon)
                    .addClass('ToolbarAdd firstColOpenImg')
                    .addClass(who.options.TooltipTargetClass)
                    //.attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.OpenRecord)
                    .attr('data-child-open', '0')
                    .click(function (e) {
                        e.stopPropagation();
                        $this = $(this);
                        var $parentrow = $this.parent().parent();

                        if ($this.attr('data-child-open') == '0') {
                            $this.attr('data-child-open', '1');
                            $this.removeClass('ToolbarAdd');
                            $this.addClass('ToolbarMinus');

                            var subgridid = _thisHelpers.GenerateUUID();
                            var subgridrowid = _thisHelpers.GenerateUUID();
                            // Call parent passing only the subgrid div id
                            var $tr = $('<tr><td colspan="' + who.options.headerList.length + '"></td></tr>')
                                .attr('id', subgridrowid)
                                .attr('data-subgrid-id', subgridid)
                                .insertAfter($this.parent().parent());

                            $parentrow.attr('data-subgrid-row-id', subgridrowid);
                            $parentrow[0].DSubGridRow = $tr;

                            $gridParentDiv = $('<div></div>')
                                .attr('id', subgridid)
                                .addClass('subgridparentdiv')
                                .appendTo($tr.find('td:first'));

                            $parentrow.addClass('bgSelectedSubGridRow');

                            who.options.ParentControlClass.SelectedRecordGuid = $parentrow.attr('data-record-guid');
                            _thisHelpers.WaitDialog(true);
                            ParentGridSelectedRecord(who.options.ParentControlClass, $gridParentDiv);
                            who.options.ParentControlClass.ResetColResizerHeight();

                        } else {
                            $this.attr('data-child-open', '0');
                            $this.removeClass('ToolbarMinus');
                            $this.addClass('ToolbarAdd');
                            $parentrow.removeClass('bgSelectedSubGridRow');

                            var rowid = $parentrow.attr('data-subgrid-row-id');
                            if (rowid) {
                                if ($parentrow[0].DSubGridRow) {
                                    var subgridid = $parentrow[0].DSubGridRow.attr('data-subgrid-id');
                                    $parentrow[0].DSubGridRow = undefined;

                                    who.options.ParentControlClass.SelectedRecordGuid = $parentrow.attr('data-record-guid');
                                    ParentGridSelectedRecord(who.options.ParentControlClass, subgridid, true);
                                }

                                $('#' + rowid).empty().remove();
                                $parentrow.removeAttr('data-subgrid-row-id');
                                who.options.ParentControlClass.ResetColResizerHeight();
                            }
                        }

                    }).appendTo($tmpCell);
            } else {
                $openRec = $('<img></img>')
                    .attr('src', who.options.OpenRecordIcon)
                    .addClass(who.options.TooltipTargetClass)
                    .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.OpenRecord)
                    .attr('data-child-open', '0')
                    .click(function (e) {
                        e.stopPropagation();

                        var $parentrow = $(this).parent().parent();
                        if (($parentrow) && ($parentrow.length > 0)) {
                            window.parent.Xrm.Utility.openEntityForm(who.options.TargetEntitySchemaName, $($parentrow).attr('data-record-guid'));
                        }
                    }).appendTo($tmpCell);
            }

            $("td:first", c).before($tmpCell);

            //// if this is a child row, add it to the last row's children and
            //// continue to the next row
            //if (c.hasClass(who.options.cssChildRow)) {
            //    cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
            //    // go to the next for loop
            //    continue;
            //}

            who.options.allRows.push(c);
            cache.row.push(c);

            var targetrow = cache.row.length - 1;
            $(c[0]).attr(who.options.realRowIndex, targetrow);
            var elemText = '';
            var elemjs;

            for (var j = 0; j < totalCells; ++j) {

                elemjs = $(c[0].cells[j]);
                elemText = _thisHelpers.GetActiveCellText(elemjs); //getElementText(who.options, c[0].cells[j]);
                if (j > 0) {
                    // Tooltip
                    elemjs
                        .addClass(who.options.TooltipTargetClass)
                        .attr(_thisGlobals.ToolTipAttrName, elemText);
                    // Numeric
                    if (parsers[j].id == 'digit') {
                        elemjs.addClass('NumericTextbox');
                    }
                }

                // Store as text or float (decimal, wholeNumber, currency, float, date.getTime(), datetime.getTime())
                cols.push(parsers[j].format(elemText, who.options));
            }

            cols.push(cache.normalized.length); // add position for rowCache
            cache.normalized.push(cols);
            cols = null;
        };

        return cache;
    };

    function getElementText(config, node) {

        var text = "";

        if (!node) return "";

        if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;

        if (config.textExtraction == "simple") {
            if (config.supportsTextContent) {
                text = node.textContent;
            } else {
                if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                    text = node.childNodes[0].innerHTML;
                } else {
                    text = node.innerHTML;
                }
            }
        } else {
            if (typeof (config.textExtraction) == "function") {
                text = config.textExtraction(node);
            } else {
                text = $(node).text();
            }
        }
        return text;
    }

    function appendToTable(who) {
        var table = who.TableHtml;
        var config = who.options;
        var cache = who.cache;

        var c = cache,
            r = c.row,
            n = c.normalized,
            totalRows = n.length,
            checkCell = (n[0].length - 1),
            tableBody = $(table.tBodies[0]),
            rows = [];

        for (var i = 0; i < totalRows; i++) {
            var pos = n[i][checkCell];

            rows.push(r[pos]);

            if (!config.appender) {
                // TODO
                // r[pos] is undefined ???
                var l = r[pos].length;
                for (var j = 0; j < l; j++) {
                    tableBody[0].appendChild(r[pos][j]);
                }
            }
        }

        if (config.ParentControlClass.Appender) {
            config.ParentControlClass.Appender.appender(table, rows);
        }

        rows = null;

        // trigger sortend
        setTimeout(function () {
            config.ParentControlClass.SortEnd();
        }, 0);

    };

    function formatSortingOrder(v) {
        if (typeof (v) != "Number") {
            return (v.toLowerCase() == "desc") ? 1 : 0;
        } else {
            return (v == 1) ? 1 : 0;
        }
    }

    function isValueInArray(v, a) {
        var l = a.length;
        for (var i = 0; i < l; i++) {
            if (a[i][0] == v) {
                return true;
            }
        }
        return false;
    }

    function setHeadersCss($headers, list, css) {
        // remove all header information
        $headers.removeClass(css[0]).removeClass(css[1]);

        var h = [];
        $headers.each(function (offset) {
            if (!this.sortDisabled) {
                h[this.column] = $(this);
            }
        });

        var l = list.length;
        for (var i = 0; i < l; i++) {
            h[list[i][0]].addClass(css[list[i][1]]);
        }
    }

    function fixColumnWidth(who) {
        var c = who.options;
        if (c.widthFixed) {
            var colgroup = $('<colgroup>');
            $("tr:first td", who.TableHtml.tBodies[0]).each(function () {
                colgroup.append($('<col>').css('width', $(this).width()));
            });
            $(table).prepend(colgroup);
        };
    }

    function updateHeaderSortCount(table, sortList) {
        var c = table.config,
            l = sortList.length;
        for (var i = 0; i < l; i++) {
            var s = sortList[i],
                o = c.headerList[s[0]];
            o.count = s[1];
            o.count++;
        }
    }

    function SetupHeaderClickHandler(who) {
        var self = who;
        // apply event handling to headers
        self.headers.on('click', function (e) {
            var totalRows = (self.TableHtml.tBodies[0] && self.TableHtml.tBodies[0].rows.length) || 0;

            if (this.column == 0) {
                // reserved for select all rows
                self.options.ParentControlClass.UndoChangesEnabled(false);
                return false;
            }

            var parentrow = $(this).parent();
            if ((parentrow) && (parentrow.length)) {
                if (parentrow[0].rowIndex == 0) {
                    self.options.ParentControlClass.UndoChangesEnabled(false);
                }
            }

            if (!this.sortDisabled && totalRows > 0) {
                // Only call sortStart if sorting is
                // enabled.
                self.options.ParentControlClass.SortStart();
                // store exp, for speed
                var $cell = $(this);
                // get current column index
                var i = this.column;
                // get current column sort order
                this.order = this.count++ % 2;
                // always sort on the locked order.
                if (this.lockedOrder) this.order = this.lockedOrder;

                // user only whants to sort on one
                // column
                if (!e[self.options.sortMultiSortKey]) {
                    // flush the sort list
                    self.options.sortList = [];
                    if (self.options.sortForce != null) {
                        var a = self.options.sortForce;
                        for (var j = 0; j < a.length; j++) {
                            if (a[j][0] != i) {
                                self.options.sortList.push(a[j]);
                            }
                        }
                    }
                    // add column to sort list
                    self.options.sortList.push([i, this.order]);
                    // multi column sorting
                } else {
                    // the user has clicked on an all
                    // ready sortet column.
                    if (isValueInArray(i, self.options.sortList)) {
                        // revers the sorting direction
                        // for all tables.
                        for (var j = 0; j < self.options.sortList.length; j++) {
                            var s = self.options.sortList[j],
                                o = self.options.headerList[s[0]];
                            if (s[0] == i) {
                                o.count = s[1];
                                o.count++;
                                s[1] = o.count % 2;
                            }
                        }
                    } else {
                        // add column to sort list array
                        self.options.sortList.push([i, this.order]);
                    }
                };

                setTimeout(function () {
                    // set css for headers
                    var sortCSS = [self.options.cssDesc, self.options.cssAsc];
                    setHeadersCss(self.headers, self.options.sortList, sortCSS);
                    multisort(self);
                    appendToTable(self);
                }, 1);
                // stop normal event by returning false
                return false;
            }
            // cancel selection
        }).on('mousedown', function () {
            if (self.options.cancelSelection) {
                this.onselectstart = function () {
                    return false
                };
                return false;
            }
        });
    }

    /* sorting methods */

    function multisort(who) {

        var sortList = who.options.sortList;
        var cache = who.cache;

        var dynamicExp = "var sortWrapper = function(a,b) {",
            l = sortList.length;

        for (var i = 0; i < l; i++) {

            var c = sortList[i][0];
            var order = sortList[i][1];
            var s = (who.options.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
            var e = "e" + i;

            dynamicExp += "var " + e + " = " + s; // + "(a[" + c + "],b[" + c
            // + "]); ";
            dynamicExp += "if(" + e + ") { return " + e + "; } ";
            dynamicExp += "else { ";
        }

        // if value is the same keep orignal order
        var orgOrderCol = cache.normalized[0].length - 1;
        dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";

        for (var i = 0; i < l; i++) {
            dynamicExp += "}; ";
        }

        dynamicExp += "return 0; ";
        dynamicExp += "}; ";

        eval(dynamicExp);

        cache.normalized.sort(sortWrapper);

        return cache;
    };

    function makeSortFunction(type, direction, index) {
        var a = "a[" + index + "]",
            b = "b[" + index + "]";
        if (type == 'text' && direction == 'asc') {
            return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
        } else if (type == 'text' && direction == 'desc') {
            return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
        } else if (type == 'numeric' && direction == 'asc') {
            return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
        } else if (type == 'numeric' && direction == 'desc') {
            return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
        }
    };

    function compareids(a, b) {
        if (a.result < b.result)
            return -1;
        if (a.result > b.result)
            return 1;
        return 0;
    }

    // return the instance
    return TableManager;
})();

function RetrieveEntityOutput(text, what) {
    var tmp = null;

    if (what) {
        var decrypted = CryptoJS.AES.decrypt(text, _thisGlobals.TargetOutputEncSeed);
        // 4d657373616765
        tmp = decrypted.toString(CryptoJS.enc.Utf8);
        // Message
    } else {
        var encrypted = CryptoJS.AES.encrypt(text, _thisGlobals.TargetOutputEncSeed);
        // AABsAABkAABiAAAAAAAAAABNAABlAABPAAC0AABHAAA=
        tmp = encrypted.toString();
    }
    //LogIt("RetrieveEntityOutput [" + tmp + "]");
    return tmp;
}

function getWebresourceParameter() {
    var passedParameters = undefined;

    try {
        if (location.search != "") {
            var vals = location.search.substr(1).split("&");
            for (var i = 0; i < vals.length; i++) {
                vals[i] = vals[i].split("=");
                if (vals[i][0].toLowerCase() == "data" && vals[i][1] != "") {

                    passedParameters = decodeURIComponent(vals[i][1]);

                    //var userVals = decodeURIComponent(vals[i][1]).split(",");
                    //for (var j = 0; j < userVals.length; j++) {
                    //    passedParameters.push(userVals[j].split("=")[1].trim());
                    //}
                    break;
                }

                //else {
                //    passedParameters[vals[i][0]] = vals[i][1];
                //}
            }
        }
    } catch (e) {
        LogEx("Unable to retrieve Guid of the configuration from data parameter.\r\n" + e.message);
    }
    return passedParameters;
}

function GetInitialFetch() {

    var configGuid = getWebresourceParameter();

    var fetch = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
    '<entity name="dcrmeg_dcrmegconfiguration">' +
      '<attribute name="dcrmeg_dcrmegconfigurationid" />' +
      '<attribute name="dcrmeg_headerfieldnameshidden" />' +
      '<attribute name="dcrmeg_fromentityfieldsattrhidden" />' +
      '<attribute name="dcrmeg_displayfromentityhidden" />' +
      '<attribute name="dcrmeg_fieldcondition" />' +
      '<filter type="and">' +
        '<condition attribute="statecode" operator="eq" value="0" />' +
        '<condition attribute="dcrmeg_displayonentityhidden" operator="like" value="' + _thisGlobals.ParentEntityName.toLowerCase() + '|%" />';

        if (configGuid) {
            fetch += '<condition attribute="dcrmeg_dcrmegconfigurationid" operator="eq" uitype="dcrmeg_dcrmegconfiguration" value="' + configGuid + '" />'
        }

      fetch += '</filter>' +
    '</entity>' +
  '</fetch>';

    return fetch;
}

function ValidateEditor(editorType, editorValue) {
    
    if ((window.parent.ValidateDCrmEgGrid) && (typeof(window.parent.ValidateDCrmEgGrid) === 'function')) {
        return window.parent.ValidateDCrmEgGrid(editorType, editorValue);
    }
    return true;
};

function GetSelectedFields(d) {
    var ReloadedSavedFields = [];
    if ((d) && (d.length > 0)){
        var arr = d.split(_thisGlobals._OuterSeperator);
        $.each(arr, function (index, item) {

            var items = item.split(_thisGlobals._SEPERATOR);

            if (items.length == 1) {
                return;
            }

            ReloadedSavedFields.push({
                Name: items[0],
                SchemaName: items[1],
                AttrType: items[2],
                RequieredLevel: items[3],
                MaxLength: items[4], // 'A' no value
                Format: items[5],
                MaxValue: items[6],
                MinValue: items[7],
                Precision: items[8],
                RealWidth: items[9],
                ReadOnly: items[10],
                LookupTargetEntity: items[11],
                DefaultValue: ((items.length == 13) ? items[12] : null)
            });
        });
    }
    return ReloadedSavedFields;
}

function GetOptionSet(entityLogicalName, attributeLogicalName) {
    return XrmServiceToolkit.Soap.RetrieveAttributeMetadata(entityLogicalName, attributeLogicalName, true);
}

/* User Settings - Translations */
function GetAllUserSettings() {
    var userId = _thisGlobals.xrmPage.context.getUserId();
    var settings = ["dateformatstring",
                     "dateseparator",
                     "timeformatstring",
                     "timeseparator",
                     "uilanguageid",
                     "defaultcountrycode",
                     "currencysymbol",
                     "numberseparator",
                     "decimalsymbol",
                     "currencydecimalprecision",
                     "numbergroupformat",
                     "currencyformatcode",
                     "negativeformatcode",
                     "negativecurrencyformatcode"];
    var attributes = "";

    for (var i = 0; i < settings.length; i++) {
        attributes += '<attribute name="' + settings[i] + '" />';
    }

    var fetchXml = [
        '<fetch mapping="logical">',
            '<entity name="usersettings">',
                attributes,
                '<filter>',
                    '<condition attribute="systemuserid" operator="eq" value="', userId, '" />',
                '</filter>',
            '</entity>',
        '</fetch>'].join('');

    XrmServiceToolkit.Soap.Fetch(fetchXml, false, GetAllUserSettingsCallback);
}

function GetAllUserSettingsCallback(allsettings) {
    var result = allsettings[0];
    // /
    _thisGlobals.userDatetimeSettings = {
        // /
        DateSeparator: result.attributes.dateseparator.value,
        // M/d/yyyy
        DateFormat: result.attributes.dateformatstring.value,
        // h:mm tt
        TimeFormat: result.attributes.timeformatstring.value,
        // :
        TimeSeparator: result.attributes.timeseparator.value,
        DateTimeFormat: result.attributes.dateformatstring.value + " " + result.attributes.timeformatstring.value
    };

    // Need to be set first in options. +1
    _thisGlobals.userCurrencySettings = {
        // Need to be set first in options. +1
        DefaultCountryCode: (result.attributes.defaultcountrycode) ? result.attributes.defaultcountrycode.value : undefined,
        // 1033 en
        LanguageId: result.attributes.uilanguageid.value,
        // $
        CurrencySymbol: result.attributes.currencysymbol.value,
        CurrencySymbolRegEx: result.attributes.currencysymbol.value,
        RemoveCurrenyFormatRegEx: '',
        CurrencySymbolCharCode: 0,
        // ,
        NumberSeparator: result.attributes.numberseparator.value,
        NumberSeparatorCharCode: 0,
        // .
        DecimalSymbol: result.attributes.decimalsymbol.value,
        DecimalSymbolCharCode: 0,
        // 2
        CurrencyDecimalPrecision: parseInt(result.attributes.currencydecimalprecision.value + ''),
        // 3
        NumberGroupFormat: parseInt(result.attributes.numbergroupformat.value + ''),

        CurrencyFormatCode: (result.attributes.currencyformatcode) ? result.attributes.currencyformatcode.value : undefined,
        NegativeCurrencyFormatCode: (result.attributes.negativecurrencyformatcode) ? result.attributes.negativecurrencyformatcode.value : undefined,
        NegativeNumberFormatCode: (result.attributes.negativeformatcode) ? result.attributes.negativeformatcode.value : undefined
    };

    if (_thisGlobals.userCurrencySettings.CurrencySymbol == '$') {
        _thisGlobals.userCurrencySettings.CurrencySymbolRegEx = '\\' + _thisGlobals.userCurrencySettings.CurrencySymbol;
    }
    _thisGlobals.userCurrencySettings.RemoveCurrenyFormatRegEx = '/[' + _thisGlobals.userCurrencySettings.CurrencySymbolRegEx + _thisGlobals.userCurrencySettings.NumberSeparator + '()-]/g';

    _thisGlobals.userCurrencySettings.CurrencySymbolCharCode = _thisGlobals.userCurrencySettings.CurrencySymbol.charCodeAt(0);
    _thisGlobals.userCurrencySettings.NumberSeparatorCharCode = _thisGlobals.userCurrencySettings.NumberSeparator.charCodeAt(0);
    _thisGlobals.userCurrencySettings.DecimalSymbolCharCode = _thisGlobals.userCurrencySettings.DecimalSymbol.charCodeAt(0);

    GetTranslationsFor(_thisGlobals.xrmPage.context.getUserLcid());
}

function GetTranslationsFor(lcid) {
    var fetch = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
      '<entity name="dcrmeg_dcrmegtranslation">' +
        '<attribute name="dcrmeg_dcrmegtranslationid" />' +
        '<attribute name="dcrmeg_name" />' +
        '<attribute name="dcrmeg_lcid" />' +

        '<attribute name="dcrmeg_totalrecords" />' +
        '<attribute name="dcrmeg_copyvaluetoclipboard" />' +
        '<attribute name="dcrmeg_openrecordinnewwindow" />' +
        '<attribute name="dcrmeg_openlookuprecordinnewwindow" />' +
        '<attribute name="dcrmeg_clearvlaue" />' +
        '<attribute name="dcrmeg_ok" />' +
        '<attribute name="dcrmeg_cancel" />' +
        '<attribute name="dcrmeg_sum" />' +
        '<attribute name="dcrmeg_selectrecord" />' +
        '<attribute name="dcrmeg_selectallrecords" />' +
        '<attribute name="dcrmeg_undochanges" />' +
        '<attribute name="dcrmeg_undoallchanges" />' +
        '<attribute name="dcrmeg_newrecord" />' +
        '<attribute name="dcrmeg_deleteselectedrecords" />' +
        '<attribute name="dcrmeg_savechanges" />' +
        '<attribute name="dcrmeg_activateeditorondoubleclick" />' +
        '<attribute name="dcrmeg_entertexttosearch" />' +
        '<attribute name="dcrmeg_gotofirst" />' +
        '<attribute name="dcrmeg_gotonext" />' +
        '<attribute name="dcrmeg_gotoprevious" />' +
        '<attribute name="dcrmeg_gotolast" />' +
        '<attribute name="dcrmeg_pagesize" />' +
        '<attribute name="dcrmeg_lockedfield" />' +
        '<attribute name="dcrmeg_requiredfield" />' +
        '<attribute name="dcrmeg_incorrectformat" />' +
        '<attribute name="dcrmeg_readonly" />' +
        '<attribute name="dcrmeg_openrecord" />' +
        '<attribute name="dcrmeg_maxvalue" />' +
        '<attribute name="dcrmeg_minvalue" />' +
        '<attribute name="dcrmeg_notavalidentry" />' +
        '<attribute name="dcrmeg_lookupmorerecords" />' +
        '<attribute name="dcrmeg_openurlinnewwindow" />' +
        
        '<order attribute="dcrmeg_name" descending="false" />' +
        '<filter type="and">' +
          '<condition attribute="dcrmeg_lcid" operator="eq" value="' + lcid + '" />' +
        '</filter>' +
    '</entity>' +
  '</fetch>';
  XrmServiceToolkit.Soap.Fetch(fetch, false, GetTranslationsForCallback);
}

function GetTranslationsForCallback(translation) {
    _thisGlobals.Translation_Labels.AutoSaveOn = 'Auto Save On';
    _thisGlobals.Translation_Labels.AutoSaveOff = 'Auto Save Off';
    _thisGlobals.Translation_Labels.RefreshGrid = 'Refresh';

    if (translation.length > 0) {
        var $tmp = undefined;

        $("#validationerror").text((translation[0].attributes["dcrmeg_requiredfield"] ? translation[0].attributes["dcrmeg_requiredfield"].value : ''));
        $("#inputformaterror").text((translation[0].attributes["dcrmeg_incorrectformat"] ? translation[0].attributes["dcrmeg_incorrectformat"].value : ''));

        _thisGlobals.Translation_Labels.TotalRecords = (translation[0].attributes["dcrmeg_totalrecords"] ? translation[0].attributes["dcrmeg_totalrecords"].value : '');
        _thisGlobals.Translation_Labels.CopyValueToClipboard = (translation[0].attributes["dcrmeg_copyvaluetoclipboard"] ? translation[0].attributes["dcrmeg_copyvaluetoclipboard"].value : '');
        _thisGlobals.Translation_Labels.OpenRecordInNewWindow = (translation[0].attributes["dcrmeg_openrecordinnewwindow"] ? translation[0].attributes["dcrmeg_openrecordinnewwindow"].value : '');
        _thisGlobals.Translation_Labels.OpenLookupInNewWindow = (translation[0].attributes["dcrmeg_openlookuprecordinnewwindow"] ? translation[0].attributes["dcrmeg_openlookuprecordinnewwindow"].value : '');
        _thisGlobals.Translation_Labels.ClearValue = (translation[0].attributes["dcrmeg_clearvlaue"] ? translation[0].attributes["dcrmeg_clearvlaue"].value : '');
        _thisGlobals.Translation_Labels.Ok = (translation[0].attributes["dcrmeg_ok"] ? translation[0].attributes["dcrmeg_ok"].value : '');
        _thisGlobals.Translation_Labels.Cancel = (translation[0].attributes["dcrmeg_cancel"] ? translation[0].attributes["dcrmeg_cancel"].value : '');
        _thisGlobals.Translation_Labels.Sum = (translation[0].attributes["dcrmeg_sum"] ? translation[0].attributes["dcrmeg_sum"].value : '');
        _thisGlobals.Translation_Labels.SelectRecord = (translation[0].attributes["dcrmeg_selectrecord"] ? translation[0].attributes["dcrmeg_selectrecord"].value : '');
        _thisGlobals.Translation_Labels.SelectAllRecords = (translation[0].attributes["dcrmeg_selectallrecords"] ? translation[0].attributes["dcrmeg_selectallrecords"].value : '');
        _thisGlobals.Translation_Labels.UndoChanges = (translation[0].attributes["dcrmeg_undochanges"] ? translation[0].attributes["dcrmeg_undochanges"].value : '');
        _thisGlobals.Translation_Labels.UndoAllChanges = (translation[0].attributes["dcrmeg_undoallchanges"] ? translation[0].attributes["dcrmeg_undoallchanges"].value : '');
        _thisGlobals.Translation_Labels.NewRecord = (translation[0].attributes["dcrmeg_newrecord"] ? translation[0].attributes["dcrmeg_newrecord"].value : '');
        _thisGlobals.Translation_Labels.DeleteSelectedRecord = (translation[0].attributes["dcrmeg_deleteselectedrecords"] ? translation[0].attributes["dcrmeg_deleteselectedrecords"].value : '');
        _thisGlobals.Translation_Labels.SaveChanges = (translation[0].attributes["dcrmeg_savechanges"] ? translation[0].attributes["dcrmeg_savechanges"].value : '');
        _thisGlobals.Translation_Labels.ActivateEditorOnDBClick = (translation[0].attributes["dcrmeg_activateeditorondoubleclick"] ? translation[0].attributes["dcrmeg_activateeditorondoubleclick"].value : '');
        _thisGlobals.Translation_Labels.EnterTextToSearch = (translation[0].attributes["dcrmeg_entertexttosearch"] ? translation[0].attributes["dcrmeg_entertexttosearch"].value : '');
        _thisGlobals.Translation_Labels.GoToFirst = (translation[0].attributes["dcrmeg_gotofirst"] ? translation[0].attributes["dcrmeg_gotofirst"].value : '');
        _thisGlobals.Translation_Labels.GoToNext = (translation[0].attributes["dcrmeg_gotonext"] ? translation[0].attributes["dcrmeg_gotonext"].value : '');
        _thisGlobals.Translation_Labels.GoToPrevious = (translation[0].attributes["dcrmeg_gotoprevious"] ? translation[0].attributes["dcrmeg_gotoprevious"].value : '');
        _thisGlobals.Translation_Labels.GoToLast = (translation[0].attributes["dcrmeg_gotolast"] ? translation[0].attributes["dcrmeg_gotolast"].value : '');
        _thisGlobals.Translation_Labels.PageSize = (translation[0].attributes["dcrmeg_pagesize"] ? translation[0].attributes["dcrmeg_pagesize"].value : '');
        _thisGlobals.Translation_Labels.LockedField = (translation[0].attributes["dcrmeg_lockedfield"] ? translation[0].attributes["dcrmeg_lockedfield"].value : '');
        _thisGlobals.Translation_Labels.ReadOnly = (translation[0].attributes["dcrmeg_readonly"] ? translation[0].attributes["dcrmeg_readonly"].value : '');
        _thisGlobals.Translation_Labels.OpenRecord = (translation[0].attributes["dcrmeg_openrecord"] ? translation[0].attributes["dcrmeg_openrecord"].value : '');
        _thisGlobals.Translation_Labels.IncorrectFormat = (translation[0].attributes["dcrmeg_incorrectformat"] ? translation[0].attributes["dcrmeg_incorrectformat"].value : '');
        _thisGlobals.Translation_Labels.MaxValue = (translation[0].attributes["dcrmeg_maxvalue"] ? translation[0].attributes["dcrmeg_maxvalue"].value : '');
        _thisGlobals.Translation_Labels.MinValue = (translation[0].attributes["dcrmeg_minvalue"] ? translation[0].attributes["dcrmeg_minvalue"].value : '');
        _thisGlobals.Translation_Labels.NotaValidEntry = (translation[0].attributes["dcrmeg_notavalidentry"] ? translation[0].attributes["dcrmeg_notavalidentry"].value : '');
        _thisGlobals.Translation_Labels.OpenUrlInNewWindow = (translation[0].attributes["dcrmeg_openurlinnewwindow"] ? translation[0].attributes["dcrmeg_openurlinnewwindow"].value : '');

        _thisGlobals.Translation_Labels.Export = "Export";

    } else {
        _thisGlobals.Translation_Labels.TotalRecords = "Total records";
        _thisGlobals.Translation_Labels.CopyValueToClipboard = "Copy value to clipboard";
        _thisGlobals.Translation_Labels.OpenRecordInNewWindow = "Open record in new window";
        _thisGlobals.Translation_Labels.OpenLookupInNewWindow = "Open lookup record in new window";
        _thisGlobals.Translation_Labels.ClearValue = "Clear value";
        _thisGlobals.Translation_Labels.Ok = "Ok";
        _thisGlobals.Translation_Labels.Cancel = "Cancel";
        _thisGlobals.Translation_Labels.Sum = "Summary";
        _thisGlobals.Translation_Labels.SelectRecord = "Select record";
        _thisGlobals.Translation_Labels.SelectAllRecords = "Select all records";
        _thisGlobals.Translation_Labels.UndoChanges = "Undo changes";
        _thisGlobals.Translation_Labels.UndoAllChanges = "Undo all changes";
        _thisGlobals.Translation_Labels.NewRecord = "New record";
        _thisGlobals.Translation_Labels.DeleteSelectedRecord = "Delete selected record(s)";
        _thisGlobals.Translation_Labels.SaveChanges = "Save changes";
        _thisGlobals.Translation_Labels.ActivateEditorOnDBClick = "Activate editors on double click";
        _thisGlobals.Translation_Labels.EnterTextToSearch = "Enter text to search";
        _thisGlobals.Translation_Labels.GoToFirst = "Go to first page";
        _thisGlobals.Translation_Labels.GoToNext = "Go to next page";
        _thisGlobals.Translation_Labels.GoToPrevious = "Go to previous page";
        _thisGlobals.Translation_Labels.GoToLast = "Go to last page";
        _thisGlobals.Translation_Labels.PageSize = "Page size";
        _thisGlobals.Translation_Labels.LockedField = "Requiered field";
        _thisGlobals.Translation_Labels.ReadOnly = "Read-only";
        _thisGlobals.Translation_Labels.OpenRecord = "Open record in current window";
        _thisGlobals.Translation_Labels.IncorrectFormat = "Incorrect format";
        _thisGlobals.Translation_Labels.MaxValue = "Max value";
        _thisGlobals.Translation_Labels.MinValue = "Min value";
        _thisGlobals.Translation_Labels.NotaValidEntry = "Not a valid entry";
        _thisGlobals.Translation_Labels.LookupMoreRecords = "Lookup more records";
        _thisGlobals.Translation_Labels.OpenUrlInNewWindow = "Open URL in new window";
        _thisGlobals.Translation_Labels.Export = "Export";
    }

    if (_thisGlobals.ParentFieldsFormType != 1) {
        XrmServiceToolkit.Soap.Fetch(GetInitialFetch(), false, LoadDCrmEGConfigurationCallback);
    } else {
        _thisHelpers.WaitDialog();
    }
}

function CreateGridContainers(entityname, userPrivilages, tooltipTargetClass, parentcontainer, allowautosave, allowcreate, allowdelete, Schema) {

    //LogIt("Parent tagname " + parentcontainer[0].tagName);

    var $parentContainer = parentcontainer;
    var containerIds = {};

    containerIds.ParentGridDivContainer = parentcontainer.attr('id');

    // Section
    containerIds.TableCaptionContainer = _thisHelpers.GenerateUUID();
    var $section = $('<div></div>')
        .addClass("section group")
        .attr('id', containerIds.TableCaptionContainer)
        .appendTo($parentContainer);

    var $captioncontainer = $('<div class="col"></div').appendTo($section);
    var $toolbarbuttonscontainer = $('<div class="col"></div').appendTo($section);
    var $pagercontainer = $('<div class="floatright"></div').appendTo($section);

    containerIds.TableCaption = _thisHelpers.GenerateUUID();
    $('<span></span>')
        .text(entityname + 's -')
        .attr('id', containerIds.TableCaption)
        .addClass('TableCaption')
        .appendTo($captioncontainer);

    containerIds.TotalRecords = _thisHelpers.GenerateUUID();
    $('<span></span>')
        .addClass('pageTotal')
        .attr('id', containerIds.TotalRecords)
        .appendTo($captioncontainer);

    // Toolbar
    containerIds.GridToolbar = _thisHelpers.GenerateUUID();
    var $gridToolbar = $('<div></div>')
        .addClass('toolbarButtonsContainer colLeftBorder')
        .attr('id', containerIds.GridToolbar)
        .appendTo($toolbarbuttonscontainer);

    containerIds.AddNewRec = _thisHelpers.GenerateUUID();
    $tmpBtn = $('<button></button>')
        .attr('id', containerIds.AddNewRec)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.NewRecord + ' ' + entityname)
        .addClass('ToolarButton ToolbarAdd')
        .addClass(tooltipTargetClass)
        .appendTo($gridToolbar);

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanCreate) || (!allowcreate)) {
        $tmpBtn.hide();
    }

    containerIds.DeleteRec = _thisHelpers.GenerateUUID();
    $tmpBtn = $('<button></button>')
        .attr('id', containerIds.DeleteRec)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.DeleteSelectedRecord)
        .addClass('ToolarButton ToolbarDel')
        .addClass(tooltipTargetClass)
        .appendTo($gridToolbar);

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanDelete) || (!allowdelete)) {
        $tmpBtn.hide();
    }

    containerIds.SaveChanges = _thisHelpers.GenerateUUID();
    $tmpBtn = $('<button></button>')
        .attr('id', containerIds.SaveChanges)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.SaveChanges)
        .addClass('ToolarButton ToolbarSave')
        .addClass(tooltipTargetClass)
        .appendTo($gridToolbar);

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
        $tmpBtn.hide();
    }

    containerIds.UndoChanges = _thisHelpers.GenerateUUID();
    $tmpBtn = $('<button></button>')
        .attr('id', containerIds.UndoChanges)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.UndoChanges)
        .addClass('ToolarButton ToolbarUndo')
        .addClass(tooltipTargetClass)
        .appendTo($gridToolbar);

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
        $tmpBtn.hide();
    }

    containerIds.CancelAllChanges = _thisHelpers.GenerateUUID();
    $tmpBtn = $('<button></button>')
        .attr('id', containerIds.CancelAllChanges)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.UndoAllChanges)
        .addClass('ToolarButton ToolbarUndoAll')
        .addClass(tooltipTargetClass)
        .appendTo($gridToolbar);

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
        $tmpBtn.hide();
    }

    containerIds.ExportToExcel = _thisHelpers.GenerateUUID();
    $('<button></button>')
        .attr('id', containerIds.ExportToExcel)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.Export)
        .addClass(tooltipTargetClass)
        .addClass('ToolarButton ToolbarToExcel')
        .appendTo($gridToolbar);

    //// Checkbox editor acitivation
    //containerIds.EditorDbClickActivationCheck = _thisHelpers.GenerateUUID();
    //$tmpBtn = $('<input type="checkbox"></button>')
    //    .attr('id', containerIds.EditorDbClickActivationCheck)
    //    .appendTo($gridToolbar);
    //if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
    //    $tmpBtn.hide();
    //}

    //$tmpBtn = $('<label></label>')
    //    .attr('for', containerIds.EditorDbClickActivationCheck)
    //    .text(_thisGlobals.Translation_Labels.ActivateEditorOnDBClick)
    //    .appendTo($gridToolbar);
    //if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
    //    $tmpBtn.hide();
    //}

    // Refresh 
    containerIds.RefreshGrid = _thisHelpers.GenerateUUID();
    $('<button></button>')
        .attr('id', containerIds.RefreshGrid)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.RefreshGrid)
        .addClass(tooltipTargetClass)
        .addClass('ToolarButton ToolbarRefresh')
        .appendTo($gridToolbar);

    // Auto Save
    var $onoffdiv = $('<div class="switch"></div>').appendTo($gridToolbar);

    containerIds.AutoSave = _thisHelpers.GenerateUUID();
    if (allowautosave) {
        $tmpBtn = $('<input type="checkbox" checked="checked"></button>')
            .attr('id', containerIds.AutoSave)
            .addClass('cmn-toggle cmn-toggle-yes-no')
            .appendTo($onoffdiv);
    } else {
        $tmpBtn = $('<input type="checkbox"></button>')
            .attr('id', containerIds.AutoSave)
            .addClass('cmn-toggle cmn-toggle-yes-no')
            .appendTo($onoffdiv);
    }

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
        $tmpBtn.hide();
    }
    $tmpBtn = $('<label></label>')
        .attr('for', containerIds.AutoSave)
        .attr('data-on', _thisGlobals.Translation_Labels.AutoSaveOn)
        .attr('data-off', _thisGlobals.Translation_Labels.AutoSaveOff)
        .appendTo($onoffdiv);

    if ((_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
        $tmpBtn.hide();
    }


    // Searchbox
    containerIds.SearchGridBox = _thisHelpers.GenerateUUID();
    $('<input type="text" />')
        .attr('id', containerIds.SearchGridBox)
        .attr('placeholder', _thisGlobals.Translation_Labels.EnterTextToSearch)
        .addClass('searchgridtextbox')
        .appendTo($pagercontainer);

    // Pager
    containerIds.Pager = _thisHelpers.GenerateUUID();
    var $pager = $('<div></div>')
        .addClass('pager colLeftBorder')
        .attr('id', containerIds.Pager)
        .appendTo($pagercontainer);

    if (_thisGlobals.FormIsReadOnly) {
        $pager.addClass('pagerDisabled');
    }

    var $form = $('<form></form>').appendTo($pager);

    $('<button></button>').attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.GoToFirst).addClass('PagerButton ToolbarGoToFirst').addClass(tooltipTargetClass).appendTo($form);
    $('<button></button>').attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.GoToPrevious).addClass('PagerButton ToolbarGoToPrev').addClass(tooltipTargetClass).appendTo($form);
    $('<span></span>').addClass('pagedisplay').appendTo($form);
    $('<button></button>').attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.GoToNext).addClass('PagerButton ToolbarGoToNext').addClass(tooltipTargetClass).appendTo($form);
    $('<button></button>').attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.GoToLast).addClass('PagerButton ToolbarGoToLast').addClass(tooltipTargetClass).appendTo($form);
    $('<span></span>').text(_thisGlobals.Translation_Labels.PageSize).appendTo($form);

    containerIds.NumOfRecordsToDisplay = _thisHelpers.GenerateUUID();

    var $select = $('<select><select/>')
        .attr('id', containerIds.NumOfRecordsToDisplay)
        .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.PageSize)
        .addClass('pagesize')
        .addClass(tooltipTargetClass)
        .appendTo($form);
    $('<option selected="selected" value="5">5</option>').appendTo($select);
    $('<option value="10">10</option>').appendTo($select);
    $('<option value="20">20</option>').appendTo($select);
    $('<option value="30">30</option>').appendTo($select);
    $('<option value="40">40</option>').appendTo($select);

    // Table
    containerIds.Table = _thisHelpers.GenerateUUID();
    var $Grid = $('<table class="pure-table tablesorter"><thead><tr></tr></thead><tbody></tbody><tfoot><tr></tr></tfoot></table>')
        .attr('id', containerIds.Table)
        .attr('data-item-schema', Schema)
        .attr('data-item-entityname', entityname)
        .appendTo($parentContainer);

    //containerIds.TooltipDisplay = _thisHelpers.GenerateUUID();
    //$('<div style="padding-top:10px;height:15px;width:100%;" class="TextAutoEclipse"></div>').attr('id', containerIds.TooltipDisplay).appendTo($parentContainer);

    return containerIds;
}

/* User Privilages */
function RetrieveUserPrivileges(_PrivilegeName) {
    try {
        var _RequestMain = "";
        _RequestMain += "      <request i:type=\"b:RetrieveUserPrivilegesRequest\" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\" xmlns:b=\"http://schemas.microsoft.com/crm/2011/Contracts\">";
        _RequestMain += "        <a:Parameters xmlns:c=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">";
        _RequestMain += "          <a:KeyValuePairOfstringanyType>";
        _RequestMain += "            <c:key>UserId</c:key>";
        _RequestMain += "            <c:value i:type=\"d:guid\" xmlns:d=\"http://schemas.microsoft.com/2003/10/Serialization/\">" + _thisGlobals.LoggedInUserID + "</c:value>";
        _RequestMain += "          </a:KeyValuePairOfstringanyType>";
        _RequestMain += "        </a:Parameters>";
        _RequestMain += "        <a:RequestId i:nil=\"true\" />";
        _RequestMain += "        <a:RequestName>RetrieveUserPrivileges</a:RequestName>";
        _RequestMain += "      </request>";

        // Get privilegeid based on Name
        var d = fncLookupValueFromEntity("privilege", "name", _PrivilegeName, "", "", "privilegeid");
        var flag = false;
        if (d != null) {

            var _RestultXml = XrmServiceToolkit.Soap.Execute(_RequestMain);

            if ($(_RestultXml).find("b\\:RolePrivilege").length > 0) {
                d = d.toLowerCase();

                $(_RestultXml).find("b\\:RolePrivilege").each(function () {
                    //inner loop
                    $(this).find("b\\:PrivilegeId").each(function () {

                        var _PrivilegeId = $(this).text();

                        if (_PrivilegeId.toString().toLowerCase() == d) {
                            flag = true;
                            //LogIt("privilage " + _PrivilegeName + " TRUE - Privilage ID " + _PrivilegeId.toString());
                        }
                    });
                });
            }
            else if ($(_RestultXml).find("RolePrivilege").length > 0) {
                d = d.toLowerCase();

                $(_RestultXml).find("RolePrivilege").each(function () {
                    //inner loop
                    $(this).find("PrivilegeId").each(function () {

                        var _PrivilegeId = $(this).text();

                        if (_PrivilegeId.toString().toLowerCase() == d) {
                            flag = true;
                            //LogIt("privilage " + _PrivilegeName + " TRUE - Privilage ID " + _PrivilegeId.toString());
                        }

                    });
                });
            }
        } else {
            flag = true;
        }
        return flag;
    }
    catch (ex) {
        LogIt("Exception retreiving privilages" + ex.message);
    }

}

function fncLookupValueFromEntity(a, b, c, d, e, g) {
    var m = "";
    "" != d && (m = "<condition attribute='" + d + "' value='" + e + "' operator='eq'/>");
    var fetchXml = "<fetch distinct='false' mapping='logical' output-format='xml-platform' version='1.0'>" +
                      "<entity name='" + a + "'>" +
                      "<attribute name='" + g + "'/>" +
                      "<filter type='and'>" +
                      "<condition attribute='" + b + "' value='" + c + "' operator='eq'/>" + m +
                      "</filter></entity></fetch>";

    a = XrmServiceToolkit.Soap.Fetch(fetchXml);

    if (a.length > 0) {
        if (a[0].attributes[g] != null) {
            return a[0].attributes[g].value;
        }
    }
    return null
}

/* Starting point */
function InitializeSetupRoutines() {

    if (window.frameElement) {
        $(window.frameElement).css('width', '100%');
    }

    xrmPage = window.parent.Xrm.Page;
    _thisGlobals.ParentFieldsFormType = _thisGlobals.xrmPage.ui.getFormType();
    _thisGlobals.FormIsReadOnly = ((_thisGlobals.ParentFieldsFormType == 3) || (_thisGlobals.ParentFieldsFormType == 4));
    _thisGlobals.ParentEntityName = _thisGlobals.xrmPage.data.entity.getEntityName();
    _thisGlobals.ParentEntityId = _thisGlobals.xrmPage.data.entity.getId(); // Includes {}

    GetAllUserSettings();
}

/*
Save Grid as Excel/CSV/PDF
*/

var _saveAs = (function (view) {
    // IE <10 is explicitly unsupported
    if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
        return;
    }
    var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function () {
		    return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function (node) {
		    var event = doc.createEvent("MouseEvents");
		    event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
		    node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function (ex) {
		    (view.setImmediate || view.setTimeout)(function () {
		        throw ex;
		    }, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		, arbitrary_revoke_timeout = 500 // in ms
		, revoke = function (file) {
		    var revoker = function () {
		        if (typeof file === "string") { // file is an object URL
		            get_URL().revokeObjectURL(file);
		        } else { // file is a File
		            file.remove();
		        }
		    };
		    if (view.chrome) {
		        revoker();
		    } else {
		        setTimeout(revoker, arbitrary_revoke_timeout);
		    }
		}
		, dispatch = function (filesaver, event_types, event) {
		    event_types = [].concat(event_types);
		    var i = event_types.length;
		    while (i--) {
		        var listener = filesaver["on" + event_types[i]];
		        if (typeof listener === "function") {
		            try {
		                listener.call(filesaver, event || filesaver);
		            } catch (ex) {
		                throw_outside(ex);
		            }
		        }
		    }
		}
		, auto_bom = function (blob) {
		    // prepend BOM for UTF-8 XML and text/* types (including HTML)
		    if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
		        return new Blob(["\ufeff", blob], { type: blob.type });
		    }
		    return blob;
		}
		, FileSaver = function (blob, name) {
		    blob = auto_bom(blob);
		    // First try a.download, then web filesystem, then object URLs
		    var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, dispatch_all = function () {
				    dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function () {
				    // don't create more object URLs than needed
				    if (blob_changed || !object_url) {
				        object_url = get_URL().createObjectURL(blob);
				    }
				    if (target_view) {
				        target_view.location.href = object_url;
				    } else {
				        var new_tab = view.open(object_url, "_blank");
				        if (new_tab === undefined && typeof safari !== "undefined") {
				            //Apple do not allow window.open, see http://bit.ly/1kZffRI
				            view.location.href = object_url;
				        }
				    }
				    filesaver.readyState = filesaver.DONE;
				    dispatch_all();
				    revoke(object_url);
				}
				, abortable = function (func) {
				    return function () {
				        if (filesaver.readyState !== filesaver.DONE) {
				            return func.apply(this, arguments);
				        }
				    };
				}
				, create_if_not_found = { create: true, exclusive: false }
				, slice
		    ;
		    filesaver.readyState = filesaver.INIT;
		    if (!name) {
		        name = "download";
		    }
		    if (can_use_save_link) {
		        object_url = get_URL().createObjectURL(blob);
		        save_link.href = object_url;
		        save_link.download = name;
		        click(save_link);
		        filesaver.readyState = filesaver.DONE;
		        dispatch_all();
		        revoke(object_url);
		        return;
		    }
		    // Object and web filesystem URLs have a problem saving in Google Chrome when
		    // viewed in a tab, so I force save with application/octet-stream
		    // http://code.google.com/p/chromium/issues/detail?id=91158
		    // Update: Google errantly closed 91158, I submitted it again:
		    // https://code.google.com/p/chromium/issues/detail?id=389642
		    if (view.chrome && type && type !== force_saveable_type) {
		        slice = blob.slice || blob.webkitSlice;
		        blob = slice.call(blob, 0, blob.size, force_saveable_type);
		        blob_changed = true;
		    }
		    // Since I can't be sure that the guessed media type will trigger a download
		    // in WebKit, I append .download to the filename.
		    // https://bugs.webkit.org/show_bug.cgi?id=65440
		    if (webkit_req_fs && name !== "download") {
		        name += ".download";
		    }
		    if (type === force_saveable_type || webkit_req_fs) {
		        target_view = view;
		    }
		    if (!req_fs) {
		        fs_error();
		        return;
		    }
		    fs_min_size += blob.size;
		    req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
		        fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
		            var save = function () {
		                dir.getFile(name, create_if_not_found, abortable(function (file) {
		                    file.createWriter(abortable(function (writer) {
		                        writer.onwriteend = function (event) {
		                            target_view.location.href = file.toURL();
		                            filesaver.readyState = filesaver.DONE;
		                            dispatch(filesaver, "writeend", event);
		                            revoke(file);
		                        };
		                        writer.onerror = function () {
		                            var error = writer.error;
		                            if (error.code !== error.ABORT_ERR) {
		                                fs_error();
		                            }
		                        };
		                        "writestart progress write abort".split(" ").forEach(function (event) {
		                            writer["on" + event] = filesaver["on" + event];
		                        });
		                        writer.write(blob);
		                        filesaver.abort = function () {
		                            writer.abort();
		                            filesaver.readyState = filesaver.DONE;
		                        };
		                        filesaver.readyState = filesaver.WRITING;
		                    }), fs_error);
		                }), fs_error);
		            };
		            dir.getFile(name, { create: false }, abortable(function (file) {
		                // delete file if it already exists
		                file.remove();
		                save();
		            }), abortable(function (ex) {
		                if (ex.code === ex.NOT_FOUND_ERR) {
		                    save();
		                } else {
		                    fs_error();
		                }
		            }));
		        }), fs_error);
		    }), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function (blob, name) {
		    return new FileSaver(blob, name);
		}
    ;
    // IE 10+ (native saveAs)
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        return function (blob, name) {
            return navigator.msSaveOrOpenBlob(auto_bom(blob), name);
        };
    }

    FS_proto.abort = function () {
        var filesaver = this;
        filesaver.readyState = filesaver.DONE;
        dispatch(filesaver, "abort");
    };
    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;

    FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

    return saveAs;
}(window));

var _title = function (config) {
    var title = config.title;

    return title.indexOf('*') !== -1 ?
		title.replace('*', $('title').text()) :
		title;
};

var _filename = function (config, incExtension) {
    // Backwards compatibility
    var filename = config.filename === '*' && config.title !== '*' && config.title !== undefined ?
		config.title :
		config.filename;

    if (filename.indexOf('*') !== -1) {
        filename = filename.replace('*', $('title').text());
    }

    // Strip characters which the OS will object to
    filename = filename.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");

    return incExtension === undefined || incExtension === true ?
		filename + config.extension :
		filename;
};

var _newLine = function (config) {
    return config.newline ?
		config.newline :
		navigator.userAgent.match(/Windows/) ?
			'\r\n' :
			'\n';
};

var _isSafari = function () {
    return navigator.userAgent.indexOf('Safari') !== -1 &&
		navigator.userAgent.indexOf('Chrome') === -1 &&
		navigator.userAgent.indexOf('Opera') === -1;
};

var _exportData = function (dt, config) {
    var newLine = _newLine(config);
    var data = dt;
    var boundary = config.fieldBoundary;
    var separator = config.fieldSeparator;
    var reBoundary = new RegExp(boundary, 'g');
    var escapeChar = config.escapeChar !== undefined ?
		config.escapeChar :
		'\\';
    var join = function (a) {
        var s = '';

        // If there is a field boundary, then we might need to escape it in
        // the source data
        for (var i = 0, ien = a.length ; i < ien ; i++) {
            if (i > 0) {
                s += separator;
            }

            s += boundary ?
				boundary + ('' + a[i]).replace(reBoundary, escapeChar + boundary) + boundary :
				a[i];
        }

        return s;
    };

    var header = config.header ? join(data.header) + newLine : '';
    var footer = config.footer ? newLine + join(data.footer) : '';
    var body = [];

    for (var i = 0, ien = data.body.length ; i < ien ; i++) {
        body.push(join(data.body[i]));
    }

    return {
        str: header + body.join(newLine) + footer,
        rows: body.length
    };
};

var addRow = function (row) {
    var cells = [];
    var tmpVal = '';

    for (var i = 1, ien = row.length ; i < ien ; i++) {
        if (row[i] === null || row[i] === undefined) {
            tmpVal = '';
        } else {
            tmpVal = _thisHelpers.GetActiveCellText($(row[i]));
        }

        if (tmpVal.length > 0) {
            // trim and strip new line
            tmpVal = tmpVal.replace( /^\s+|\s+$/g, '' ).replace(/\n/g, ' ');
        }

        // Don't match numbers with leading zeros or a negative anywhere
        // but the start
        cells.push(typeof tmpVal === 'number' || (tmpVal.match && tmpVal.match(/^-?[0-9\.]+$/) && tmpVal.charAt(0) !== '0') ?
            '<c t="n"><v>' + tmpVal + '</v></c>' :
            '<c t="inlineStr"><is><t>' + (
                !tmpVal.replace ?
                tmpVal :
                tmpVal
                    .replace(/&(?!amp;)/g, '&amp;')
                    .replace(/[\x00-\x1F\x7F-\x9F]/g, '')) + // remove control characters
            '</t></is></c>'                                    // they are not valid in XML
        );
    }

    return '<row>' + cells.join('') + '</row>';
};

function SaveGridAsExcel(who) {
    var isAvailable = window.FileReader !== undefined && window.JSZip !== undefined && !_isSafari();
    LogIt("isAvailable " + isAvailable);
    var headers = who.mainTable.find('thead').find('tr:first').find('th');
    var rows = who.tableDataManager.options.allRows;

    if (rows.length == 0) {
        return;
    }

    var xml = addRow(headers);
    for (var i = 0, ien = rows.length ; i < ien ; i++) {
        xml += addRow($(rows[i]).find('td'));
    }

    var zip = new window.JSZip();
    var _rels = zip.folder("_rels");
    var xl = zip.folder("xl");
    var xl_rels = zip.folder("xl/_rels");
    var xl_worksheets = zip.folder("xl/worksheets");

    zip.file('[Content_Types].xml', _thisGlobals.excelStrings['[Content_Types].xml']);
    _rels.file('.rels', _thisGlobals.excelStrings['_rels/.rels']);
    xl.file('workbook.xml', _thisGlobals.excelStrings['xl/workbook.xml']);
    xl_rels.file('workbook.xml.rels', _thisGlobals.excelStrings['xl/_rels/workbook.xml.rels']);
    xl_worksheets.file('sheet1.xml', _thisGlobals.excelStrings['xl/worksheets/sheet1.xml'].replace('__DATA__', xml));

    _saveAs(
        zip.generate({ type: "blob" }),
        'Exported Grid.xlsx'
    );
}

function SaveGridAsCsv(who) {
    var isAvailable = window.FileReader !== undefined && window.Blob;
    LogIt("isAvailable " + isAvailable);

    var data = {};
    data.header = [];
    data.body = [];

    var headers = who.mainTable.find('thead').find('tr:first').find('th');
    var rows = who.tableDataManager.options.allRows;
    if (rows.length == 0) {
        return;
    }

    var columns = headers.length;
    for (var i = 1, ien = headers.length ; i < ien ; i++) {
        data.header.push(_thisHelpers.GetActiveCellText($(headers[i])));
    }

    var tmp = [];
    var tmpVal = '';

    for (var i = 0, ien = rows.length ; i < ien ; i++) {
        var row = $(rows[i]).find('td');
        
        for (var j = 1; j < row.length; j++) {
            tmpVal = _thisHelpers.GetActiveCellText($(row[j]));
            if (tmpVal.length > 0) {
                tmpVal = tmpVal.replace(/^\s+|\s+$/g, '').replace(/\n/g, ' ');
            }
            tmp.push(tmpVal);
        }
        data.body[i] = tmp
        tmp = [];
    }

    var config = {
        filename: '*',
        extension: '.csv',
        fieldSeparator: ',',
        fieldBoundary: '"',
        escapeChar: '"',
        charset: null,
        header: true,
        footer: false
    };

    var newLine = _newLine(config);
    var output = _exportData(data, config).str;
    var charset = document.characterSet || document.charset;

    if (charset !== false) {
        if (!charset) {
            charset = document.characterSet || document.charset;
        }

        if (charset) {
            charset = ';charset=' + charset;
        }
    }
    else {
        charset = '';
    }

    _saveAs(
        new Blob([output], { type: 'text/csv' + charset }),
        'Exported Grid.csv'
    );
}

function SaveGridAsPdf(who) {
    var isAvailable = window.FileReader !== undefined && window.pdfMake;
    LogIt("isAvailable " + isAvailable);

    var data = {};
    data.header = [];
    data.body = [];

    var headers = who.mainTable.find('thead').find('tr:first').find('th');
    var rows = who.tableDataManager.options.allRows;
    if (rows.length == 0) {
        return;
    }

    var columns = headers.length;
    for (var i = 1, ien = headers.length ; i < ien ; i++) {
        data.header.push(_thisHelpers.GetActiveCellText($(headers[i])));
    }

    var tmp = [];
    var tmpVal = '';

    for (var i = 0, ien = rows.length ; i < ien ; i++) {
        var row = $(rows[i]).find('td');

        for (var j = 1; j < row.length; j++) {
            tmpVal = _thisHelpers.GetActiveCellText($(row[j]));
            if (tmpVal.length > 0) {
                tmpVal = tmpVal.replace(/^\s+|\s+$/g, '').replace(/\n/g, ' ');
            }
            tmp.push(tmpVal);
        }
        data.body[i] = tmp
        tmp = [];
    }

    var config = {
        title: '*',
        filename: '*',
        extension: '.pdf',
        orientation: 'portrait',
        pageSize: 'A4',
        header: true,
        footer: false,
        message: null,
        customize: null,
        download: 'download'
    }

    var newLine = _newLine(config);
    var rows = [];

    if (config.header) {
        rows.push($.map(data.header, function (d) {
            return {
                text: typeof d === 'string' ? d : d + '',
                style: 'tableHeader'
            };
        }));
    }

    for (var i = 0, ien = data.body.length ; i < ien ; i++) {
        rows.push($.map(data.body[i], function (d) {
            return {
                text: typeof d === 'string' ? d : d + '',
                style: i % 2 ? 'tableBodyEven' : 'tableBodyOdd'
            };
        }));
    }

    if (config.footer) {
        rows.push($.map(data.footer, function (d) {
            return {
                text: typeof d === 'string' ? d : d + '',
                style: 'tableFooter'
            };
        }));
    }

    var doc = {
        pageSize: config.pageSize,
        pageOrientation: config.orientation,
        content: [
            {
                table: {
                    headerRows: 1,
                    body: rows
                },
                layout: 'noBorders'
            }
        ],
        styles: {
            tableHeader: {
                bold: true,
                fontSize: 11,
                color: 'white',
                fillColor: '#2d4154',
                alignment: 'center'
            },
            tableBodyEven: {},
            tableBodyOdd: {
                fillColor: '#f3f3f3'
            },
            tableFooter: {
                bold: true,
                fontSize: 11,
                color: 'white',
                fillColor: '#2d4154'
            },
            title: {
                alignment: 'center',
                fontSize: 15
            },
            message: {}
        },
        defaultStyle: {
            fontSize: 10
        }
    };

    if (config.message) {
        doc.content.unshift({
            text: config.message,
            style: 'message',
            margin: [0, 0, 0, 12]
        });
    }

    if (config.title) {
        doc.content.unshift({
            text: _title(config, false),
            style: 'title',
            margin: [0, 0, 0, 12]
        });
    }

    if (config.customize) {
        config.customize(doc);
    }

    var pdf = window.pdfMake.createPdf(doc);

    if (config.download === 'open' && !_isSafari()) {
        pdf.open();
    }
    else {
        pdf.getBuffer(function (buffer) {
            var blob = new Blob([buffer], { type: 'application/pdf' });

            _saveAs(blob, 'Exported Grid.pdf');
        });
    }
}

/* Grid Configuration class, loading, ... */

var DCrmEGConfigurationManager = (function () {

    function DCrmEGConfigurationManager(data) {
        var self = this;

        self.Entity = {
            SchemaName: data.schemaName,
            Label: data.label,

            RelatedToDisplayOnEntity: (data.related) ? true : false,
            RelatedToDisplayOnLookupSchemaName: (data.related) ? data.related : undefined,

            RelatedToParentLI: data.RelatedToParentLI,
            ParentSchemaName: (data.ParentSchemaName) ? data.ParentSchemaName : undefined,
            RelatedToParentLILookupSchemaName: (data.RelatedToParentLILookupSchemaName) ? data.RelatedToParentLILookupSchemaName : undefined
        };

        self.HasStatusField = (data.HasStatusField) ? data.HasStatusField : undefined;
        self.DisplaySum = ((data.DisplaySum) && (data.DisplaySum == 'false')) ? false : true;
        self.RecordsPerPage = (data.RecordsPerPage) ? data.RecordsPerPage : '5';
        self.AutoSaveChanges = ((data.AutoSaveChanges) && (data.AutoSaveChanges == 'false')) ? false : true;
        self.AllowCreateNew = ((data.AllowCreateNew) && (data.AllowCreateNew == 'false')) ? false : true;
        self.AllowDelete = ((data.AllowDelete) && (data.AllowDelete == 'false')) ? false : true;
        self.RefreshAfterCreate = ((data.RefreshAfterCreate) && (data.RefreshAfterCreate == 'false')) ? false : true;
        self.RefreshAfterSave = ((data.RefreshAfterSave) && (data.RefreshAfterSave == 'true')) ? true : false;

        self.Fields = undefined;
        self.Conditions = undefined;
        self.ChildConfigurations = [];
        self.ThisGrid = undefined;
        self.ParentDivContainer = undefined;
    }

    return DCrmEGConfigurationManager;
})();

function AddToMainConfiguration(config) {
    _thisGlobals.DCrmEGConfiguration.push(config);
}

function LoadDCrmEGConfigurationCallback(fetchResults) {
    if (fetchResults.length <= 0) {
        LogEx("No D CRM Editable Grid records found matching this entity.");
        _thisHelpers.WaitDialog();
        return;
    }

    var val = fetchResults[0].attributes['dcrmeg_headerfieldnameshidden'].value;
    // Display order
    var entities = (val) ? RetrieveEntityOutput(val, true).split(_thisGlobals._SEPERATOR) : '';

    // All Entities info
    val = fetchResults[0].attributes['dcrmeg_displayfromentityhidden'].value;
    var entitesInfo = (val) ? RetrieveEntityOutput(val, true).split(_thisGlobals._pSeperator) : '';
    // All fields
    val = fetchResults[0].attributes['dcrmeg_fromentityfieldsattrhidden'].value;
    var fields = (val) ? RetrieveEntityOutput(val, true).split(_thisGlobals._pSeperator) : '';
    // All conditions
    val = (fetchResults[0].attributes['dcrmeg_fieldcondition']) ? fetchResults[0].attributes['dcrmeg_fieldcondition'].value : undefined;
    var consitions = (val) ? RetrieveEntityOutput(val, true).split(_thisGlobals._pSeperator) : '';

    //LogIt("Entities " + entities);
    //LogIt("Entity Info " + entitesInfo);
    //LogIt("fields " + fields);

    var parentconfig = undefined;
    var config = undefined;

    for (var i = 0; i < entities.length; i++) {

        parentconfig = undefined;
        var tmp = FindEntityGridInfo(entities[i], entitesInfo);

        var data = { schemaName: tmp[0], label: tmp[1] };
        if (tmp[2] == 'true') {
            data.related = tmp[3];
        }

        // related to another entity in the list
        //if (tmp[4] == 'true') {
        data.RelatedToParentLI = (tmp[4] == 'true') ? true : false;
        data.RelatedToParentLILookupSchemaName = (tmp[5].length > 0) ? tmp[5] : undefined;
        data.ParentSchemaName = (tmp[6].length > 0) ? tmp[6] : undefined;
        // Find the parent config and set the parentLiId
        if (data.ParentSchemaName) {
            parentconfig = FindDCrmEGConfigurationBySchema(data.ParentSchemaName);
        }
        //}

        if (tmp[7].length > 0) {
            data.HasStatusField = tmp[7];
        }
        data.DisplaySum = tmp[8];
        data.RecordsPerPage = tmp[10];
        // TODO
        // Plug in the following and the defauls fields values when creating new record
        if (tmp.length > 11) {
            data.AutoSaveChanges = tmp[11];
            data.AllowCreateNew = tmp[12];
            data.AllowDelete = tmp[13];
            data.RefreshAfterCreate = ((tmp.length > 14) ? tmp[14] : true);
            data.RefreshAfterSave = ((tmp.length > 15) ? tmp[15] : false);
        }

        config = new DCrmEGConfigurationManager(data);
        if (fields.length > 0) {
            config.Fields = FindEntiyGridFields(data.schemaName, fields);
        }
        if (consitions.length > 0) {
            config.Conditions = FindEntiyGridFields(data.schemaName, consitions);
        }

        if ((data.ParentSchemaName) && (parentconfig)) {
            parentconfig.ChildConfigurations.push(config);
        } else {
            AddToMainConfiguration(config);
        }
    }

    // Display root grids
    var $parentContainer = $('#parentcontainer');
    try {
        for (var i = 0; i < _thisGlobals.DCrmEGConfiguration.length; i++) {
            if (i > 0) {
                $('<div></div>')
                    .addClass('gridSpacerDiv')
                    .appendTo($parentContainer);
            }
            _thisGlobals.DCrmEGConfiguration[i].ThisGrid = CreateAndPopulateGrid(_thisGlobals.DCrmEGConfiguration[i], $parentContainer);
        }
    } catch (e) {
        LogEx("Unable to create grid due to exception:\r\n" + e.message);
    }
    _thisHelpers.WaitDialog();
}

function CreateAndPopulateGrid(data, parentcontainer, relationshipparentEntityGuid) { 

    var SelectedFields = GetSelectedFields(data.Fields);
    if (SelectedFields.length == 0) {
        return null;
    }

    var TargetEntitySchemaName = data.Entity.SchemaName;
    var TargetEntityName = data.Entity.Label;    
    var tableOrdinence = _thisGlobals._tableOrdinence;
    _thisGlobals._tableOrdinence++;

    var userPrivilages = { CanCreate: true, CanUpdate: true, CanDelete: true };
    // get privilages
    userPrivilages.CanUpdate = RetrieveUserPrivileges("prvWrite" + TargetEntitySchemaName);
    userPrivilages.CanCreate = RetrieveUserPrivileges("prvCreate" + TargetEntitySchemaName);
    userPrivilages.CanDelete = RetrieveUserPrivileges("prvDelete" + TargetEntitySchemaName);

    var tooltipControl = new BareboneTip(_thisGlobals.ToolTipAttrName, _thisHelpers.GenerateRandomLetters(10));
    tooltipControl.HighlightRows = true;

    // Create grid components
    var ContainerIds = CreateGridContainers(
        TargetEntityName, userPrivilages, tooltipControl.TargettingClass, parentcontainer,
        data.AutoSaveChanges, data.AllowCreateNew, data.AllowDelete, TargetEntitySchemaName);

    var EntitiesAreRelated = data.Entity.RelatedToDisplayOnEntity;

    var RelatedEntityLookup = undefined;
    if (EntitiesAreRelated) {
        RelatedEntityLookup = data.Entity.RelatedToDisplayOnLookupSchemaName;
    }

    if (data.Entity.RelatedToParentLI) {
        RelatedEntityLookup = data.Entity.RelatedToParentLILookupSchemaName;
        EntitiesAreRelated = true;
    }

    var DisplayFieldsSum = data.DisplaySum;
    $('#' + ContainerIds.NumOfRecordsToDisplay).val(data.RecordsPerPage);

    FetchtargetEntity =
                '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
                    '<entity name="' + TargetEntitySchemaName + '">';

    $.each(SelectedFields, function (i, item) {
        FetchtargetEntity += '<attribute name="' + item.SchemaName.toLowerCase() + '" />';
    });

    FetchtargetEntity += '<filter type="and">';

    if (data.Conditions) {
        var arr = data.Conditions.split('[]');
        var Aattr = undefined,
            Aop = undefined,
            Aval = undefined,
            Atype = undefined,
            Aret = '';

        try {
            $.each(arr, function (index, item) {
                var items = item.split('||');

                if (items.length == 1) {
                    return;
                }

                Aattr = items[0];
                Aop = items[2];
                Aval = ((items[1]) && (items[1] != 'undefined')) ? items[1] : '';
                Atype = items[4];

                if ((Atype == _thisGlobals.CrmFieldTypes.DateTimeType) && (Aval.length > 0)) {
                    Aval = Aval.split(_thisGlobals.userDatetimeSettings.DateSeparator).join('-');
                }

                if (Aval.contains(';')) {
                    var inarg = Aval.split(';');
                    if (Aop.contains(';')) {
                        var tmpAop = Aop.split(';')[1];
                        Aret += '<condition attribute="' + Aattr + '" operator="' + ((tmpAop == 'eq') ? 'in' : 'not-in') + '">';
                    } else {
                        Aret += '<condition attribute="' + Aattr + '" operator="' + ((Aop == 'eq') ? 'in' : 'not-in') + '">';
                    }
                    var uitypes = ((items[5]) && (items[5].length > 0)) ? items[5].split(';') : [];
                    var uinames = ((items[3]) && (items[3].length > 0)) ? items[3].split(';') : [];

                    for (var i = 0; i < inarg.length; i++) {
                        if ((Atype == _thisGlobals.CrmFieldTypes.LookupType) || (Atype == _thisGlobals.CrmFieldTypes.CustomerType) || (Atype == _thisGlobals.CrmFieldTypes.OwnerType)) {
                            Aret += '<value uiname="' + uinames[i] + '" uitype="' + uitypes[i] + '">{' + inarg[i] + '}</value>';
                        } else {
                            Aret += '<value>' + inarg[i] + '</value>';
                        }
                    }
                    Aret += '</condition>';
                } else if (Aval.length == 0) {
                    Aret += '<condition attribute="' + Aattr + '" operator="' + Aop + '" />';
                } else {
                    // operator
                    if (Aop.contains(';')) {
                        Aret += '<condition attribute="' + Aattr + '" operator="' + Aop.split(';')[1] + '" value="' + Aval + '" />';
                    } else {
                        Aret += '<condition attribute="' + Aattr + '" operator="' + Aop + '" value="' + Aval + '" />';
                    }
                }
            });
        } catch (conde) {
            LogEx("Exception: unable to get field conditions. " + conde.message);

            if (data.HasStatusField) {
                Aret = '<condition attribute="statecode" operator="eq" value="0" />';
            }
        }

        LogIt(Aret);
        FetchtargetEntity += Aret;
    } else if (data.HasStatusField) {
        LogIt("No additional conditions loaded");
        FetchtargetEntity += '<condition attribute="statecode" operator="eq" value="0" />';
    }

    var parentChildLookupInfo = { 
        Related: EntitiesAreRelated,
        LookupSchemaName: RelatedEntityLookup, // primarycontactid
        ParentSchemaName: data.Entity.ParentSchemaName, // contact
        Guid: relationshipparentEntityGuid,
        Type: 'EntityReference'
    };

    if (EntitiesAreRelated) {
        if (relationshipparentEntityGuid) {
            FetchtargetEntity += '<condition attribute="' + RelatedEntityLookup + '" operator="eq" uitype="' + data.Entity.ParentSchemaName + '" value="' + relationshipparentEntityGuid + '" />';
        } else {
            parentChildLookupInfo.ParentSchemaName = _thisGlobals.ParentEntityName.toLowerCase();
            parentChildLookupInfo.Guid = _thisGlobals.ParentEntityId;
            FetchtargetEntity += '<condition attribute="' + RelatedEntityLookup + '" operator="eq" uitype="' + _thisGlobals.ParentEntityName.toLowerCase() + '" value="' + _thisGlobals.ParentEntityId + '" />';
        }
    }

    FetchtargetEntity +=
        '</filter>' +
        '</entity>' +
    '</fetch>';


    var $tr = $('#' + ContainerIds.Table)
        .find('thead:first')
        .find('tr:first');

    var ceditors = [];
    var $theader = undefined;
    var haveAnyNumericFields = false;
    var autoCellWidth = parseFloat(100 / SelectedFields.length).toFixed(2);

    $.each(SelectedFields, function (i, item) {

        $theader = $('<th></th>')
            .addClass(tooltipControl.TargettingClass)
            .attr(_thisGlobals.ToolTipAttrName, item.Name)
            .appendTo($tr);

        if (item.RealWidth != '0') {
            $theader.css('width', item.RealWidth + '%');
        } else {
            $theader.css('width', autoCellWidth + '%');
        }


        var opSetData = [];
        var lookupSetData = undefined;
        var booleanCheckText = 'Yes';
        var booleanUncheckedText = 'No';
        var requiered = false;
        var ed = DCrmEditableGrid.Editors.None;
        var attrtype = item.AttrType.toLowerCase();
        var fieldIsReadOnly = (item.ReadOnly == 'true') || false;

        var dataSorterTypeText = 'text';
        var dataSorterTypeDate = 'date';
        var dataSorterTypeDateTime = 'datetime';
        var dataSorterTypeNumeric = 'numeric';
        var dataSorterType = dataSorterTypeText;

        //LogIt("Requireed " + item.RequieredLevel);
        if (item.RequieredLevel.toLowerCase() != 'none') {
            requiered = true;
        }

        if (attrtype == _thisGlobals.CrmFieldTypes.TextType) {

            if (item.Format.toLowerCase() == 'textarea') {
                ed = DCrmEditableGrid.Editors.Description;
            } else {
                ed = DCrmEditableGrid.Editors.Text;
            }
        } else if ((attrtype == _thisGlobals.CrmFieldTypes.DecimalType) || (attrtype == _thisGlobals.CrmFieldTypes.DoubleType)) {

            ed = DCrmEditableGrid.Editors.Decimal;
            dataSorterType = dataSorterTypeNumeric;
            haveAnyNumericFields = true;

        } else if (attrtype == _thisGlobals.CrmFieldTypes.MemoType) {

            ed = DCrmEditableGrid.Editors.Description;

        } else if (attrtype == _thisGlobals.CrmFieldTypes.IntegerType) {

            ed = DCrmEditableGrid.Editors.Numeric;
            dataSorterType = dataSorterTypeNumeric;
            haveAnyNumericFields = true;

        } else if (attrtype == _thisGlobals.CrmFieldTypes.DateTimeType) {

            if (item.Format.toLowerCase() == 'dateonly') {
                ed = DCrmEditableGrid.Editors.DatePicker;
                dataSorterType = dataSorterTypeDate;
            } else {
                ed = DCrmEditableGrid.Editors.DateTimePicker;
                dataSorterType = dataSorterTypeDateTime;
            }

        } else if (attrtype == _thisGlobals.CrmFieldTypes.MoneyType) {

            ed = DCrmEditableGrid.Editors.Currency;
            dataSorterType = dataSorterTypeNumeric;
            haveAnyNumericFields = true;

        } else if (attrtype == _thisGlobals.CrmFieldTypes.OptionSetType) {

            var optionset = XrmServiceToolkit.Soap.RetrieveAttributeMetadata(TargetEntitySchemaName, item.SchemaName.toLowerCase(), true);
            //LogIt("TargetEntitySchemaName [" + TargetEntitySchemaName +
            //"] item.SchemaName.toLowerCase() [" + item.SchemaName.toLowerCase() +
            //"] optionset.length [" + optionset.length);

            if (optionset.length > 0) {
                if ((!fieldIsReadOnly) && (!requiered)) {
                    opSetData.push(
                    {
                        text: '',
                        value: -1
                    });
                }
                for (var i = 0; i < optionset[0].OptionSet.Options.length; i++) {
                    opSetData.push(
                    {
                        text: optionset[0].OptionSet.Options[i].Label.LocalizedLabels[0].Label,
                        value: optionset[0].OptionSet.Options[i].Value
                    });
                    //LogIt("text " + optionset[0].OptionSet.Options[i].Label.LocalizedLabels[0].Label + "  value " + optionset[0].OptionSet.Options[i].Value);
                }
                ed = DCrmEditableGrid.Editors.OptionSet;
            }
        } else if (attrtype == _thisGlobals.CrmFieldTypes.BooleanType) {

            var optionset = XrmServiceToolkit.Soap.RetrieveAttributeMetadata(TargetEntitySchemaName, item.SchemaName.toLowerCase(), true);
            if (optionset.length > 0) {
                booleanCheckText = optionset[0].OptionSet.TrueOption.Label.LocalizedLabels[0].Label;
                booleanUncheckedText = optionset[0].OptionSet.FalseOption.Label.LocalizedLabels[0].Label;
                ed = DCrmEditableGrid.Editors.Checkbox;
            }

        } else if ((attrtype == _thisGlobals.CrmFieldTypes.LookupType) ||
            (attrtype == _thisGlobals.CrmFieldTypes.CustomerType) ||
            (attrtype == _thisGlobals.CrmFieldTypes.OwnerType)) {

            ed = DCrmEditableGrid.Editors.Lookup;

            lookupSetData = {
                LookupId: '',
                LookupLogicalName: '',
                LookupName: '',
                SchemaNames: [], //targete[0] + 'id',
                EntityTargets: item.LookupTargetEntity.split(',')
            };
        }

        if ((fieldIsReadOnly) || (_thisGlobals.FormIsReadOnly) || (!userPrivilages.CanUpdate)) {
            $theader.attr('data-item-header-readonly-editortype', ed);
            ed = DCrmEditableGrid.Editors.None;
            $theader.attr('data-item-header-readonly', 'true');
        }

        // dataSorterType = dataSorterType;
        $theader.attr('data-item-header-editortype', ed);
        $theader.attr('data-item-header-field-schemaname', item.SchemaName.toLowerCase());

        $theader.attr('data-item-header-datasortertype', dataSorterType);
        if (item.DefaultValue) {
            $theader.attr('data-item-header-createdefault', item.DefaultValue);
        }

        var $firstSpan = $('<span></span>')
            .text(item.Name)
            .addClass(tooltipControl.TargettingClass)
            .attr(_thisGlobals.ToolTipAttrName, item.Name)
            .appendTo($theader);

        if (requiered) {
            $('<span>*</span>')
                .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.LockedField)
                .addClass('Requiered')
                .addClass(tooltipControl.TargettingClass)
                .appendTo($theader);
            $theader.attr('data-item-header-field-required', '1');
        } else {
            $theader.attr('data-item-header-field-required', '0');
        }

        if ((attrtype == _thisGlobals.CrmFieldTypes.DecimalType) ||
            (attrtype == _thisGlobals.CrmFieldTypes.DoubleType) ||
            (attrtype == _thisGlobals.CrmFieldTypes.MoneyType)) {
            $theader.attr('data-item-header-Precision', item.Precision);
        }

        // Apply readonly fields icon to the header
        if (fieldIsReadOnly) {
            $('<img alt="Locked field" />')
                .attr('src', "dcrmeg_lock")
                .attr(_thisGlobals.ToolTipAttrName, _thisGlobals.Translation_Labels.ReadOnly)
                .insertBefore($firstSpan);
        }

        ceditors.push({
            editor: ed,
            ParentEntityName: TargetEntityName,
            ParentEntitySchemaname: TargetEntitySchemaName,
            FieldLabel: item.Name,
            FieldSchemaName: item.SchemaName.toLowerCase(),

            RequireValue: requiered,
            validator: ValidateEditor,

            CheckText: booleanCheckText,
            UncheckedText: booleanUncheckedText,
            OptionSetData: opSetData,

            LookupData: lookupSetData,

            MaxLength: item.MaxLength,
            Format: item.Format,
            MaxValue: item.MaxValue,
            MinValue: item.MinValue,
            Precision: item.Precision,
            RealWidth: item.RealWidth
        });
    });

    var fieldsresult = XrmServiceToolkit.Soap.Fetch(FetchtargetEntity);

    if ((fieldsresult) && (fieldsresult.length) && (fieldsresult.length > 0)) {

        $('#' + ContainerIds.TotalRecords).text(_thisGlobals.Translation_Labels.TotalRecords + ' ' + fieldsresult.length);

        // Add data
        var $tbody = $('#' + ContainerIds.Table).find('tbody:first');
        var fval = '';
        var tmpLcase = '';
        var selectedOptionsetValue = undefined;

        //$.each(fieldsresult, function (i, item) {
        for (var i = 0; i < fieldsresult.length; i++) {
            var item = fieldsresult[i];

            // For opening new and existing records
            $tr = $('<tr></tr>').attr('data-record-guid', item.id).appendTo($tbody);
            for (var iinner = 0; iinner < SelectedFields.length; iinner++) {
                var inneritem = SelectedFields[iinner];
                var inneritemSchemaName = inneritem.SchemaName.toLowerCase();
                tmpLcase = inneritem.AttrType.toLowerCase();
                fval = '';
                selectedOptionsetValue = undefined;

                if ((tmpLcase == _thisGlobals.CrmFieldTypes.OptionSetType) ||
                    (tmpLcase == _thisGlobals.CrmFieldTypes.BooleanType) ||
                    (tmpLcase == _thisGlobals.CrmFieldTypes.MoneyType) ||
                    (tmpLcase == _thisGlobals.CrmFieldTypes.DecimalType) ||
                    (tmpLcase == _thisGlobals.CrmFieldTypes.DoubleType) ||
                    (tmpLcase == _thisGlobals.CrmFieldTypes.IntegerType)) {

                    if (item.attributes[inneritemSchemaName]) {
                        fval = item.attributes[inneritemSchemaName].formattedValue;
                        // optionset, get the value as well
                        if (tmpLcase == _thisGlobals.CrmFieldTypes.OptionSetType) {
                            selectedOptionsetValue = item.attributes[inneritemSchemaName].value;
                        }
                    }
                } else if ((tmpLcase == _thisGlobals.CrmFieldTypes.LookupType) || (tmpLcase == _thisGlobals.CrmFieldTypes.CustomerType) || (tmpLcase == _thisGlobals.CrmFieldTypes.OwnerType)) {

                    if (item.attributes[inneritemSchemaName]) {
                        fval = item.attributes[inneritemSchemaName].name || '';

                        ceditors[iinner].LookupData.LookupId = item.attributes[inneritemSchemaName].id || '';
                        ceditors[iinner].LookupData.LookupLogicalName = item.attributes[inneritemSchemaName].logicalName;
                        ceditors[iinner].LookupData.LookupName = fval;

                    }

                    //var tmpheader = $('#' + ContainerIds.Table).find('thead:first').find('tr:first');
                    //$(tmpheader[0].cells[iinner]).attr('data-item-lookupentitytargets', inneritem.LookupTargetEntity);

                    //LogIt("Looping through fieldsresult item.id [" + ceditors[iinner].LookupData.LookupId +
                    //    "] item.logicalName [" + ceditors[iinner].LookupData.LookupLogicalName +
                    //    "] item.name [" + fval + "] Target Entities [" + inneritem.LookupTargetEntity + "] EntityTargets [" + ceditors[iinner].LookupData.EntityTargets);

                } else if ((tmpLcase == _thisGlobals.CrmFieldTypes.TextType) || (tmpLcase == _thisGlobals.CrmFieldTypes.MemoType)) {
                    if (item.attributes[inneritemSchemaName]) {
                        fval = item.attributes[inneritemSchemaName].value;
                        //LogIt("ceditors[iinner].Format " + ceditors[iinner].Format);
                        if (((ceditors[iinner].Format == 'Text') || (ceditors[iinner].Format == 'Phone'))
                            && (_thisHelpers.IsvalidPhoneNumber(fval + ''))) {

                            ceditors[iinner].Format = "Phone";
                            //fval = _thisHelpers.FormatPhoneNumber(fval);
                            //LogIt("phone number " + fval);
                        }
                    }
                } else if (tmpLcase == _thisGlobals.CrmFieldTypes.DateTimeType) {
                    if (item.attributes[inneritemSchemaName]) {
                        fval = item.attributes[inneritemSchemaName].formattedValue;
                    }
                    // formattedValue [9/28/2015] 10:00 PM Value [Mon Sep 28 2015 22:00:00 GMT-0400 (Eastern Daylight Time)]
                    //LogIt("formattedValue " + fval + " Value " + item.attributes[inneritemSchemaName].value);
                }

                var $thistr = $('<td></td>')
                    .html('<span class="' + tooltipControl.TargettingClass + '" ' + _thisGlobals.ToolTipAttrName + '="' + fval + '">' + fval + '</span>')
                        .appendTo($tr);

                if ((tmpLcase == _thisGlobals.CrmFieldTypes.TextType) && (ceditors[iinner].Format)) {
                    $thistr.attr('data-fieldformat', ceditors[iinner].Format.toLowerCase());
                }

                if (ceditors[iinner].LookupData) {
                    $thistr
                        .attr('data-item-lookup-guid', ceditors[iinner].LookupData.LookupId)
                        .attr('data-item-lookup-logicalname', ceditors[iinner].LookupData.LookupLogicalName)
                        .attr('data-item-OriginalAttrValue', ceditors[iinner].LookupData.LookupId)
                    .attr('data-item-lookup-originallogicalname', ceditors[iinner].LookupData.LookupLogicalName);
                } else if (tmpLcase == _thisGlobals.CrmFieldTypes.OptionSetType) {
                    $thistr
                        .attr('data-item-optionset-selectedvalue', selectedOptionsetValue + '')
                    .attr('data-item-OriginalAttrValue', selectedOptionsetValue + '');
                }
            }
        }

        //LogIt("table ID [" + ContainerIds.Table + "]");
        if (fieldsresult.length <= 5) {
            $('#' + ContainerIds.Pager).hide();
            $('#' + ContainerIds.SearchGridBox).hide();
        }

    } else {
        $('#' + ContainerIds.TotalRecords).text(_thisGlobals.Translation_Labels.TotalRecords + ' 0');
        $('#' + ContainerIds.Pager).hide();
        $('#' + ContainerIds.SearchGridBox).hide();
    }

    var options = {
        HasChildGrids: (data.ChildConfigurations.length > 0) ? true : false,
        Country: _thisGlobals.DefaultCountry,
        GridContainerIds: ContainerIds,
        columneditors: ceditors,
        entityschemaName: TargetEntitySchemaName,

        GridSelectedFields: SelectedFields,
        GridFetch: FetchtargetEntity,

        ParentEntityInfo: {
            ParentEntityName: TargetEntityName,
            ParentEntitySchemaname: TargetEntitySchemaName
        },
        ParentChildLookupInfo: parentChildLookupInfo,

        PagerSize: 5,

        RequiredErrorContainer: "validationerror",
        InputFormatErrorContainer: 'inputformaterror',
        TableOrdinence: tableOrdinence,
        ParentFormIsReadOnly: _thisGlobals.FormIsReadOnly,
        UserCanDelete: userPrivilages.CanDelete,
        UserCanUpdate: userPrivilages.CanUpdate,
        DisplayFieldsSum: DisplayFieldsSum,

        TooltipController: tooltipControl,

        HaveNumericFields: haveAnyNumericFields,
        AutoSaveChanges: data.AutoSaveChanges,
        AllowDelete: data.AllowDelete,
        RefreshAfterCreate: data.RefreshAfterCreate,
        RefreshAfterSave: data.RefreshAfterSave
    };

    return new CrmEditableGrid($('#' + ContainerIds.Table), options);
    //}

    //$('#' + ContainerIds.TableCaptionContainer).empty().remove();
    //$('#' + ContainerIds.Table).empty().remove();
    //return null;
}

function ParentGridSelectedRecord(data, parentdiv, deleteSubgrid) {
    try {

        var config = FindDCrmEGConfigurationBySchema(data.activeOptions.ParentEntityInfo.ParentEntitySchemaname);
        var tt = undefined;

        if (deleteSubgrid) {
            var tableParentId = undefined;

            LogIt('================subgrid parentdivid ' + parentdiv);

            for (var i = 0; i < config.ChildConfigurations.length; i++) {
                tt = config.ChildConfigurations[i].ThisGrid;
                if (tt) {
                    var ids = tt.activeOptions.GridContainerIds;

                    tableParentId = parentdiv || tt.ParentDivContainer;

                    // When called from parent, will have tableParentId value
                    if (ids.ParentGridDivContainer == tableParentId) {
                        LogIt("Found ParentGridDivContainer to remove " + ids.ParentGridDivContainer);

                        // Has subgrids
                        if (config.ChildConfigurations[i].length > 0) {
                            LogIt("Grid has subgrid");
                            ParentGridSelectedRecord(tt, undefined, true);
                            config.ChildConfigurations[i].ThisGrid = undefined;
                        }

                        $('#' + ids.TableCaptionContainer).empty().remove();
                        $('#' + ids.Table).empty().remove();

                        for (var i = 0; i < tt.GridEditors.length; i++) {
                            if (tt.GridEditors[i] != null) {
                                tt.GridEditors[i].DestroyEditor();
                            }
                        }

                        tt.DestroyGrid();
                    }
                }
            }

        } else {

            var insertAfter = parentdiv || data.mainTable;
            for (var i = 0; i < config.ChildConfigurations.length; i++) {
                tt = CreateAndPopulateGrid(config.ChildConfigurations[i], insertAfter, data.SelectedRecordGuid);
                config.ChildConfigurations[i].ThisGrid = tt;
                config.ChildConfigurations[i].ParentDivContainer = insertAfter.attr('id');

                if (i > 0) {
                    $('<div></div>')
                        .addClass('gridSpacerDiv')
                        .insertBefore($('#' + tt.activeOptions.GridContainerIds.TableCaptionContainer));
                }
            }

        }

        _thisHelpers.WaitDialog();

    } catch (e) {
        LogEx("Creating a child grid failed. " + e.message);
        _thisHelpers.WaitDialog();
    }
}

function FindEntityGridInfo(schema, entitesInfo) {
    var result = undefined;
    for (var i = 0; i < entitesInfo.length; i++) {
        var tmp = entitesInfo[i].split(_thisGlobals._SEPERATOR);
        if (tmp[0] == schema) {
            result = tmp;
            break;
        }
    }
    return result;
}

function FindEntiyGridFields(schema, fields) {
    var result = undefined;
    for (var i = 0; i < fields.length; i++) {
        var tmp = fields[i].split(_thisGlobals._OuterSeperator);
        if (tmp[tmp.length - 1] == schema) {
            tmp.splice(tmp.length - 1, 1);
            result = tmp.join(_thisGlobals._OuterSeperator);
            break;
        }
    }
    return result;
}

function FindDCrmEGConfigurationBySchema(schemaname, cloneit) {
    var foundit = undefined;

    for (var i = 0; i < _thisGlobals.DCrmEGConfiguration.length; i++) {
        if (_thisGlobals.DCrmEGConfiguration[i].Entity.SchemaName == schemaname) {
            foundit = _thisGlobals.DCrmEGConfiguration[i]; // Clone or actual ref ?? // jQuery.extend(true, {}, _thisGlobals.DCrmEGConfiguration[i]);
            break;
        }
        if (_thisGlobals.DCrmEGConfiguration[i].ChildConfigurations.length > 0) {
            for (var ii = 0; ii < _thisGlobals.DCrmEGConfiguration[i].ChildConfigurations.length; ii++) {
                foundit = FindDCrmEGConfiguration(_thisGlobals.DCrmEGConfiguration[i].ChildConfigurations[ii], schemaname);
                if (foundit) {
                    break;
                }
            }
        }
    }
    if ((foundit) && (cloneit)) {
        foundit = jQuery.extend(true, {}, foundit);
    }

    return foundit;
}

function FindDCrmEGConfiguration(config, schemaname) {
    var foundit = undefined;

    if (config.Entity.SchemaName == schemaname) {
        foundit = config;
    } else if (config.ChildConfigurations.length > 0) {
        for (var ii = 0; ii < config.ChildConfigurations.length; ii++) {
            foundit = FindDCrmEGConfiguration(config.ChildConfigurations[ii], schemaname);
            if (foundit) {
                break;
            }
        }
    }

    return foundit;
}

function GetLookupDisplayName(entitySchemaName, fieldSchemaName, uitype, guid) {
    var val = undefined;
    if (!guid.startsWith('{')) {
        giud = '{' + guid + '}';
    }

    var fetch = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">' +
          '<entity name="' + entitySchemaName + '">' +
          '<attribute name="' + fieldSchemaName + '" />' +
            '<filter type="and">' +
              '<condition attribute="' + fieldSchemaName + '" operator="eq" uitype="' + uitype + '" value="' + guid + '" />' +
            '</filter>' +
          '</entity>' +
          '</fetch>';

    var result = XrmServiceToolkit.Soap.Fetch(fetch);

    if (result.length > 0) {
        val = result[0].attributes[fieldSchemaName].name;
    }

    return val;
}
