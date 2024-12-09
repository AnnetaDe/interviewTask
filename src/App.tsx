import React, { lazy } from 'react';
import { useAppDispatch } from './redux/reduxHooks';
import { fetchTodos } from './redux/todoOperations';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

const HomePage = lazy(
  (): Promise<typeof import('./pages/HomePage')> => import('./pages/HomePage')
);

const TaskListPage = lazy(
  (): Promise<typeof import('./pages/TaskListPage')> =>
    import('./pages/TaskListPage')
);
const Kanban = lazy(
  (): Promise<typeof import('./pages/KanbanPage')> =>
    import('./pages/KanbanPage')
);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/kanban" element={<Kanban />} />
      </Route>
    </Routes>
  );
};

export default App;
