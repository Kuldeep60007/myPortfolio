let myContactMeFor = document.querySelector("form");
let notShoenEl = document.getElementById("hiddenElement")

myContactMeFor.elements.userNeed[0].addEventListener("click" , function(){
    notShoenEl.style.display = "none"
})

myContactMeFor.elements.userNeed[1].addEventListener("click" , function(){
    notShoenEl.style.display = "none"
})

myContactMeFor.elements.userNeed[2].addEventListener("click" , function(){
    notShoenEl.style.display = "block"
})
