var ascii = require("./ascii.js");

var readlineSync = require("readline-sync");
var input_string = readlineSync.question("Enter your String here :");

var split_string = input_string.split("");
var ascii_num = [];
for (var i = 0; i < split_string.length; i++) {
  ascii_num.push(ascii[split_string[i]]);
}
console.log(ascii_num);
var binary = "";
function f(n) {
  if (n <= 1) {
    binary += n;
  } else {
    f(Math.floor(n / 2));
    binary += n % 2;
  }
  return binary;
}

var binary_arr = [];
ascii_num.map((n) => {
  binary_arr.push(f(n));
  binary = "";
});

function padding(binary) {
  if (binary.length < 8) {
    var str = "";
    pad = 8 - binary.length;
    for (var i = 0; i < pad; i++) {
      str += 0;
    }
    str += binary;
  }
  return str;
}

var final_output = [];
binary_arr.map((ele) => {
  final_output.push(padding(ele));
});

console.log(final_output);


