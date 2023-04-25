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

  if (scroll >= screenHeight) {
    $('#headerArea').css('background-color', 'var(--back-color)');
    $('#headerArea h1').removeClass('hidden');
  } else {
    $('#headerArea').css('background-color', 'transparent');
    $('#headerArea h1').addClass('hidden');
  }
})

// 상단 이동
$('.topMove').click(function(e){
  e.preventDefault(); 
  $("html,body").stop().animate({"scrollTop":0},1000);
});
