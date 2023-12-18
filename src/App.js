import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
<Route path="" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>
</BrowserRouter>
      {/* <Login />
      <Signup/> */}
    </div>
  );
}

export default App;
