import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Index from "./pages/Index";
import Login from "./pages/Login";
import Layout from "./Layout";
import Registration from "./pages/Registration";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Accouont from "./pages/Accouont";

axios.defaults.baseURL  = "http://localhost:8000/"
axios.defaults.withCredentials = true

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <UserContextProvider >
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/account/:subpage?" element={<Accouont/>} />
        <Route path="/account/:subpage/:action" element={<Accouont/>} />
      </Route>

    </Routes>
    </UserContextProvider>
    </BrowserRouter>    
  );
}

export default App;
