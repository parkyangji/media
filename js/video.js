// 스크린
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 1024 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
          $('#headerArea').removeClass('active');
        }
      if(screenSize <= 1024){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
          
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){ 
      screen_size();


  }); 


