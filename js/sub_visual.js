// 스크린
var screenSize, screenHeight;

function screen_size(){
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height();  //스크린의 높이

    $("#content").css('margin-top',screenHeight);
    
    if( screenSize > 1024){
        $("#imgBG").attr("src", "./images/sub1_main1.jpg");
      }
    if(screenSize <= 1024){
      $("#imgBG").attr("src", "./images/sub1_main1_2.jpg");
    }
}

screen_size();  //최초 실행시 호출

$(window).resize(function(){ 
    screen_size();
}); 
