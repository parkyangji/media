// 공통 변수
const videoBG = document.getElementById('videoBG'),
      imgBG = document.getElementById('imgBG'),
      headerArea = document.getElementById('headerArea'),
      content = document.getElementById('content');

let screenSize, screenHeight;


// 스크롤 다운

document.querySelector('.scrollDown').addEventListener('click', function(e) {
  e.preventDefault();

  screenHeight = window.innerHeight;
  window.scrollTo({top:screenHeight, left:0, behavior:"smooth"});
})

// 헤더 변경

window.addEventListener('scroll', function() {
  screenHeight = window.innerHeight;
  screenSize = window.innerWidth;

  let scroll = window.scrollY;

  if (scroll >= screenHeight) {
    headerArea.style.backgroundColor = 'var(--back-color)';
  } else {
    headerArea.style.backgroundColor = 'transparent';
  }
})

// 상단 이동

document.querySelector('.topMove').addEventListener('click', function(e) {
  e.preventDefault();

  const scrollTop = document.body.offsetTop;
  window.scrollTo({top:scrollTop, behavior:"smooth"});
})


// 네비

document.querySelector('.menuOn').addEventListener('click', function(e){
  e.preventDefault();

  headerArea.classList.toggle('active');
})
