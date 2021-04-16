//1.	Получить строковое название дня недели по номеру дня. 

function getDays(x) {
  
  var days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]
 return days[x - 1];
}

console.log(getDays(3));

  //2.	Найти расстояние между двумя точками в двухмерном декартовом пространстве.

var ax = 0;
var ay = 0;
var bx = 0;
var by = 0;

function getPoints(ax, ay, bx, by) {
    var distance = (((bx - ax)** 2 + (by - ay)** 2)** 0.5);

    return distance;
}

console.log(getPoints(1, 3, 8, 5));

//3.	Вводим число(0-999), получаем строку с прописью числа.

var numString = {
  0: 'ноль',
  1: 'один',
  2: 'два',
  3: 'три',
  4: 'четыре',
  5: 'пять',
  6: 'шесть',
  7: 'семь',
  8: 'восемь',
  9: 'девять',
  10: 'десять',
  11: 'одинадцать',
  12: 'двенадцать',
  13: 'тринадцать',
  14: 'четырнадцать',
  15: 'пятнадцать',
  16: 'шестнадцать',
  17: 'семнадцать',
  18: 'восемнадцать',
  19: 'девятнадцать',
  20: 'двадцать',
  30: 'тридцать',
  40: 'сорок',
  50: 'пятьдесят',
  60: 'шестьдесят',
  70: 'семдесят',
  80: 'восемдесят',
  90: 'девяноста',
  100: 'сто',
  200: 'двести',
  300: 'триста',
  400: 'четыреста',
  500: 'пятьсот',
  600: 'шестьсот',
  700: 'семьсот',
  800: 'восемьсот',
  900: 'девятьсот',
}

function numberToStr(num) {
  var inStr = String(num);
  var input = inStr.length;
  var out = '';
  var j;

  if (!input || input > 3 || isNaN(num) || !isFinite(num) || num < 0) {
    return 'Error';
  }
  if (inStr in numString) {
    return numString[inStr];
  }
  for (var i = 1; i <= input; i++) {
    j = inStr.slice(-i);
    if (j in numString) {
      out = numString[j];
      continue;
    }
    j = j - j % (10 ** (i-1));
    if (j in numString) {
      out = numString[j] + ' ' + out;
      continue;
    }
  }
  return out;
}

console.log(numberToStr(125));

//4.	Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
