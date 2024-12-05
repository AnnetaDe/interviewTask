import React from 'react';

interface IButtonsFilter {
  textDone: string;
  textActive: string;
  onClick: () => void;
  onClickHide: () => void;
  className?: string;
}

const ButtonsFilter: React.FC<IButtonsFilter> = ({
  onClick,
  onClickHide,
  textDone,
  textActive,
}) => {
  return (
    <div className="flex gap-2 mb-5">
      <button
        onClick={onClick}
        className={' bg-teal-500 text-white-100 px-2 py-1 rounded-md'}
      >
        {textDone}
      </button>
      <button
        onClick={onClickHide}
        className={` bg-teal-500 text-white-100 px-2 py-1 rounded-md`}
      >
        {textActive}
      </button>
    </div>
  );
};

export default ButtonsFilter;
