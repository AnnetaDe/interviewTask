import { ITodo } from '../types/todo.types';
import KanbanTask from './KanbanTask';
import { Draggable, Droppable } from '@hello-pangea/dnd';

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
            className="bg-white shadow-md rounded-lg p-4 flex flex-col h-[calc(100vh-120px)]"
          >
            <h2 className="text-lg mb-4 text-grey">{label}</h2>
            <ul className="flex-1 overflow-y-auto space-y-2 scrollbar-thin pr-1">
              {provided.placeholder}
              {items.map((todo: ITodo) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={items.findIndex(item => item.id === todo.id)}
                >
                  {provided => (
                    <li
                      className="relative"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <KanbanTask
                        value={value}
                        todo={todo}
                        editTaskById={editTaskById}
                      />
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
