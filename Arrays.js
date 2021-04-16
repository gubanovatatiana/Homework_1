// 1. Найти минимальный элемент массива

var minNum = [1, 0, -5, 17];

for (var i = 0; i < minNum.length; i++) {
    if (minNum[i] < minNum[0]) {
        minNum[0] = minNum[i]
    }
}

console.log(minNum[0]);


// 2. Найти максимальный элемент массива

var maxNum = [1, 0, -5, 17];

for (var i = 0; i < maxNum.length; i++) {
    if (maxNum[i] > maxNum[0]) {
        maxNum[0] = maxNum[i];
    }
}

console.log(maxNum[0]);

//	3. Найти индекс минимального элемента массива

var index = [-3, 0, -5, 17];
var min = index[0];
var minInd = 0;


for (var i = 0; i < index.length; i++) {
    if (index[i] < min) {
        min = index[0];
        minInd = i;
    }
}

console.log(minInd);

// 4.	Найти индекс максимального элемента массива

var index = [-3, 0, -5, 17];
var max = index[0];
var maxInd = 0;


for (var i = 0; i < index.length; i++) {
    if (index[i] > max) {
        max = index[0];
        maxInd = i;
    }
}

console.log(maxInd);

//	5. Посчитать сумму элементов массива с нечетными индексами 

var number = [-3, 2, -5, 17];
var sum = 0;

for (var i = 0; i < number.length; i++) {
    if (i % 2 !== 0) {
        sum += number[i];
    }
}

console.log(sum);

//	6. Сделать реверс массива (массив в обратном направлении)

var a = [1, 2, 3, 4, 5];
var reversed = a.reverse();

console.log(a);

//	7. Посчитать количество нечетных элементов массива

var array = [1, 3, 9, 4, 5, 6, 7];
var quantity = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        quantity += 1 ;
    }
}

console.log(quantity);

//	8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function arraySwapHalvesNative(arr) {
    
      var half = Math.round(arr.length / 2);
      var out = [];
      for (var i = half; i < arr.length; i++) {
          out.push(arr[i]);
      }
      for (var j = 0; j < half; j++) {
          out.push(arr[j]);
      }
      return out;
}

console.log(arraySwapHalvesNative([1, 2, 3, 4]));


//	9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 

function bubbleSort(array) {
    var sortedArray = Array.from(array);
    var swap;
    do {
      swap = false;
      for (var i = 1; i < sortedArray.length; ++i) {
        if (sortedArray[i - 1] > sortedArray[i]) {
          [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
          swap = true;
        }
      }
    } while (swap);
    return sortedArray;
  }
  
console.log(bubbleSort([1, 5, 2, 7, 3]));



function selectionSort(array) { 
    var n = array.length;
        
    for(var i = 0; i < n; i++) {
        var min = i;
        for(var a = 0; a < n; a++){
            if(array[a] < array[min]) {
                min = a; 
            }
         }
         if (min != i) {
             var tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
}

console.log(selectionSort([1, 5, 2, 7, 3]));


function insertionSort(sort) {
    for (var i = 1; i < sort.length; i++) {
        for (var a = i; a > 0; a--) {
            if (sort[a] < sort[a - 1]) {
                var x = sort[a];
                sort[a] = sort[a - 1];
                sort[a - 1] = x;
            } else {
                break;
            }
        }
    }

    console.log(sort)
}

insertionSort([1, 5, 2, 7, 3]);
