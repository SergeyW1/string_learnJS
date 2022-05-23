// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let x = +prompt ('Введите первое число?','');
let y = +prompt ('Введите второе число?','');

alert (x+y);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Методы Math.round и toFixed, согласно документации, 
// округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.


alert (Math.round(6.35 * 10) / 10);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber () {
	let num;
	do {
		num = +prompt ('Введите число?', 0);
	} while (!isFinite(num)); 

	if (num === null || num === '') return null;

	return num;
}

alert (`Число: ${readNumber()}`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger (min,max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}

console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));
console.log (randomInteger (1,10));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random (min,max) {
	return min - Math.random() * (max - min);
}

alert (random(1,3));
alert (random(1,3));
alert (random(1,3));
alert (random(1,3));
alert (random(1,3));

// min = 10
// max = 20
// Math.random(0.22)
// return 10 - 0.22 * (20 - 10) = 7.8












