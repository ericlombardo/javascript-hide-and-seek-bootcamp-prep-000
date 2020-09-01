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
  // find element from div with id of grand-node that is furthest in
  return document.querySelector('div#grand-node div div div div');
}

// increases ranks in .ranked-list by n
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('ul.ranked-list li');
  // loop through
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
  // for eached ranked list
    // innerHTML = parseInt(innerHTML) + n
  }
}
