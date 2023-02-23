import BookCard from "../components/BookCard"
import { GlobalStates } from "../context"

export default function Home() {

    const {allbooks} = GlobalStates()

    return (
        <div id="home" className="sm:pl-60 pt-20 flex sm:flex-row sm:flex-wrap flex-col items-center justify-center min-h-screen">
                {
                    allbooks.map((val, id)=>{
                        return (
                            <BookCard 
                                key={id}
                                img={val?.book_image} 
                                name={val?.book_name}
                                desc={val?.book_desc}
                            />
                        )
                    })
                }
        </div>
    )
}
