// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений
// которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// const a = Number.parseInt(prompt('Input a:'));
// let b = Number.parseInt(prompt('Input b: '));
// // alert(`Sum of a + b is ${a + b}`);
// alert(`sum of a + b = ${summ(a,b)}`)


// function summ (a,b){
//     return a+b;
// }


// Задача 4: вывести на экран в диалоговом окне текст с сообщением
// “Вам хорошо живется?” и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”
// При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”


// const a = confirm('Are you ok?'); // if a  - OK -> True, else False
// // if (a)  {
// //     alert('We are comming!');
// // } else {
// //     alert('Take care...');
// // }
// a ? alert('We are comming!') : alert('Take care...');




// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.


function getMaxEvenElement(arr) {
    let max = arr[0];
    for(i = 2; i < arr.length; i += 2){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;    
   
}

const arr = prompt('Input an array: ').split(',').map(Number.parseFloat);
console.log(arr);
console.log(getMaxEvenElement(arr));
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31