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

  // -----------------------------
  //  COUNTDOWN
  // -----------------------------

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "06/24/",
    campdate = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > campdate) {
    campdate = dayMonth + nextYear;
  }

  const countDown = new Date(campdate).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0);

  // ----------------------------
  // FORMULAR
  // ----------------------------

  document.addEventListener("DOMContentLoaded", function () {
    const checkAll = document.getElementById("all_terms");
    const checkItems = document.querySelectorAll(".check-item");

    checkAll.addEventListener("change", function () {
      const isChecked = checkAll.checked;
      checkItems.forEach(item => {
        item.checked = isChecked;
      });
    });
  });

  // Obțineți referințele la elementele formularului
  const qualityInput = document.querySelector('input[name="data[Calitate]"]');
  const numKidsInput = document.getElementById('number_kids');
  const numTeachersInput = document.getElementById('number_teachers');

  // Adăugați un ascultător de eveniment pentru când se schimbă calitatea
  qualityInput.addEventListener('change', function () {
    const selectedQuality = qualityInput.value;

    // Dacă calitatea este "Părinte"
    if (selectedQuality === 'Părinte') {
      // Setăm restricții pentru numărul de copii
      numKidsInput.min = 1;
      numKidsInput.max = 5;

      // Dezactivăm introducerea numărului de cadre didactice
      numTeachersInput.disabled = true;
    } else {
      // Dacă calitatea este "Profesor" sau altceva
      // Resetăm restricțiile pentru numărul de copii
      numKidsInput.min = 1;
      numKidsInput.max = 150;

      // Permitem introducerea numărului de cadre didactice
      numTeachersInput.disabled = false;
    }
  });

  // CAMPS

  const discover = document.querySelectorAll(".discover");
  const campday = document.querySelectorAll(".campdaydescription");
  const discoverarrow = document.querySelectorAll(".discoverarrow");

  for (let i = 0; i < discover.length; i++) {
    discover[i].addEventListener("click", () => {
      campday[i].classList.toggle("campdaydescription-opened");
      discoverarrow[i].classList.toggle("discoverarrow-rotated");
    });
  }


})(jQuery);
