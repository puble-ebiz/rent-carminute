//input 자동완성 기능끄기
$("input").attr("autocomplete", "off");

$(document).ready(function () {
  //fixed 헤더
  var secHead = $(".sect-header");
  secHeadTop = secHead.offset().top;

  var btnEstimate = $(".top-estimate"),
    contRequest = $(".sect-quote");

  btnEstimate.click(function (e) {
    e.preventDefault();
    var target = contRequest;
    $("html,body").animate(
      {
        scrollTop: target.offset().top,
      },
      500
    );
  });

  $(window).scroll(function () {
    var win = $(this).scrollTop();
    if (secHeadTop <= win) {
      secHead.addClass("fixed");
    } else {
      secHead.removeClass("fixed");
    }
  });

  //first load popup
  $(".agreement .btn-more").click(function () {
    $(".pop-policy-wrap").show();
  });
  $(".btn-close-policy").click(function () {
    $(".pop-policy-wrap").hide();
  });
  $(".popup-staria .btn-close").click(function () {
    $(".popup-staria").hide();
  });
  // $(".popup-staria .btn-request").click(function () {
  //   $(".modal-complete-request").show();
  // });
  $(".top-banner .banner-box").click(function () {
    $(".popup-event").show();
  });
  $(".top-banner .btn-close").click(function () {
    $(".top-banner").hide();
  });

  //banner popup
  var banner = $(".banner_long-term .banner-box"),
    banClose = $(".banner_long-term .btn-close"),
    popupBox = $(".banner-popup .banner-box"),
    popClose = $(".popup-box .btn-close"),
    // 팝업추가로인해 class 변경
    sidePopup = $(".btn-event"),
    slidePopup = $(".event-rentcar"),
    mainPopup = $(".buttonDiv .banner_hotel"),
    popup = $(".banner-popup"),
    eventRent = $(".rent-event"),
    popEvent = $(".popup-event"),
    btnClose2 = $(".popup-event .btn-close"),
    banStar = $(".event-starbucks");

  banStar.click(function () {
    popEvent.show();
  });

  eventRent.click(function () {
    popEvent.show();
  });
  btnClose2.click(function () {
    popEvent.hide();
  });

  banner.click(function () {
    popup.addClass("active");
  });

  banClose.click(function () {
    $(this).parent().addClass("none");
  });

  popClose.click(function () {
    $(this).parent().parent().removeClass("active");
  });

  sidePopup.click(function () {
    popup.addClass("active");
  });

  slidePopup.click(function () {
    popup.addClass("active");
  });
  mainPopup.click(function () {
    popup.addClass("active");
  });

  //==스타벅스 아메리카노==
  $(".btn-stabucks").on("click", function () {
    $("body").addClass("overflow-hidden");
    $(".stabucks-amricano").show();
  });

  $(".btn-close-pop").on("click", function () {
    $("body").removeClass("overflow-hidden");
    $(".stabucks-amricano").hide();
  });
  //.//==스타벅스 아메리카노==

  //메뉴 관련
  let anchorOn = false;
  let anchorList = $(".header .main-menu-ul>li>a");
  anchorList.on("click", function (e) {
    let anchorName = $(this).data("move-anchor");
    if (anchorName == undefined) {
      return false;
    }
    let correctPos = 83;
    if (window.innerWidth <= 900) {
      correctPos = 0;
    }

    anchorOn = true;
    let anchorBox = document.getElementsByClassName(anchorName);
    let anchorTop = $(anchorBox).offset().top - correctPos;
    $("html").animate(
      {
        scrollTop: anchorTop,
      },
      600,
      function () {
        // setMenuActiveCheck();
        anchorOn = false;
      }
    );
  });
});

/*스크롤 업*/
$(document).ready(function () {
  $(".fn-up-wrap").hide();
  $(".fn-up-wrap").css("oparcity", "0");

  //상담신청바 추가 2021.05.25
  $(".consult-bar").hide();
  $(".consult-bar").css("oparcity", "0");

  //스크롤시 적용
  $(window).scroll(function () {
    var winTop = $(window).scrollTop(),
      sideBanner = $(".side-sect-right .side-area"),
      sideFirstTop = "130px",
      sideScrollTop = "180px",
      topBtn = $(".fn-up-wrap");

    if (winTop > 700) {
      sideBanner.css({ top: sideFirstTop });
      topBtn.show();
      topBtn.stop().animate({ opacity: "1" }, 200);
      $(".consult-bar").show();
      $(".consult-bar").stop().animate({ opacity: "1" }, 200);
    } else {
      sideBanner.css({ top: sideScrollTop });
      topBtn.hide();
      topBtn.stop().animate({ opacity: "0" }, 200);
      $(".consult-bar").hide();
      $(".consult-bar").stop().animate({ opacity: "0" }, 200);
    }

    if (window.matchMedia("(max-width: 900px)").matches) {
      $(".consult-bar").hide();
    }
  });

  $(".fn-scroll-up").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 300);
  });
});

/*모바일일 때 적용(팝업버튼이 견적이동 버튼으로)*/
$(document).ready(function () {
  let winW = window.outerWidth;
  if (winW <= 900) {
    let = shopBtn = $(".sect-shoping .car-info-box .btn-quote");
    shopBtn.removeClass("btn-open-consult");
    shopBtn.addClass("btn-move-quote");

    let = headerBtn = $(".header .main-menu-ul .btn-open-consult");
    headerBtn.removeClass("btn-open-consult");
    headerBtn.addClass("btn-move-quote");
  }
});

/*가기버튼*/
$(document).ready(function () {
  $(".btn-bottom-sect .btn-estimate").removeAttr("href");
  $(".btn-move-quote").on("click", function () {
    let quoteBox = $(".sect-quote");
    if (quoteBox == undefined) {
      return false;
    }
    let correctPos = 83;
    if (window.innerWidth <= 900) {
      correctPos = 0;
    }

    let anchorTop = quoteBox.offset().top - correctPos;
    $("html").animate(
      {
        scrollTop: anchorTop,
      },
      600,
      function () {}
    );
  });
});

/*테슬러용*/
$(document).ready(function () {
  let txt_origin_pc = $(".modal-complete-request .message-main .txt-pc").html();
  let txt_origin_m = $(".modal-complete-request .message-main .txt-pc").html();

  $(".btn-tsla").on("click", function () {
    $(".modal-complete-request .message-main .txt-pc").html(
      "<span class='mark'>테슬러<br>상담요청이 완료되었습니다.</span>"
    );
    $(".modal-complete-request .message-main .txt-mobile").html(
      "테슬러<br>상담요청완료!"
    );
  });
  $(".modal-complete-request .btn-close-complete").on("click", function () {
    $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
    $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
  });

  $(".modal-complete-request .btn-go-complte").on("click", function () {
    $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
    $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
  });

  $(".modal-complete-request .btn-close-pop").on("click", function () {
    $(".modal-complete-request .message-main .txt-pc").html(txt_origin_pc);
    $(".modal-complete-request .message-main .txt-mobile").html(txt_origin_m);
  });
});
