import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Authbar() {

    const location = useLocation()
    const navigate = useNavigate()

    const res = location.pathname == "/signin" || location.pathname == "/signup"

    return (
        <nav className="fixed w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">

                <a href="/" className="flex items-center">
                    <img src="favicon.png" className="bg-gray-800 p-2 rounded-3xl h-6 mr-3 sm:h-12" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Reader's Den</span>
                </a>

                <div className="flex md:order-2">

                    {

                        (res) &&

                        <button 
                            onClick={ () => navigate("/") }
                            type="button" 
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                            aria-expanded="false"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                    }

                </div>

            </div>
        </nav>
    )
}
