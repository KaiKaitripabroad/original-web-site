$(".to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 100);  // 500はスクロールの速さ（ミリ秒）
  });
  