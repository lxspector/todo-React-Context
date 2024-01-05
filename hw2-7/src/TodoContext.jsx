import { createContext, useState, useEffect, useContext } from 'react';
import { useDebounce } from './hooks/useDebounce';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sorted, setSorted] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    fetchTodos();
  }, [debouncedSearchTerm]);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:5000/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async () => {
    await fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTodo }),
    });
    setNewTodo('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    });
    fetchTodos();
  };

  const updateTodo = async (id, updatedText) => {
    await fetch(`http://localhost:5000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: updatedText }),
    });
    fetchTodos();
  };

  const displayedTodos = todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (sorted ? a.title.localeCompare(b.title) : 0));

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        setNewTodo,
        searchTerm,
        setSearchTerm,
        sorted,
        setSorted,
        displayedTodos,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
