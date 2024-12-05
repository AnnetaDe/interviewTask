import React from 'react';

interface IButtonFilter {
  text: string;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

const ButtonFilter: React.FC<IButtonFilter> = ({
  text,
  onClick,
  ariaLabel,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`px-4 py-2 rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default ButtonFilter;
