const swiper = new Swiper(".mySwiper", {
    directions: "horizontal",
    loop: true,
    lazy: true,
    spaceBetween: 30,
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

// const swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween = 10,
//     thumbs: {
//         swiper: swiper,
//     },
// });

// const swiper2 = new Swiper(".mySwiper3", {
//     spaceBetween = 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
// });