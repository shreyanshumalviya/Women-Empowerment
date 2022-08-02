import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  animation,
  trigger,
  transition,
  query,
  style,
  animate,
  group,
  state,
} from '@angular/animations';

const animationCarousel = [
  state('outright', style({ transform: `translateX(100%)` })),
  state('outleft', style({ transform: `translateX(-100%)` })),
  transition('void=>inleft', [style({ transform: `translateX(0)` })]),
  transition('void=>outleft', [style({ transform: `translateX(-100%)` })]),

  transition('*=>inright', [
    style({ transform: `translateX(-100%)` }),
    animate('260ms ease-in', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>inleft', [
    style({ transform: `translateX(100%)` }),
    animate('260ms ease-in', style({ transform: `translateX(0)` })),
  ]),
  transition('*=>outleft', [
    animate('260ms ease-in', style({ transform: `translateX(-100%)` })),
  ]),
  transition('*=>outright', [
    animate('260ms ease-in', style({ transform: `translateX(100%)` })),
  ]),
];
const animationCarouselTranslateY = [
  state('outright', style({ transform: `translateY(100%)` })),
  state('outleft', style({ transform: `translateY(-100%)` })),
  transition('void=>inleft', [style({ transform: `translateY(0)` })]),
  transition('void=>outleft', [style({ transform: `translateY(-100%)` })]),

  transition('*=>inright', [
    style({ transform: `translateY(-100%)` }),
    animate('260ms ease-in', style({ transform: `translateY(0)` })),
  ]),
  transition('*=>inleft', [
    style({ transform: `translateY(100%)` }),
    animate('260ms ease-in', style({ transform: `translateY(0)` })),
  ]),
  transition('*=>outleft', [
    animate('260ms ease-in', style({ transform: `translateY(-100%)` })),
  ]),
  transition('*=>outright', [
    animate('260ms ease-in', style({ transform: `translateY(100%)` })),
  ]),
];
const animationCarouselFade = [
  state('outright', style({ opacity: 0 })),
  state('outleft', style({ opacity: 0 })),
  transition('void=>inleft', [style({ opacity: 1 })]),
  transition('void=>outleft', [style({ opacity: 0 })]),

  transition('*=>inright', [
    style({ opacity: 0 }),
    animate('260ms ease-in', style({ opacity: 1 })),
  ]),
  transition('*=>inleft', [
    style({ opacity: 0 }),
    animate('260ms ease-in', style({ opacity: 1 })),
  ]),
  transition('*=>outleft', [animate('260ms ease-in', style({ opacity: 0 }))]),
  transition('*=>outright', [animate('260ms ease-in', style({ opacity: 0 }))]),
];

const animationThumbail = [
  state('true', style({ transform: `translateX({{margin}})` }), {
    params: { margin: 0 },
  }),
  state('false', style({ transform: `translateX({{margin}})` }), {
    params: { margin: 0 },
  }),
  transition('true<=>false', [animate('260ms ease-in')]),
];

@Component({
  selector: 'custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css'],
  animations: [
    trigger('animImageSlider', animationCarousel),
    trigger('animationThumbail', animationThumbail),
  ],
})
export class CustomCarouselComponent implements OnInit {
  @ViewChild('thumbail', { static: true }) thumbail: ElementRef;
  @Input() set images(value) {
    this._images = value;
    this.slideControl = value.map((x, index) => (index ? 'outleft' : 'inleft'));
  }
  get images() {
    return this._images;
  }
  @Input() height = 0;
  counter: number = 0;
  _images;
  slideControl: any[];
  width: number = 0;
  counterThumb: number = 0;
  thumbailMargin: number = 0;
  thumbailMarginRigth: number = 2;
  thumbailWidth: number = 60;
  thumbailAnimation: boolean | null = null;

  resizeSub: Subscription;
  posIni: any;
  constructor() {}

  ngOnInit() {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe((_) => this.posThumbail(this.counter));
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
  }
  move(pos) {
    const offset = this.posIni - pos;
    if (offset < -100) this.change('right');

    if (offset > 100) this.change('left');
  }
  change(direction: string) {
    const incr = direction == 'right' ? -1 : +1;
    const prev = this.counter;
    this.counter =
      (this.counter + this.images.length + incr) % this.images.length;
    this.onSlide(this.counter, prev, direction);
  }
  setIndex(index: number) {
    if (index != this.counter) {
      const prev = this.counter;
      this.counter = index;
      const direction = prev > index ? 'right' : 'left';
      this.onSlide(this.counter, prev, direction);
    }
  }
  onLoad(el: any) {
    this.width = el.getBoundingClientRect().width;
  }

  onSlide(current, prev, direction) {
    this.slideControl[current] = 'in' + direction;
    this.slideControl[prev] = 'out' + direction;
    this.posThumbail(current);
  }
  onLoadThumbail() {
    this.counterThumb++;
    if (this.counterThumb == this.images.length) this.posThumbail(0);
  }
  posThumbail(current: number) {
    const width = this.thumbailWidth + this.thumbailMarginRigth;
    const widthWrapper =
      this.thumbail.nativeElement.getBoundingClientRect().width;

    let newMargin: number = 0;
    if (widthWrapper > width * this.images.length)
      newMargin = (widthWrapper - width * this.images.length) / 2;
    else {
      const middle = widthWrapper / 2 - width * current;
      const min = widthWrapper - width * this.images.length;

      newMargin = Math.floor(middle > 0 ? 0 : middle < min ? min : middle);
    }
    if (newMargin != this.thumbailMargin) {
      this.thumbailMargin = newMargin;
      this.thumbailAnimation = !this.thumbailAnimation;
    }
  }
}
