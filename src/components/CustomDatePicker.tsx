import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { FC } from 'react';
import dayjs from 'dayjs';

interface CustomDatePickerProps {
  date: Date | null;
  onChange: (
    date: Date | null,
    event?: React.SyntheticEvent<any> | undefined
  ) => void;
  id: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  id,
  date,
  onChange,
}) => {
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <div>
      <DatePicker
        customInput={
          <input className="text-sm text-gray-500 p-1 rounded-sm border hover:border-teal" />
        }
        id={id}
        selected={date}
        onChange={onChange}
        minDate={new Date()}
        filterTime={filterPassedTime}
        dateFormat="yyyy-MM-dd HH:mm"
        timeFormat="HH:mm"
        showDateSelect
        showTimeSelect
      />
    </div>
  );
};

export default CustomDatePicker;
