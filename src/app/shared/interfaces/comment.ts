import { User } from "./user";

export interface Comment {
    id: number;
    content: string;
    articleId: number;
    creation_date?: Date;
    user: User;
}