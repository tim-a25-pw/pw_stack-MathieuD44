export default class Scrolly {
  constructor(element) {
    this.element = element;

    this.options = {
      rootMargins: '0px 0px 0px 0px' /*zone de trigger = viewport*/,
      noRepeat: false,
    };

    this.init();
  }

  init() {
    this.setOptions();
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    );

    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      /*chaque element avec le data-scrolly*/
      const item = items[i];
      observer.observe(item); /*regarde chaque item individuellement*/
    }
  }

  setOptions() {
    if ('noRepeat' in this.element.dataset) {
      this.options.noRepeat = true;
    }
  }

  watch(entries /*tableau des observés*/, observer /*desact post tigger*/) {
    //
    //active chaque item entré dans la zone
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target; //vise chaque element HTML
      if (entry.isIntersecting) {
        //si dans zone, active
        target.classList.add('is-active');

        //stoper l'observation, désactive (optionel)
        if (this.options.noRepeat) {
          observer.unobserve(target);
        }
      } else {
        //si hors zone, désactive
        target.classList.remove('is-active');
      }
    }
  }
}
