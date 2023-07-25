import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { UserService } from 'src/app/services/user.service';
import { Article } from 'src/app/shared/interfaces/article';
import { Paragraph } from 'src/app/shared/interfaces/paragraph';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.component.html',
  styleUrls: ['./creation-article.component.scss']
})
export class CreationArticleComponent implements OnInit {
  
  article!:Article;

  user = this.userService.getUser() as User;

  categories!:any;

  paragraphTitle:string[]=[];
  paragraphTypeContent:string[]=[];
  paragraphContent:string[]=[];

  subsections:Paragraph[]=[];
  
  
  constructor(private articleApiService: ArticleApiService, private categoriesService: CategoriesApiService, private userService: UserService) {
    this.article={  id: 0,isMain: false,title: '',slug: '',publicationDate: new Date(),
      modificationDate: new Date (), listParagraphs: [], leads: '',publicationImage:'',
      author: { id:this.user.id },
      category: {id:1,name:'fun',slug:'fun'}};
    
      this.subsections=[{id:0,title:'',typeContent:'',content:''}];

  }

  slugify(str: string){
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    }

onSubmit(){

  this.article.slug=this.slugify(this.article.title);
  this.article.listParagraphs = this.subsections;
  console.log(this.subsections);
  this.articleApiService.createArticle(this.article).subscribe(()=> {
  });
}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
      }
    );
    };
  };
