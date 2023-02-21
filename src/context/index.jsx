import { createContext, useContext, useEffect, useState } from "react";

const context = createContext()

export default function Context({ children }) {


    const [ user , setUser ] = useState({})

    const [ mybooks, setMybooks ] = useState([])

    const [ allbooks, setAllbooks ] = useState([])

    const authtoken = localStorage.getItem("authtoken")


    const getUserDetails = async () => {

        const res = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authtoken": authtoken
            }
        })

        const data = await res.json()

        setUser(data)

    }


    const getMyBooks = async () => {

        const { id } = user

        console.log("getMyBook called")

        const res = await fetch("http://localhost:5000/api/book/get_my_books", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id })
        })

        console.log("user", user)

        const data = await res.json()

        setMybooks(data)

        console.log("data", data)

    }

    const getAllBooks = async () => {

        const res = await fetch("http://localhost:5000/api/book/get_all_books", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })

        const data = await res.json()

        console.log(data)

        setAllbooks(data)

    }


    useEffect(() => {

        if (authtoken) getUserDetails()

    }, [])

    useEffect(() => {

        if (authtoken) getMyBooks()

    }, [user])

    useEffect(() => {

        if (authtoken) getAllBooks()

    }, [])


    return (
        <context.Provider value={{ user, setUser, mybooks, allbooks }}>
            { children }
        </context.Provider>
    )
}

export const GlobalStates = () => useContext(context)
