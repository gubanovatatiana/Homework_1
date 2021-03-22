//1. Если а – четное посчитать а*б, иначе а+б

var a = 10;
var b = 7;

if(a % 2 == 0) {
    console.log(a * b)
} else {
    console.log(a + b)
};

//2. Определить какой четверти принадлежит точка с координатами (х,у)

function quarted(x, y) {
    if(x > 0, y > 0) {
        return 1;
    }
    else if(x > 0, y < 0) {
        return 4;
    }
    else if(x < 0, y > 0) {
        return 2;
    }
    else if(x < 0, y < 0) {
        return 3;
    }
    return 0;
}

console.log(quarted(-2, 5), quarted(5,-7));

//3. Найти суммы только положительных из трех чисел

var a = -1;
var b = 2;
var c = 3;
var sum = 0;

if (a > 0) {
    sum = sum + a;
} if (b > 0) {
    sum = sum + b;
} if (c > 0) {
    sum = sum + c;
}

console.log(sum);

//4. Посчитать выражение (макс(а*б*с, а+б+с))+3

var a = -5;
var b = 2;
var c = 3;

if ((a * b * c) > (a + b + c)) {
   console.log((a * b * c) + 3);
} else {((a * b * c) < (a + b + c));
    console.log((a + b + c) + 3);
};

// 5. Написать программу определения оценки студента по его рейтингу, на основе следующих правил
//  0-19	F
// 20-39	E
// 40-59	D
// 60-74	C
// 75-89	B
// 90-100	A

var a = 85;  

if (0 <= a && a <= 19) {
    console.log("F");
} 
if (20 <= a && a <= 39) {
    console.log("E");
} 
if (40 <= a && a <= 59) {
    console.log("D");
} 
if (60 <= a && a <= 74) {
    console.log("C");
} 
if (75 <= a && a <= 89) {
    console.log("B");
} 
if (90 <= a && a <= 100) {
    console.log("A");
};
