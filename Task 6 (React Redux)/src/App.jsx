import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrementCounter, incrementCounter, resetCounter } from './Services/Actions/counterActions'

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  }
  const handleDecrement = () => {
    dispatch(decrementCounter());
  }
  const handleReset = () => {
    dispatch(resetCounter());
  }

  return (
    <>
      <h2>React Redux Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>INCREMENT</button> &nbsp;
      <button onClick={handleDecrement}>DECREMENT</button> &nbsp;
      <button onClick={handleReset}>RESET</button>
    </>
  )
}

export default App
