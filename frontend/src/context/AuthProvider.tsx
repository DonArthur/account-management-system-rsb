import { useState } from 'react'
import { AuthContext } from './AuthContext'
import type { User } from '../types/user'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [user, setUser] = useState<User | null>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null)

    const login = (jwt: string, userDetails: User) => {
        localStorage.setItem('token', jwt)
        localStorage.setItem('user', JSON.stringify(userDetails))
        setToken(jwt)
        setUser(userDetails)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ token, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}