let url="https://v2.jokeapi.dev/joke/Any?type=single"
let joke_para=document.querySelector(".joke p")
let btn=document.querySelector("button")
let updatejoke= async ()=>{
    let response=await fetch(url)
    let data =await response.json()
    joke_para.innerText=`${data.joke}`
}
btn.addEventListener("click",(evt)=>{
    
updatejoke();
})
window.addEventListener('load',()=>{
    updatejoke();
})