import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugar-data',
  templateUrl: './sugar-data.component.html',
  styleUrls: ['./sugar-data.component.scss']
})
export class SugarDataComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        const svg = document.getElementById(`svg-${i}`);
        if (svg!.id === 'svg-0' || svg!.id === 'svg-2' || svg!.id === 'svg-4' || svg!.id === 'svg-6') {
          svg!.style.right = `calc(5% + ${svg!.getBoundingClientRect().width}px)`;
        }
        if (svg) {
          svg.style.width = svg.getBoundingClientRect().height + 'px';
        }
      }
    }, 0);
  }
}


