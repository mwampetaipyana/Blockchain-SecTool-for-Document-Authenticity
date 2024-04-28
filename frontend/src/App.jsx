import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/views/Home';
import Admin from './components/views/Admin';
import Register from './components/Register';
import Transactions from './components/Transactions';
import Pro from './components/views/Pro';
import UploadDoc from './components/UploadDoc';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
function App() {
  return (
    //     <div>
    //        {/* <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route  path='/admin' element= {<Admin/>}/>
    //           <Route path='/admin/register' element={<Register/>}/>
    //           <Route path='/admin/transactions' element={<Transactions/>}/>
    //           <Route path='/pro' element={<Pro/>}/>
    //           <Route path='/pro/upload' element= {<UploadDoc/>}/>
    //         </Routes> */}
    // </div>
    <div>
      <Router>
        <Sidebar />
        <SearchBar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
