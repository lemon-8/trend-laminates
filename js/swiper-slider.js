const swiper = new Swiper(".mySwiper", {
    directions: "horizontal",
    loop: true,
    lazy: true,
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullet: true,
        clickable: true,
    }
})