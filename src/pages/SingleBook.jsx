import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import { GlobalStates } from "../context"

export default function SingleBook() {

    const navigate = useNavigate()

    const { apiUrl } = GlobalStates()

    const { book_id } = useParams()

    const [book, setBook] = useState({})

    useEffect(() => {

        (async () => {

            const res = await fetch(`${apiUrl}/api/book/get_book_by_id`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ _id: book_id })
            })

            const data = await res.json()

            if (data?.visible == false) navigate("/")

            setBook(data)

        })()

    }, [])

    return (

        (Object.keys(book) !== 0) ? (
            <div id="singlebook" className="pt-20 pb-10 sm:ml-60 flex flex-col items-center justify-center min-h-screen">

                <div className="text-left w-96">
                    <div className="flex items-center justify-center mb-10">
                        <img className="w-48 h-60" src={book?.book_image} alt="" />
                    </div>
                    <h2><span>Book Name :</span> {book?.book_name}</h2>
                    <p><span>Book Description: </span>{book?.book_desc}</p>
                    <h3><span>Owner Name: </span>{book?.user_name}</h3>
                    <h3><span>Owner Email: </span>{book?.user_email}</h3>
                    <h3><span>Owner Number: </span>{book?.user_number}</h3>
                </div>

            </div>
        ) : (
            <Loader/>
        )

    )
}
