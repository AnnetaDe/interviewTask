import { forwardRef, InputHTMLAttributes } from 'react';

type TypeTaskField = InputHTMLAttributes<HTMLInputElement>;

const TaskField = forwardRef<HTMLInputElement, TypeTaskField>((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        {...props}
        placeholder="for task edit"
        autoComplete="off"
        className="w-full border border-gray-200 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg font-semibold"
      />
    </div>
  );
});

export default TaskField;
