import { User } from "./user";

export interface Profile {
  id: number;
  name: string;
  birthDate: Date;
  logo: string;
  user?: User;
}
