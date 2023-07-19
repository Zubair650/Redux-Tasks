import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { getAllTodos } from './Services/Actions/todosActions';

function App() {
  const { isLoading, todos, error } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  return (
    <>
      <h2>Todos App</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <ol>
        {todos && todos.map(t =>
          <li key={t.id}>
            {t.title}
            <hr></hr>
            <br></br>
          </li>)}
      </ol>
    </>
  )
}

export default App