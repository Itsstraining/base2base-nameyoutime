// Add new functions, variables here

function tuHe10sang2(n) {
  let temp = [];
  let temp1 = [];
  let kq = "";
  let a = n;
  for (let i = 0; i < Math.sqrt(a) + 1; i++) {
    if (n % 2 == 0) {
      temp.push(0);
    } else if (n % 2 == 1) {
      temp.push(1);
      n = n - 1;
    }
    n = n / 2;
    if (n / 2 == 0) {
      break;
    }
  }
  for (let i = 1; i <= temp.length; i++) {
    temp1.push(temp[temp.length - i]);
  }
  for (let i = 0; i < temp1.length; i++) {
    kq = kq + temp1[i];
  }
  return kq;
}

function tuHe10sang16(n) {
  let so = "0123456789ABCDEF";
  let kq = "";
  while (n > 0) {
    let temp = Math.floor(n % 16);
    kq = so.charAt(temp) + kq;
    n = Math.floor(n / 16);
  }
  return kq;
}
function tuHe8sang16(n) {
  n = tuHe8sang10(n);
  n = tuHe10sang16(n);
  return n;
}

function tuHe8sang10(n) {
  let kq = 0;
  let i = 0;
  while (n != 0) {
    kq = kq + Math.floor(n % 10) * Math.pow(8, i);
    i++;
    n /= 10;
  }
  return kq;
}

function tuHe8sang2(n){
  n = tuHe8sang10(n);
  n = tuHe10sang2(n);
  return n;
}

function main(input) {
  // Your code goes here
  // Using console.log to answer the question

  let res = input.split(" ");
  let n = parseInt(res[0]);
  let x = parseInt(res[1]);
  let y = parseInt(res[2]);

  if (x == 10 && y == 2) {
    console.log(tuHe10sang2(n));
  } else if (x == 8 && y == 10) {
    console.log(tuHe8sang10(n));
  } else if (x == 8 && y == 2) {
    console.log(tuHe8sang2(n));
  } else if (x == 8 && y == 16) {
    console.log(tuHe8sang16(n));
  }

  // console.log(n + " " + x + " " + y);
}

module.exports = main;
