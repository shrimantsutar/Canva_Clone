let isNavVisible = false;

document.querySelector(".phonenav").addEventListener("click", () => {
  if (!isNavVisible) {
    console.log("hi");
    document.querySelector(".left").style.display = "block";
    document.querySelector(".nav1 ul").style.display = "block";
    document.querySelector(".nav2 ul").style.display = "none";
  } else {
    document.querySelector(".left").style.display = "none";
    document.querySelector(".nav1 ul").style.display = "none";
    document.querySelector(".nav2 ul").style.display = "none";
  }
  isNavVisible = !isNavVisible; // Toggle the state
});


