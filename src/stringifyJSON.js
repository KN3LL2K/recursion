// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'number' || typeof obj === 'boolean'){
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj +'"';
  }

  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'function') {
    return '';
  }

  if (Array.isArray(obj)) {
    var stringifiedArray = '';
      stringifiedArray += '[';
      for (var i = 0; i < obj.length; i++) {
        stringifiedArray += stringifyJSON(obj[i]);
        if (obj.length > 1 && obj[i] !== obj[obj.length-1]) {
          stringifiedArray += ',';
        }
      }
      stringifiedArray += ']';
    return stringifiedArray;
  }

  if (typeof obj === 'object') {
    var stringifiedObject = '';
    stringifiedObject += '{';
    for (var each in obj) {
      if (typeof obj[each] === 'function') {
          stringifiedObject += '';
          delete obj[each]
      } else if (obj[each] === undefined) {
          stringifiedObject += '';
          delete obj[each]
      } else {
        stringifiedObject += '"' + each + '"' + ':' + stringifyJSON(obj[each]);
      }

      if (Object.keys(obj).length > 1 && obj[each] !== obj[Object.keys(obj)[Object.keys(obj).length - 1]]) {
        stringifiedObject += ',';
      }
    }
    stringifiedObject += '}';
    return stringifiedObject;
  }
};
