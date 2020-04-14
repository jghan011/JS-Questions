//Solution to the first question converting celsius to Fahrenheit
function convertToF(celsius) {
	let fahrenheit = celsius * (9 / 5) + 32;
	return fahrenheit;
}

convertToF(30);

// Solution to the SECOND QUESTION Basic Algorithm Scripting: Reverse a StringPassed

function reverseString(str) {
	let splitTing = str.split('');
	let reversal = splitTing.reverse('');
	let joining = reversal.join('');

	return joining;
}

reverseString('hello');

// Solution for the third question Factorialize a Number.
function factorialize(num) {
	//we have num and a p
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}

	return result;
}

factorialize(5);

// Soloution for the third problem Find the Longest Word in a String

function findLongestWordLength(str) {
	var words = str.split(' ');
	var maxLength = 0;

	for (var i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}

	return maxLength;
}

//solution for question four Return Largest Numbers in Arrays
function largestOfFour(arr) {
	var results = [];
	for (var n = 0; n < arr.length; n++) {
		var largestNumber = arr[n][0];
		for (var sb = 1; sb < arr[n].length; sb++) {
			if (arr[n][sb] > largestNumber) {
				largestNumber = arr[n][sb];
			}
		}

		results[n] = largestNumber;
	}

	return results;
}

//SOLUTION question five Confirm the Ending

function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');

//QUESTION 6  Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
	if (num <= 0) {
		return '';
	} else if (num === 1) {
		return str;
	} else {
		return str + repeatStringNumTimes(str, num - 1);
	}
}
repeatStringNumTimes('abc', 3);

// 7th question Basic Algorithm Scripting: Truncate a String

function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + '...'; //
	} else {
		return str;
	}
}

// 8th Question Finders keepers

function findElement(arr, func) {
	return arr.find(func);
}

//
