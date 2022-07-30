import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']

})
export class FaqComponent {
  openArray: boolean[] = [false, false, false]
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}





