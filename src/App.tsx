import './App.css'
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "@/utils/RequiredAuth/RequiredAuth";
import Dashboard from './pages/Dashboard/Dashboard';
import Timer from './pages/Timer/Timer';


function App() {


  return (
    <Routes>
      <Route element={<RequiredAuth />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timer" element={<Timer />} />
      </Route>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
