import { Comment } from '../interfaces/comment';

export const COMMENT: Comment[] = [
    {
        "id": 1,
        "content": "C'est trop bon le caramel !",
        "articleId": 1,
        "creation_date": new Date("2023-06-15T15:14:00.000Z"),
        "user": {
            "id": 1,
            "firstname": "Florian",
            "lastname": "Helaine",
        }

    },

    {
        "id": 2,
        "content": "Quelle horreur le caramel, vraiment !",
        "articleId": 1,
        "creation_date": new Date("2023-06-15T15:14:00.000Z"),
        "user": {
            "id": 2,
            "firstname": "Selin",
            "lastname": "Agzibuyuk",
        }
    },
    {
        "id": 3,
        "content": "Personnellement, je ne suis ni pour, ni contre. Je n'aime juste pas le goût du caramel !",
        "articleId": 1,
        "creation_date": new Date("2023-06-15T15:14:00.000Z"),
        "user": {
            "id": 3,
            "firstname": "Patrick",
            "lastname": "Harlé",
        }
    },
]
