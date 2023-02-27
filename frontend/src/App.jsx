import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Index from "./pages/Index";
import Login from "./pages/Login";
import Layout from "./Layout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path="/login" element={<Login/>} />
      </Route>

    </Routes>
    </BrowserRouter>    

  );
}

export default App;
