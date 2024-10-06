(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded");
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");
    function toggleMenu() {
      navbarMenu.classList.toggle("active");
      const expanded = navbarToggle.getAttribute("aria-expanded") === "true" || false;
      navbarToggle.setAttribute("aria-expanded", !expanded);
    }
    navbarToggle.addEventListener("click", function() {
      console.log("click menu");
      toggleMenu();
    });
    document.addEventListener("click", function(event) {
      var targetElement = event.target;
      if (navbarMenu.classList.contains("active") && !navbarMenu.contains(targetElement) && !navbarToggle.contains(targetElement)) {
        toggleMenu();
      }
    });
  });
})();
