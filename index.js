var tablinks = document.getElementsByClassName("work-item")
var tabcards = document.getElementsByClassName("all-card")

function opentab1(work){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link1")
    }
     for(let tabcard of tabcards){
        tabcard.classList.remove("active-tab1")
    }
    event.currentTarget.classList.add("active-link1")
    document.getElementById(work).classList.add("active-tab1")
}
