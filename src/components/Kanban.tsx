import { useAppSelector } from '../redux/reduxHooks';
import { selectColumns } from '../redux/selectors';
import { COLUMNS } from '../dataHelpers/columns.data';
import KanbanColumn from './KanbanColumn';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';

type TColumnKeys =
  | 'today'
  | 'tomorrow'
  | 'week'
  | 'next week'
  | 'later'
  | 'completed';

const Kanban = () => {
  const columns = useAppSelector(selectColumns);
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination, draggableId } = result;
    const destinationColumnId = destination?.droppableId;
    const sourceColumnId = source.droppableId;
    const draggableTaskId = Number(draggableId);
    // const task = columns[sourceColumnId as TColumnKeys].find(
    //   task => draggableTaskId === task.id
    // );

    console.log(
      columns[sourceColumnId as TColumnKeys],
      sourceColumnId,
      destinationColumnId,
      draggableTaskId
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-6 gap-2">
        {COLUMNS.map(column => (
          <KanbanColumn
            key={column.value}
            value={column.value}
            label={column.label}
            items={columns[column.value as TColumnKeys]}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
