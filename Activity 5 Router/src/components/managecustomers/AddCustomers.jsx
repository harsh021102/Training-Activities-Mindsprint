import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { CounterContext } from "../../context/CounterContext"

const AddCustomers = () => {
    const [user,setUser] = useState({email: '',name: ''})
    const navigate = useNavigate() 
    const {decrement} = useContext(CounterContext)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            user.id = Date.now()+''
            const resp = await axios.post('http://localhost:5000/api/customers/',user)
            if(resp.status===201)
            {
                toast.success('user registered successfully')
                navigate('/customerlist')
            }
            else
                toast.error('error in registration')
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={decrement}>-</button>
        <form onSubmit={handleSubmit}>
            <div className="mt-3">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="name" value={user.name} onChange={(e)=>setUser({...user,name: e.target.value})}/>
            </div>
            <div className="mt-3">
                <label>Email</label>
                <input type="email" placeholder="email" value={user.email} onChange={(e)=>setUser({...user,email: e.target.value})}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
  )
}

export default AddCustomers