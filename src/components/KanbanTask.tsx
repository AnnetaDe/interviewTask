import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ITodo } from '../types/todo.types';
import dayjs from 'dayjs';
import { faCircleCheck, faGear } from '@fortawesome/free-solid-svg-icons';

interface IKanbanTaskProps {
  value: string;
  todo: ITodo;
  editTaskById: (todo: ITodo) => void;
}

const KanbanTask = ({ value, todo, editTaskById }: IKanbanTaskProps) => {
  return (
    <div
      onClick={() => editTaskById(todo)}
      key={`${todo.id}${value}`}
      className={`bg-gray-100 border border-gray-300 shadow-md rounded-lg p-3  flex justify-between cursor-move ${
        todo.isdone
          ? 'bg-gray-300'
          : 'hover:bg-purple-100 transition-all duration-300 ease-in-out'
      } ${todo.priority === 'high' ? 'border-l-8 border-l-rose-500' : ''} ${
        todo.priority === 'medium' ? 'border-l-8 border-l-purple-500' : ''
      } ${todo.priority === 'low' ? 'border-l-8 border-l-lime-300' : ''}`}
    >
      <div>
        <h3 className="text-md text-grey font-semibold">{todo.task}</h3>

        <p>Due: {dayjs(todo.schedule).format('YYYY-MM-DD HH:mm')}</p>
      </div>
      <button
        // className=""
        onClick={() => editTaskById(todo)}
      >
        <FontAwesomeIcon
          icon={faGear}
          className={`text-gray-500 hover:text-gray-700  transition-transform duration-300 ease-in-out hover:rotate-180 h-5 w-5 absolute rounded-lg  right-2 top-2 ${
            todo.isdone ? 'hidden' : ''
          }`}
        />

        {todo.isdone && (
          <FontAwesomeIcon
            icon={faCircleCheck}
            size="xl"
            className="absolute right-2 top-2 text-green-500 transition-none"
          />
        )}
      </button>
    </div>
  );
};

export default KanbanTask;
