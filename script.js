/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");


function logger() {
  console.log("My name is Tharly");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangesJuice = fruitProcessor(2, 5);
console.log(appleOrangesJuice);

const num = Number("23");

function tenis(nike, adidas) {
  const compraTenis = `voce comprou ${nike} Nike e ${adidas} Adidas`;
  return compraTenis;
}

const novosTenis = tenis(5, 4);
console.log(novosTenis);

// function  declaration
function calcAge1(birthYeah) {
  return 2026 - birthYeah;
}
const age1 = calcAge1(1995);


// function Expression

const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1995);

console.log(age1, age1);

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// arrow function

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1995);
console.log(age3);

const yearUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retire in ${retirement}`;
};

console.log(yearUntilRetirement(1995, "tharly"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearUntilRetirement(1995, "tharly"));
console.log(yearUntilRetirement(1950, "thiago"));

const friend1 = "michael";
const friend = "steven";
const friend3 = "peter";

const friends = ["michael", "steven", "peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);
console.log(friends);

const firstName = "tharly";
const tharly = [firstName, "rodrigues", 2037 - 1995, "skatista", friends];
console.log(tharly);
console.log(tharly.length);
// exercise

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

const friends = ["michael", "steven", "peter"];

// add elements
const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);

// remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("steven"));
console.log(friends.indexOf("bob"));

friends.push(23);
console.log(friends.includes("steven"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));

if (friends.includes("steven")) {
  console.log("you have a friend called Peter");
}

// array

const jonasArray = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  ["michael", "peter", "steven"],
];

// console.log(jonasArray);

// objector
const jonas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
};

console.log(jonas);

// objector
const jonas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "what do you want to  know about Jonas? choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request!choose between firstName, lastName, age, job, and friends "
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`
);

// objector
const jonas = {
  firstName: "jonas",
  lastName: "schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYah) {
  //   return 2037 - birthYah;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//challenge
// jonas is a 46-year old teacher, and he has a driver's license
console.log(jonas.getSummary());

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}🏋️`);
}


// array

const jonas = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
  true,
];

const type = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // type[i] = typeof jonas[i];

  type.push(typeof jonas[i]);
}

console.log(type);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("---ONLY with NUMBER---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

const jonas = [
  "jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["michael", "peter", "steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}: lifting wight repetition ${rep} 🏋️‍♂️`);
  }
}

for (let rep = 1; rep < 6; rep++) {
  console.log(`lifting wight repetition ${rep} 🏋️‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: lifting wight repetition ${rep} 🏋️‍♂️`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) console.log("loop is about to end...");
}
*/
