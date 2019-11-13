$(document).ready(function () {
  let selectIndex = 0
  $(".tabbar-ul li").mousemove(function () {
    $(this).addClass("active").siblings().removeClass("active")
    $(".layer.F4 .tabbar .jq").eq($(this).index()).addClass("selectTab").siblings().removeClass("selectTab")
  })

  $(window).scroll(function (event) {
    if ($(window).scrollTop() > $(".layer.F1").offset().top) {
      $("#nav").addClass("show")
    } else {
      $("#nav").removeClass("show")
    }
  });

  $(".category").mousemove(function () {
    $(".categoryList").addClass("show")
  })

  $(".categoryList").mouseleave(function () {
    $(".categoryList").removeClass("show")
  })

  $("header .right li.one").hover(
    function () {
      $("header .right li.one .right-box").addClass("show")
    },
    function () {
      $("header .right li.one .right-box").removeClass("show")
    }
  )

  $("header .right li.two").hover(
    function () {
      $("header .right li.two .right-box").addClass("show")
    },
    function () {
      $("header .right li.two .right-box").removeClass("show")
    }
  )
  let id;
  $(".banner-option").hover(
    function () {
      clearTimeout(id)
      $(this).addClass("active").siblings().removeClass("active")
      id=setTimeout(() => {
        selectIndex = $(this).index()
        $(".banner-img").eq($(this).index()).addClass("active").siblings().removeClass("active")
        BannerSwiper($(this).index())
      }, 250);

    }
  )

  setInterval(() => {
    selectIndex++
    $(".banner-img").eq(selectIndex % $(".banner-img").length).addClass("active").siblings().removeClass("active")
    $(".banner-option").eq(selectIndex % $(".banner-img").length).addClass("active").siblings().removeClass("active")
    BannerSwiper(selectIndex % $(".banner-img").length)
  },5000)
});
function BannerSwiper(index) {  
function BgColor(color) {
  $(".banner-wrap").eq($(this).index()).css("background-color", color)
  }
        switch (index) {
          case 0:
            BgColor("#fd4f88")
            break;
          case 1:
            BgColor("#3117bd")
            break;
          case 2:
            BgColor("#2b61ff")
            break;
          case 3:
            BgColor("#1930b6")
            break;
          case 4:
            BgColor("#c9d3dd")
            break;
          case 5:
            BgColor("#2856ec")
            break;
          case 6:
            BgColor("#f54c4d")
            break;
          default:
            break;
        }
}
