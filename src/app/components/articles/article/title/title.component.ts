import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  article: Article = {
    id: 1,
    title: "Le caramel qui colle aux dents : pour ou contre ?",
    publication_date: new Date(2019, 0o1, 0o2, 12, 34, 56),
    modification_date: new Date(2019, 0o1, 0o2, 12, 34, 56),
    lead: "Un sondage a été réalisé auprès de membres de la Wild Code School pour savoir s'ils aimaient le caramel qui colle aux dents. Des résultats surprenants, ou pas...",
    content: "Bla bla Content Bla Bla",
    publication_image: "/assets/images/caramel.jpg",
    author: {
      "id": 1,
      "firstname": "Florian",
      "lastname": "Helaine"
    },
    "categories": [{
      "id": 1,
      "name": "Miam"
    }
    ]
  };

}
