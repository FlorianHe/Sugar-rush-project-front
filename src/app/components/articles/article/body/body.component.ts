import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input()
  content!: string;

}
