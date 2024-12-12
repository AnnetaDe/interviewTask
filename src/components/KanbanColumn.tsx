import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ITodo } from '../types/todo.types';
import KanbanTask from './KanbanTask';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { faGear } from '@fortawesome/free-solid-svg-icons';

interface IKanbanColumn {
  value: string;
  label: string;
  items: ITodo[];
  editTaskById: (todo: ITodo) => void;
}
const KanbanColumn = ({ value, label, items, editTaskById }: IKanbanColumn) => {
  return (
    <Droppable droppableId={value}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div
            key={value}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col h-[calc(100vh-120px)] "
          >
            <h2 className="text-lg mb-4 text-grey">{label}</h2>
            <ul className="flex-1 overflow-y-auto space-y-2">
              {provided.placeholder}
              {items.map((todo: ITodo) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={items.findIndex(item => item.id === todo.id)}
                >
                  {provided => (
                    <li
                      className={`bg-gray-100 border border-gray-300 shadow-md rounded-lg p-3  flex justify-between relative ${
                        todo.isdone
                          ? `bg-gray-300`
                          : 'hover:bg-purple-100 transition-all duration-300 ease-in-out'
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <KanbanTask value={value} todo={todo} />
                      <button
                        className="absolute rounded-lg p-1 right-2"
                        onClick={() => editTaskById(todo)}
                      >
                        <FontAwesomeIcon
                          icon={faGear}
                          className="text-gray-500 hover:text-gray-700  transition-all duration-300 ease-in-out h-5 w-5"
                        />
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;
