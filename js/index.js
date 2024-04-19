gsap.registerPlugin(ScrollTrigger)

gsap.from('#image', {
    xPercent: 100,
    duration: 3.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim",
    }
})

gsap.from('#text', {
    xPercent: -100,
    duration: 3.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim",
    }
})

gsap.from('#image2', {
    xPercent: -100,
    duration: 3.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim2",
    }
})

gsap.from('#text2', {
    xPercent: 100,
    duration: 3.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim2",
    }
})