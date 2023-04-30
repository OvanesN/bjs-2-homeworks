"use strict"

function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = (b ** 2) - (4 * a * c);
  const xValue = (-b + Math.sqrt(discriminant)) / (2 * a);
  const yValue = (-b - Math.sqrt(discriminant)) / (2 * a);
  const zValue = -b / (2 * a);


  if (discriminant > 0) {
    arr.push(xValue);
    arr.push(yValue);
  } else if (discriminant === 0) {
    arr.push(zValue);
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  
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