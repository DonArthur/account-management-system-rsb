import api from '../api/axios'
import type { User } from '../types/user'

export const login = (data: { email: string; password: string }) => {
    return api.post('/api/auth/login', data)
}

export const register = (data: User) => {
    return api.post('/api/auth/register', data)
}
