// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];

  function inspectElement(element, result) {
    var nodes = element.childNodes;
    var children = [];
    for (var each in nodes) {
      if (nodes[each].nodeType == 1) {
        children.push(nodes[each]);
      }
    }
    var toCheck = element.className.split(' ');
    if (toCheck.indexOf(className) >= 0) {
        result.push(element)
      }
    for (var i = 0; i < children.length; i++){
      inspectElement(children[i], result);
    }
  }

  inspectElement(document.body, result);
  return result;
};
