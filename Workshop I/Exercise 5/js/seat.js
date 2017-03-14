var seatSel   = new Array(); // Array that records selected seats
var seatYours = new Array(); // Array that records "your seats"
window.onload = InitSeat(12,6); // Initialize canvas on page load

/**
 * Initialize seat canvas.
 *
 * This function searches for element with id 'canvas', and draw seats on it, with
 * specified rows and columns.
 *
 * @param row {Numbers} Number of row.
 * @param col {Numbers} Number of columns.
 */
function InitSeat(row, col) {
  // Alplabet is used to generate the header.
  var alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];

  // Reset. XXX: This is quite tricky.
  seatSel.length = 0;
  seatYours.length = 0;

  var divCanvas = document.getElementById('canvas');
  if (!divCanvas) {
    console.log("Fatal error: Cannot get the canvas.");
    return null;
  }

  // Middle values to determine the position of Aisle and Emergency Way.
  mRow = Math.round(row / 2) - 1;
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
  buffer += "</tr>";

  // Seats
  for (let j = 0; j < row; j++) {
    buffer += "<tr>" + "<td>" + (j + 1) + "</td>"
    for (let i = 0; i < col + 1; i++) {
      if (i != mCol) {
        if (j == mRow) {
          // Emergency seats are not orderable.
          buffer += "<td><img class=\"cabin\" src=\"./img/occups.svg\" /></td>";
        } else {
          buffer += "<td><button class=\"seats\" id='" + i + "_" + j + "' onclick=\"SeatSelected('" + i + "_" + j + "')\"><img class=\"cabin\" src=\"./img/avails.svg\" /></button></td>";
        }
      } else {
        for (let width = 0; width < widthAisle; width++) {
          if (j == mRow) {
            // Emergency marks on Aisle
            buffer += "<td><img class=\"cabin\" src=\"./img/emerg.svg\" /></td>";
          } else {
            buffer += "<td><img class=\"cabin\" src=\"./img/aisle.svg\" /></td>";
          }
        }
      }
    }
    buffer += "</tr>";
  }

  buffer += "</table>";

  document.getElementById('canvas').innerHTML = buffer;
}





/**
 * Handler when a seat is clicked (selected).
 *
 * This function will change the class name to specify and determine whether the
 * seat is already selected or not. The picture of the seat is changed too.
 *
 * @param id {String} The 'id' of the selected seat.
 */
function SeatSelected(id) {
  var classnames = document.getElementById(id).className;
  // XXX: Hard-coded
  // NOTE: Your seats are not selectable.
  if (classnames == "seats yours") return;
  if (classnames == "seats selected") {
    // Unselect
    document.getElementById(id).className = "seats";
    document.getElementById(id).innerHTML = "<img class=\"cabin\" src=\"./img/avails.svg\" />";
    seatSel.pop();
  } else {
    // Select
    if (seatSel.length >= 2) {
      alert ("You can only select 2 seats at a time!");
      return null;
    }
    document.getElementById(id).className = "seats selected";
    document.getElementById(id).innerHTML = "<img class=\"cabin\" src=\"./img/sels.svg\" />";
    seatSel.push(id);
  }
}





/**
 * Handler of the "Submit" button.
 *
 * This function records currently selected seats, record them into another array
 * 'seatYours', change their images, and then clear the array containing selected
 * seats.
 *
 * @param sel       {Array} Selected seats (seatSel in global scope).
 * @param seatYours {Array} Your seats (seatYours in global scope).
 * @see ResetPressed
 */
function SubmitPressed(sel,seatYours) {
  for (let i = 0; i < sel.length; i++) {
    document.getElementById(sel[i]).className = "seats yours";
    document.getElementById(sel[i]).innerHTML = "<img class=\"cabin\" src=\"./img/yours.svg\" />";
    seatYours.push(sel[i]);
  }
  sel.length = 0;
}





/**
 * Handler of the "Reset" button.
 *
 * This function mainly does clearing: First the selected array, and then the
 * "Your seats" array.
 *
 * @param sel       {Array} Selected seats (seatSel in global scope).
 * @param seatYours {Array} Your seats (seatYours in global scope).
 * @see SubmitPressed
 */
function ResetPressed(sel,seatYours) {
  // 1. Clear selected seats
  for (let i = 0; i < sel.length; i++) {
    document.getElementById(sel[i]).className = "seats";
    document.getElementById(sel[i]).innerHTML = "<img class=\"cabin\" src=\"./img/avails.svg\" />";
  }
  sel.length = 0;
  // 2. Clear your seats
  for (let i = 0; i < seatYours.length; i++) {
    document.getElementById(seatYours[i]).className = "seats";
    document.getElementById(seatYours[i]).innerHTML = "<img class=\"cabin\" src=\"./img/avails.svg\" />";
  }
  seatYours.length = 0;
}
