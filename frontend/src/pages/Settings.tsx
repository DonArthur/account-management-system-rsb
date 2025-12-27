import { useEffect, useState, type FormEvent } from "react"
import type { User } from "../types/user"
import { getProfile, updateProfile, uploadAvatar } from "../services/profile"
import Button from "../components/atoms/Button"
import Upload from "../components/molecules/Upload"

const Settings = () => {
    const [profile, setProfile] = useState<User | null>(null)
    const [form, setForm] = useState<User | null>(null)

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        if (!form) return
        const res = await updateProfile(form)
        if (res && res.status === 200) {
            setProfile(res.data)
        }
    }

    const handleAvatarUpload = async (file: File) => {
        const formData = new FormData()
        formData.append('file', file)

        const res = await uploadAvatar(formData)
        if (res && res.status === 200) {
            setProfile({ ...profile, avatarUrl: res.data.avatarUrl } as User)
            setForm({ ...form, avatarUrl: res.data.avatarUrl } as User)
        }
    }

    useEffect(() => {
        if (!profile) {
            getProfile().then(res => {
                setProfile(res.data)
                setForm(res.data)
            })
        }
    }, [profile])

    return (
        <div>
            <span className='text-xl font-semibold'>Settings</span>
            <div className='my-3 p-4 bg-white shadow rounded whitespace-pre-wrap break-all'>
                <div className='text-gray-800'>
                    {profile && form ? <form onSubmit={submit}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded" />
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded" />
                        <label htmlFor="phoneNum">Phone Number</label>
                        <input id="phoneNum" type="tel" value={form.phoneNum} onChange={(e) => setForm({ ...form, phoneNum: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded" />
                        <label htmlFor="role">Role</label>
                        <select id="role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="block w-full mb-4 p-2 border border-gray-300 rounded">
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                        <label>Upload Avatar</label>
                        <Upload existingImg={form.avatarUrl} onUpload={handleAvatarUpload} />
                        <Button type='submit' variant='primary'>Save Changes</Button>
                    </form> : 'Loading...'}
                </div>
            </div>
        </div>
    )
}

export default Settings