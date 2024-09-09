$(function () {
  //ボタンアニメーション
  $('.button-big').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
      marginLeft:10,
    },300);
  });
  $('.button-big').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
    },100);
  });
});

$(function () {
  //ボタンアニメーション
  $('.button-bigg').on('mouseover', function () {
    $(this).animate({
      opacity: 0.8,
      margin:2,
    },300);
  });
  $('.button-bigg').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
      margin: 0
    },100);
  });
});