import { Component, Input } from '@angular/core';
import { Paragraph } from 'src/app/shared/interfaces/paragraph';

@Component({
  selector: 'app-sub-section',
  templateUrl: './sub-section.component.html',
  styleUrls: ['./sub-section.component.scss']
})
export class SubSectionComponent {

  @Input() subsections!:Paragraph[];
  @Input() subsection!:Paragraph;
  @Input() index!:number;


  addSubSection(){
    this.subsections.push({id:0,title:'',typeContent:'',content:''});
      }

  removeSubSection(){
    this.subsections.splice(this.index,1);
  }
}
