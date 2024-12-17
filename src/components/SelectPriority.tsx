import React from 'react';
import Select, { SingleValue } from 'react-select';

interface IOption {
  value: string;
  label: string;
}

interface SelectPriorityProps {
  props: any;
  onChange: (value: string) => void;
  newValue: string;
  id: string;
}

const SelectPriority: React.FC<SelectPriorityProps> = props => {
  const selectableOptions: IOption[] = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  return (
    <div>
      <Select
        id={props.id}
        styles={{
          control: (base, state) => ({
            ...base,
            border: '1px solid #e2e8f0',
            boxShadow: state.isFocused ? '0 0 0 1px' : 'none',
            '&:hover': {
              border: '1px solid #17a2b8',
            },
          }),

          placeholder: base => ({
            ...base,

            color: '#a0aec0',
          }),

          option: (base, state) => ({
            ...base,
            '&:hover': {
              backgroundColor: '#17a2b8',
            },
            '&:active': {
              backgroundColor: '#17a2b8',
            },
            backgroundColor: state.isSelected ? '#17a2b8' : 'white',
            color: state.isSelected ? 'white' : 'gray',
          }),
        }}
        options={selectableOptions}
        onChange={(newValue: SingleValue<IOption>) => {
          if (newValue) {
            props.onChange(newValue.value);
          }
        }}
      />
    </div>
  );
};

// SelectPriority.displayName = 'SelectPriority';

export default SelectPriority;
