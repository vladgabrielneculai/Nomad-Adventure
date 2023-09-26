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
  //  FAQ & CAMPS
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
  // SEARCH BAR
  // ----------------------------

  const f = document.getElementById('form');
  const q = document.getElementById('query');

  q.addEventListener('input', submitted);

  function submitted(event) {
    event.preventDefault();

    const query = q.value.toLowerCase();
    const elements = document.querySelectorAll('a');
    const results = [];

    elements.forEach(element => {
      const text = element.textContent.toLowerCase();
      if (text.includes(query)) {
        results.push(element);
      }
    });

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = "";
    if (results.length > 0) {
      results.forEach(result => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = result.href;
        link.textContent = result.textContent;
        li.appendChild(link);
        resultsList.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Niciun rezultat găsit.';
      resultsList.appendChild(li);
    }

    const searchResults = document.getElementById('searchResults');
    searchResults.style.display = 'block';
  }

  f.addEventListener('submit', submitted);

  window.addEventListener('scroll', function () {
    var scrollPosition = window.innerHeight + window.pageYOffset;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight) {
      q.classList.add('invert-colors');
      document.querySelector('svg').classList.add('invert-colors');
    } else {
      q.classList.remove('invert-colors');
      document.querySelector('svg').classList.remove('invert-colors');
    }
  });

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

})(jQuery);
