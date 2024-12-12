import { useAppDispatch } from '../redux/reduxHooks';
import { deleteTask, updateTask } from '../redux/todoOperations';
import { ITodo } from '../types/todo.types';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

const TaskControllers: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-1">
      <CheckBox
        checked={todo.isdone}
        onChange={() => dispatch(updateTask({ ...todo, isdone: !todo.isdone }))}
      />
      <DeleteButton deleteOnClick={() => dispatch(deleteTask(todo))} />
    </div>
  );
};

export default TaskControllers;
