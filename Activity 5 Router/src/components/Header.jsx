import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const loggedIn = localStorage.getItem('loggedIn')
    const navigate = useNavigate()
    const logout = () =>{
        localStorage.removeItem('loggedIn')
        navigate('/login')
    }
    const items = useSelector(state=>state.cart.items)
  return (
    <ul className="nav">
            {
                loggedIn?
                <li className="nav-item">
                    <button className="nav-link" onClick={logout}>Logout</button>
                </li>:
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            }
            <li className="nav-item">
                <Link className="nav-link" to="/addcustomer">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/customerlist">Customer List</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">UserList</Link>
            </li>
            <li>
                <span>{items.length} products in Cart</span>
            </li>
    </ul>
  )
}

export default Header