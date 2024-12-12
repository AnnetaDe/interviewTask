import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { selectFilteredColumns, selectModalisOpen } from '../redux/selectors';
import { COLUMNS } from '../dataHelpers/columns.data';
import KanbanColumn from './KanbanColumn';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { updateTask } from '../redux/todoOperations';
import dayjs from 'dayjs';
import ModalPortal from './ModalPortal';
import { openModal } from '../redux/modalSlice';
import { ITodo } from '../types/todo.types';
import ModalContent from './ModalContent';

type TColumnKeys = 'today' | 'tomorrow' | 'later' | 'completed';

const Kanban = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectModalisOpen);
  const columns = useAppSelector(selectFilteredColumns);

  const editTaskById = (todo: ITodo) => {
    dispatch(openModal(todo));
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    const destinationColumnId = destination?.droppableId || '';
    const sourceColumnId = source.droppableId;
    const sourceColumn = columns[sourceColumnId as TColumnKeys];
    const destinationColumn = columns[destinationColumnId as TColumnKeys];
    if (!sourceColumn || !destinationColumn) {
      console.error('Invalid source or destination column ID.');
      return;
    }
    const task = sourceColumn.find(
      (task: ITodo) => task.id.toString() === draggableId
    );
    if (!task) {
      return;
    }
    let updatedTask: ITodo = { ...task };
    switch (destinationColumnId) {
      case 'today':
        updatedTask.schedule = dayjs().toDate();
        break;
      case 'tomorrow':
        updatedTask.schedule = dayjs().add(1, 'day').toDate();
        break;
      case 'later':
        updatedTask.schedule = dayjs().add(2, 'day').toDate();
        break;
      case 'completed':
        updatedTask.isdone = true;
        break;
    }
    if (source.droppableId === 'completed') updatedTask.isdone = false;

    dispatch(updateTask(updatedTask));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-4 gap-2 p-4 bg-gray-100 overflow-auto ">
        {COLUMNS.map(column => (
          <KanbanColumn
            key={column.value}
            value={column.value}
            label={column.label}
            items={columns[column.value as TColumnKeys]}
            editTaskById={editTaskById}
          />
        ))}
      </div>
      {isOpen && (
        <ModalPortal title={'Edit task'}>
          <ModalContent />
        </ModalPortal>
      )}
    </DragDropContext>
  );
};

export default Kanban;
