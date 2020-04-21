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

// Solution for the THIRD question Factorialize a Number.
function factorialize(num) {
	//we have num and a p
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}

	return result;
}

factorialize(5);

// Soloution for the FOURTH problem Find the Longest Word in a String

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

//solution for question FIVE Return Largest Numbers in Arrays
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

//SOLUTION question SIXTH Confirm the Ending

function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target;
}

confirmEnding('Bastian', 'n');

//Solution for question SEVEN  Repeat a String Repeat a String
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

// 8TH question Basic Algorithm Scripting: Truncate a String

function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + '...'; //
	} else {
		return str;
	}
}

// 9TH Question Finders keepers

function findElement(arr, func) {
	return arr.find(func);
}

//10TH th question Boo Who

function booWho(bool) {
	return typeof bool === 'boolean';
}

booWho(null);

// 11th question Title Case a SentencePassed

function titleCase(str) {
	return str.toLowerCase().replace(/(^|\s)\S/g, function(a) {
		return a.toUpperCase();
	});
	return string;
}

titleCase("I'm a little tea pot");

//Jays solution to "truncate"
function truncateString(str, num) {
	let arraySplit = str.split('');

	// let remaining = str.length - num;
	// let afterRemaining = str.length - remaining;
	// console.log(([ a, b,  ...str ] = split));
	for (let i = 0; i < arraySplit.length; i++) {
		if (num < arraySplit.length) {
			return str.slice([ 0 ], num) + '...';
		} else {
			return str.slice([ 0 ], str.length);
		}
	}
}
truncateString('A-tisket a-tasket A green and yellow basket', 48);

//jason's answer to  finders Keeper
function findElement(arr, func) {
	let number = 0;
	//console.log((num.length = 5)); // will print 5
	//console.log(num.length) //will print 4
	for (let i = 0; i < arr.length; i++) {
		// 	if (num[i].length % 2) {
		// 		console.log(array.length);
		// 	}
		// }
		let number = arr[i];
		//console.log(num.filter(func));
		if (func(number)) {
			return number;
		}
	}
}

findElement([ 1, 2, 3, 4 ], (num) => num % 2 === 0);

//Jason answer for Boo Who question
function booWho(bool) {
	if (typeof bool === 'boolean') {
		return true;
	} else {
		return false;
	}
}

booWho(null);

//Jason's answer slice and splice
function frankenSplice(arr1, arr2, n) {
	let arr = arr2.slice();

	//console.log(arr2.splice(n, 0, arr1));

	arr.splice(n, 0, ...arr1);

	console.log(arr);
	return arr;
}

frankenSplice([ 'claw', 'tentacle' ], [ 'head', 'shoulders', 'knees', 'toes' ], 2);

// Jason's answer to Boolean question
function bouncer(arr) {
	//console.log(arr);

	arr.filter(Boolean);
}
bouncer([ 7, 'ate', '', false, 9 ]);

//Jason's algorithm scripting mutation answer;

function mutation(arr) {
	let firstWord = arr[0].toLowerCase();
	let secondWord = arr[1].toLowerCase();

	for (let i = 0; i < secondWord.length; i++) {
		if (firstWord.indexOf(secondWord[i]) === -1) return false;
	}
	return true;
}
mutation([ 'hello', 'hey' ]);
