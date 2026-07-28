/* The Puzzl Co — site interactions */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * Amazon Store link.
   * TODO: replace the placeholder below with the real Amazon Store URL.
   * ------------------------------------------------------------------ */
  var AMAZON_STORE_URL = "https://www.amazon.in/stores/THEPUZZLCO/page/58EC7CD9-28AA-4CB8-BDA2-B15962418AA3?lp_asin=B0DKD3YQBW&ref_=cm_sw_r_apin_ast_store_J3922ANXTGGA8X33Q19G&store_ref=bl_ast_dp_brandlogo_sto";

  document.querySelectorAll(".js-amazon").forEach(function (el) {
    if (AMAZON_STORE_URL) {
      el.setAttribute("href", AMAZON_STORE_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      el.setAttribute("href", "#shop");
    }
  });

  /* Mobile nav */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Sticky header shadow */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
