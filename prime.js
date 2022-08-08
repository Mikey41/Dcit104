function isPrime(num){
  if (num < 2){
      return false;
  }
  if (num === 2){
      return true;
  }

  for(let i = 2; i < num; i++){
          if(num % i == 0){
              return false;
          }
          else{
              return true;
          }
  }

}


function average(nums) {

var sum = 0;
var count = 0;

for( let i = 0; i < nums; i++){
  if (isPrime(i)) {
      sum += i;
      count++;
  }
}

console.log(sum/count);

}
average(5);