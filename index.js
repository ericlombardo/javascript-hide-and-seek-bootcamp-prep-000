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
  var parent = document.getElementById('grand-node');
  while (parent.hasChildNodes !== false) {
    if (parent.hasChildNodes() === true) {
      parent = parent.firstChild();
    }  
  }
  return parent;
}

// increases ranks in .ranked-list by n
function increaseRankBy(n) {

}
