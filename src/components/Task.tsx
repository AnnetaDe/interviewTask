import { useState } from 'react';
import { ITodo } from '../types/todo.types';
import TaskControllers from './TaskControllers';
import { useAppDispatch } from '../redux/reduxHooks';
import { updateTask } from '../redux/todoOperations';
import { useDebounce } from 'use-debounce';

const Task: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);
  const [debouncedText] = useDebounce(updatedTask.trim(), 1000);

  const handleBlur = () => {
    if (debouncedText && debouncedText !== '' && debouncedText !== todo.task) {
      dispatch(updateTask({ ...todo, task: debouncedText }));
      setIsEditing(false);
    }
  };
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask(e.target.value);
  };

  return (
    <li className="flex items-center justify-between p-1 " key={todo.id}>
      <TaskControllers todo={todo} />
      <div className="flex grow">
        {isEditing ? (
          <input
            type="text"
            autoComplete="off"
            value={updatedTask}
            className="border p-1 rounded-md w-full"
            onChange={handleChanges}
            onBlur={handleBlur}
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer ${todo.isdone ? 'text-teal-500' : ''}`}
          >
            {todo.task}
          </span>
        )}
      </div>
    </li>
  );
};

export default Task;
