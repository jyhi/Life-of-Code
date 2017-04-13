document.getElementById('btn_validate').addEventListener("click", on_validate_clicked);
document.getElementById('btn_reset').addEventListener("click", on_reset_clicked);

function on_validate_clicked() {
    function _validate_email(input) {
        if (input.value.match(/^.*\@\w*.\w*(\.\w+){1,5}$/)) {
            return true;
        } else return false;
    }
    function _validate_mobile(input) {
        if (input.value.match(/^(\+?\d{2,3})?\d{11}$/)) {
            return true;
        } else return false;
    }
    function _validate_telephone(input) {
        if (input.value.match(/^0?\d{3}\-?\d{7,8}$/)) {
            return true;
        } else return false;
    }
    function _validate_nick(input) {
        if (input.value.match(/^[^!@#$%^&*()-]+$/)) {
            return true;
        } else return false;
    }


    var inputs = document.getElementsByTagName('input');
    // XXX: On sequence: Email, Mobile, Telephone, Nick.
    if (!_validate_email(inputs[0])) {
        document.getElementsByTagName('input')[0].style = "background-color: red;"
    } else {
        document.getElementsByTagName('input')[0].style = null;
    }
    if (!_validate_mobile(inputs[1])) {
        document.getElementsByTagName('input')[1].style = "background-color: red;"
    } else {
        document.getElementsByTagName('input')[1].style = null;
    }
    if (!_validate_telephone(inputs[2])) {
        document.getElementsByTagName('input')[2].style = "background-color: red;"
    } else {
        document.getElementsByTagName('input')[2].style = null;
    }
    if (!_validate_nick(inputs[3])) {
        document.getElementsByTagName('input')[3].style = "background-color: red;"
    } else {
        document.getElementsByTagName('input')[3].style = null;
    }

    return;
}

function on_reset_clicked() {
    for (let i = 0; i < document.getElementsByTagName('input').length; i++) {
        document.getElementsByTagName('input')[i].value = null;
        document.getElementsByTagName('input')[i].style = null;
    }
}
