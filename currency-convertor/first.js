const BASE_URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


let dropdown = document.querySelectorAll(".dropdown select")
let btn = document.querySelector("button")
let fromcurr = document.querySelector(".from select")
let tocurr = document.querySelector(".to select")
let msg = document.querySelector(".msg")
for (let select of dropdown) {
    for (let code in countryList) {
        let newoption = document.createElement("option")
        newoption.innerText = code
        newoption.value = code
        if (select.name === "from" && code === "USD") {
            newoption.selected = "selected"

        }
        if (select.name === "to" && code === "INR") {
            newoption.selected = "selected"

        }

        select.append(newoption)
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target)
    });
}
const exchangerate = async () => {
    let amt = document.querySelector(".amount input")
    let amtval = amt.value
    if (amtval === "" || amtval < 0) {
        amtval == 1
        amtval = "1"
    }
    const url = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
    let response = await fetch(url)
    let data = await response.json()
    let rate = data[tocurr.value.toLowerCase()]
    let finalamt = amtval * rate
    console.log(finalamt)
    msg.innerText = `${amtval}${fromcurr.value}=${finalamt} ${tocurr.value} `
}
function updateflag(elememt) {
    let currcode = elememt.value
    let countcode = countryList[currcode]
    let newsrc = `https://flagsapi.com/${countcode}/flat/64.png`
    let img = elememt.parentElement.querySelector("img");

    img.src = newsrc




}
btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    exchangerate()
})

window.addEventListener("load", () => {
    exchangerate();
});