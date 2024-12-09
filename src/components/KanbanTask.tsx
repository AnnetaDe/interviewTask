import { ITodo } from '../types/todo.types';
import dayjs from 'dayjs';
interface IKanbanTaskProps {
  value: string;
  todo: ITodo;
}

const KanbanTask = ({ value, todo }: IKanbanTaskProps) => {
  return (
    <div className="p-1 rounded-sm border" key={`${value}-${todo.id}`}>
      {todo.task} <br />
      {dayjs(todo.schedule).format('YYYY-MM-DD HH:mm')}
    </div>
  );
};

export default KanbanTask;
