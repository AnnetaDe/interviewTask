import { useAppDispatch } from '../redux/reduxHooks';
import { deleteTask, updateTask } from '../redux/todoOperations';
import { ITodo } from '../types/todo.types';

const TaskControllers: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-1">
      <label className="relative flex items-center cursor-pointer text-white-100">
        <input
          type="checkbox"
          checked={todo.isdone}
          onChange={() =>
            dispatch(updateTask({ ...todo, isdone: !todo.isdone }))
          }
        />
        <span
          className={`w-5 h-5 border-2 rounded-lg flex items-center justify-center mr-2 transition-all  ${
            todo.isdone ? 'bg-teal-500 border-teal-500' : ''
          }`}
        >
          {todo.isdone && (
            <svg
              className="h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke=" currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="5 13 9 17 19 7" />
            </svg>
          )}
        </span>
      </label>
      <button
        className="cursor-pointer"
        onClick={() => dispatch(deleteTask(todo))}
      >
        <svg
          className="h-5 w-5 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
};

export default TaskControllers;
