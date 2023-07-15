import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugar-meter',
  templateUrl: './sugar-meter.component.html',
  styleUrls: ['./sugar-meter.component.scss'],
})
export class SugarMeterComponent implements OnInit {

  lotsOfTabs = new Array(10).fill(0).map((_, index) => `Tab ${index}`);

  ngOnInit(): void {
    const description = document.getElementById('meter-description-text');
    const box = document.getElementById('meter-description');
    const title = document.getElementById('meter-description-title');
    let height = title!.getBoundingClientRect().height + description!.getBoundingClientRect().height;
    box!.style.height = height + 'px';
  }

  async slideDescription() {
    const description = document.getElementById('meter-description-text');
    const box = document.getElementById('meter-description');
    const title = document.getElementById('meter-description-title');
    if (description?.style.transform === 'translateY(-100%)') {
      let height = title!.getBoundingClientRect().height + description.getBoundingClientRect().height;
      box!.style.height = height + 'px';
      description.style.transform = 'translateY(0%)';
      description.style.visibility = 'visible';
    } else {
      let height = title!.getBoundingClientRect().height;
      description!.style.transform = 'translateY(-100%)';
      description!.style.visibility = 'hidden';
      box!.style.height = height + 'px';
    }
  }
}
