import type { ReactNode } from "react"
import Sidebar from "../organisms/Sidebar"

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-1'>
                <Sidebar />
                <main className='flex-1 p-4'>{children}</main>
            </div>
        </div>
    )
}

export default MainLayout