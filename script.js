// Loader
window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

// Back to top
function scrollTopBtn() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const text =
"Software Engineer | Azure Certified | Cloud & Data Engineering Enthusiast";

let index = 0;

function typeEffect() {

if(index < text.length){

document.querySelector(".typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect, 70);
}

}

typeEffect();

const cards = document.querySelectorAll(
".skill-card, .project-card"
);

window.addEventListener("scroll", () => {

cards.forEach(card => {

const position = card.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});

cards.forEach(card => {
card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "0.8s";
});
