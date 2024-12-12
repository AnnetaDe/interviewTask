import { ITodo } from '../types/todo.types';
import dayjs from 'dayjs';

interface IKanbanTaskProps {
  value: string;
  todo: ITodo;
}

const KanbanTask = ({ value, todo }: IKanbanTaskProps) => {
  return (
    <div key={`${value}-${todo.id}`}>
      <h3 className="text-md text-grey font-semibold">{todo.task}</h3>
      <div>{todo.priority} </div>
      {todo.isdone ? 'Done' : 'Not done'} <br />
      <p>Due: {dayjs(todo.schedule).format('YYYY-MM-DD HH:mm')}</p>
    </div>
  );
};

export default KanbanTask;
