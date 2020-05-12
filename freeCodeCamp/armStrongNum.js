function armStrongNum(n) {
  let temp = 0,r = 0,sum = 0,count = 0,n1 = n;
  temp = n;
  while (n1 > 0) {
    n1 = Math.floor(n1 / 10);
    count++;
  }
  while (n > 0) {
    r = Math.floor(n % 10);
    console.log(r);
    sum +=(r ** count);
    n = Math.floor(n / 10);
  }
  console.log(count);
  if (sum == temp) {
    console.log("It is armstong Number");
  } else {
    console.log("It is not an number");
  }
}

armStrongNum(1634);
