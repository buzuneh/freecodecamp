const checkElement=document.getElementById("check-btn");
const inputElement=document.getElementById("text-input");
const resultElement=document.getElementById("result");
function checkPal(ster2){
 const ster1 = /^(?![1])[a\A\w]/gi;
 const ster = /[0_\s\W]/gi;
 
const chen=ster2.replace(ster,"");
if(!ster2){
  alert("Please input a value");
}else if(ster1.test(chen) && chen.split("").reverse().join("") == chen){
resultElement.textContent = ster2 +" is a palindrome";
}else if(ster1.exec(ster2)){
resultElement.textContent = ster2 +" is a palindrome";  
}else if(chen.split("").join("").toLowerCase()===chen.split("").reverse().join("").toLowerCase()){
  resultElement.textContent = ster2 +" is a palindrome";  
}else{
  resultElement.textContent = ster2 +" is not a palindrome";  
}
return chen;
}
checkElement.addEventListener("click",()=>{
  checkPal(inputElement.value);
});