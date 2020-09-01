// returns first element to match selector
function getFirstSelector(selector) {
  // finds selector and returns it
  return document.querySelector(selector);
}

// pulls .target out of #nested elements
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

// returns the deepest nested child in #grand-node
function deepestChild() {
  return document.getElementById('app').querySelectorAll('div#grand-node div').innerHTML;
}

// increases ranks in .ranked-list by n
function increaseRankBy(n) {

}
