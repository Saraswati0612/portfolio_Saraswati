document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Web Developer", "Java Full Stack Developer", "Tech Enthusiast"];
  let current = 0;
  let index = 0;
  let isDeleting = false;
  const roleEl = document.getElementById("typed-role");

  function type() {
    let currentRole = roles[current];

    if (isDeleting) {
      roleEl.textContent = currentRole.substring(0, index);
      index--;
    } else {
      roleEl.textContent = currentRole.substring(0, index);
      index++;
    }

    let timeout = isDeleting ? 50 : 100;

    if (!isDeleting && index === currentRole.length + 1) {
      isDeleting = true;
      timeout = 1500;
      index--; 
    } else if (isDeleting && index < 0) {
      isDeleting = false;
      current = (current + 1) % roles.length;
      index = 0;
    }

    setTimeout(type, timeout);
  }

  type();
});

function submitForm(event) {
  event.preventDefault();

  const response = document.getElementById("response");

  // Simulated feedback
  response.textContent = " Thank you! Your message has been sent.";
  response.style.color = "#a259ff";

  // Clear form
  event.target.reset();
}
