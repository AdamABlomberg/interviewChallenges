// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  if(number<=3){
    return 0;
  }
  let sum = 0;
  let multipleCount3 = 0;
  let multipleCount5 = 0;
  while(multipleCount3+3<number){
    multipleCount3+=3;
    multipleCount5+=5;
    if(multipleCount3%5 != 0) {
      sum += multipleCount3;
    }
    if(multipleCount5<number){
      sum += multipleCount5;
    }
  }
  return sum;
}
//console.log(solution(10)); //23
console.log(solution(20)); //78