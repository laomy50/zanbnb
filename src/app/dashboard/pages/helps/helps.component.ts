import { Component, OnInit } from '@angular/core';
import { faqData } from '../faqData';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.component.html',
  styleUrl: './helps.component.css'
})
export class HelpsComponent  implements OnInit {
  faqData = faqData;

  constructor() { }

  ngOnInit(): void {
  }
}
