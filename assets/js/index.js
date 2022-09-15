let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");

let clientHeight = document.documentElement.clientHeight;

let scrollTopPosition;

let section1Height = section1.clientHeight
let section2Height = section1Height + section2.clientHeight
let section3Height = section2Height + section3.clientHeight

let pageHeight = section1.clientHeight + section2.clientHeight + section3.clientHeight;

/*section1.addEventListener("mouseover", waitSection1, false);
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
}*/

window.onscroll = function() {printScrollTop()};

function printScrollTop() {
  let scrollTopPosition = document.documentElement.scrollTop + clientHeight/2;
  if (scrollTopPosition < section1Height) {
    console.log("Section 1")
  } else if (scrollTopPosition > section1Height && scrollTopPosition < section2Height) {
    console.log("Section 2")
  } else if (scrollTopPosition > section2Height && scrollTopPosition < section3Height) {
    console.log("Section 3")
  }
}
