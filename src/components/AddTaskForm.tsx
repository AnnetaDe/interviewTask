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
    <div className="flex items-center gap-2 mt-4 relative mb-2.5">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={onAddInputChange}
        className="border p-2 rounded-md w-full"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-4 rounded-md absolute right-1 top-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 focus:outline-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6l6 6-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddTaskForm;
