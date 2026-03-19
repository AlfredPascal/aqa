let arr1 = [ '(', ')', '(', ')', ')'];
let arr2 = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];
let arr3 = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];
let arr4 = [ '(', ')', '(', ')'];
let result = "";

//for (let i = 0; i < arr.length; i++);

let arr_2 = [4, 81, 3, -12, 99, 14];

let min = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < arr_2.length; i++) {
    min = arr_2[i] > min ? arr_2[i] : min;
}

result = min;
///////////////////////////////////////////////////////
let arr_3 = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];
let sum = 0; 
for (let i = 0; i < arr_3.length; i++) {
    if (typeof(arr_3[i]) === "number") sum += arr_3[i];
    if (typeof(arr_3[i]) === "object") for (let j = 0; j < arr_3[i].length; j++) {
        sum += arr_3[i][j];
    }
}
result = sum;
//////////////////////////////////////////////////////////
for (let i = 2; i < 11; i+=2){
  //  console.log(i);
}
//////////////////////////////////////////////////////////
let res = 0;
let reul = 0;
while (res < 5){
    res += 3;
    reul++;
    if (res === 5) break;
    res -= 2;
}
result = reul;
/////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5];
    let sum2 = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            sum2 += numbers[i];
        }
    }
    console.log(sum2);

////////////////////////////////////////////////////////////
let str16 = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
result = str16.replaceAll("br", "")
console.log(result);