import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { GlobalStates } from "../context"

export default function BookCard(props) {

    const loc = useLocation()

    const { apiUrl } = GlobalStates()

    const res = (loc.pathname == "/my_books") ? true : false

    const confirmDelete = async () => {

        const ans = prompt("Type 'yes' to delete book")

        if (ans != "yes") return

        const res = await fetch(`${apiUrl}/api/book/delete_book_by_id`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ _id: props?._id })
        })

        const data = await res.json()

        if (data.acknowledged == true) location.reload()

    }

    const disableBook = async () => {

        const res = await fetch(`${apiUrl}/api/book/disable_book_view`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ _id: props?._id })
        })

        const data = await res.json()  

        if (data.acknowledged == true) location.reload()

    }

    const enableBook = async () => {

        const res = await fetch(`${apiUrl}/api/book/enable_book_view`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ _id: props?._id })
        })

        const data = await res.json()  

        if (data.acknowledged == true) location.reload()

    }

    return (

        <div className="w-64 bg-white h-[440px] max-w-sm m-4 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-opacity-70">
            
            <div className="flex items-center justify-center p-2">
                <img className="rounded-t-lg w-40 h-52" src={props?.img} alt="" />
            </div>

            <div className="p-5">

                <h5 className="sm:text-base mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props?.name.substring(0, 32)}
                </h5>

                <p className="sm:text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {props?.desc.substring(0, 55)} ...
                </p>

                <div className="text-center space-x-2">

                    <Link to={`/${props?._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i className="fa-solid fa-street-view"></i>
                    </Link>

                    {
                        res &&

                        <button onClick={confirmDelete} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    }

                    {
                        

                        props?.visible ? (

                            res &&

                            <button
                                onClick={disableBook}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                <i className="fa-solid fa-eye"></i>
                            </button>
                        ) : (

                            res &&

                            <button 
                                onClick={enableBook}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                <i className="fa-solid fa-eye-slash"></i>
                            </button>
                        )
                    }

                </div>

            </div>
        </div>

    )

}
