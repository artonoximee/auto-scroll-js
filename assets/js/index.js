let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let container = document.getElementById("container");

section1.addEventListener("mouseover", waitSection1, false);
section2.addEventListener("mouseover", waitSection2, false);

function waitSection1() {
  setTimeout(scrollToSection1, 1000);
}

function waitSection2() {
  setTimeout(scrollToSection2, 1000);
}

function scrollToSection1() {
  document.getElementById(`section-1`).scrollIntoView({ 
    behavior: 'smooth' 
  })
}

function scrollToSection2() {
  document.getElementById(`section-2`).scrollIntoView({ 
    behavior: 'smooth' 
  })
}