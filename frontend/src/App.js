import { Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import './App.css';
import Signup from "./Components/Signup";
function App() {
  return (
    <Routes>
      <Route
      path='/'
      element={<Home />}
      />
      <Route
      path='signup'
      element={<Signup />}
      />
      <Route
      />
    </Routes>
  );
}

export default App;
