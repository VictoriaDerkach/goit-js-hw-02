const numbers = [];

while (true) {
  let input = prompt('Введи число');
  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
}
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(numbers);
const total = arraySum(numbers);
console.log(total);
