import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const UserDetails = () => {
    const [user,setUser] =useState(null)
    // const navigate=useNavigate()
    const {id} = useParams()
    const fetchData = async (id)=> {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            console.log(resp.data);
            setUser(resp.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData(id)
    })
    return (
        <div className="col-md-4">
            {
                user?<><h3>Name: {user.name}</h3>
                <p>Email: {user.email}</p>
                {<p>Address: {user.address.street}</p>}
                </>:<></>
            }
        </div>
    )
}

export default UserDetails