$(window).on('load', function() {
  // ページが完全に読み込まれたら、ローディング画面を非表示に
  $('#loading-screen').fadeOut(800, function() {
      $('#content').fadeIn(800);
  });
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
