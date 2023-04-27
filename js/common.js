// 스크롤 다운
  
$('.scrollDown').click(function(){
  screenHeight = $(window).height();
  $('html,body').animate({'scrollTop':screenHeight}, 1000);
});

// 헤더 변경

$(window).on('scroll', function() {
  screenHeight = $(window).height();
  screenSize = $(window).width();

  let scroll = $(window).scrollTop();

  if (screenSize > 1024) {

    if (scroll >= screenHeight) {
      $('#headerArea').css('background-color', 'var(--back-color)');
    } else if (scroll < screenHeight){
      $('#headerArea').css('background-color', 'transparent');
    }

  } else {
    if (scroll >= screenHeight) {
      $('#headerArea').css('background-color', 'var(--back-color)');
    } else if (scroll < screenHeight){
      $('#headerArea').css('background-color', 'transparent');
    }
  }


})

// 상단 이동
$('.topMove').click(function(e){
  e.preventDefault(); 
  $("html,body").stop().animate({"scrollTop":0},1000);
});


// 네비
$('.menuOn').click(function(e){
  e.preventDefault();
  $('#headerArea').toggleClass('active');
})
