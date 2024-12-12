import DatePicker from 'react-datepicker';

const CustomDatePicker = ({ date, onChange }) => {
  return (
    <div>
      <DatePicker selected={date} onChange={onChange} />
    </div>
  );
};

export default CustomDatePicker;
