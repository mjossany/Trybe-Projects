import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      inputId,
      inputTestId,
      inputLabel,
      inputLabelTestId,
      inputType,
      inputName,
      inputChecked,
      inputValue,
      onChangeInput,
      inputIsRequired,
      inputMaxLength,
    } = this.props;

    return (
      <div>
        <label
          htmlFor={ inputId }
          data-testid={ inputLabelTestId }
        >
          { inputLabel }
        </label>
        <input
          id={ inputId }
          data-testid={ inputTestId }
          type={ inputType }
          name={ inputName }
          value={ inputValue }
          checked={ inputChecked }
          onChange={ onChangeInput }
          required={ inputIsRequired }
          maxLength={ inputMaxLength }
        />
      </div>
    );
  }
}

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
  inputLabelTestId: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  inputChecked: PropTypes.bool,
  onChangeInput: PropTypes.func.isRequired,
  inputIsRequired: PropTypes.bool,
  inputMaxLength: PropTypes.number,
};

Input.defaultProps = {
  inputType: 'text',
  inputTestId: '',
  inputLabelTestId: '',
  inputChecked: false,
  inputIsRequired: true,
  inputMaxLength: 250,
};

export default Input;
