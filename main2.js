let input = document.querySelector("#input1");
let name = document.querySelector("#trainername");
let btntrainer = document.querySelector("#btntrainer");
let section = document.querySelector("#section");
btntrainer.addEventListener("click",(event)=>{
    event.preventDefault();
    name.innerHTML = input.value;
    section.style.display = "block";
})