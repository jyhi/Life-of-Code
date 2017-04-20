// Bind events.
document.getElementById('input-id').addEventListener("blur", validate_input_id);
document.getElementById('input-name').addEventListener("blur", validate_input_name);
document.getElementById('input-pwd').addEventListener("blur", validate_input_pwd);
document.getElementById('input-cpwd').addEventListener("blur", validate_input_cpwd);
document.getElementById('input-addr').addEventListener("blur", validate_input_addr);
document.getElementById('input-phone').addEventListener("blur", validate_input_phone);
document.getElementById('input-nadult').addEventListener("blur", validate_input_nadult);
document.getElementById('button-nadult+1').addEventListener("click", on_nadult_btn_plus1);
document.getElementById('button-nadult-1').addEventListener("click", on_nadult_btn_minus1);
document.getElementById('button-children-entry-expander').addEventListener("click", on_child_entry_expand);
document.getElementById('button-submit').addEventListener("click", on_submit);

function validate_input_id() {
  if (document.getElementById('input-id').value.match(/^\d+$/)) {
    err("id", "hidden");
    return true;
  } else {
    err("id", "visible");
  }
  return false;
}

function validate_input_name() {
  if (document.getElementById('input-name').value.match(/^[a-zA-Z\ ]+$/)) {
    err("name", "hidden");
    return true;
  } else {
    err("name", "visible");
  }
  return false;
}

function validate_input_pwd() {
  if (document.getElementById('input-pwd').value.match(/^[a-zA-Z0-9]{6,8}$/)) {
    err("pwd", "hidden");
    return true;
  } else {
    err("pwd", "visible");
  }
  return false;
}

function validate_input_cpwd() {
  if (document.getElementById('input-cpwd').value == document.getElementById('input-pwd').value) {
    err("cpwd", "hidden");
    return true;
  } else {
    err("cpwd", "visible");
  }
  return false;
}

function validate_input_addr() {
  if (document.getElementById('input-addr').value.match(/^[a-zA-Z0-9\ ]+$/)) {
    err("addr", "hidden");
    return true;
  } else {
    err("addr", "visible");
  }
  return false;
}

function validate_input_phone() {
  if (document.getElementById('input-phone').value.match(/^\d{11}$/)) {
    err("phone", "hidden");
    return true;
  } else {
    err("phone", "visible");
  }
  return false;
}

function validate_input_nadult() {
  let nadult = parseInt(document.getElementById('input-nadult').value);
  if ((nadult < 1) || (nadult > 20)) {
    err("nadult", "visible");
    return true;
  } else {
    err("nadult", "hidden");
  }
  return false;
}

function err(id, status) {
  document.getElementById("errdisp-" + id).style = "visibility: " + status;
}

function on_nadult_btn_plus1() {
  document.getElementById('input-nadult').value = parseInt(document.getElementById('input-nadult').value) + 1;

  let nadult = parseInt(document.getElementById('input-nadult').value);
  if ((nadult < 1) || (nadult > 20)) {
    err("nadult", "visible");
  } else {
    err("nadult", "hidden");
  }
}

function on_nadult_btn_minus1() {
  document.getElementById('input-nadult').value = parseInt(document.getElementById('input-nadult').value) - 1;

  let nadult = parseInt(document.getElementById('input-nadult').value);
  if ((nadult < 1) || (nadult > 20)) {
    err("nadult", "visible");
  } else {
    err("nadult", "hidden");
  }
}

function on_child_entry_expand() {
  if (document.getElementById('entry-nchild').style.visibility == "collapse") {
    document.getElementById('entry-nchild').style.visibility = "visible";
  } else {
    document.getElementById('entry-nchild').style.visibility = "collapse";
  }
}

function on_submit() {
  // Prevent submission when errors remain or input areas are blank.
  let inputs = document.getElementById('container').getElementsByTagName('input');
  let errs = document.getElementById('errdisp').getElementsByTagName('div');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      return false;
    }
  }
  for (let i = 0; i < errs.length; i++) {
    if (errs[i].style.visibility == "visible") {
      return false;
    }
  }

  let nchild = document.getElementById('select-nchild').value;
  let hobby_radiobtns = document.getElementById('fieldset-hobbies').getElementsByTagName('input');
  let hobbies = [];

  for (let i = 0; i < hobby_radiobtns.length; i++) {
    if ((hobby_radiobtns[i].name == "hobbies") && (hobby_radiobtns[i].checked == true)) {
      hobbies.push(hobby_radiobtns[i].value);
    }
  }

  alert (
      "Your ID: " + document.getElementById('input-id').value + "\n"
    + "Name: " + document.getElementById('input-name').value + "\n"
    + "Address: " + document.getElementById('input-addr').value + "\n"
    + "Cell Phone: " + document.getElementById('input-phone').value + "\n"
    + "You have " + document.getElementById('input-nadult').value + " adults and " + nchild + (nchild < 2 ? " child" : " children") + " in your family.\n"
    // XXX: I can't be bothered to generalize the method for this 2 radio buttons...
    + ((hobbies.length != 0) ? ("Your " + ((hobbies.length < 2) ? ("hobby is " + hobbies[0]) : ("hobbies are " + hobbies[0] + " and " + hobbies[1]))) : "You have no hobby.")
  );
}
