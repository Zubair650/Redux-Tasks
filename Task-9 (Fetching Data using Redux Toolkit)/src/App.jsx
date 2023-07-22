import './App.css'
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <h2>Fetching Data using Redux Toolkit</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default App
