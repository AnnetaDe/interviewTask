import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { selectColumns } from '../redux/selectors';
import { COLUMNS } from '../dataHelpers/columns.data';
import KanbanColumn from './KanbanColumn';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { updateColumns } from '../redux/todoSlice';
import { updateTask } from '../redux/todoOperations';

type TColumnKeys =
  | 'today'
  | 'tomorrow'
  | 'week'
  | 'next week'
  | 'later'
  | 'completed';

const Kanban = () => {
  const columns = useAppSelector(selectColumns);
  const dispatch = useAppDispatch();
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination, draggableId } = result;
    const destinationColumnId = destination?.droppableId || '';
    const sourceColumnId = source.droppableId;

    const sourceColumn = columns[sourceColumnId as TColumnKeys];
    const destinationColumn = columns[destinationColumnId as TColumnKeys];

    if (!sourceColumn || !destinationColumn) {
      console.error('Invalid source or destination column ID.');
      return;
    }
    console.log(sourceColumn, destinationColumnId, draggableId);
    const task = sourceColumn.find(task => task.id.toString() === draggableId);
    if (!task) {
      console.error(`Task with ID ${draggableId} not found in source column.`);
      return;
    }
    if (sourceColumnId === destinationColumnId) {
      console.log('Task was dropped in the same column. No changes made.');
      return;
    }
    if (destinationColumnId === 'completed') {
      dispatch(updateTask({ ...task, isdone: true }));
    }

    const updatedSourceColumn = sourceColumn.filter(
      task => task.id !== draggableId
    );
    const updatedDestinationColumn = [...destinationColumn, task];

    dispatch(
      updateColumns({
        [sourceColumnId]: updatedSourceColumn,
        [destinationColumnId as string]: updatedDestinationColumn,
      })
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
