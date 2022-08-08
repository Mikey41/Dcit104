//Michael-Angelo Obeng-Konadu(10950757)
//I Michael-Angelo Obeng-Konadu endorse this code.
//Write a program to calculate the average of all prime numbers between 1 and n.
function Prime(num){
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


function avge(nums) {

let sum = 0;
let cnt = 0;

for( let i = 0; i < nums; i++){
  if (Prime(i)) {
      sum += i;
      cnt++;
  }
}

console.log(sum/cnt);

}
avge(5);
