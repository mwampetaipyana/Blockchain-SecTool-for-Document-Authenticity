import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
// import Sidebar from './components/Sidebar';
// import History from './components/History'
// import UploadDoc from './components/UploadDoc';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
    {/* <Sidebar /> */}
    <div className="flex-1">
        <Header />
        {/* <UploadDoc/> */}
        <Hero/>
      
    </div>
   
</div>
  );
}

export default App;