"use client"

import React, {useState} from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function LayoutDashboard({children}:{children:React.ReactNode}) {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return(
        <div className="min-h-screen flex flex-col">
            <Header toggleSidebar={toggleSidebar}/>
            <Sidebar isSidebarOpen={isSidebarOpen}/>
            <main className="flex-grow py-20 lg:pl-60 sm:pl-64 bg-gray-100 text-black">
                <div className="px-4 lg:px-8 sm:px-6">
                    {children}
                </div>
            </main>
        </div>
    )
}