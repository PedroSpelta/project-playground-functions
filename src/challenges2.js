// Desafio 10
function techList(array, name) {
  // seu código aqui
  let final = [];
  array = array.sort();
  if (array.length === 0) return 'Vazio!';
  for (let index = 0; index < array.length; index += 1) {
    let obj = {
      tech: array[parseInt(index, 10)],
      name,
    };
    // obj.tech = array[parseInt(index, 10)];
    // obj.name = name;
    final.push(obj);
  }
  return final;
}

// Desafio 11
// function checkNumberSize(array) {

// }

function checkSingleNumber(array) {
  let countArray = Array(10).fill(0);
  for (let number of array) {
    countArray[number] += 1;
    if (number < 0 || number > 10 || countArray[number] > 2) {
      return [false, 'não é possível gerar um número de telefone com esses valores'];
    }
  }
  return [true];
}

function checkNumber(array) {
  if (array.length !== 11) return [false, 'Array com tamanho incorreto.'];
  let checkedEveryNumber = checkSingleNumber(array);
  if (!(checkedEveryNumber[0])) return checkedEveryNumber;
  return [true];
}

function generatePhoneNumber(array) {
  // seu código aqui
  let check = checkNumber(array);
  if (!(check[0])) return check[1];
  let finalNumber = '(';
  for (let number of array) {
    finalNumber += number;
    if (finalNumber.length === 3) finalNumber += ') ';
    else if (finalNumber.length === 10) finalNumber += '-';
  }
  return finalNumber;
}

function checkTriangleSide(lineA, lineB, lineC) {
  let cond1 = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  let cond2 = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
  let cond3 = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
  return [cond1, cond2, cond3];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sidesResult = checkTriangleSide(lineA, lineB, lineC);
  if (sidesResult[0] && sidesResult[1] && sidesResult[2]) return true;
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let stringSplited = string.split(' ');
  let totalWater = 0;
  if (stringSplited[1] / 1) console.log('sim');
  for (let index = 0; index < stringSplited.length; index += 1) {
    if (parseInt(stringSplited[index], 10)) totalWater += parseInt(stringSplited[index], 10);
  }
  if (totalWater === 1) return '1 copo de água';
  return `${totalWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
