//topページ
$(".to-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 100); // 500はスクロールの速さ（ミリ秒）
});
$(window).on("scroll", function () {
  let imageContainer = $(".img-farst");
  let windowHeight = window.innerHeight; // ウィンドウの高さを取得
  let scrollTop = $(window).scrollTop();
  let imageTop = imageContainer.offset().top;
  let imageHeight = imageContainer.outerHeight();

  // スクロール位置の判定
  if (scrollTop + windowHeight > imageTop + imageHeight / 2) {
    $(".text-farst").fadeIn(300); // スマホでも早く表示されるように
  } else {
    $(".text-farst").fadeOut(300);
  }
});

$(document).ready(function () {
  let scrolled = false; // スクロール開始を1回だけ検知するためのフラグ

  $(window).on("scroll", function () {
    if (!scrolled) {
      $(".img-farst img").css("border-radius", "5%"); // アニメーション実行
      scrolled = true; // 2回目以降は動作しないようにする
    }
  });
  $(document).ready(function () {
    // スクロールが発生したら指示を消す
    $(window).on("scroll", function () {
      $(".scroll-indicator").addClass("hidden");
    });

    // 3秒後に自動で指示を消す（不要なら削除OK）
    setTimeout(function () {
      $(".scroll-indicator").addClass("hidden");
    }, 3000);
  });
  var $photos = $("#photos"),
    $lis = $("#photos li");

  var li_count = $lis.length;
  var li_width =
    $lis.width() +
    parseInt($lis.css("margin-left"), 10) +
    parseInt($lis.css("margin-right"), 10);

  $photos.css("width", li_width * li_count + "px");

  setInterval(function () {
    $photos.stop().animate(
      {
        marginLeft: parseInt($photos.css("margin-left"), 10) - li_width + "px",
      },
      function () {
        $photos.css("margin-left", "0px");
        $photos.find("li:first").appendTo($photos);
      }
    );
  }, 1500);
});
$(window).on("load", function () {
  // ページ読み込み完了後にローディング画面をフェードアウト
  setTimeout(function () {
      $("#loading-screen").addClass("fade-out");
  }, 1500); // 1.5秒後にフェードアウト開始

  setTimeout(function () {
      $("#loading-screen").remove(); // フェードアウト後に削除
  }, 2000); // 2秒後に完全に削除
});

