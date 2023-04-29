"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = (b ** 2) - (4 * a * c);
  let x = (-b + Math.sqrt(d)) / (2 * a);
  let y = (-b - Math.sqrt(d)) / (2 * a);
  let z = -b / (2 * a);


  if (d > 0) {
    arr.push(x);
    arr.push(y);
  } else if (d === 0) {
    arr.push(z);
  } else {
    arr = [];
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (percent / 100) / 12;
  let sumCredit = amount - contribution;
  let payment = sumCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let debt;
  if (isFinite(percent) && isFinite(contribution) && isFinite(amount) && isFinite(countMonths)) {
    debt = Number((payment * countMonths).toFixed(2));
  } else {
    debt = false;
  }
  return debt;
} 