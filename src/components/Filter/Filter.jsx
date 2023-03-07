import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.module';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Contact name"
      />
    </FilterTitle>
  );
};

Filter.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
