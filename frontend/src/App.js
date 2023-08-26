import { Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import './App.css';
import Signup from "./Components/Signup";
import Portal from "./Components/Portal";
import AuthRoute from "./Utils/authRoute";


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
      path='portal'
      element={<AuthRoute element={<Portal />} />} />
    </Routes>
  );
}

export default App;
