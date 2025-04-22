const input='turpentine and turtles' //input your phrase
const vowels=["a","e","i","o","u"];
const resultArray=[]
for (let i=0; i<input.length; i++){
  if(input[i]==='e'||input[i]==='u'){
    resultArray.push(input[i])
  }
  for(let j=0; j<vowels.length; j++){
    if (input[i]===vowels[j]){
      resultArray.push(vowels[j])
    }
  }
}
let resultString=resultArray.join('').toUpperCase();
console.log(resultString)// your phrase in whale language

