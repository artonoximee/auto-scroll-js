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
}, 1000);

function hasUserMoved() {
  let newScrollPosition = document.documentElement.scrollTop + clientHeight / 2;
  if (scrollPosition == newScrollPosition) {
    if (scrollPosition < section1Height) {
      console.log("User does not move in section 1")
    } else if (scrollPosition > section1Height && scrollPosition < section2Height) {
      console.log("User does not move in section 2")
    } else if (scrollPosition > section2Height && scrollPosition < section3Height) {
      console.log("User does not move in section 3")
    }
  } else {
    console.log("User has moved");
  }
  scrollPosition = newScrollPosition;
}

/*window.onscroll = function() {printScrollTop()};

function printScrollTop() {
  let scrollTopPosition = document.documentElement.scrollTop + clientHeight/2;
  if (scrollTopPosition < section1Height) {
    console.log("Section 1")
  } else if (scrollTopPosition > section1Height && scrollTopPosition < section2Height) {
    console.log("Section 2")
  } else if (scrollTopPosition > section2Height && scrollTopPosition < section3Height) {
    console.log("Section 3")
    const myTimeOut = setTimeout(function() {
      stillHere(3, scrollTopPosition);
    }, 1000);
  }
}

function stillHere(section, savedScrollTopPosition) {
  if (savedScrollTopPosition == scrollTopPosition) {
    console.log("You have not moved, let's animate");
  } else {
    console.log(savedScrollTopPosition);
    console.log(scrollTopPosition);
    console.log("You have moved, cancel animation");
  }
}*/

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