/* 1280px 해상도 이상일 때 마우스 커스터 마이징, 이하일 때 해제 */

const cursor = document.getElementById('mouse-cursor');
const mediaQuery = window.matchMedia('(min-width: 1280px)');

let cursorX = 0,
  cursorY = 0; //좌표

function addMouseMoveListener() {
  document.querySelector('.example__demo').addEventListener('mousemove', mousemove);
  document.querySelector('.example__demo').addEventListener('mouseout', mouseout);
}

function removeMouseMoveListener() {
  document.querySelector('.example__demo').removeEventListener('mousemove', mousemove);
  document.querySelector('.example__demo').removeEventListener('mouseout', mouseout);
}

function mousemove(e) {
  cursorX = e.pageX - cursor.offsetWidth / 2; // 마우스 커서 가운데 좌표
  cursorY = e.pageY - cursor.offsetHeight / 2;
  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
}

function mouseout() {
  cursor.style.transform = `translate3d(-100%, -100%, 0)`;
}

if (mediaQuery.matches) { // 초기 화면에서 1280해상도 이상인지
  addMouseMoveListener();
} else {
  removeMouseMoveListener();
}

mediaQuery.addEventListener(function (event) { // 화면이 리사이징 될 때 처리
  if (event.matches) {
    addMouseMoveListener();
  } else {
    removeMouseMoveListener();
  }
});
