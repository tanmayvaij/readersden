import { createContext, useContext, useEffect, useState } from "react"

const context = createContext({ apiUrl: "", user: {} })

const apiUrl = "http://localhost:5000"

const Context = ({ children }: any) => {

    const [ user, setUser ] = useState({})

    useEffect(() => {

        const authtoken = localStorage.getItem("authtoken") as string

        const getUserDetails = async () => {

            const res = await fetch(`${apiUrl}/api/auth/getuser`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "authtoken": authtoken
                }
            })

            const data = await res.json()

            setUser(data)
            
        }

        if ( authtoken != null ) getUserDetails()

    })
    
    return (
        <context.Provider value={{ apiUrl, user }}>
            {children}
        </context.Provider>
    )
}

export const GlobalStates = () => useContext(context)

export default Context
