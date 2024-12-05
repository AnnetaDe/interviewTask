import { ITodo } from '../types/todo.types';
import TaskControllers from './TaskControllers';

const Task: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <li key={todo.id}>
      {todo.task}
      <TaskControllers todo={todo} />
    </li>
  );
};

export default Task;
