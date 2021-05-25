// Desafio 10
function techList(array,name) {
  // seu código aqui
  let final = [];
  array = array.sort()
  if (array.length==0) return 'Vazio!'
  for (let index in array){
    let obj = {}
    obj['tech'] = array[parseInt(index)];
    obj['name'] = name;
    final.push(obj);
  }
  return final
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
