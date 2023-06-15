import { Article } from "../interfaces/article";

export const ARTICLE: Article = {
    "id": 1,
    "title": "Titre 1",
    "publication_date": new Date("2023-06-12T14:30:00.000Z"),
    "modification_date": new Date("2023-06-12T14:45:00.000Z"),
    "lead" : "Blabla Lead Blabla",
    "content" : "Bla bla Content Bla Bla",
    "publication_image": "https://media.istockphoto.com/id/516358950/fr/photo/partie-de-sucre-blanc.jpg?s=612x612&w=0&k=20&c=PQdHZX3hIDHlQQHHoHJNAGxyQun5ORH_4kXJteRYyUU=",
    "author" : {
        "id" : 1,
        "firstname" : "Florian",
        "lastname" : "Helaine"
    },
    "categories" : [{
        "id" : 1,
        "name" : "Carie"
    },
    {
        "id" : 2,
        "name" : "Miam"
    }
    ]
}