////////////////////////////////1///////////////////////////
function checkAnswer() {
      console.log("Hello World");
};

checkAnswer();
//////////////////////////////2///////////////////////////////
function greet(name) {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet("Glob"));
/////////////////////////////3////////////////////////////////
function FindLongestString(arr) {
	let longest = "";

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const nestedLongest = FindLongestString(arr[i]);

			if (nestedLongest.length > longest.length) {
				longest = nestedLongest;
			}
		} else if (typeof arr[i] === "string") {
			if (arr[i].length > longest.length) {
				longest = arr[i];
			}
		}
	}

	return longest;
}

console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));
////////////////////////////////////4///////////////////////

// Пример стрелочной функции
const add = (a, b) => a + b;
console.log(add(2, 3));    // Выведет 5
///////////////////////////////////6///////////////////////
function calculate(a, b, operator)
{
   switch (operator) {
    case "*":
        result = a*b;
        break;
    case "+":
        result = a+b;
        break;
    case "-":
        result = a-b;
        break;
    case "/":

        result = b != 0 ? a/b : NaN;
        break;
    default:
        break;
   }
   return result;
}

console.log(calculate(10,10,"/"));
///////////////////////////////7//////////////////////////
const add2 = (a, b) => a[b];
console.log(add2([1,2,3,4],2));