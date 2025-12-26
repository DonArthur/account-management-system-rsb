import React from 'react'
import { useAuth } from '../context/useAuth'
import { Navigate, useNavigate } from 'react-router-dom'
import { setNavigateFunction } from './helpers/navigate'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { token } = useAuth()
    const navigate = useNavigate()
    setNavigateFunction(navigate)

    return token ? children : <Navigate to="/login" />
}

export default ProtectedRoute