import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext({
    
})

axios.defaults.baseURL  = "http://localhost:8000/"
axios.defaults.c
export function UserContextProvider({children}){
    const [user,setUser] = useState(null)
    const [ready,setReady] = useState(false)

    useEffect(() => {
        if(!user){
           axios.get("/profile").then((user)=>{
            console.log("user " + user);
            if(!user.data.message){
                console.log(user);
                setUser(user.data)
                // setUser(null)
                setReady(true)

            }
            else{
                setUser(null)
                setReady(true)
            }
        })
        }

    }, [])
    
    return(
        <UserContext.Provider value={{user,setUser,ready,setReady}}>

            {children}

        </UserContext.Provider>
    )
}