import React from 'react';

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
  labelClassName?: string;
  svgClassName?: string;
  checkedClassName?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  labelClassName,
  svgClassName,
  checkedClassName,
}) => {
  checked = checked || false;

  return (
    <label className="cursor-pointer text-white-100">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center ${
          checked ? `bg-teal border-teal ${checkedClassName}` : ''
        } ${labelClassName}`}
      >
        {checked && (
          <svg
            className={`h-6 w-6 text-white transition-opacity ${svgClassName}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke=" currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="5 13 9 17 19 7" className="checkmark-path" />
          </svg>
        )}
      </span>
    </label>
  );
};

export default CheckBox;
