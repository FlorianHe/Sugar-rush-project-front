import { Authorities } from "./authorities"

export interface User {
    id: number
    firstName?: string
    lastName?: string
    username?: string
    userStringName?: string
    email?: string
    password?: string
    authorities?: Authorities[]
}