/* 스크롤시 문구 나타나기, 배경색 바꾸기 */

gsap.registerPlugin(ScrollTrigger);

function resizeWidth() {

  const sectionHeight = document.querySelector('.Main').offsetHeight;

  gsap.utils.toArray(".Main").forEach((Main, i) => {

    //문구
    const letter = document.querySelectorAll('.Main')[i].children[0];

    gsap.set(letter, {
      autoAlpha: 0
    });

    ScrollTrigger.create({
      trigger: Main,
      start: "top center",
      onEnter: () => {
        gsap.to(letter, {
          autoAlpha: 1,
          duration: 1,
        });
      },
    });

  });

  //배경색 바꾸기
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = '#0a1239';

    ScrollTrigger.create({
      trigger: colorSection,
      start: "-100 bottom",
      onEnter: () =>
        gsap.to(colorSection, {
          backgroundColor: colorSection.dataset.bgcolor,
          overwrite: "auto"
        })
    });
  });


  window.addEventListener("resize", ScrollTrigger.update);
}

resizeWidth();