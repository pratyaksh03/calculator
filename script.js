// Declaration of variables
let v1 = "";
let v2 = "";
let op = "";
let v3 = "";

// Operate function defined
const operate = function() {

  const history = document.querySelector(".history");
  const output = document.querySelector(".output");

  if (op === "*") {
    v3 = v1 * v2;
    output.textContent = v3;
  } else if (op === "+") {
    v3 = v1 + v2;
    output.textContent = v3;
  } else if (op === "-") {
    v3 = v1 - v2;
    output.textContent = v3;
  } else if (op === "/") {
    v3 = v1 / v2;
    output.textContent = v3;
  }

  history.textContent = `${v1} ${op} ${v2} =`;
};

// Declaration of variables
const addToVar = function(event) {
  const number = event.target.innerText;
  
  if (op === "") {
    v1 += number;
  } else if(v3 === ""){
    v2 += number;
  } else {
    v1 = v3;
    v2 = v4;
    console.log(number);
  }
};

const addToOp = function(event) {
  op = event.target.innerText;
};

// Adding functions to buttons
const one = document.getElementById("a1");
const two = document.getElementById("a2");
const three = document.getElementById("a3");
const four = document.getElementById("a4");
const five = document.getElementById("a5");
const six = document.getElementById("a6");
const seven = document.getElementById("a7");
const eight = document.getElementById("a8");
const nine = document.getElementById("a9");
const zero = document.getElementById("a0");
const sum = document.getElementById("sum");
const div = document.getElementById("div");
const mul = document.getElementById("mul");
const sub = document.getElementById("sub");
const dec = document.getElementById("dec");
const opr = document.getElementById("op");
const clr = document.getElementById("clr");
const bs = document.getElementById("bs");

one.addEventListener("click", addToVar);
two.addEventListener("click", addToVar);
three.addEventListener("click", addToVar);
four.addEventListener("click", addToVar);
five.addEventListener("click", addToVar);
six.addEventListener("click", addToVar);
seven.addEventListener("click", addToVar);
eight.addEventListener("click", addToVar);
nine.addEventListener("click", addToVar);
zero.addEventListener("click", addToVar);

sum.addEventListener("click", addToOp);
mul.addEventListener("click", addToOp);
div.addEventListener("click", addToOp);
sub.addEventListener("click", addToOp);

opr.addEventListener("click", operate);

// Showing result in screen
const history = document.querySelector(".history");
const output = document.querySelector(".output");