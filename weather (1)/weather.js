
const apiKey = "381e93d332768bc581874ba9193b2d03";
const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const button = document.querySelector('.search-btn');
const place = document.querySelector('.input');
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data= await response.json();
    console.log(data)
    let imageWr;
    if(data.weather[0].main == "Clouds"){
   imageWr  = `<div class="temp-image"><img class="img" src="icon/cloudy.png"> <sup>cloudy</sup></div>`;
 } else if (data.weather[0].main == "Rain") {
   imageWr = `<div class="temp-image"><img class="img" src="icon/rainy.png"><sup>rainy</sup></div>`;
 }else if (data.weather[0].main == "Drizzle") {
   imageWr =`<div class="temp-image"><img class="img" src="icon/drizzle.png"><sup>drizzle</sup></div>`;
 }else if (data.weather[0].main == "Clear") {
   imageWr =`<div class="temp-image"><img class="img" src="icon/sunny.png"><sup>clear</sup></div>`;
 }else if (data.weather[0].main == "Mist") {
   imageWr = `<div class="temp-image"> <img class="img" src="icon/mist.png"><sup>mist</sup> </div>`;
 }
   document.querySelector('.temp-imag').innerHTML = imageWr;
   let tmp = Math.round(data.main.temp);
document.querySelector('.temp1').innerHTML = tmp + `<sup id="sup">&deg;C</sup>`;
 document.querySelector('.humidity').innerHTML = "humudity" +`<br>`+ data.main.humidity + "%";
 document.querySelector('.wins').innerHTML = "speed" + `<br>`+data.wind.speed + "km/h";
 document.querySelector('.country').innerHTML = data.name;

let fahrnet = document.querySelector('.temp1');
fahrnet.addEventListener('click',()=>{
    let change =(data.main.temp) * (9/5) + 32;
     fahrnet.innerHTML=Math.round(change) + `<sup id="sup">&#8457;</sup>`;
});

}
//default city value
checkWeather( 'dire dawa');
button.addEventListener('click', () => {
// Inputted city
checkWeather(place.value);
place.value='';
});

  // Tab to edit


  

