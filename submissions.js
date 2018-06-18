	// strings section
	// 		1
let firstVariable = "Hello World"
	firstVariable = 6
	let secondVariable = firstVariable
	secondVariable = "Hello"
	// firstVariable = 6\
	console.log(firstVariable)
			// 2

	let yourName = "Eugene Sims"
	console.log("Hello, my name is" + yourName)

	const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  a < b;
c > d;
'Name' === 'Name';
a < b < c;
a === a !== d;
e === 'Kevin';
48 !== '48';

const animal = (str) => {
	if (str === "cow") {
		return "moooooo"
	}else {
		return "Hey you're not a cow!"
	}
}
console.log(animal("crow"))

const driversEd = (age) => {
	if (age >= 16) {
		return "Here are the keys."
	}else {
		return "Sorry, you're too young."
	}
}
console.log(driversEd(16))



for (let i = 0; i <= 10 ; i++) {
	console.log(i)
}

for (let i = 10; i <= 4000 ; i++) {
	console.log(i)
}

for (let i = 10; i <= 4000 ; i += 2) {
	console.log(i);
};

for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
		console.log(i + " is an even number")
	}
}


for (let i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log("I found a " + i + ". High five!");
	}else {
		console.log(i);
	}
}


for (let i = 0; i <= 100; i++) {
	if (i % 5 === 0) {
		console.log("I found a " + i + ". High five!");
	}else if (i % 3 === 0) {
		console.log("I found a " + i + ". Three's a crowd.")

	}else {
		console.log(i);
	}
}
const quotes = ["FIRE!!", "Oh how the mighty have fallen.", "It was almost like she dared me to do it."]


const randomThings = [1, 10, "Hello", true]
	randomThings[2] = "World"
	console.log(randomThings)

const myArray = [5 ,10 ,500, 20]
	myArray.push("Egon");
	myArray.pop();
	myArray.unshift("Bob Marley");
	myArray.shift();
	myArray.reverse()

const bigNumber = (num) => {
	if (num < 100){
		return "little number"
	}else if (num >= 100){
		return "BIG NUMBER!"
	}
}






















