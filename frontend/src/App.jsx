import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/views/Home';
import Admin from './components/views/Admin';
import Register from './components/Register';
import Transactions from './components/Transactions';
import Pro from './components/views/Pro';
import UploadDoc from './components/UploadDoc';
function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route  path='/admin' element= {<Admin/>}/>
          <Route path='/admin/register' element={<Register/>}/>
          <Route path='/admin/transactions' element={<Transactions/>}/>
          <Route path='/pro' element={<Pro/>}/>
          <Route path='/pro/upload' element= {<UploadDoc/>}/>
        </Routes>
    </div>
  );
}

export default App;
