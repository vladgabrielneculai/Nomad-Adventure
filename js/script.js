(function ($) {
  "use strict";

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });

  // navbarDropdown
  if ($(window).width() < 992) {
    $("#navigation .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  //Hero Slider
  $(".hero-slider").slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: "<button type='button' class='prevArrow'></button>",
    nextArrow: "<button type='button' class='nextArrow'></button>",
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  $(".hero-slider").slickAnimation();

  /* ========================================================================= */
  /*	Portfolio Filtering Hook
  /* =========================================================================  */
  // filter
  setTimeout(function () {
    var containerEl = document.querySelector(".filtr-container");
    var filterizd;
    if (containerEl) {
      filterizd = $(".filtr-container").filterizr({});
    }
  }, 500);

  /* ========================================================================= */
  /*	Testimonial Carousel
  /* =========================================================================  */
  //Init the slider
  $(".testimonial-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  /* ========================================================================= */
  /*	Clients Slider Carousel
  /* =========================================================================  */
  //Init the slider
  $(".clients-logo-slider").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /* ========================================================================= */
  /*	Company Slider Carousel
  /* =========================================================================  */
  $(".company-gallery").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($(".counter").length !== 0) {
      oTop = $(".counter").offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 1000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).scroll(function () {
    counter();

    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navigation").addClass("sticky-header");
    } else {
      $(".navigation").removeClass("sticky-header");
    }
  });

  // -----------------------------
  //  FAQ
  // -----------------------------
  const question = document.querySelectorAll(".question");
  const answer = document.querySelectorAll(".answer");
  const arrow = document.querySelectorAll(".arrow");

  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", () => {
      answer[i].classList.toggle("answer-opened");
      arrow[i].classList.toggle("arrow-rotated");
    });
  }

  // ---------------------------
  //  FORMULAR INSCRIERE
  // ---------------------------

  // Obține toate elementele radio pentru Calitate și adaugă un eveniment onchange pentru fiecare
  const profesorRadio = document.getElementById("profesor");
  const parinteRadio = document.getElementById("parinte");
  const numberKidsInput = document.getElementById("number_kids");
  const numberTeachersInput = document.getElementById("number_teachers");



  profesorRadio.addEventListener("change", function () {
    // Dacă este selectat "Profesor", activează input-urile pentru numărul de copii și cadre didactice
    if (profesorRadio.checked) {
      numberKidsInput.disabled = false;
      numberTeachersInput.disabled = false;
    } else {
      // Dacă este selectat "Părinte", dezactivează input-urile pentru numărul de copii și cadre didactice
      numberKidsInput.disabled = true;
      numberTeachersInput.disabled = true;
      // Resetază valorile din input-uri pentru numărul de copii și cadre didactice
      numberKidsInput.value = "";
      numberTeachersInput.value = "";
    }
  });

  // Obține elementul "Accept toate condițiile de mai jos" și setează eveniment onchange
  const allTermsCheckbox = document.getElementById("all_terms");

  allTermsCheckbox.addEventListener("change", function () {
    // Dacă este bifat "Accept toate condițiile de mai jos", bifează toate celelalte checkbox-uri
    if (allTermsCheckbox.checked) {
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:not(#all_terms)'
      );
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      });
    } else {
      // Dacă este debifat "Accept toate condițiile de mai jos", debifează toate celelalte checkbox-uri
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:not(#all_terms)'
      );
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  });
  
})(jQuery);
