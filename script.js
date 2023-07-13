// Declaration of variables
let v1 = "";
let v2 = "";
let op = "";
let v3 = "";

// Operate function defined
const operate = function() {
  history.textContent = `${v1} ${op} ${v2} =`;
  if(op === "" && v2 ===""){
    output.textContent = v1;
  }

  else if (op === "*") {
    v3 = v1 * v2;
    output.textContent = v3;
  } else if (op === "+") {
    v3 = parseInt(v1) + parseInt(v2);
    output.textContent = v3;
  } else if (op === "-") {
    v3 = v1 - v2;
    output.textContent = v3;
  } else if (op === "/") {
    if(v2 === "0"){
      output.textContent = "Yeah, I am not doing that..."
    }
    else{
      v3 = v1 / v2;
      output.textContent = v3;
    }
  }

  v2 = ""; //resets value of v2 to null
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
    v2 += number; 
  }

  history.textContent = `${v1} ${op} ${v2}`;
};

const addToOp = function(event) {
  op = event.target.innerText;
  history.textContent = `${v3} ${op} ${v2}`;
};

//Clear button
const clrbtn = function(){
  v1 = "";
  v2 = "";
  v3 = "";
  op = "";
  history.textContent = ``;
  output.textContent = ``;
}

//Backspace button
const back = function() {
  if (v2 !== "") {
    v2 = v2.slice(0, -1);
  } else if (op !== "") {
    op = "";
  } else if (v1 !== "") {
    v1 = v1.slice(0, -1);
  } else if (v3 !== "") {
    v3 = v3.slice(0, -1);
  }
  history.textContent = `${v1} ${op} ${v2}`;
};

//Decimal button
const deci = function() {
  decimal = dec.innerText;
  
  if (op === "") {
    // Check if decimal point already exists in v1
    if (!v1.includes(decimal)) {
      v1 += decimal;
    }
  } else {
    // Check if decimal point already exists in v2
    if (!v2.includes(decimal)) {
      v2 += decimal;
    }
  }

  history.textContent = `${v1} ${op} ${v2}`;
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

clr.addEventListener('click', clrbtn);

bs.addEventListener('click', back);

dec.addEventListener('click', deci);

// Showing result on screen
const history = document.querySelector(".history");
const output = document.querySelector(".output");