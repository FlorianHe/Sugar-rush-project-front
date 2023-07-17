import { Component, Input } from '@angular/core';
import { ParagraphService } from 'src/app/services/paragraph-api.service';
import { Paragraph } from 'src/app/shared/interfaces/paragraph';
import { CSS_PARAGRAPH } from 'src/app/shared/globals/css_class';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {

  @Input()
  paragraph!: Paragraph;

  @Input()
  categorySlug!: String;

  CSS_PARAGRAPH = CSS_PARAGRAPH;


  constructor(private paragraphService: ParagraphService) { }


}
