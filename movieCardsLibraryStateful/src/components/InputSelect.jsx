import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      selectId,
      selectValue,
      selectName,
      onChangeInput,
      optionId,
      optionValue,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ selectId }>
        { labelText }
        <select
          data-testid={ selectId }
          value={ selectValue }
          name={ selectName }
          onChange={ onChangeInput }
        >
          { optionValue.map((obj) => (
            <option
              key={ obj.optText }
              data-testid={ optionId }
              value={ obj.optValue }
            >
              { obj.optText }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  optionId: PropTypes.string.isRequired,
  optionValue: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default InputSelect;
