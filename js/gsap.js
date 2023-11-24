const scrubbed = gsap.utils.toArray('.ironimg');
scrubbed.forEach(box => {
  gsap.to('.ironimg', { 
    x: 500,
    scrollTrigger: {
      trigger: '.iron',
      scrub: true,
      pin:true,
    }
  });
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});

gsap.to('.imgholderthor', { 
  rotation: 360,
  duration: 1,
});