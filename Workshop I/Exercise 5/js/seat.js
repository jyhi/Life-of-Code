window.onload = initSeat(6,12);

function initSeat(row, col) {
  var alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];

  var divCanvas = document.getElementById('canvas');
  if (!divCanvas) {
    console.log("Fatal error: Cannot get the canvas.");
    return null;
  }

  mRow = row / 2;
  mCol = col / 2;

  var buffer = new Array();
  buffer += "<table class=\"canvas\">" +
            "<tr>" +
            "<td>Window</td>";
  for (let i = 0; i < col; i++) {
    if (i != mCol) {
      buffer += "<td>" + alphabet[i] + "</td>";
    } else {
      buffer += "<td colspan=\"2\">Aisle</td>";
      --i;
    }
  }
            // "<td>A</td>" +
            // "<td>B</td>" +
            // "<td>C</td>" +
            // "<td colspan=\"2\">Aisle</td>" +
            // "<td>J</td>" +
            // "<td>K</td>" +
            // "<td>L</td>" +
            // "<td>Window</td>" +
            // "</tr>"

  // for (let i = 0; i < row; i++) {
  //   if (i != mRow) {
  //     for (let j = 0; j < col; j++) {
  //       if (j != mCol) {
  //         // Normal Seats
  //
  //       } else {
  //         // Aisle
  //       }
  //     }
  //   } else {
  //     // Emergency
  //   }
  // }

  buffer += "</table>"

  document.getElementById('canvas').innerHTML = buffer;
}
