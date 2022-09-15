let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");

let section1Height = section1.clientHeight
let section2Height = section1Height + section2.clientHeight
let section3Height = section2Height + section3.clientHeight

let clientHeight = document.documentElement.clientHeight;

let scrollPosition = document.documentElement.scrollTop + clientHeight / 2;

const myInterval = setInterval(function() {
  hasUserMoved();
}, 2000);

function hasUserMoved() {
  let newScrollPosition = document.documentElement.scrollTop + clientHeight / 2;
  if (scrollPosition == newScrollPosition) {
    if (scrollPosition < section1Height) {
      console.log("User does not move in section 1")
      scrollToSection(1)
    } else if (scrollPosition > section1Height && scrollPosition < section2Height) {
      console.log("User does not move in section 2")
      scrollToSection(2)
    } else if (scrollPosition > section2Height && scrollPosition < section3Height) {
      console.log("User does not move in section 3")
      scrollToSection(3)
    }
  } else {
    console.log("User has moved");
  }
  scrollPosition = newScrollPosition;
}

function scrollToSection(num) {
  document.getElementById(`section-${num}`).scrollIntoView({ 
    behavior: 'smooth' 
  })
}