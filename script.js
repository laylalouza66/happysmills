document.addEventListener("DOMContentLoaded", function () {
  /* ===== Mobile Menu Toggle ===== */
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  /* ===== Navbar shadow on scroll ===== */
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ===== Custom Popup ===== */
  var popupOverlay = document.getElementById("popupOverlay");
  var popupClose = document.getElementById("popupClose");
  var popupOk = document.getElementById("popupOk");

  function openPopup() {
    popupOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Trigger popup on all elements with [data-popup]
  document.querySelectorAll("[data-popup]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openPopup();
    });
  });

  popupClose.addEventListener("click", closePopup);
  popupOk.addEventListener("click", closePopup);

  // Close popup when clicking the overlay backdrop
  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });

  // Close popup with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popupOverlay.classList.contains("active")) {
      closePopup();
    }
  });

  /* ===== Booking Form Submit ===== */
  var bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      openPopup();
      bookingForm.reset();
    });
  }

  /* ===== Footer Year ===== */
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
