import Timeout from "./Timeout";

export class Slide {
  private container: Element;
  private slides: Element[];
  private controls: Element;
  private duration: number;
  private slide: Element;
  private index: number;
  private timeout: Timeout | null;
  private pausedTimeout: Timeout | null;
  private paused: boolean;
  private thumbItems: HTMLElement[] | null;
  private thumb: HTMLElement | null;

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

    this.timeout = null;
    this.pausedTimeout = null;
    this.paused = false;
    this.index = +localStorage.getItem("activeSlide")! ?? 0;
    this.slide = this.slides[this.index];
    this.thumbItems = null;
    this.thumb = null;
    this.init();
  }

  private hide(el: Element) {
    el.classList.remove("active");
    if (el instanceof HTMLVideoElement) {
      el.currentTime = 0;
      el.pause();
    }
  }

  private show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    localStorage.setItem("activeSlide", String(this.index));

    if (this.thumbItems) {
      this.thumb = this.thumbItems[this.index];
      this.thumbItems.forEach((el) => el.classList.remove("active"));
      this.thumb.classList.add("active");
    }
    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add("active");

    if (this.slide instanceof HTMLVideoElement) {
      this.autoVideo(this.slide);
    } else {
      this.auto(this.duration);
    }
  }

  private autoVideo(video: HTMLVideoElement) {
    video.muted = true;
    video.play();
    let firstPlay = true;
    video.addEventListener("playing", () => {
      if (firstPlay) this.auto(video.duration * 1000);
      firstPlay = false;
    });
  }

  private auto(time: number) {
    this.timeout?.clear();
    this.timeout = new Timeout(() => this.next(), time);
    if (this.thumb) {
      this.thumb.style.animationDuration = `${time}ms`;
    }
  }

  private pause() {
    document.body.classList.add("paused");
    this.pausedTimeout = new Timeout(() => {
      this.timeout?.pause();
      this.paused = true;
      this.thumb?.classList.add("paused");
      if (this.slide instanceof HTMLVideoElement) this.slide.pause();
    }, 300);
  }

  private continue() {
    document.body.classList.remove("paused");
    this.pausedTimeout?.clear();
    if (this.paused) {
      this.paused = false;
      this.timeout?.continue();
      this.thumb?.classList.remove("paused");

      if (this.slide instanceof HTMLVideoElement) this.slide.play();
    }
  }

  private addControls() {
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "anterior";
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "proximo";

    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);

    this.controls.addEventListener("pointerdown", () => this.pause());
    document.addEventListener("pointerup", () => this.continue());
    document.addEventListener("touchend", () => this.continue());
    prevButton.addEventListener("pointerup", () => this.prev());
    nextButton.addEventListener("pointerup", () => this.next());
  }

  private init() {
    if (this.paused) return;

    this.addControls();
    this.show(this.index);
    this.addThumbItems();
  }

  private next() {
    if (this.paused) return;

    const nextIndex = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(nextIndex);
  }

  private prev() {
    const prevIndex = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prevIndex);
  }

  private addThumbItems() {
    const thumbContainer = document.createElement("div");
    thumbContainer.id = "slide-thumb";
    for (let i = 0; i < this.slides.length; i++) {
      thumbContainer.innerHTML += `<span><span class="thumb-item"></span></span>`;
    }
    this.controls.appendChild(thumbContainer);
    this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
  }
}
