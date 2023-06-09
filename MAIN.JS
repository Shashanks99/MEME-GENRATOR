const generateMemebtn=document.querySelector(".meme-generator .generate-meme-btn");
const memeImg=document.querySelector(".meme-generator img");
const memeTitle=document.querySelector("meme-generator .meme-title");
const memeauthor=document.querySelector(".meme-generator .meme-author");

const updatedetails=(url,title,author)=>{
    memeImg.setAttribute("src",url);
    memeTitle.innerHTML=title;  
    memeauthor.innerHTML='Meme BY:  ${author}';
}

const generateMeme=()=>{
    fetch(" https://meme-api.com/gimme/wholesomememes").then((response)=>response.json())
    .then((data)=>{
        updatedetails(data.url,data.title,data.author);
    })
};
generateMemebtn.addEventListener("click",generateMeme);