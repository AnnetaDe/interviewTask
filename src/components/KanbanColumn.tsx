import { ITodo } from '../types/todo.types';
import KanbanTask from './KanbanTask';
import { Draggable, Droppable } from '@hello-pangea/dnd';

interface IKanbanColumn {
  value: string;
  label: string;
  items: any[];
}
const KanbanColumn = ({ value, label, items }: IKanbanColumn) => {
  return (
    <Droppable droppableId={value}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <div key={value} className="flex flex-col gap-2">
            <h2>{label}</h2>
            <ul>
              {provided.placeholder}
              {items.map((todo: ITodo) => (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={items.findIndex(item => item.id === todo.id)}
                >
                  {provided => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <KanbanTask value={value} todo={todo} />
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
