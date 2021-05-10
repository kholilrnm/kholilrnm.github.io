//Parallax
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);

// //Navbar scroll animation
const sections = document.querySelectorAll("section");
const navbar = document.querySelectorAll(".nvbar");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navbar.forEach((nvbar) => {
    nvbar.classList.remove("active");
    if (nvbar.classList.contains(current)) {
      nvbar.classList.add("active");
    }
  });
});
