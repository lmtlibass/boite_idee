
import './App.css';
import { Routes, Route } from "react-router-dom";
import Idees from "./pages/Idees";
import Statistiques from "./pages/Statistiques";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div className="App">


    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Idees/>} />
        <Route path='/idees' element={<Idees/>} />
        <Route path='/statistiques' element={<Statistiques/>} />
      </Routes>

    </div>
  );
}

export default App;
