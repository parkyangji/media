// 스크린

function getParams() {
  let url = decodeURIComponent(location.href);
  url = decodeURIComponent(url); // http://127.0.0.1:5500/sub2.html

  let params = '';
  params = url.substring(url.indexOf("sub")+3, url.indexOf("sub")+4)

  return params;
}

let pageNum = getParams(); // 페이지 수 뽑기

let screenSize, screenHeight;

function screen_size(){
    screenSize = $(window).width(); //스크린의 너비
    screenHeight = $(window).height();  //스크린의 높이

    $("#content").css('margin-top',screenHeight);
    
    if( screenSize > 1024){
        $("#imgBG").attr("src", `./images/sub${pageNum}_main1.jpg`);
      }
    if(screenSize <= 1024){
      $("#imgBG").attr("src", `./images/sub${pageNum}_main2.JPG`);
    }
}

screen_size();  //최초 실행시 호출

$(window).resize(function(){ 
    screen_size();
}); 
