let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");

section2.addEventListener("mouseover", function(e) {
  section2.scrollIntoView({ 
    behavior: 'smooth' 
  });
  console.log(`mouse over`);
}, false);

