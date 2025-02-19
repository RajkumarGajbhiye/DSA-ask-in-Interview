//Que.1.check prime number.
const isPrimeNo=(n)=>{
  for(let i=2;i<n;i++){
    if(n%i ===0){
     return false
    }
  }
  return n>1
}
console.log(isPrimeNo(1))

//Que.2.factorial of number use while loop
const factorial=(n)=>{
let i= n-1;
  while(i>1){
    n=n*i;
    i--;
  }
  return n;
}
console.log(factorial(4))

//factorial of number using for loop
const factorial=(n)=>{
for(let i=n-1;i>1;i--){
  n = n*i
}
return n
}
console.log(factorial(5))

  //factorial of number through recursion
  let factorial=(n)=>{
    if(n==0){
      return 1;
    }
    return n*factorial(n-1);
  }
  console.log(factorial(5))

  //Write function that return highest element in array

let highest_numberandlowest=(arr)=>{
    let highest=0;
    let lowest=Infinity;
    for(let i=0;i<=arr.length;i++){
      if(arr[i]>highest){
        highest=arr[i]
      }
      for(let i=0;i<=arr.length;i++){
        if(arr[i]<lowest){
            lowest=arr[i]
        }
    }
  }
  return  [ highest,lowest]

}
  console.log(highest_numberandlowest([3 , 6, 2, 56, 5, 32]))

  //find second lowest no

  const secondHighest=(array)=>{
    let highest=0;
   let secondhighest=0;
   array.forEach((element)=>{
 
   if(element>highest)
   {
     secondhighest=highest;
     highest=element;
    }
    else if (element>secondhighest){
   
     secondhighest=element;
     
   }
 
 })
   return secondhighest
 }
  
  console.log(secondHighest([2,5,7,9,10]))

  const second_lowest=(arr)=>{
    let lowest=Infinity;
    let second_lowest=Infinity;
    for(let i=0;i<arr.length;i++){
      if(arr[i]<lowest){
        second_lowest=lowest;
        lowest=arr[i];
      }
      else if(arr[i]<second_lowest){
        second_lowest=arr[i];
      }
    }
    return second_lowest
  }
  console.log(second_lowest([1,8,3,7,2]))

  //Program a code to find the third minimum no. from an array without sorting it and  in O(n) time complexcity?
const thirdMin=(arr)=>{
  let firstmin=Infinity;
  let secondmin=Infinity;
  let thirdmin=Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<firstmin){
      thirdmin=secondmin;
      secondmin=firstmin;
      firstmin=arr[i]
    }else if(arr[i]<secondmin){
      thirdmin=secondmin;
      secondmin=arr[i]
    }else if(arr[i]<thirdmin){
      thirdmin=arr[i];
    }
  }
  return thirdmin
}
console.log(thirdMin([9,4,55,7,11,34]))


  //iterate fibonacci

  const fibbo=(num)=>{
    let f=0;
    let s=1;
    let n;
    for(let i=0;i<=num;i++){
      n=f+s;
      f=s;
      s=n
    console.log(f)
    }
  }
  fibbo(10);

  //generate fibonnaci through recursion:

  const fibonnaci=(n)=>{
    if (n == 0) return 0;
        if (n == 2 || n == 1) return 1;
        return f=fibonnaci(n-1)+fibonnaci(n-2)
    }
    console.log(fibonnaci(4))
  
    //check palindrom string

    const checkPalindrom=(str)=>{
        let flag=true
        for(let i=str.length;i>=0;i--){
          if(str[i]!==str[str.length-1-i]){
            return flag=false
          }
        }
        return flag
      }
      console.log(checkPalindrom('mam'))


/*
What is Kebab Case?
********************
The kebab case is very similar to snake case.
The difference between snake case and kebab case is that kebab case separates each word with a dash character, -, instead of an underscore.
So, all words are lowercase, and each word gets separated by a dash.

Here are some examples of how you would use kebab case:

number-of-donuts
*/

//Write a function to convert a string to a kebab case.
const kebabCase=(str)=>{

     return str.toLowerCase().replaceAll(' ','-')
 }
console.log( kebabCase('My name is khan'));

/*
//What is Snake Case?
********************
Snake case separates each word with an underscore character (_).
When using snake case, all letters need to be lowercase.
Here are some examples of how you would use the snake case:
number_of_donuts
*/
//.Write a function to convert a string to a snack case.
const snackCase=(str)=>{
     return str.toLowerCase().replaceAll(' ','_')
 }
console.log(snackCase('My name is khan'));


/*
What is Camel Case?
******************
When using camel case, you start by making the first word lowercase. Then, you capitalize the first letter of each word that follows.
So, a capital letter appears at the start of the second word and at each new subsequent word that follows it.

Here are some examples of how you would use camel case:
numberOfDonuts
*/
//.Write a function to convert a string to a camel case.
const camelCase=(str)=>{
  let result='';
  for(let i=0;i<str.length;i++){
    if(str[i] == ' ' || str[i] === '-' || str[i] === '_'){
      result+=str[i+1].toUpperCase()
      i++
    }else{
      result+=str[i].toLowerCase()
    }
  }
  return result
}
console.log(camelCase('hello_word'))


/*
What is Pascal Case?
*******************
Pascal case is similar to camel case.
The only difference between the two is that pascal case requires the first letter of the first word to also be capitalized.
So, when using pascal case, every word starts with an uppercase letter (in contrast to camel case, where the first word is in lowercase).

Here are some examples of how you would use pascal case:

NumberOfDonuts 
*/




/*
An anagram of a string is another string that contains the same characters, 
   *******
only the order of characters can be different. but length of both string are same.
For example, “abcd” and “dabc” are an anagram of each other.
*/

// Write a function to check if a given string is an anagram of another string.

const isAnagram=(str1,str2)=>{
  if(str1.length !== str2.length){
    return false
  }
  let obj={}
  for(let s1 of str1){
    obj[s1] = (obj[s1] || 0) +1
  }
for(let s2 of str2){
  if(!obj[s2]){
    return false
  }
  obj[s2]-=1
}
  return true
}
console.log(isAnagram('hellow','ellowh'))



/*
A string is a palindrome if it is read the same from forward or backward. 
              **********
For example, dad reads the same either from forward or backward. 
So the word dad is a palindrome.
*/
//Write a function to check if a given string is a palindrome.

const isPalindrom=(str)=>{
  let flag=true;
  for(let i=str.length;i>=0;i--){
   if(str[i]!==str[str.length-1-i]){
     return flag= false
  }
}
    return flag
}
console.log(isPalindrom('mam'))


//print repeated element and their count

const repeatedElment=(arr)=>{
  let obj={};
  for(let i=0;i<arr.length;i++){
    //array insert in object
obj[arr[i]] = (obj[arr[i]] || 0)+1
  }
console.log(obj)

  //count repeated no
  for(let repeatedNo in obj){
    if(obj[repeatedNo]>1){
      console.log(`${repeatedNo}-${obj[repeatedNo]} times`)
    }
  } 
}
let arr=[1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8]
repeatedElment(arr)


//[1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8] print not repeating element in arr 

const notRepeatingElemet=(arr)=>{
  let obj={};
  let result=[];
  for(let i=0;i<arr.length;i++){
    // obj[arr[i]] = (obj[arr[i]] || 0) +1
    if(!obj[arr[i]]){
      obj[arr[i]]=1
    }else{
      obj[arr[i]]++
    }
  }
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]===1){
      result.push(arr[i])
    }
  }
  console.log(obj)
  return result
  }
console.log(notRepeatingElemet([1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8]))



//[1, 1, 3, 2, 4, 3, 4, 8, 7, 9, 5, 4, 5, 5, 6, 6, 8] , return the Duplicate elements.

const duplicateElement=(arr)=>{
  let obj={};
  let res=[];
  for(let i=0;i<arr.length;i++){
    obj[arr[i]] = ( obj[arr[i]] || 0) +1;
    if( obj[arr[i]] === 2){
      res.push(arr[i])
    }
  }
  console.log(obj)
return res;
}
console.log(duplicateElement([1, 1, 3, 2, 4, 3, 4, 8, 7, 9, 5, 4, 5, 5, 6, 6, 8]))




//done [1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8]  give output as how many time repeating elements repeat like { 1 => 2, 3 => 2, 4 => 3, 8 => 2, 5 => 3, 6 => 2 }

const repeating_elemen=(arr)=>{
  let obj={};
  for(let i=0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]] || 0)+1
  }
  return obj
}
console.log(repeating_elemen([1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8]))


//print same element of both array

let arr=[5,66,1,7,1125,2,55]
let arr1=[1,2,55,33,78]
output [1,2,55]
   
const sameElement=(arr,arr1)=>{
  let result=[];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr1.length;j++){
      if(arr[i]===arr1[j]){
        result.push(arr1[j])
      }
    }
  }
  return result
}
console.log(sameElement(arr,arr1))

/*
15.Write a program to print the multiplication table of a given number using a nested for loop.

16.Write a program to print a pattern of stars using a nested for loop.

17.Write a program to print the Pascal's triangle using a nested for loop.

*/

//1.Write a program to print the numbers from 1 to 10 using a for loop.

const print_Number = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
//print_Number();

//---------------------------------------------------------------------------------------------------------

//2.Write a program to print the even numbers between 1 and 20 using a for loop.

const evenNo = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
// evenNo();

//------------------------------------------------------------------------------------------------------------

//3.Write a program to print the odd numbers between 1 and 20 using a for loop.

const oddNo = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};
// oddNo();

//-------------------------------------------------------------------------------------------------------------

//4.Write a program to print the sum of numbers from 1 to 10 using a for loop.

const sumNo = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumNo());

//--------------------------------------------------------------------------------------------------------------

//5.Write a program to print the product of numbers from 1 to 10 using a for loop.

const productNo = () => {
  let product = 1;
  for (let i = 1; i <= 10; i++) {
    product *= i;
  }
  console.log(product);
};
// productNo();

//----------------------------------------------------------------------------------------------------------

//6.Write a program to find the factorial of a given number using a for loop.

const factorial = (n) => {
  let f = n;
  for (f = n; n - 1 > 0; n--) {
    f = f * (n - 1);
  }
  return f;
};
// console.log(factorial(5))

//------------------------------------------------------------------------------------------------------

//7.Write a program to print the Fibonacci series up to a given number using a for loop.

const Fibonacci = (n) => {
  let first = 0;
  let second = 1;
  let next;
  
  for (let i = 1; i <= n; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return first;
};
// console.log(Fibonacci(0));
// console.log(Fibonacci(1));
// console.log(Fibonacci(2));
// console.log(Fibonacci(3));
// console.log(Fibonacci(4));

//---------------------------------------------------------------------------------------------------------------

//8. a program to check if a given number is a prime number using a for loop.

const checkPrimeNo = (n) => {
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      if (i != 1 && i != n) {
        flag = false;
        break;
      }
    }
  }
  return flag;
};
// console.log(checkPrimeNo(3))

//------------------------------------------------------------------------------------------------------------

//9.Write a program to check if a given number is a perfect number using a for loop.

const perfectNo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n) {
    return true;
  } else {
    return false;
  }
};
// console.log(perfectNo(282));

//------------------------------------------------------------------------------------------------------------

//10.Write a program to find the sum of digits of a given number using a while loop.

const sumOfDigit = (n) => {
  let sum = 0;
  while (n != 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
};
// console.log(sumOfDigit(123445));

//------------------------------------------------------------------------------------------------------------------------------

//11.Write a program to reverse a given number using a while loop.

const reverseNo = (n) => {
  let reverse = 0;
  while (n != 0) {
    reverse = reverse * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  return reverse;
};
// console.log(reverseNo(12345));

//----------------------------------------------------------------------------------------------------------------------------

//12.Write a program to check if a given number is a palindrome using a while loop.

const checkPalindrome = (n) => {
  let orignalNumber = n;
  let reverse = 0;

  while (n != 0) {
    reverse = reverse * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  if (orignalNumber === reverse) {
    return true;
  } else {
    return false;
  }
};
// console.log(checkPalindrome(121));

//------------------------------------------------------------------------------------------------------------------------------------

//13.Write a program to find the GCD of two numbers using a while loop.

const gcdOfTwoNumbers =(a,b)=>{
    let gcd;
    let i=0
    while(i<=a && i<=b){
        if(a%i==0 && b%i==0){
            gcd=i
        }
        i++;
    }
    return gcd
}
//  console.log(gcdOfTwoNumbers(28,42))

//-----------------------------------------------------------------------------------------------------------------

//14.Write a program to find the LCM of two numbers using a while loop.

const lcmOfTwoNumbers =(a,b)=>{
    let gcd;
    let lcm;
    let i=0
    while(i<=a && i<=b){
        if(a%i==0 && b%i==0){
            gcd=i
        }
        i++;
    }
    return lcm=(a*b)/gcd
}
// console.log(lcmOfTwoNumbers(28,42))

//------------------------------------------------------------------------------------------------------------

// 18.Write a program to find the largest number in an array using a for loop.

const largestNo = (arr) => {
  let l = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
      l = arr[i];
    }
  }
  return l;
};
// console.log(largestNo([1,2,3,4]));

//------------------------------------------------------------------------------------------------------------------------

// 19.Write a program to find the smallest number in an array using a for loop.

const smallestNo = (arr) => {
  let s = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < s) {
      s = arr[i];
    }
  }
  return s;
};
// console.log(smallestNo([1,2,3,4]));

//-----------------------------------------------------------------------------------------------------------------------------

// 20.Write a program to find the sum of an array of numbers using a for loop.

const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
// console.log(sumOfArray([1, 2, 3, 4]));

//---------------------------------------------------------------------------------------------------

//Write a program to find the sum of all elements in an array.

const sumOfElement=(arr)=>{
  let sum =0;
  for(let i=0;i<arr.length;i++){
sum+=arr[i]
  }
  return sum;
}
// console.log(sumOfElement([1,2,3,4,5]));

//-----------------------------------------------------------------------------------------------------------

//Write a program to find the average of all elements in an array.

const averageOfElement=(arr)=>{
  let sum=0;
  let avg=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    avg=sum/arr[i]
  }
  return avg
}
// console.log(averageOfElement([1,2,3,4,5]));

//---------------------------------------------------------------------------------------------------------------

//Write a program to find the maximum and minimum elements in an array.

const maxAndMin=(arr)=>{
  let max=0;
  let min=Infinity;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
    }
  }
  return [max,min]
}
// console.log(maxAndMin([1,2,3,4]));

//--------------------------------------------------------------------------------------------------------

//Write a program to reverse an array.

const reverseArray=(arr)=>{
  let newArr=[]
  for( i=arr.length-1;i>=0;i--){
  newArr.push(arr[i])
  }
  return newArr;
}
// console.log(reverseArray([1,2,3,4,5]))

//or

const reversearray=(arr)=> {
  for (let i = 0; i< arr.length/2; i ++){
    let temp =  arr[i]
  arr[i] = arr[arr.length -(i+1)]
  arr[arr.length -(i+1)] = temp
}
return arr
}
// console.log(reversearray([1,2,3,4,5]));

//---------------------------------------------------------------------------------------------------

//Write a program to sort an array in ascending order.

const sortArrayAscending=(arr)=>{
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}
// console.log(sortArrayAscending([4,2,1,5,3]));

//-----------------------------------------------------------------------------------------------

//Write a program to sort an array in descending order.

const sortArrayDescending=(arr)=>{
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j]<arr[j+1]){
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}
// console.log(sortArrayDescending([4,2,1,5,3]));

//---------------------------------------------------------------------------------------------------------------

// Write a program to remove duplicate elements from an array.

const removeDuplicate=(arr)=>{
  let result =[];
  let obj={};
  for(let i=0;i<arr.length;i++){
    obj[arr[i]]=arr[i]
  }
  for(let n in obj){
    result.push(obj[n])
  }
  return result;
}
// console.log(removeDuplicate([4,4,1,3,3,2]));

//----------------------------------------------------------------------------------------------------------

//Write a program to check if two arrays are equal or not.

function equalArray(arr1, arr2) {
if(arr1.length === arr2.length){
  for(let i=0;i<arr1.length && arr2.length;i++){
    if(arr1[i] !=arr2[i]){
      return false
    }
    return true
  }
}
}
// console.log(equalArray([1,2,3],[2,3,4]));

//-----------------------------------------------------------------------------------------------------

//Write a program to concatenate two arrays.

function twodarray(arr,arr1){
  arr=[1,2,3,4];
arr1=[5,6,7,8];
let arr3=[];
for(let i=0;i<arr.length;i++){
 arr3.push(arr1[i],arr[i])
}
 return arr3
}

console.log(twodarray([1,2,3,4],[5,6,7,8]))


//----------------------------------------------------------------------------------------------------------

// Write a program to find the index of a specific element in an array.

const findIndexOfParticularElement=(arr,value)=>{
  let index=-1;
  for(let i=0;i<arr.length;i++){
if(value=== arr[i]){
  index=i
}
  }
  return index;
}
// console.log(findIndexOfParticularElement([1,2,3,4,5],8))
