// 스크린
let current=false;

function screen_size(){
  screenHeight = $(window).height();
  screenSize = $(window).width();

  $("#content").css('margin-top',screenHeight);
  
  if( screenSize > 1024 && current==false){
      videoBG.style.display = 'block';
      videoBG.src = './images/back.mp4';
      imgBG.style.display = 'none';
      current=true;
      headerArea.classList.remove('active');
    }

  if(screenSize <= 1024){
      videoBG.style.display = 'none'
      videoBG.src = '';
      imgBG.style.display = 'block';
      current=false;
    }
}

screen_size();  //최초 실행시 호출
  
window.addEventListener('resize', function() {
  screen_size();
});


