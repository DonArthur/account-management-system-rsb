import type { User } from "./user";

export interface AuthContextType {
    token: string | null
    user: User | null
    login: (jwt: string, userDetails: User) => void
    logout: () => void
}