import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { selectModalContent } from '../redux/selectors';

import TaskField from './TaskField';
import DeleteButton from './DeleteButton';

import { deleteTask, updateTask } from '../redux/todoOperations';
import { closeModal } from '../redux/modalSlice';
import SelectPriority from './SelectPriority';
import CustomDatePicker from './CustomDatePicker';

type FormData = {
  task: string;
  priority?: string;
  schedule?: Date;
  isdone: boolean;
};

const ModalContent = () => {
  const dispatch = useAppDispatch();
  const modalContent = useAppSelector(selectModalContent);

  const { register, handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      task: modalContent?.task || '',
      priority: modalContent?.priority || '',
      schedule: modalContent?.schedule || new Date(),
      isdone: modalContent?.isdone || false,
    },
  });
  const onSubmit = (data: any) => {
    const { task, priority, schedule, isdone } = data;
    dispatch(updateTask({ ...modalContent, task, priority, schedule, isdone }));
    dispatch(closeModal());
  };
  const onDelete = () => {
    dispatch(deleteTask(modalContent));
    dispatch(closeModal());
  };

  return (
    <div className="p-2 bg-white rounded-lg space-y-4 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="space-y-2 flex-col"
      >
        <div>
          <TaskField
            {...register('task')}
            id="edit-task"
            placeholder="edit task title"
            className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent text-lg font-semibold"
          />
          <label htmlFor="edit-task" className="text-xs text-gray-400 mb-0">
            edit task
          </label>
        </div>
        <div className="flex gap-1">
          <div>
            <Controller
              name="schedule"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomDatePicker
                  id="edit-schedule"
                  date={
                    value instanceof Date
                      ? value
                      : value
                      ? new Date(value)
                      : null
                  }
                  onChange={onChange}
                />
              )}
            />
            <label
              htmlFor="edit-schedule"
              className="text-xs text-gray-400 mb-0"
            >
              edit schedule
            </label>
          </div>
          <div>
            <Controller
              name="priority"
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectPriority
                  id="edit-priority"
                  newValue={value || ''}
                  onChange={onChange}
                  props={{}}
                />
              )}
            />
            <label
              htmlFor="edit-priority"
              className="text-xs text-gray-400 mb-0"
            >
              edit priority
            </label>
          </div>
        </div>
        <button
          className="w-full bg-teal text-white rounded-lg py-2 font-semibold  focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs hover:scale-105 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <DeleteButton deleteOnClick={onDelete} />
    </div>
  );
};

export default ModalContent;
