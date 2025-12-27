import type { ReactNode } from "react"
import Sidebar from "../organisms/Sidebar"
import Navbar from "../organisms/Navbar"

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex flex-1'>
                <Sidebar />
                <main className='flex-1 p-4'>{children}</main>
            </div>
        </div>
    )
}

export default MainLayout