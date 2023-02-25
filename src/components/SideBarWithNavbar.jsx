import { useState } from "react"
import { GlobalStates } from "../context"

export default function SideBarWithNavbar() {

    const { user } = GlobalStates()

    const [ sidebaron, setSidebaron ] = useState("-translate-x-full")

    const logOut = () => {
        localStorage.clear()
        location.href = "/"
    }

    const sideBarOnOff = () => {
        ( sidebaron == "" ) ? setSidebaron("-translate-x-full") : setSidebaron("")
    }

    return (
        <>
            <nav className="fixed w-full top-0 z-50  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">

                            <button
                                onClick={ sideBarOnOff }
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    aria-hidden="true" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        clipRule="evenodd" 
                                        fillRule="evenodd" 
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    >
                                    </path>
                                </svg>
                            </button>

                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src="favicon.png" className="h-8 bg-gray-800 rounded-3xl mr-3 p-2" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Reader's Den</span>
                            </a>

                        </div>

                    </div>
                </div>
            </nav>

            <aside 
                id="logo-sidebar" 
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${sidebaron} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} 
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">

                    <div className="mb-5 flex flex-col items-center justify-center border-b-2 border-black">

                    <i className="p-3 text-3xl fa-solid fa-book-open-reader"></i>

                        <div className="font-medium py-2">
                            <p>{user?.name}</p> 
                            <p>{user?.email}</p>
                            <p>{user?.number}</p>
                        </div>

                    </div>

                    <ul className="space-y-2 border-b-2 border-black">

                        <li>
                            <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="fa-solid fa-house"></i>
                                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="/#/my_books" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i className="fa-solid fa-book"></i>
                                <span className="ml-3">My Books</span>
                            </a>
                        </li>

                        <li className="pb-5">
                            <a 
                                onClick={logOut} 
                                href="#" 
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <i className="fa-solid fa-door-open"></i>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </a>
                        </li>

                    </ul>

                </div>
            </aside>

        </>
    )
}