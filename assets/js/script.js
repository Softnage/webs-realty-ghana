'use strict'


const  $navbar = document.querySelector("[data-navbar]");
const  $navToggler = document.querySelector("[data-nav-toggler]");


$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


const /*{NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll",() => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
}); 

/*add to favorites button*/

const /*{NodeElement} */ $toggleBtns = document.querySelector("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });
});



/*contact-form-js*/
const form = document.querySelector("form");
let captcha = document.getElementById("captcha");
const button = document.querySelector("button");

button.disabled = true;

form.addEventListener("keyup", () => {
  let validity = form.checkValidity();
  if (validity === true && captcha.value == 4) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();
  form.innerHTML =
    "<div class='confirmation'>Hi there! Thank you for looking at my form. This form is currently not connected to any mailscript.</div>";
});

function checkTab(e) {
  if (e.keyCode === 9) {
    button.classList.add("show-outline");
    window.removeEventListener("keydown", checkTab);
  }
}
window.addEventListener("keydown", checkTab);



