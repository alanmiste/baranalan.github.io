console.log(Date.now())

const elment = document.getElementById("headline")
console.log(elment)

//document.getElementById("headline").innerText="AlanHood"

//change the head line after one secound
/* setTimeout(() => {
    document.getElementById("headline").innerText="AlanHood"
}, 1000); */

//show the time in secoundes in the headline
/* setInterval(() => {
    document.getElementById("headline").innerText=Date.now()
}, 1000); */

/* Array.from(document.querySelectorAll("#navbarSupportedContent ul li")).map((el)=>{
    console.log(el.classList.add("text-primary"))
}) */

document.getElementById("togglemodal").addEventListener("click",event=>{
    let modal = document.querySelector(".modal")
    modal.classList.add("d-block") // d-block come from bootstrap
    console.log(modal)
    modal.querySelector(".content").innerHTML=Date.now()
})
document.getElementById("closebutton").addEventListener("click",event=>{
    document.querySelector(".modal").classList.remove("d-block") 
})