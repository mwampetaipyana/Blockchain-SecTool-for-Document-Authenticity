import './App.css';
import { Routes, Route } from 'react-router-dom';
// Removed unused import

import Register from './components/Register';
import Transactions from './components/Transactions';
import AdminDashboard from  './components/AdminDashboard';
import Home from './components/views/Home';
import AdminLayout from './components/shared/AdminLayout';
import ProDashboard from './components/ProDashboard';
import UploadDoc from './components/UploadDoc'
import ProLayout from './components/shared/ProLayout';
import Verify from './components/Verify';
import Documents from './components/Documents';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<AdminDashboard/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='transactions' element={<Transactions/>}/>
        </Route>

        <Route path='/pro' element={<ProLayout/>}>
          <Route index element={<ProDashboard/>}/>
          <Route path='upload' element={<UploadDoc/>}/>
          <Route path='documents' element={<Documents/>}/>
          
        </Route>

        <Route path='/' element={<Home/>}/> 
        <Route path='verify' element={<Verify/>}/>
      </Routes>
    </div>
  );
}

export default App;
