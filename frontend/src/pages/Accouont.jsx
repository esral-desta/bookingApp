import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext' 
import Places from './Places'

function Accouont() {
   const {user,ready,setUser} =  useContext(UserContext)
    const navigate = useNavigate()
   async function Logout(){
    await axios.post("/logout")
    setUser(null)
    navigate("/")
}

   let {subpage} = useParams()
    if (subpage === undefined){
        subpage = "profile"
    }
   if(!ready){
    return(<h1>loading</h1>)
   }

   if(ready && !user){
        return(
            <Navigate to="/login" />
        )
    }
    function setClasses(type){
        let classes ="py-2 px-4"
        console.log("type "+ type);
        console.log("subpage "+ subpage);
        
        if(type===subpage){
         return  classes + " bg-primary text-white rounded-full"    
        }
        return classes;
    }
    return (
    
    <div>
        <nav className='w-full flex mt-8 gap-4 justify-center mb-8' >
        <Link className={setClasses("profile")} to="/account/">My Profile</Link>
        <Link className={setClasses("booking")} to="/account/booking/">My booking</Link>
        <Link className={setClasses("places")}  to="/account/places/">My places</Link>

        </nav>

        {
            subpage === "profile" &&(
                <div className="text-center max-w-lg mx-auto">
                    Logged in as  {user.name} ({user.email})<br/>
                    <button className='primary max-w-sm mt-2' onClick={Logout}>Logout</button>
                </div>
            )
            
        }
                {
            subpage === "booking" &&(
                <div className="text-center">
                    {/* Logged in as {user.name} */}
                    booking
                </div>
            )
            
        }
                {
            subpage === "places" &&(
                <div className="text-center">
                    <Places/>
                </div>
            )
            
        }
    </div>
  )
}

export default Accouont