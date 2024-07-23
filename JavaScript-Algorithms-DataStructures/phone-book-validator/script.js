const inputEl=document.getElementById("user-input");
const resultEl=document.getElementById("results-div");
const checkBtn=document.getElementById("check-btn");
const clearBtn=document.getElementById("clear-btn");
const outputEl=document.querySelector(".output");
const checkNum=(num)=>{
  const regex=/(^(?!.*\?).*((^1?\s?-?\(\d{3}\))(\s?-?\d{3})(\s?-?\d{4}$)))|(^(?!.*\?).*((^1?\s?\d{3})(\s?-?\d{3})(\s?-?\d{4}$)))/g;
 
  const phoneNum=inputEl.value;
if(!inputEl.value){
alert("Please provide a phone number");
}else if(phoneNum.match(regex)){
 resultEl. insertAdjacentHTML('afterbegin', `<span style="color: green">Valid US number: ${phoneNum}</span><br>`);
 inputEl.value="";
}else{

 resultEl. insertAdjacentHTML('afterbegin', `<span   style="color: red">Invalid US number: ${phoneNum}</span><br>`);
 inputEl.value="";
}
return;
}
checkBtn.addEventListener("click",checkNum);
clearBtn.addEventListener("click",()=>{
resultEl.innerHTML="";
});