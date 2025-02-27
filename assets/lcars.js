document.addEventListener("touchstart", function() {},false);
let mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function() {
  // Red Alert Functionality
  const redAlertButton = document.getElementById("redAlertBtn");
  if (redAlertButton) {
      redAlertButton.addEventListener("click", function() {
          document.body.style.backgroundColor = "red";
          let alertSound = new Audio("assets/red_alert.mp3");
          alertSound.play();
          setTimeout(() => {
              document.body.style.backgroundColor = "black";
          }, 3000);
      });
  }

  // Login Modal
  const loginButton = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");

  if (loginButton && loginModal && closeModal) {
      loginButton.addEventListener("click", function() {
          loginModal.style.display = "block";
      });

      closeModal.addEventListener("click", function() {
          loginModal.style.display = "none";
      });
  }

  // Navigation Buttons
  document.querySelectorAll(".nav-button").forEach(button => {
      button.addEventListener("click", function() {
          let targetPage = this.getAttribute("data-target");
          if (targetPage) {
              window.location.href = targetPage;
          }
      });
  });
});
