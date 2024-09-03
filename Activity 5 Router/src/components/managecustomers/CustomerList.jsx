import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CustomerList = () => {
    const [users,setUsers] =useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const fetchData = async ()=> {
        try {
            const resp = await axios.get('http://localhost:5000/api/customers')
            setUsers(resp.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser = async (id) =>{
        try {
            const resp = await axios.delete(`http://localhost:5000/api/customers/${id}`)
            // setUsers(resp.data)
            console.log(resp);
            fetchData()
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const editUser = async (id) =>{
        navigate(`/edituser/${id}`)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="row">
            {
                loading?<p>Loading...</p>:users.map((user)=>(
                    <div className="col-md-4" key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <button onClick={()=>editUser(user.id)}>Edit</button>
                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CustomerList