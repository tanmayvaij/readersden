import { useNavigate } from "react-router-dom"

export default function Intro() {

    const navigate = useNavigate()

    return (
        <div id="intro" className="flex bg-gray-900 items-center justify-center flex-col min-h-screen">

            <img className=" h-64 p-5 " src="brand.png" alt="" />

            <div className="text-center text-lg">
                <p className="text-yellow-500">
                    A small step towards <span className="text-green-500"> <i className="fa-solid fa-earth-americas"></i>  Green Earth. </span>
                </p>
            </div>

            <div className="mt-10">

                <button 
                    type="button" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={ () => navigate("/signin") }
                >
                    Sign In
                </button>

                <button 
                    type="button" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={ () => navigate("/signup") }
                >
                    Sign up
                </button>

            </div>

        </div>
    )
}
