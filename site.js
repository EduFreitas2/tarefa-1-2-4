

let sobremim = document.querySelector(".sobremim")
let body = document.querySelector("body")
let geral = document.querySelector(".geral")
let planetas = document.querySelector(".planetas")
let button = document.querySelector("button")



function light()
{

    if (button.innerHTML === "Light Mode") {
        button.innerHTML = "Dark Mode";
      } else {
        button.innerHTML = "Light Mode";
      }
      button.classList.toggle("buttonnovo")
planetas.classList.toggle("planetas2")
body.classList.toggle("lightmode")
sobremim.classList.toggle("sobre")
geral.classList.toggle("geralnovo")
geral.classList.toggle("novafonte")
sobremim.classList.toggle("novosobre")

}