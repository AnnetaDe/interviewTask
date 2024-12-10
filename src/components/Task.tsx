import { useRef, useState } from 'react';
import { ITodo } from '../types/todo.types';
import TaskControllers from './TaskControllers';
import { useAppDispatch } from '../redux/reduxHooks';
import { updateTask } from '../redux/todoOperations';
import { useDebounce } from 'use-debounce';
import TaskField from './TaskField';

const Task: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);
  const [debouncedText] = useDebounce(updatedTask.trim(), 500);
  const editRef = useRef<HTMLInputElement>(null);
  const focusEdit = () => {
    if (editRef.current) {
      setIsEditing(true);
      editRef.current?.focus();
    }
  };
  const handleBlur = () => {
    if (debouncedText && debouncedText !== '' && debouncedText !== todo.task) {
      dispatch(updateTask({ ...todo, task: debouncedText }));
      setIsEditing(false);
    }
    setIsEditing(false);
  };
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTask(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
    if (e.key === 'Escape') {
      setUpdatedTask(todo.task);
      setIsEditing(false);
    }
  };

  return (
    <li
      key={todo.id}
      className="flex justify-start gap-2 border p-2 rounded-md"
    >
      <TaskControllers todo={todo} />

      <TaskField
        ref={editRef}
        value={updatedTask}
        onChange={handleChanges}
        onBlur={handleBlur}
        onClick={focusEdit}
        className={` text-grey outline-none cursor-text  w-full p-1 ${
          todo.isdone ? 'text-teal' : ''
        } ${
          isEditing
            ? 'shadow-md transition-shadow duration-300 ease-in-out'
            : ''
        }`}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

export default Task;
