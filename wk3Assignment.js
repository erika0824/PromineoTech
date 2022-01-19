//1.a.Subtract the value of the first element from the last element of the array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let lastArray = ages[ages.length - 1];
let firstArray = ages[0];
let subtraction = lastArray - firstArray;
console.log(subtraction);


//1.b.add a new age to your array and repeat the steps above
ages.push(103);
let newLastArray = ages[ages.length -1];
let newFirstArray = ages[0];
let newSubtraction = newLastArray - newFirstArray;
console.log(newSubtraction);

//1.c. calculates the average age and prints to the console
let sumOfAge = 0;
ages.forEach(value => {sumOfAge += value});
let averageAge = sumOfAge / ages.length;
console.log(averageAge);

//2.a. calculate the average letters per name
let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let letters = 0;
let b = 0
while(b < names.length) {
    letters += names[b].length;
    b++
}
let averageNames = letters / names.length;
console.log(averageNames);

//2.b. concatenate all the names together
console.log(names.join(' '));

//5. loops over names array and prints out the number of letters in each name
let nameLengths = [];
    for(let i = 0; i < names.length; i++) {
        nameLengths[i] = names[i].length;
    } 
        console.log(nameLengths);

//6. prints the sum of the elements of the nameLengths array
sumOfNameLengths = 0;
for(let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
    console.log(sumOfNameLengths);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
//to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeatWord(word, n) {
    if (n > 0)
      return word.repeat(n);
    else
      return 'Needs a number greater than 0';
  }
  console.log(repeatWord("Hello", 3));

//8. a function that takes two parameters, firstName and lastName,
// and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
fullName('Erika', 'Huber');


//9. takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myArray = [2, 4, 6];
function arrayOfNumbers(yourArray) {
    let total = 0;
    for(let i = 0; i < yourArray.length; i++) {
     total += yourArray[i];
    } if (total > 100);
    return true;
}  
console.log(arrayOfNumbers(myArray));

//10. takes an array of numbers and returns the average of all the elements in the array.
let numbers = [5,10,15,20,25,30];
function averageArray(anArray) {
    let total = 0;
    let arrayLength = anArray.length;
    for(let i = 0; i < anArray.length; i++) {
     total += anArray[i];
    } 
    return total / arrayLength;
}
console.log(averageArray(numbers));

//11. takes two arrays of numbers and returns true if the average of the elements
 //in the first array is greater than the average of the elements in the second array.
 let thisArray = [20,40,60,80]
 let thatArray = [10,20,30,40]
 function compareAverageArrays(array1, array2) {
     let firstArray = averageArray(array1);
     let secondArray = averageArray(array2);
     if(firstArray > secondArray) {
         return true
     }
 }
 console.log(compareAverageArrays(thisArray, thatArray));

//12. takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 11;
function willBuyDrink(outside, money) {
    if(isHotOutside && money > 10.50) {
        return true
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13. I created this function to tell me if I have enough time to finish my book within a certain amount of time, 
//and if not then it will tell me how much extra time I will need to finish the book.

let pagesToRead = 0;
 function canFinishBook(totalPages,pagesPerHour,hours) {
    if(totalPages / pagesPerHour <= hours) {
        return 'You will have time to finish your book!'
    }   else if(totalPages / pagesPerHour > hours) {
        pagesToRead = totalPages / pagesPerHour - hours;
       
    }
    return 'You will need ' + pagesToRead + ' more hours to finish your book.'
 }
 console.log(canFinishBook(400,40,8));

