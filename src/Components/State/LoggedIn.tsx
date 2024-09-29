import { useState } from "react"




export const LoggedIn = () =>{

    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLoginOut = () => {
        setIsLoggedIn(false)
    }

    return(
        <div>
           <button onClick={handleLogin}>LogIn</button>
           <button onClick={handleLoginOut}>LogOut</button>
           <div>
             user is {isLoggedIn ? 'logged in' : 'logged out'} 
           </div>
        </div>
    )
    }