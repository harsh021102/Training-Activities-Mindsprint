import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";

const UserList = () => {
    const [users,setUsers] =useState([])
    const [loading,setLoading] = useState(true)
    const {increment} = useContext(CounterContext)
    const navigate=useNavigate()
    const fetchData = async ()=> {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(resp.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
            
        }
    }
    const viewUser = (id)=>{
        navigate(`/details/${id}`)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="row">
            <button onClick={increment} className="col-md-2">+</button>
            {
                loading?<p>Loading...</p>:users.map((user)=>(
                    <div className="col-md-4" key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <button className="btn btn-success" onClick={()=>viewUser(user.id)}>View</button>
                    </div>
                ))
            }
        </div>
    )
}

export default UserList