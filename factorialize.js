function factorialize(num) {
  let nums = [];
  for(let i = 1; i <= num; i++) {
      nums.push(i);
  }
  
  if(num === 0) {
    return 1
  }else {
  return nums.reduce((acc, val) => acc * val);

  }
}

console.log(factorialize(0));