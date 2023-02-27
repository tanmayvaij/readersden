import BookCard from "../components/BookCard"
import Loader from "../components/Loader"
import { GlobalStates } from "../context"

export default function Home() {

    const {allbooks} = GlobalStates()

    return (
        <div id="home" className="sm:pl-60 pt-20 flex sm:flex-row sm:flex-wrap flex-col items-center justify-center min-h-screen">

                { 
                    (allbooks.length!==0) ? (

                        allbooks.map((val, id)=>{
                            return (
                                val?.visible &&
                                <BookCard 
                                    key={id}
                                    img={val?.book_image} 
                                    name={val?.book_name}
                                    desc={val?.book_desc}
                                    _id={val?._id}
                                />
                            )
                        })

                    ) : (
                        <Loader/>
                    )

                }
        </div>
    )
}
