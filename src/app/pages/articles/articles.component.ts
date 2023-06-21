import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ARTICLES } from 'src/app/shared/datas/articles';
import { APP_ROUTES } from 'src/app/shared/globals/routes';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles = ARTICLES;
  constructor(public articlesService:HttpClient){}
  public APP_ROUTES = APP_ROUTES;

  //public articles=this.articlesService.get<any[]>('http://json.helaine.eu/api/articles.json ');

/*ngOnInit(): void {
    this.articles.subscribe((articles) => {
      this.articles = articles;
    });

    console.log(this.articles);
}
*/
ngOnInit(): void {
}
}
