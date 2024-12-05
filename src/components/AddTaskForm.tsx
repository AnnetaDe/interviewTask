import React from 'react';

interface AddTaskFormProps {
  task: string;
  handleAddTask: () => void;
  onAddInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  task,
  handleAddTask,
  onAddInputChange,
}) => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={onAddInputChange}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <button
        onClick={handleAddTask}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};

export default AddTaskForm;
