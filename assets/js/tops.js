$(".to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 100);  // 500はスクロールの速さ（ミリ秒）
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