export class Slide {
  private container: Element;
  private slides: Element[];
  private controls: Element;
  private duration: number;
  private slide: Element;
  private index: number;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    duration: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.duration = duration;

    this.index = 0;
    this.slide = this.slides[this.index];
  }

  hide(el: Element) {
    el.classList.remove("active");
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add("active");
  }
}
