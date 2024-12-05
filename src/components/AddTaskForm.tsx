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
    <div className="relative">
      <input
        type="text"
        placeholder="New task input"
        value={task}
        onChange={onAddInputChange}
        className="h-10 px-4 rounded-md text-gray-500
        border border-gray-300 shadow-md"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-4 rounded-md absolute right-1 top-1 transform -translate-x-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300 focus:outline-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6l6 6-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddTaskForm;
