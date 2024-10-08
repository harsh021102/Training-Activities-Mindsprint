import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Register() {
    const [student, setStudent] = useState({ name:'',email: '', password: '' });
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8082/api/student',student)
            if(resp.status==201) 
            {
                alert("Registered successfully")
                navigate('/login')
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleLogin}>
                <div className="mt-3">
                    <label>Name</label>
                    <input type="text" placeholder="name" value={student.name}
                        onChange={(e) => setStudent({ ...student, name: e.target.value })} className="form-control" />
                </div>
                <div className="mt-3">
                    <label>Email Id</label>
                    <input type="email" placeholder="john.doe@gmail.com" value={student.email}
                        onChange={(e) => setStudent({ ...student, email: e.target.value })} className="form-control" />
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="password" placeholder="SECRET" value={student.password}
                        onChange={(e) => setStudent({ ...student, password: e.target.value })} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100" >Register</button>
            </form>
        </div>
    );
}

export default Register;