import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element /*valeur passé par Main.j*/) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 24,

      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },

      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        1335: {
          slidesPerView: 4,
        },

        1000: {
          slidesPerView: 3,
        },

        675: {
          slidesPerView: 2,
        },

        100: {
          slidesPerView: 1,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = {
        loop: true,
      };
    }

    if ('slides' in this.element.dataset || this.options.slidesPerView) {
      this.options.slidesPerView = parseFloat(this.element.dataset.slides);
    }
  }

  init() {
    this.setOptions();
    console.log(this.options);
    new Swiper(this.element, this.options);
    console.log('Initialisation de ma composante Carousel');
  }
}
