import { useAppDispatch } from '../redux/reduxHooks';
import { deleteTask, updateTask } from '../redux/todoOperations';
import { ITodo } from '../types/todo.types';

const TaskControllers: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        className="mr-2 w-full cursor-pointer  border border-teal bg-teal-500 rounded-xl"
        type="checkbox"
        checked={todo.isdone}
        onChange={() => dispatch(updateTask({ ...todo, isdone: !todo.isdone }))}
      />
      <button onClick={() => dispatch(deleteTask(todo))}>Delete</button>
    </div>
  );
};

export default TaskControllers;
