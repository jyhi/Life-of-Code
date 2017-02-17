/**
 * Sort all information filled in the form and pop a messagebox up to show.
 */
function AlertAllInfo() {
    var usrname      = document.getElementById('inputUsrname');
    var pos          = document.getElementById('selectPos');
    var currskills   = document.getElementById('fieldsetCurrSkills');
    var citiesexpect = document.getElementById('fieldsetCitiesExpect');
    var recentjobs   = document.getElementById('selectRecentJobs');
    var workexp      = document.getElementById('textareaWorkExp');
    var upldfile     = document.getElementById('inputUpldFile');

    alert ("Your Name: " + (usrname.value ? usrname.value : "<Not filled yet>") + "\n"
            + "Your Position Now: " + pos.value + "\n"
            + "Your current skills: " + FieldsetReturnSelected (currskills)
            + "Your expected city: "  + FieldsetReturnSelected (citiesexpect)
            + "Your recent jobs: "    + SelectMultipleReturnSelected (recentjobs)
            + "Your working experiences: " + (workexp.value ? workexp.value + "\n" : "<Not filled yet>\n")
            + "You are going to upload " + (upldfile.value ? upldfile.value : "NOTHING."));

}

/**
 * Given a HTML <fieldset>, return options inside selected.
 *
 * @param  fs [in] The <fieldset>, usually gotten by `document.getElementById`.
 * @return A comma-seperated string containing values of the options selected.
 */
function FieldsetReturnSelected(fs) {
    let strTmp = "";
    for (let i = 0; i < fs.children.length; i++) { // Pretty like Bubble Sort.
        if (fs.children[i].tagName == "div") {
            for (let j = 0; j < fs.children[i].children.length; j++) {
                if ((fs.children[i].children[j].tagName == "input") && (fs.children[i].children[j].checked == true)) {
                    strTmp += fs.children[i].children[j].value + ", ";
                } else {}
            }
        } else {}
    }

    return strTmp.length ? strTmp + "(over)\n" : "<Not selected yet>\n"; // XXX: This is not elegant.
}

/**
 * Given a HTML <select multiple="multiple">, return options inside selected.
 *
 * May work on a single-selection list too.
 *
 * @param  fs [in] The <select multiple="multiple">, usually gotten by `document.getElementById`.
 * @return A comma-seperated string containing values of the options selected.
 */
function SelectMultipleReturnSelected(sel) {
    let strTmp = "";
    for (let i = 0, aIndex = 0; i < sel.children.length; i++) {
        if ((sel.children[i].tagName == "option") && (sel.children[i].selected)) {
            strTmp += sel.children[i].value + ", ";
        } else {}
    }

    return strTmp.length ? strTmp + "(over)\n" : "<Not selected yet>\n"; // XXX: This is not elegant.
}
