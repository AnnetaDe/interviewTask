import React from 'react';

interface IButtonsFilter {
  textDone: string;
  textActive: string;
  onClick: () => void;
  onClickHide: () => void;
  classNameShow?: string;
  classNameHide?: string;
}

const ButtonsFilter: React.FC<IButtonsFilter> = ({
  onClick,
  onClickHide,
  textDone,
  textActive,
  classNameShow,
  classNameHide,
}) => {
  return (
    <div className="mb-5 flex justify-between">
      <button onClick={onClick} className={classNameShow}>
        {textDone}
      </button>
      <button onClick={onClickHide} className={classNameHide}>
        {textActive}
      </button>
    </div>
  );
};

export default ButtonsFilter;
