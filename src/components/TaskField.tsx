import { forwardRef, InputHTMLAttributes } from 'react';

type TypeTaskField = InputHTMLAttributes<HTMLInputElement>;

const TaskField = forwardRef<HTMLInputElement, TypeTaskField>((props, ref) => {
  return (
    <div>
      <input
        ref={ref}
        {...props}
        type="text"
        placeholder="for task edit"
        autoComplete="off"
      />
    </div>
  );
});

export default TaskField;
