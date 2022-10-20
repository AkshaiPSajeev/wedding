
import './App.css';
import Main from './components/Main/Main';
import Gallery from './components/Gallery/Gallery';
import Guest from './components/Guest/Guest';
import Dummy from './components/Dummy';
import Toggle from './components/Toggle';
import {useSelector} from 'react-redux'
function App() {
  const{dark}=useSelector((store)=>store.dark);
  return (
    <>
   <div className={`${dark?' bg-slate-800':'bg-gray-100'}`}>

    
    <Toggle/>
    <Main/>
  
   
   <Gallery/>
     <Guest/>
     <Dummy/>
  </div>

    </>
  );
}

export default App;
