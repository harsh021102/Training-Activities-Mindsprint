import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
import ProtectedRoute from './components/ProtectedRoute'
import { useContext, useState } from 'react'
import NotFound from './components/NotFound'
import AddCustomers from './components/managecustomers/AddCustomers'
import CustomerList from './components/managecustomers/CustomerList'
import EditUser from './components/managecustomers/EditUser'
import { CounterContext } from './context/CounterContext'
import { Counter } from './components/redux/Counter'
import ItemsList from './components/redux/itemslist'

function App() {
  const [loggedIn,setLoggedIn] = useState(localStorage.getItem('loggedIn'))
  const {count} = useContext(CounterContext)
  return (
    <BrowserRouter>
      <h3>Count: {count}</h3>
      <Counter/>
      <div className="container-fluid">
        <Header/>
        <Routes>
          <Route path='login' element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path='addcustomer' element={<AddCustomers />}/>
          <Route path='customerlist' element={<CustomerList />}/>
          <Route path='dashboard/*' element={<ProtectedRoute isAuthenticated={loggedIn}>
              <Dashboard/>
          </ProtectedRoute>}
          />
          <Route path='users' element={<UserList/>}/>
          <Route path='details/:id' element={<UserDetails/>}/>
          <Route path='edituser/:id' element={<EditUser/>}/>
          <Route path='products' element={<ItemsList/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
