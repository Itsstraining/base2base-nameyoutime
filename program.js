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
  console.log(temp);
  
  for(let i = 1;i<=temp.length;i++){
    temp1.push(temp[temp.length-i])
  }
  for(let i =0;i<temp1.length;i++){
    kq = kq +temp1[i];
  }
  console.log(kq);
}

function main(input) {
  // Your code goes here
  // Using console.log to answer the question

  let res = input.split(" ");
  let n = parseInt(res[0]);
  let x = parseInt(res[1]);
  let y = parseInt(res[2]);

  if (x == 10 && y == 2) {
    tuHe10sang2(n);
  }
 

  // console.log(n + " " + x + " " + y);
}

module.exports = main;
