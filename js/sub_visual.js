// 스크린

function getParams() {
  let url = decodeURIComponent(location.href);
  url = decodeURIComponent(url); // http://127.0.0.1:5500/sub2.html

  let params = '';
  params = url.substring(url.indexOf("sub")+3, url.indexOf("sub")+4)

  return params;
}

let pageNum = getParams(); // 페이지 수 뽑기

function screen_size(){
  screenHeight = $(window).height();
  screenSize = $(window).width();

  content.style.marginTop = `${screenHeight}px`;
    
    if( screenSize > 1024){
      imgBG.src = `./images/sub${pageNum}_main1.jpg`;
      }
    if(screenSize <= 1024){
      imgBG.src = `./images/sub${pageNum}_main2.jpg`;
    }
}

screen_size();  //최초 실행시 호출

window.addEventListener('resize', function() {
  screen_size();
});

