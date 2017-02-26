// TODO: FIXME: XXX: "20% Comments" as required.

function KeyPressed(key) {
  if (document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML != "Formula") {
    document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML += key;
  } else {
    document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML = key
  }
}

function DisplayClearAll() {
  document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML = "Formula";
  document.getElementById('ResultDisplay').getElementsByTagName('span')[0].innerHTML = "Result";
}

function DisplayBackspace() {
  var buf = document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML;
  if (buf.length == 1) {
    document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML = "Formula";
  } else if (buf == "Formula") {
    return;
  } else {
    let resultDisplay = document.getElementById('ResultDisplay').getElementsByTagName('span')[0].innerHTML;
    if (resultDisplay == "Result") {
      document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML = buf.slice(0, -1);
    } else {
      DisplayClearAll();
      return;
    }
  }
}

function SwitchAlgorithm() {
  var status = document.getElementById('AlgoSwitchBtn').innerHTML;
  if (status == "Shunt-Yard") {
    // Switch to internal `eval()`
    // NOTE: Using `eval()` is a trick, and is *dangerous*. Not recommended.
    //   Change the color to red to imply this.
    document.getElementById('AlgoSwitchBtn').innerHTML = "eval()";
    document.getElementById('AlgoSwitchBtn').style = "background-color: #ff5e3a;"
  } else {
    // It is `eval()`, or Something happened. Switch back to Shunt-Yard.
    document.getElementById('AlgoSwitchBtn').innerHTML = "Shunt-Yard";
    document.getElementById('AlgoSwitchBtn').style = "background-color: #59c7f7;" // Switch back to default color
  }
}

function Evaluate() {
  var formula = document.getElementById('FormulaDisplay').getElementsByTagName('span')[0].innerHTML;
  if (formula == "Formula") {
    return;
  }

  var status = document.getElementById('AlgoSwitchBtn').innerHTML;
  var ret = 0;
  if (status == "eval()") {
    ret = EvaluateWithInnerEval(formula);
  } else if (status == "Shunt-Yard") {
    ret = EvaluateWithShuntingYardAlgo(formula);
  } else {
    // Something happened
    console.log("Internal error: We do not have a calculating method called ", status.tostring, ".");
  }

  if (ret != null) {
    document.getElementById('ResultDisplay').getElementsByTagName('span')[0].innerHTML = ret;
  } else {} // Something happened (already handled).
}

function DisplayShowRPN() {
  // TODO:
}

function EvaluateWithInnerEval(f) {
  try {
    return eval(f)
  } catch (e) {
    document.getElementById('ResultDisplay').getElementsByTagName('span')[0].innerHTML = e;
  }

  return null;
}

function EvaluateWithShuttingYardAlgo(f) {
  document.getElementById('ResultDisplay').getElementsByTagName('span')[0].innerHTML = "Not Implemented"
  return null;
}
