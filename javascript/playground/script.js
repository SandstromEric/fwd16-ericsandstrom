

/*var products = prompt("Price of products seperated by a space");
var arrProducts = products.split(" ");
var VAT = 1.25;
var allProducts = 0;

var i;
for (i = 0; i < arrProducts.length; i = i + 1) {
    allProducts = (Number(arrProducts[i]) + allProducts) * VAT;
}
console.log(allProducts);


var num = 1;
var numPrompt = 3;
var emptyArr = [];
while (num <= numPrompt) {
    var text = prompt("NUmber");
    emptyArr[num] = Number(text);
    num = num + 1;
}
console.log(emptyArr);

var newArr = emptyArr.sort().reverse();
console.log(newArr);*/

function times() {
    'use strict';
    var twoNumbers = prompt("Enter to numbers seperated by a comma");
    var arr = twoNumbers.split(",");
    var m = Number(arr[0]); //3
    var n = Number(arr[1]); //5
    var j;
    if (arr.length === 2) {
        for (j = 1; j <= m; j = j + 1) {
            console.log(j + " times " + n + " = " + n * j);
        }

    }

}
//times();

function biggestNumber() {
    'use strict';
    var array = [1, 3, 4, 2, 10, 11, 9, 8, 7];
    var biggest = 0;
    var k;

    for (k = 0; k < array.length; k = k + 1) {
        if (biggest < array[k]) {
            biggest = array[k];
        }
    }

    return biggest;
}
