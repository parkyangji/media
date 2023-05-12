/* 1024px 이상 해상도일 때는 섹션 고정 & 이미지 스크롤 효과, 이하일 때는 섹션 해제 & 이미지 스크롤 해제 */

function resizeWidth() {

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {

      gsap.utils.toArray("section").forEach((section, i) => {
        // 섹션 넘기기
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });

        // 이미지 스크롤
        const section_img = document.querySelectorAll('.img_box');

        gsap.utils.toArray("section").forEach((section, i) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top bottom",
            onToggle: self => {
              const isVisible = self.isActive;
              if (isVisible) {
                section_img[i].classList.add("showImg");
              } else {
                section_img[i].classList.remove("showImg");
              }
            }
          });

        });

      });

      // 텍스트 하이라이트
      gsap.utils.toArray("strong").forEach((strong) => {
        ScrollTrigger.create({
          trigger: strong,
          start: "top 70%",
          onEnter: () => strong.classList.add("highlight"), //한번만 실행
        });
      });


    },
    "(max-width: 1024px)": function () {

      gsap.utils.toArray("section").forEach((section, i) => {
        // 섹션 넘기기
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: false,
        });

      })

      // 텍스트 하이라이트
      gsap.utils.toArray("strong").forEach((strong) => {
        ScrollTrigger.create({
          trigger: strong,
          start: "top 70%",
          onEnter: () => strong.classList.add("highlight"), //한번만 실행
        });
      });

    }
  });


  window.addEventListener("resize", ScrollTrigger.update);
}

resizeWidth();
