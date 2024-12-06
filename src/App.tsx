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
    <div className="bg-gray-100">
      <div className="min-h-screen max-w-[485px] flex items-center mx-auto bg-white-100">
        <div className=" mx-auto ">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
