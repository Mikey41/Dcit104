//Michael-Angelo Obeng-Konadu (10950757)
//I Michael-Angelo Obeng-Konadu endorse this code.
//A prpgram to calculate the average os all even number between 1 and n
function even(num){
let sum = 0;
let avge;
for (let i = 2; i <= num; i += 2){
  sum += i;
  avge = sum/(num/2);
}
console.log(avge);
}
even(10000);











