/*document.body.style.backgroundImage = "url('./static/images/Background.png')";*/
document.body.style.backgroundSize = "75%";
document.body.style.cursor = "url('./static/images/DotCursorShadow.cur'), auto;";

function setActive(logo) {
  if (logo.alt === "About Me Logo") {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
  } else if (logo.alt === "Home Logo") {
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
  } else if (logo.alt === "Devils Crown Logo") {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    document.getElementById("page4").style.display = "none";
  } else if (logo.alt === "Blender Logo") {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
  }


  const logos = document.querySelectorAll('.logo');
  logos.forEach(logo => {
    logo.classList.remove('active');
  });

  logo.classList.add('active');
}
