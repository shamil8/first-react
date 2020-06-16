import React, { useEffect } from 'react'
import TodoList from "./Todo/TodoList"
import Context from "./Todo/context"
import Loader from './Loader'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))  // Ленивая загрузка (lazy loading)

function App() {
    const [todos, setTodos] = React.useState( [])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    todos.map(todo => {
                        todo.name = todo.title

                        delete todo.title

                        return todo
                    })

                    setTodos(todos)
                    setLoading(false)
                }, 1000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
        // todos.find(todo => todo.id === id).completed = true
        // console.log(todos)
    }

    function removeTodo(id) {
        setTodos(
            todos.filter( todo => todo.id !== id)
        )
    }

    function addTodo(name) {
        setTodos(todos.concat([{
            name,
            id: Date.now(),
            completed: false
        }]))
    }

  return (
      <Context.Provider value={{ removeTodo } }>
          <div className='wrapper'>
              <h1>React first project</h1>

              <React.Suspense fallback={<p>Loading...</p>}>
                  <AddTodo onCreate={addTodo} />
              </React.Suspense>

              {loading && <Loader />}

              {todos.length
                  ? <TodoList todos={todos} onToggle={toggleTodo}/>
                  : (
                      loading ? null : <p>No todos! </p>
                  )
              }

          </div>
      </Context.Provider>
  )
}

export default App
