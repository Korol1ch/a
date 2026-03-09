gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {

  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5, 
    effects: true,
  })

  let heroImg = gsap.utils.toArray('.hero-img');

  heroImg.forEach(item => {
    gsap.fromTo(item,
      { opacity: 0 },
      {
        opacity: 0.8,
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

  let heroBox = gsap.utils.toArray('.hero-box');

  heroBox.forEach(item => {
    gsap.fromTo(item,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 2, // время анимации (можешь увеличить до 2-3)
        ease: "power3.out", // плавность
        delay: 0.5,
        scrollTrigger: {
          trigger: item,
          end: "top 50%",   // когда анимация заканчивается
          toggleActions: "play none none none",
        }
      }
    );
  });

  let horiz = document.getElementById('horizontal');
let wrap = document.getElementById('hWrap');

gsap.to(horiz, {
  x: () => `-${horiz.scrollWidth - wrap.clientWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: "#hWrap",
    start: "center center",
    end: () => "+=" + (horiz.scrollWidth - wrap.clientWidth),
    scrub: true,
    pin: true,
    pinSpacing: true, // 🔑 оставляет место для секции 3
    anticipatePin: 1,
    invalidateOnRefresh: true
  }
});






  let section4 = gsap.utils.toArray('.section4');

  section4.forEach(item => {
    gsap.fromTo(item, {y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-750',
        end: '-200',
        scrub: true
      }
    });
  });

  let box3 = gsap.utils.toArray('.section4-box');

  box3.forEach(item => {
    gsap.fromTo(item, { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-750',
        end: '-200',
        scrub: true
      }
    });
  });

  let btn = gsap.utils.toArray('.btn');

  btn.forEach(item => {
    gsap.fromTo(item, { y: 50, x: 50, opacity: 0 }, {
      y: 0,
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-500',
        end: '-200',
        scrub: true
      }
    });
  });



  
































}

document.querySelector('.btn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // плавно
  });
});


const languageBox = document.getElementById('languageBox');
const languageBtn = document.getElementById('language');

languageBtn.addEventListener('click', () => {
  languageBox.classList.toggle('active');
});

