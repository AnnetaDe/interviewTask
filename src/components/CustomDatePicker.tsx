import DatePicker from 'react-datepicker';

import { FC } from 'react';

interface CustomDatePickerProps {
  date: Date;
  onChange: (date: Date | null) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ date, onChange }) => {
  return (
    <div>
      <DatePicker selected={date} onChange={onChange} />
    </div>
  );
};

export default CustomDatePicker;
