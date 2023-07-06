
const element = document.getElementById("div");
console.log(element);

element.textContent = "New Text";

let property = document.getElementById("property");
property.style.backgroundColor = "blue";

let elements =document.getElementsByClassName("myClass");

elements[1].style.border = "2px solid red";

const myClass2 = document.getElementsByClassName("myClass2");
console.log(myClass2);
myClass2[0].textContent="Modified text";
myClass2[0].classList.add("newClass");

const myClass3 = document.getElementsByClassName("myClass3");
myClass3[0].classList.remove("myClass3");

const buttons = document.getElementsByClassName("toggle-button");
console.log(buttons);
function toggleClass(){
    for(let i=0; i<buttons.length; i++){
        buttons[i].classList.toggle("active");
    }
}
toggleClass();

const ele = document.querySelector("div"); //finds first element div

const button = document.getElementsByClassName("count");



button[0].addEventListener('click', () =>{
    button[0].style.backgroundColor="blue";
})


