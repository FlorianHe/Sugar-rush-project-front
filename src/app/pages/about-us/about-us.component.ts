import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  public selin: Person = {
    name: 'Selin',
    description: "Issue d'une reconversion professionnelle, Selin est passionnée d'apprentissage et d'amélioration continue dans le domaine du développement. Elle apporte sa créativité et sa rigueur à l'équipe.",
    image: "assets/images/Selin.jpg",
    linkedin: 'https://www.linkedin.com/in/selin-a-4534a1200/',
    github: 'https://github.com/SelinGitt',
    color: "un",
  };

  public florian: Person = {
    name: 'Florian',
    description: " Fort d'une expérience de plus de 5 ans dans le développement, Florian est le pilier technique de l'équipe. Son expertise et sa rigueur garantissent la qualité des solutions que nous proposons.",
    image: "assets/images/florian.png",
    linkedin: 'https://www.linkedin.com/in/florian-helaine/',
    github: 'https://github.com/FlorianHe/',
    color: "fun"
  };

  public alexandre: Person = {
    name: 'Alexandre',
    description: "Membre discret mais toujours prêt à contribuer, Alexandre sait se montrer disponible. Son attention aux détails et son approche méthodique font de lui un atout précieux dans la réalisation de nos projets.",
    image: "assets/images/Alex.jpg",
    linkedin: 'https://www.linkedin.com/in/alexandre-b-07b3a491/',
    github: 'https://github.com/alexboutemy',
    color: "sport"
  };

  public guillaume: Person = {
    name: 'Guillaume',
    description: "Joyeux animateur, l'humour de Guillaume et son énergie positive maintiennent l'ambiance agréable au sein de l'équipe. Il sait apporter une touche de légèreté dans les moments les plus intenses.",
    image: "assets/images/guillaume.png",
    linkedin: 'https://www.linkedin.com/in/11gg/',
    github: 'https://github.com/Guillaum6e/',
    color: "carie"
  };

  public patrick: Person = {
    name: 'Patrick',
    description: "Le membre sénior de l'équipe, apporte son expérience variée et son expertise. Toujours avide de nouvelles connaissances, il cherche à se surpasser et à partager son savoir avec les autres membres.",
    image: "assets/images/Patrick.jpg",
    linkedin: 'https://viadeo.journaldunet.com/p/patrick-harle-159799',
    github: '"https://github.com/pwah59"',
    color: "miam"
  };

  public benjamin: Person = {
    name: 'Benjamin',
    description: " Formateur de notre session. Toujours prêt à nous aider et à nous guider, il est notre référent technique. Il est toujours de bonne humeur et sait nous motiver. Nous avons pu, grâce à lui, réaliser ce projet.",
    image: "assets/images/Benji.png",
    linkedin: 'https://www.linkedin.com/in/benjamin-beugnet-web-services/',
    github: "https://github.com/Benja-san",
    color: "ca-coute-bonbon"
  };

  public team: Person[] = [this.selin, this.florian, this.alexandre, this.guillaume, this.patrick, this.benjamin];
  
}
