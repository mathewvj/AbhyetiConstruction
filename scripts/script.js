document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const toggleIcon = navToggle.querySelector("i");

    // Open/Close Menu Toggle
    navToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");

        // Toggle Icon Change
        if (mobileMenu.classList.contains("show")) {
            toggleIcon.classList.replace("bi-list", "bi-x");
        } else {
            toggleIcon.classList.replace("bi-x", "bi-list");
        }
    });

    // Close Menu When Clicking Outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
            mobileMenu.classList.remove("show");
            toggleIcon.classList.replace("bi-x", "bi-list");
        }
    });
});


document.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });