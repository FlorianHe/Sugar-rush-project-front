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

  constructor(private articleApiService: ArticleApiService, private categoriesService: CategoriesApiService, private userService: UserService) {
    this.article={  id: 0,isMain: false,title: '',slug: '',publicationDate: new Date(),
      modificationDate: new Date (), listParagraphs: [], leads: '',publicationImage:'',
      author: { id:this.user.id },
      category: {id:1,name:'fun',slug:'fun'}};

  }

  slugify(str: string){
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    }

  duplicateContent(event: any) {
    const iconElement = event.currentTarget as HTMLElement;
    const contentDiv = iconElement.closest('.content') as HTMLElement;
    const clonedContent = contentDiv.cloneNode(true) as HTMLElement;

    // Réinitialiser les champs de texte dans la copie dupliquée
    clonedContent.querySelectorAll('input[type="text"]').forEach((input: any) => {
        input.value = '';
    });

    clonedContent.querySelectorAll('textarea').forEach((input: any) => {
      input.value = '';
  });
    // Supprimer l'écouteur de clic de l'icône "plus" cloné pour éviter les duplications répétées
    const clonedIcon = clonedContent.querySelector('.fa-plus');
    clonedIcon?.removeEventListener('click', this.duplicateContent);

    // Ajouter l'écouteur de clic à l'icône "plus" du nouveau contenu cloné
    clonedIcon?.addEventListener('click', (event) => this.duplicateContent(event));

    // Ajouter le contenu dupliqué après la balise d'origine
    contentDiv.parentNode?.insertBefore(clonedContent, contentDiv.nextSibling);
}

getParagraphs(){

  let i=0;
  let j=2;

  let nextSelector='#page-content > app-creation-article > div > div:nth-child('+j+') > div.sub-content > div > select';
  let nextInputElement = document.querySelector(nextSelector) as HTMLInputElement | null;

  while(nextInputElement!==null){

    let selectorTypeContent='#page-content > app-creation-article > div > div:nth-child('+j+') > div.sub-content > div > select';
    let selectorTitle='#page-content > app-creation-article > div > div:nth-child('+j+') > div.title-text > input';
    let selectorContent='#page-content > app-creation-article > div > div:nth-child('+j+') > div.title-text > textarea';

    this.paragraphTitle[i]=(document.querySelector(selectorTitle) as HTMLInputElement).value;
    this.paragraphTypeContent[i]=(document.querySelector(selectorTypeContent)as HTMLInputElement).value;
    this.paragraphContent[i]=(document.querySelector(selectorContent)as HTMLInputElement).value;

    i+=1
    j+=1
    nextSelector='#page-content > app-creation-article > div > div:nth-child('+j+') > div.sub-content > div > select';
    nextInputElement = document.querySelector(nextSelector) as HTMLInputElement | null;
  }
}

onSubmit(){
this.getParagraphs();

let jsonParagraphs : Paragraph[] = [];

for (let i = 0; i < this.paragraphTypeContent.length; i++) {
  jsonParagraphs.push({
        id:0,
        typeContent: this.paragraphTypeContent[i][0],
        title: this.paragraphTitle[i],
        content: this.paragraphContent[i],
        
    });
}

  this.article.slug=this.slugify(this.article.title);
  this.article.listParagraphs = jsonParagraphs;
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
