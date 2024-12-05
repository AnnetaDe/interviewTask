import React from 'react';
import { useAppDispatch } from './redux/reduxHooks';
import { fetchTodos } from './redux/todoOperations';
import TodoList from './components/TodoList';
import TodoDashboard from './components/TodoDashboard';

const App = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
