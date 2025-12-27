import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"
import { useState } from "react"
import { login as loginService } from '../services/auth'
import Input from "../components/atoms/Input"
import Button from "../components/atoms/Button"

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await loginService({ email, password })
        login(res.data.token, res.data.userDetails)
        navigate('/dashboard')
    }

    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-900">
            <form onSubmit={submit} className="bg-rose-700 text-white py-6 px-12 rounded shadow-md flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password" className="block mb-2">Password</label>
                <Input id="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default Login