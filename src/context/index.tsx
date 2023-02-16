import { createContext, useContext, useEffect, useState } from "react"

const context = createContext({ apiUrl: "", user: {} })

const apiUrl = "http://localhost:5000"

const Context = ({ children }: any) => {

    const [ user, setUser ] = useState({})

    useEffect(() => {

        

    }, [user])
    
    return (
        <context.Provider value={{ apiUrl, user }}>
            {children}
        </context.Provider>
    )
}

export const GlobalStates = () => useContext(context)

export default Context
