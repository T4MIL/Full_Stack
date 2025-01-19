import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Newpost } from './components/Newpost';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar></Navbar><Home></Home></>}></Route>
          <Route path='/newpost' element={<><Navbar></Navbar><Newpost></Newpost></>}></Route>
          {/* <Route path='/' element={<><Posts></Posts></>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
