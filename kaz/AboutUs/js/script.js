gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5, 
    effects: true,
  })

  let img = gsap.utils.toArray('.img1-section3');

  img.forEach(item => {
    gsap.fromTo(item,
      { opacity: 0, x: -50, y: 35 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 3, // время анимации (можешь увеличить до 2-3)
        ease: "power3.out", // плавность
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
          end: "top 50%",   // когда анимация заканчивается
          toggleActions: "play none none none",
        }
      }
    );
  });

  let box1 = gsap.utils.toArray('.text-box1');

  box1.forEach(item => {
    gsap.fromTo(item,
      { opacity: 0, x: 50, y: 35 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 3, // время анимации (можешь увеличить до 2-3)
        ease: "power3.out", // плавность
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
          end: "top 50%",   // когда анимация заканчивается
          toggleActions: "play none none none",
        }
      }
    );
  });


  let section1Section = gsap.utils.toArray('.section1-section');

  section1Section.forEach(item => {
    gsap.fromTo(item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,        x: 0,
        duration: 3, // время анимации (можешь увеличить до 2-3)
        ease: "power3.out", // плавность
        delay: 0.4,
        scrollTrigger: {
          trigger: item,
          end: "top 50%",   // когда анимация заканчивается
          toggleActions: "play none none none",
        }
      }
    );
  });





















}


const languageBox = document.getElementById('languageBox');
const languageBtn = document.getElementById('language');

languageBtn.addEventListener('click', () => {
  languageBox.classList.toggle('active');
});