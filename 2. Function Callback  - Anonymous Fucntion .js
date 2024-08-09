// 1. Callback

function display(result) {
  console.log(result);
}

// function that uses callback function

function add(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

add(10, 3, display);

// display disini as a function ( callback )

// 2. Anonymous Function  > ya ini anonoymoys, tanpa nama function

// function(){
//     console.log('Hello from anonymous function');
// }

// 3. anonymous function >> cara manggil tanpa dikasih nama

(function () {
  console.log("hello from anonymou sfunction");
})();

// 4. Expression Function >> saat kita iingin memasukkan anonoymous function kedalam memori, maka kita kasih variabel

let express = function () {
  console.log("Hello from Expression function");
};
console.log(express());

// 5. SetTimeout >> ini merupakan callback, didalamnya ada fungsi dan ada timer ( nah fungsi yg callbacknya dipakekan anonymous function)

// setTimeout(fn, ms);     >> ini  rumus setTimeout

setTimeout(function () {
  console.log("Hello from setTimeout");
}, 2000);

// 6. Rekursif >> dia memanggil dirinya sendiri

// function myFunction() {
//   console.log("Hello from recursive function");
//   myFunction();
// }

// myFunction();
// yg diatas ga boleh, karena nanti akan infinite loop, makanya rekursif diusahakan ada kondisi biar dia stop manggil dirinya sendiri

// 7. Count Down

function countDown(x) {
  console.log(x);
  x--;
  if (x >= 0) {
    countDown(x);
  }
}

countDown(10);
