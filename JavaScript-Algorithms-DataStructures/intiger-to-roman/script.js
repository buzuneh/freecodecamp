const numberInput=document.getElementById("number");
const convertBtn=document.getElementById("convert-btn");
const outputText =document.getElementById("output");
const outputCont=document.querySelector(".outputcls");

const convert=(intiger)=>{
    
if(!intiger){

    outputText.innerText="Please enter a valid number";

}else if(intiger < 0){
    
 outputText.innerText="Please enter a number greater than or equal to 1";

}else if(intiger >= 4000){

outputText.innerText= "Please enter a number less than or equal to 3999";
}else{

const romanArabData=[
  {arab:1000,roman:"M"},
  {arab:900,roman:"CM"},
  {arab:500,roman:"D"},
  {arab:400,roman:"CD"},
  {arab:100,roman:"C"},
  {arab:90,roman:"XC"},
  {arab:50,roman:"L"},
  {arab:40,roman:"XL"},
  {arab:10,roman:"X"},
  {arab:9,roman:"IX"},
  {arab:5,roman:"V"},
  {arab:4,roman:"IV"},
  {arab:1,roman:"I"}
];
  let romanNum=''; 
for(let i=0;i < romanArabData.length;i++){
  while(intiger >= romanArabData[i].arab){
    romanNum += romanArabData[i].roman;
    intiger -= romanArabData[i].arab;
  }
}

outputText.innerText=romanNum;

return romanNum;
}
}

convertBtn.addEventListener("click",()=>{
 
outputCont.classList.toggle("hidden");
 convert(numberInput.value);
});