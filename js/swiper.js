import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 10,
    effect:"fade",
    direction: "horizontal",
    loop: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        // delay: 1000,
      },
    // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});
