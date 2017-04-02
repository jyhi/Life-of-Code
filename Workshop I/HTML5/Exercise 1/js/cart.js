/**
 * Disable default behaviors when dragging around the page.
 */
document.ondragover = function (e) {
  e.preventDefault();
}

/**
 * Disable default behaviors when dropping around the page.
 */
document.ondrop = function (e) {
  e.preventDefault();
}

/**
 * Handler of a drop event on the cart.
 *
 * This function will first receive the data shipped alongwith the item (the price), and add it to the total price in
 * the checkout.
 *
 * @param ev {Events} [in] The event.
 */
function CartDropped(ev) {
  var curr_total_price = parseFloat(document.getElementById('money-display').innerHTML);
  curr_total_price += parseFloat(ev.dataTransfer.getData("text/plain"));
  document.getElementById('money-display').innerHTML = curr_total_price;
}

/**
 * Handler of a drop-start event on the image.
 *
 * This function will set the data (the price) being shipped with the item.
 *
 * @param ev {Events} [in] The event.
 */
function ImgDragStart(ev) {
  var price = ev.target.parentNode.getElementsByTagName('p')[1].getElementsByTagName('b')[0].innerHTML;
  ev.dataTransfer.setData("text/plain", price);
}
