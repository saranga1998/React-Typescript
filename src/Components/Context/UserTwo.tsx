import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserTwo = () => {

    const userContext = useContext(UserContext)

    const handleLogin  = () => {
        if(userContext){
            userContext.setUser(
                {
                    name:'Sajitha',
                    email:'Saranga@gmail.com'
                }
            )
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }

    return(
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User name is  {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email} </div>
        </div>
    )
}