import { useEffect, useState } from "react"
import { getUsers } from "../services/user"
import Datatable from "../components/molecules/Datatable"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(res => {
            setUsers(res.data)
        }).catch(err => {
            console.error("Failed to fetch users:", err)
        })
    }, [])

    return (
        <div>
            <span className='text-xl font-semibold'>Users</span>
            <div className='my-3 p-4 bg-white shadow rounded overflow-x-auto'>
                <Datatable columnsArr={['Name', 'Email', 'Role']} dataArr={users} />
            </div>
        </div>
    )
}

export default Users