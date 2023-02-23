import BookCard from "../components/BookCard"
import { GlobalStates } from "../context"

export default function Home() {

    const {allbooks} = GlobalStates()

    return (
        <div id="home" className="flex items-center justify-center min-h-screen">
                {
                    allbooks.map((val, id)=>{
                        return (
                            // <div key={id} id="alldet">
                            //     {val?.user_id}
                            //     {val?.user_name}
                            //     {val?.user_email}
                            //     {val?.user_number}
                            //     {val?.book_name}
                            //     {val?.book_image}
                            //     {val?.book_desc}
                            // </div>

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
