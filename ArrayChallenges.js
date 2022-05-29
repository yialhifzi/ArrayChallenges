// 1
function alwaysHungry(arr) {
    var hungry = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            hungry = false;
        }
    }
    if (hungry == true) {
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);


// 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


// 3
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var count = 0;
    var avg = sum / arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


// 4
function reverse(arr) {
    var array = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


// 5
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (var i = 2; i < 10; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
