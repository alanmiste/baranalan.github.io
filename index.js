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

Array.from(document.querySelectorAll("#navbarSupportedContent ul li")).map((el) => {
    console.log(el.classList.add("text-primary"))
})

document.getElementById("togglemodal").addEventListener("click", event => {
    let modal = document.querySelector(".modal")
    modal.classList.add("d-block") // d-block come from bootstrap
    console.log(modal)
    modal.querySelector(".content").innerHTML = Date.now()
})
document.getElementById("closebutton").addEventListener("click", event => {
    document.querySelector(".modal").classList.remove("d-block")
})

//listin to the search bar and add the text to the head line
/* document.querySelector("#navbarSupportedContent input").addEventListener("keyup",event=>{
    document.querySelector("#headline span").innerHTML = ` ${event.target.value}`
}) */

//events propagation and delegation
/* document.querySelector(".progress-bar").addEventListener("click",event=>{
    console.log(event)
    event.stopPropagation() //this event stop the bubble up
})
document.querySelector("section#skills").addEventListener("click",event=>{
    console.log(event)// will not get triggered acedentially by other event
}) */


//How to add temperature in Hamburg to the Nav-Bar?
// make API request on page load
// hadel the response data
// display the data in the dom

const render=(degrees)=>{
    let element = document.createElement("li") //Create a "li" element via JavaScript instead of HTML
    element.classList.add("nav-item") // add a class to the previous element 
    let element2 = document.createElement("a") //Create a "a" element via JavaScript instead of HTML
    element2.classList.add("nav-link") // add a class to the previous element
    element2.innerText = (degrees).toFixed(2) //show only two numbers after the comma
    element.appendChild(element2) //move the anchor element in the li element
    document.querySelector("ul.navbar-nav").appendChild(element) //inserting the elثment into the dom
}
const apikey="" //Here you must type the API in order for it to be replaced in fetch.
// This "if" statement check if the local storage (cookies) has data (temperature), 
//so the code will not request datas from the API and 
//this is in order not to reach the maximum data request.
if(!localStorage.getItem("temp")){
    //async request - concurrency
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=${apikey}`)
    .then(response => response.json()) //then is awating the promisse
    .then(data => {
        localStorage.setItem('temp', JSON.stringify(data)); //save the complete data in the local storage(cookies), to reduse the amount of API calls because it has a limit through caching.
       render(data.main.temp - 273.15) //Here it's a "render" function calling, the "data" came from the API link in Fetch, then the "temp" was determined from the data
       console.log("render fresh v")
    }).catch(e=>{
        console.log(e)
    })
    /* Through the "if" conditional statment, the code checks whether there is data in the cache 
    (the browser's local storage - cookies),in case there is no data, it requests from the 
    weather API from an external website and then it is placed on the page by passing the 
    data within the "render" function, which in turn creates a place for data in the Nav-Bar.
    And if there is data, the "else" is executed, and within it the "render" function is 
    executed only, with the data in the local memory passed to it of course. */
} else {
    render(JSON.parse(localStorage.getItem("temp")).main.temp - 273.15)
    console.log("render cached version")
}