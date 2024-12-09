import TodoList from '../components/TodoList';

const TaskListPage = () => {
  return (
    <div className=" max-w-[485px] mx-auto bg-white flex justify-center">
      <div className=" mx-auto">
        <TodoList />
      </div>
    </div>
  );
};

export default TaskListPage;
