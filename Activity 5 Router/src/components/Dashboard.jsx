
import Nav from 'react-bootstrap/Nav';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from './manageproducts/ProductList';
import AddProduct from './manageproducts/AddProduct';
const Dashboard = () => {
  return (
    <div>
        <Nav
        activeKey="/dashboard"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Link to="listproduct">List Products</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="addproduct">Add Products</Link>
            </Nav.Item>
        </Nav>
        <Routes>
            <Route path="listproduct" element={<ProductList/>}/>
            <Route path="addproduct" element={<AddProduct/>}/>
        </Routes>
    </div>
  )
}

export default Dashboard