import './App.css'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Counter App using Redux Toolkit</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
