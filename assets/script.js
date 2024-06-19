$(document).ready(function () {
    $(".c-a-1").hover(function () {
        gsap.to(".card-img", {
            duration: 1,
            ease: "elastic.out(0.7,0.3)",
            transform: "translate(0px, 0px)"
        });
        gsap.to(".card-a1-desc", {
            duration: 1,
            ease: "elastic.out(1,0.8)",
            transform: "translate(0px, 0px)",
        })
        gsap.to(".card-a1-title", {
            duration: 1,
            ease: "elastic.out(1, 0.7)",
            transform: "translate(0px, -157px)",
        })

    });

    $(".c-a-1").mouseleave(function () {
        gsap.to(".card-img", {
            duration: 1,
            ease: "elastic.in(0.7,0.3)",
            transform: "translate(0px, 300%) scale(0.8, 0.8)"
        });
        gsap.to(".card-a1-desc", {
            duration: 1,
            ease: "elastic.out(1,0.7)",
            transform: "translate(0px, 100%)"
        });
        gsap.to(".card-a1-title", {
            duration: 1,
            ease: "elastic.out(1,0.8)",
            transform: "translate(0px, 0px)",
        })
    });

    $(".c-a-2").hover(function () {
        gsap.to(".card-a2-decs", {
            duration: 1,
            ease: "elastic.out(1,0.7)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".card-a2-title", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 14%)"
        })
        gsap.to(".img-a2-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".img-a2-2", {
            duration: 1.5,
            ease: "elastic.out(1,0.5)",
            transform: "translate(0px, 0px)"
        })


    })
    $(".c-a-2").mouseleave(function () {
        gsap.to(".card-a2-decs", {
            duration: 1,
            ease: "elastic.out(1,0.7)",
            transform: "translate(0px, -100%)"
        })
        gsap.to(".card-a2-title", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".img-a2-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, -300%)"
        })
        gsap.to(".img-a2-2", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, -300%)"
        })
    })

    $(".c-a-3").hover(function () {
        gsap.to(".img-a3-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".img-a3-2", {
            duration: 1.5,
            opacity: 1,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".card-a3-desc", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
    })
    $(".c-a-3").mouseleave(function () {
        gsap.to(".img-a3-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(-150%, -20%)"
        })
        gsap.to(".img-a3-2", {
            duration: 1.5,
            opacity: 0,
            ease: "elastic.out(1,0.4)",
            transform: "translate(-100%, -20%)"
        })
        gsap.to(".card-a3-desc", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 100%)"
        })
    })

    $(".c-a-4").hover(function () {
        gsap.to(".img-a4-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".img-a4-2", {
            duration: 1.7,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
        gsap.to(".card-a4-decs", {
            duration: 1.3,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 0px)"
        })
    })
    $(".c-a-4").mouseleave(function () {
        gsap.to(".img-a4-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(100%, 100%)"
        })
        gsap.to(".img-a4-2", {
            duration: 1.7,
            ease: "elastic.out(1,0.4)",
            transform: "translate(-100%, -100%)"
        })
        gsap.to(".card-a4-decs", {
            duration: 1.3,
            ease: "elastic.out(1,0.4)",
            transform: "translate(-100%, -100%)"
        })
    })

    $(".c-a-5").hover(function () {
        gsap.to(".img-a5-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px,0px)"
        })
    })
    $(".c-a-5").mouseleave(function () {
        gsap.to(".img-a5-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px, 100%) rotate(120deg)"
        })
    })


    $(".c-a-6").hover(function () {
        gsap.to(".img-a6-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px,0px)"
        })
        gsap.to(".img-a6-2", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px,0px)"
        })
    })
    $(".c-a-6").mouseleave(function () {
        gsap.to(".img-a6-1", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(-100%, 0px) rotate(-45deg)"
        })
        gsap.to(".img-a6-2", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(100%, 0px) rotate(45deg)"
        })
    })

    $(".c-a-7").hover(function () {
        gsap.to(".img-a7-1", {
            duration: 1.5,
            ease: "elastic.out(0.6,0.4)",
            transform: "translate(-15%,0px) rotate(66deg)"
        })
        gsap.to(".img-a7-2", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(0px,0px)"
        })
    })
    $(".c-a-7").mouseleave(function () {
        gsap.to(".img-a7-1", {
            duration: 1.5,
            ease: "elastic.out(0.6,0.4)",
            transform: "translate(-100%, 0px)"
        })
        gsap.to(".img-a7-2", {
            duration: 1.5,
            ease: "elastic.out(1,0.4)",
            transform: "translate(100%, 0px)"
        })
    })

});