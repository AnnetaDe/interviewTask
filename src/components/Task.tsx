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
  const [debouncedText] = useDebounce(updatedTask.trim(), 500);

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
    <li key={todo.id}>
      <div className="flex items justify-start gap-2 w-full">
        <TaskControllers todo={todo} />
        <div>
          {isEditing ? (
            <input
              className="outline-none "
              type="text"
              autoComplete="off"
              value={updatedTask}
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
      </div>
    </li>
  );
};

export default Task;
