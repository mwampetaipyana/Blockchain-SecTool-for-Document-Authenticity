import './App.css';
import { Routes, Route } from 'react-router-dom';
// Removed unused import

import Register from './components/Register';
import Transactions from './components/Transactions';
import AdminDashboard from  './components/AdminDashboard';
import Home from './components/views/Home';
import AdminLayout from './components/shared/AdminLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminDashboard/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='transactions' element={<Transactions/>}/>
        </Route>

        <Route path='/' element={<Home/>}/> 
      </Routes>
    </div>
  );
}

export default App;
