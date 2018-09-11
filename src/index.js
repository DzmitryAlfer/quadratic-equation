module.exports = function solveEquation(equation) {
  const aStr = aRegex.exec(equation)[1].replace(/ /g,'');
  const bStr = bRegex.exec(equation)[1].replace(/ /g,'');
  const cStr = cRegex.exec(equation)[1].replace(/ /g,'');

  return solve(parseInt(aStr), parseInt(bStr), parseInt(cStr));
}

const aRegex = /([+-]? *[\d.]+) *\*{1} *x\^2/
const bRegex = /([+-]? *[\d.]+) *\*{1} *x(?!\^)/
const cRegex = /([+-]? *[\d.]+)$/

function solve(a, b, c) {
  var x1 = Math.round(-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  var x2 = Math.round(-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

  return [x1,x2].sort((a, b) => { return a - b;});
}
