"use strict";
$(document).ready(function () {
    /*******Skill Set ******/
    /* Experience */
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeIn');
		$('.skills-bar-container').addClass('animated fadeIn');
        $('.wp3-1').addClass('progress1-delay');
        $('.wp3-2').addClass('progress2-delay');
        $('.wp3-3').addClass('progress3-delay');
        $('.wp3-4').addClass('progress4-delay');
        $('.wp3-5').addClass('progress5-delay');
	}, {
		offset: '50%'
	});

  function t() {
    $(".section").each(function () {
      var t = $('#dot-nav a[href="#' + $(this).attr("id") + '"]').data(
          "number"
        ),
        e = $(this).offset().top,
        n = $(window).height() / 2,
        o = $(window).scrollTop(),
        i = e - n < o,
        r = e + $(this).height() - n > o;
      i && r
        ? $("#dot-nav a").eq(t).addClass("is-selected")
        : $("#dot-nav a").eq(t).removeClass("is-selected");
    });
  }
  function e(t) {
    $("body, html").animate({ scrollTop: t.offset().top + 50 }, 500);
  }
  function n() {
    var t = window.innerWidth > 768,
      e = s.offsetTop - s.offsetTop / 4,
      n = window.scrollY > e,
      i = d.classList.contains("open");
    t && n
      ? a.classList.add("active")
      : t && i
      ? o()
      : a.classList.remove("active");
  }
  function o() {
    l.classList.toggle("active"),
      d.classList.toggle("open"),
      document.body.classList.toggle("noScroll");
  }
  function i() {
    this.parentElement.classList.add("is-active", "is-completed");
  }
  function r() {
    this.parentElement.classList.remove("is-active", "is-completed");
  }
  function c() {
    (f.style.height = ""),
      (f.style.height = Math.min(f.scrollHeight, v) + "px");
  }
  t(),
    window.addEventListener("scroll", t),
    $(".scroll-down").on("click", function (t) {
      t.preventDefault(), e($(this.hash));
    }),
    $("#dot-nav a").on("click", function (t) {
      t.preventDefault(), e($(this.hash));
    }),
    $("#overlay a").on("click", function (t) {
      t.preventDefault(), e($(this.hash)), $("#toggle").click();
    });
  var a = document.querySelector("#dot-nav"),
    s = document.querySelector("#about-section"),
    l = document.querySelector("#toggle"),
    d = document.querySelector("#overlay");
  window.addEventListener("scroll", n),
    window.addEventListener("resize", n),
    l.addEventListener("click", o);
  var u = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        u.Android() || u.BlackBerry() || u.iOS() || u.Opera() || u.Windows()
      );
    },
  };
  u.any() ||
    skrollr.init({
      render: function (t) {},
      smoothScrolling: !1,
      forceHeight: !1,
    });
  var h = document.querySelectorAll(".contact-input");
  h.forEach(function (t) {
    return t.addEventListener("focus", i);
  }),
    h.forEach(function (t) {
      return t.addEventListener("blur", r);
    });
  var f = document.querySelector("#message"),
    v = 300;
  f.addEventListener("input", c);
});
