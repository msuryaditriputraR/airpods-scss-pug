const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});

/*-- ANIMATE GSAP --*/

/*TEXT*/
gsap.from(".description__title", {
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    y: 50,
});
gsap.from(".description__desc", {
    opacity: 0,
    duration: 1.5,
    delay: 0.8,
    y: 50,
});

/*IMG AIRPOD*/
gsap.from(".airpod1", { opacity: 0, duration: 2, delay: 1.2, y: -40 });
gsap.from(".airpod2", { opacity: 0, duration: 2, delay: 1.4, y: 40 });

/*NAV*/
gsap.from(".nav__logo", { opacity: 0, duration: 2.5, delay: 1.5, y: 25 });
gsap.from(".nav__toggle", { opacity: 0, duration: 2.5, delay: 1.7, y: 25 });
gsap.from(".nav__item", {
    opacity: 0,
    duration: 2.5,
    delay: 1.9,
    y: 25,
    ease: "expo.out",
    stagger: 0.3,
});
gsap.from(".nav__btn", { opacity: 0, duration: 2.5, delay: 2, y: 25 });

/*-- ANIMATE SCROLLMAGIC --*/
const animate = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

/*specification*/
animate
    .from(".specification__img", { opacity: 0, y: 25 })
    .from(".specification__box", {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "expo.out",
        stagger: 0.4,
    });

const scene = new ScrollMagic.Scene({
    triggerElement: ".specification__box",
})
    .setTween(animate)
    .addTo(controller);

function updatePercentage() {
    animate.progress();
}
