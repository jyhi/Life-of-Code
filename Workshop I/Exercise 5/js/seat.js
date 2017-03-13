window.onload = InitSeat(12,6);

function InitSeat(row, col) {
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

  // Middle values to determine the position of Aisle and Emergency Way.
  mRow = Math.round(row / 2);
  mCol = Math.round(col / 2);

  // Aisle width.
  // For larger cabin width, we give an aisle width of 2, otherwise 1.
  var widthAisle = (col > 5) ? 2 : 1;

  var buffer = new Array();
  buffer += "<table class=\"canvas\">" +
            "<tr>" +
            "<td>Window</td>";

  // Header
  for (let i = 0, iAlpha = 0; i < col + 1; i++) {
    if (i != mCol) {
      buffer += "<td>" + alphabet[iAlpha++] + "</td>"; // I KNOW EXACTLY WHAT I AM DOING.
    } else {
      buffer += "<td colspan=\"" + widthAisle + "\">Aisle</td>";
    }
  }
  buffer += "</tr>"

  // Seats
  for (let j = 0; j < row; j++) {
    buffer += "<tr>" + "<td>" + (j + 1) + "</td>"
    for (let i = 0; i < col + 1; i++) {
      if (i != mCol) {
        if (j == mRow) {
          // Emergency seats are not orderable.
          buffer += "<td><button class=\"seats\"><img src=\"./img/occups.png\" /></button></td>";
        } else {
          buffer += "<td><button class=\"seats\"><img src=\"./img/avails.png\" /></button></td>";
        }
      } else {
        for (let width = 0; width < widthAisle; width++) {
          if (j == mRow) {
            // Emergency marks on Aisle
            buffer += "<td><img src=\"./img/emerg.png\" /></td>";
          } else {
            buffer += "<td><img src=\"./img/aisle.png\" /></td>";
          }
        }
      }
    }
    buffer += "</tr>";
  }

  buffer += "</table>"

  document.getElementById('canvas').innerHTML = buffer;
}
