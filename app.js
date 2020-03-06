// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1

// 2.1. Depending on which name is longer, print:
//if (length(ProGrad1))
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// 2.2. Check if the string contains vowels or not.

// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 

var ProGrad1 = "Rabina",ProGrad2 = "Cathrine";
console.log("the driver's name is" + ProGrad1);
console.log("the navigator's name is" + ProGrad2);

if(ProGrad1.length>ProGrad2.length){
    console.log("The driver has the longest name, it has "+ ProGrad1.length +" characters");
//ProGrad1.length;
}else if(ProGrad1.length<ProGrad2.length){
        console.log("It seems that the navigator has the longest name, "+ProGrad2.length +"characters")
}else{
    console.log("Wow, you both have equally long names, "+ProGrad1.length+"characters!");
}

function theinputString(str)
{
   
        if(str.match(/[aeiouAEIOU]/))
        {
        console.log("The Input String" +" " +str + " " + "has a Vowel in it");
        console.log("the vowels are");
        }
        else {
        console.log("The Input String" + " " +str + " " + "has not a Vowel in it");
        }
   
    
}
theinputString(ProGrad1);
var a,e,i,o,u=0;
var s1=ProGrad1.split("")
console.log(s1);
//var s2=ProGrad2.split()
for(var j=0; j<s1.length; j++)
{ if(s1[j]=='a' || s1[j]=='A')
  {a++;}
  if(s1[j]=='e' || s1[j]=='E')
  {e++;}
  if(s1[j]=='i' || s1[j]=='I')
  {i++;}
  if(s1[j]=='o' || s1[j]=='O')
  {o++;}
  if(s1[j]=='u' || s1[j]=='U')
  {u++;}
}
console.log("a : "+a);
console.log("e : "+e);
console.log("i : "+i);
console.log("o : "+o);
console.log("u : "+u);

// Upper Case
// if(ProGrad1==ProGrad1.toUpperCase()){
//   console.log("contains uppercase");
// }
var ucase=0;

for (let i = 0; i < ProGrad1.length; i++){
  //console.log(ProGrad1[i]);
  if(ProGrad1[i].match(/[A-Z]/)){
  //console.log(ProGrad1[i]);
  ucase++;
  console.log("uppercase - "+ucase +" "+ProGrad1[i]);
  }  
}
//LOWERCASE
var lcase=0;

for (let i = 0; i < ProGrad1.length; i++){
  //console.log(ProGrad1[i]);
  if(ProGrad1[i].match(/[a-z]/)){
  //console.log(ProGrad1[i]);
  lcase++;
  console.log("lowercase - "+lcase+" "+ProGrad1[i]);
  }  
}

var a=ProGrad1.toUpperCase();
var res=a.split("");
console.log(res);
//console.log(ProGrad2.reverse())
// for(i=0;i<a.length;i++){
// console.log(a[i]);
// }

//REVERSE A STRING
// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// }
// reverseString(ProGrad2);

function ReverseString(str) { 
  return str.split('').reverse().join('') 
  } 
  //ReverseString(ProGrad2);
  // Function call 
  console.log(ReverseString(ProGrad2));
  //Merging the DRIVER and Navigator
  var Mergestring=ProGrad1+ProGrad2;
  console.log(Mergestring); 

  ProGrad1.localeCompare(ProGrad2);

  