import { useState } from "react"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Login = ({setLoggedIn}) => {
    const [user,setUser] = useState({email:'',password:''})
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        //backend api to validate data
        e.preventDefault()
        if(user.email==='admin@gmail.com'||user.password==='admin')
        {
            localStorage.setItem('loggedIn',true)
            navigate('/dashboard')
            setLoggedIn(true)
        }
        else{
            alert('Invalid Credentials')
            setUser({...user,password:''})
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div className="mt-3">
                    <label htmlFor="">Email Id</label>
                    <input type="email" placeholder="email" value={user.email} onChange={(e)=>setUser({...user,email: e.target.value})}/>
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" placeholder="passoword" value={user.password} onChange={(e)=>setUser({...user,password: e.target.value})}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login