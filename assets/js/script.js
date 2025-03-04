$(window).on("load", function () {
  // ページ読み込み完了後にローディング画面をフェードアウト
  setTimeout(function () {
      $("#loading-screen").addClass("fade-out");
  }, 1500); // 1.5秒後にフェードアウト開始

  setTimeout(function () {
      $("#loading-screen").remove(); // フェードアウト後に削除
  }, 2000); // 2秒後に完全に削除
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {       // 100px以上スクロールしたら
    $('.video-wrap > p').addClass('hidden');
  } else {
    $('.video-wrap > p').removeClass('hidden');  // 元に戻ったら再表示
  }
});
//laplap
$(".to-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 100);  // 500はスクロールの速さ（ミリ秒）
});

const video = document.querySelector(".video-wrap video"); // クラス video-wrap 内の video を取得

video.addEventListener("mouseenter", () => {
  video.play(); // マウスオーバーで再生
});

video.addEventListener("mouseleave", () => {
  video.pause(); // マウスが外れたら一時停止
  video.currentTime = 0; // 最初に戻す（不要なら削除）
});
$(document).ready(function () {
  $("#myVideo").on("mouseover", function () {
    let video = this; // jQueryオブジェクトではなく、純粋なDOM要素を取得
    video.playbackRate = 0.5; // マウスオーバー時に0.5倍速にする
  });
});
