import { Component, OnInit } from '@angular/core';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.component.html',
  styleUrls: ['./creation-article.component.scss']
})
export class CreationArticleComponent implements OnInit {
  
  article!:Article;

  categories!:any;

  paragraphTitle:string[]=[];
  paragraphTypeContent:string[]=[];
  paragraphContent:string[]=[];

  constructor(public categoriesService: CategoriesApiService) {
    this.article={  id: 1,isMain: false,title: '',slug: '',publicationDate: new Date(),
      modificationDate: new Date (),leads: '',content: '',publicationImage:'',
      author: {   id:1, firstname:'',lastname:''},
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

let jsonParagraphs = [];

for (let i = 0; i < this.paragraphTypeContent.length; i++) {
  jsonParagraphs.push({
        id:i+1,
        type: this.paragraphTypeContent[i][0],
        title: this.paragraphTitle[i],
        content: this.paragraphContent[i],
        
    });
}

  this.article.slug=this.slugify(this.article.title);
  
  console.log(JSON.stringify(this.article));
  console.log(JSON.stringify(jsonParagraphs));
}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
      }
    );
    };
  };
