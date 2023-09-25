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

  // ----------------------------
  // SEARCH BAR
  // ----------------------------

  const f = document.getElementById('form');
  const q = document.getElementById('query');
  const google = 'https://www.google.com/search?q=site%3A+';
  const site = 'nomadadventure.ro';

  function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
  }

  f.addEventListener('submit', submitted);

})(jQuery);
