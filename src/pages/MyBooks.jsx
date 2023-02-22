import { useState } from "react"
import { storage } from "../firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { GlobalStates } from "../context"

export default function MyBooks() {

    const { user, mybooks, apiUrl } = GlobalStates()

    // State to store uploaded file
    const [file, setFile] = useState("")

    const [state, setState] = useState({ name:"", desc: "" })

    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0])
    }

    const handleUpload = () => {

        if (!file) {
            alert("Please upload an image first!")
        }

        const storageRef = ref(storage, `/files/${file.name}`)

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then( async (url) => {
                    
                    const res = await fetch(`${apiUrl}/api/book/add_book`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            user_id: user.id, 
                            user_name: user.name,
                            user_email: user.email,
                            user_number: user.number, 
                            book_name: state.name, 
                            book_image: url, 
                            book_desc: state.desc
                        })
                    })

                    const data = await res.json()

                    console.log(data)

                    location.reload()

                })
            }
        )
    }

    return (
        <div id="mybooks" className="flex flex-col items-center justify-center min-h-screen">
            <div>

                <input type="file" onChange={handleChange} accept="/image/*" />

                <input
                    name="name"
                    value={state.name}
                    onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                type="text" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"></input>

                <input 
                    name="desc"
                    value={state.desc}
                    onChange={ (e) => setState({ ...state, [e.target.name]: e.target.value }) }
                type="text" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"></input>

                <button onClick={handleUpload} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Upload
                </button>

                <p>{percent} "% done"</p>

            </div>

            <div>

                {
                    mybooks.map((val, id)=>{
                        return (
                            <div key={id} id="bookdet">
                                {val?.user_id}
                                {val?.user_name}
                                {val?.user_email}
                                {val?.user_number}
                                {val?.book_name}
                                {val?.book_image}
                                {val?.book_desc}
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
