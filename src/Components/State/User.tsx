import { useState } from "react"

type AuthUser = {
    name : string
    email : string
}

export const User= () =>{

    const [user,setuser] = useState< AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setuser({
            name:'Sajitha',
            email:'Saranga@gmail.com'
        })
    }

    

    return(
        <div>
           <button onClick={handleLogin}>LogIn</button>
           
           <div>
             User is {user.name} 
             
           </div>
           <div>
           Email is {user.email}
           </div>
        </div>
    )
    }