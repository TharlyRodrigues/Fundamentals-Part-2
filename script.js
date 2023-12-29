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
console.log(yearUntilRetirement(1950, "thiago"));*/
