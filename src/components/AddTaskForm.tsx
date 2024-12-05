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
    <label
      htmlFor="task"
      className="flex text-sm relative w-full  p-1 border rounded-md border-gray-300 shadow-md focus:outline-none"
    >
      <input
        id="task"
        type="text"
        placeholder="New task input"
        value={task}
        onChange={onAddInputChange}
        className=" rounded-md text-gray-500  block w-full p-1 outline-none cursor-text"
      />
      <button
        onClick={handleAddTask}
        className="p-1 rounded-md absolute right-1 top-1 hover:scale-110 transition-all duration-300 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className=" w-6 h-6 text-gray-300 focus:outline-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6l6 6-6 6"
          />
        </svg>
      </button>
    </label>
  );
};

export default AddTaskForm;
