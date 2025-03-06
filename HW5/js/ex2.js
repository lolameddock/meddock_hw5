const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = anArray.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

const divBy2or5 = anArray.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Numbers divisible by 2 or 5:", divBy2or5);

const divBy3Squared = anArray.filter(num => num % 3 === 0).map(num => num ** 2);
console.log("Numbers divisible by 3, squared:", divBy3Squared);

const sumDivBy5Squared = anArray.filter(num => num % 5 === 0)
                                .map(num => num ** 2)
                                .reduce((acc, num) => acc + num, 0);
console.log("Sum of squares of numbers divisible by 5:", sumDivBy5Squared);
