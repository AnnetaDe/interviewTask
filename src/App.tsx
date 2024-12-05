import React from 'react';
import { useAppDispatch } from './redux/reduxHooks';
import { fetchTodos } from './redux/todoOperations';
import TodoList from './components/TodoList';

const App = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <TodoList />
    </div>
  );
};

export default App;
