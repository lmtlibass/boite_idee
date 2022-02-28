// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Idees from "./pages/Idees";
import Statistiques from "./pages/Statistiques";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Idees/>} />
        <Route path='/Idees' element={<Idees/>} />
        <Route path='/Statistiques' element={<Statistiques/>} />
      </Routes>
    </div>
  );
}

export default App;
