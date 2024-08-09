function greet() {
  console.log("Hello, World!");
}

greet();

// 2. >> parameter dan arguments

function add(a, b = 10) {
  return a + b;
}

console.log(add(5, 10)); // 15

// 3. default parameter

console.log(add(1));

// 4. function return

function fn1(x) {
  function fn2(y) {
    return x * y;
  }
  return fn2;
}

let result = fn1(5);

console.log(result); //

console.log(result(arguments)); //

console.log(result(100));
