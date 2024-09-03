import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"


const EditUser = () => {
    const [user,setUser] = useState({name: '',email: ''})
    const navigate = useNavigate()
    const {id} = useParams()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            const resp = await axios.put(`http://localhost:5000/api/customers/${id}`,user)
            console.log(resp);
            if(resp.status===200)
            {
                toast.success('user edited successfully')
                navigate('/customerlist')
            }
            else
                toast.error('error in edit')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
        <h1>Edit Page</h1>
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

export default EditUser