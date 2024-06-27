const accessKey="fI6NzrxjZhkCjqiN8xi368QjeTIpDDR-KLmO67DHwvQ";
const formEl=document.querySelector("form");
const inputEl=document.getElementById("search-input");
const btnEl=document.getElementById("search-button");
const resultsEl=document.querySelector(".search-results");
const showElBtn=document.getElementById("show-more");
let inputData='';
let page = 1;
async function searchImage(){
    inputData=inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response= await fetch(url);
    const data =await response.json();
    const results= data.results;
    if(page === 1){
        resultsEl.innerHTML = "";
    }
    results.map((result)=>{
        const imageWrap=document.createElement('div');
        imageWrap.classList.add("search-result");
        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement('a');
        imageLink.herf= result.links.html;
        imageLink.target="_blank";
        imageLink.textContent= result.alt_description;
        imageWrap.appendChild(image);
        imageWrap.appendChild(imageLink);
        resultsEl.appendChild(imageWrap);

    });
    page++;
    if(page > 1){
        showElBtn.style.display= "block";
    }
}
formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;

    searchImage();
})
showElBtn.addEventListener("click",()=>{
  
    searchImage();
})