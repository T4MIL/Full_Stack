import './App.css';
import { Home } from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Navbar } from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './Components/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from './Components/Cart';
import { Admin } from './Components/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddProd } from './Components/AddProd';
import { Adminlog } from './Components/Adminlog';
import { Update } from './Components/Update';
import Loginpage from './Components/Loginpage';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<><Navbar></Navbar><Home></Home></>}></Route>
            <Route path='/cart' element={<><Navbar></Navbar><Cart></Cart></>}></Route>
            <Route path='/admin' element={<><Navbar></Navbar><Admin></Admin></>}></Route>
            <Route path='/addprod' element={<> <Navbar></Navbar><AddProd></AddProd></>}></Route>
            <Route path='/adminlog' element={<><Navbar></Navbar><Adminlog></Adminlog></>}></Route>
            <Route path='/update/:id' element={<><Navbar></Navbar><Update></Update></>}></Route>
            <Route path='/login' element={<><Navbar></Navbar><Loginpage></Loginpage></>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
