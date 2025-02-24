import { useEffect, useState } from "react"
import { Link,  } from "react-router-dom"
function Navbar(){
    const[user,setUser] = useState(null)
    useEffect(()=>{
        setUser(localStorage.getItem('user'))
    },[])
    function logout(){
      localStorage.clear()
      window.location.reload()
    }
    return(
        <>
        <div className='navbar'>
        <ul type='none'>
          <li>
            <Link to='home' style={{'textDecoration':'none','color':'black' ,'fontSize':'1.5em'}}>Home</Link>
          </li>
          <li>
            <Link to='about' style={{'textDecoration':'none','color':'black','fontSize':'1.5em'}}>About</Link>
          </li>
        </ul>
        {user != null && <button onClick={logout} className="btn btn-danger btn-lg btn-block">Logout</button>}
      </div>
      
      </>
    )
}
export default Navbar