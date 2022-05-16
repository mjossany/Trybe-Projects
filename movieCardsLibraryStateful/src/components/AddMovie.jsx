// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputSelect from './InputSelect';
import Button from './Button';
import addMoviesList from '../addMovies';
import optionsAddMovies from '../addMoviesOptions';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.textInputChangeHandler = this.textInputChangeHandler.bind(this);
    this.clickAddButton = this.clickAddButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  textInputChangeHandler(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickAddButton(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const estado = this.state;
    return (
      <form data-testid="add-movie-form">
        { addMoviesList.map((movie) => (
          <Input
            key={ movie.inputName }
            inputId={ movie.inputId }
            inputLabel={ movie.labelText }
            inputLabelTestId={ movie.labelId }
            inputTestId={ movie.inputId }
            inputType={ movie.inputType }
            inputName={ movie.inputName }
            inputValue={ estado[movie.inputValue] }
            onChangeInput={ this.textInputChangeHandler }
          />
        ))}
        <InputSelect
          labelText="Gênero"
          labelId="genre-input-label"
          selectId="genre-input"
          selectValue={ estado.genre }
          selectName="genre"
          onChangeInput={ this.textInputChangeHandler }
          optionId="genre-option"
          optionValue={ optionsAddMovies }
        />
        <TextArea
          labelText="Sinopse"
          labelId="storyline-input-label"
          textAreaId="storyline-input"
          textAreaName="storyline"
          textAreaValue={ estado.storyline }
          onChangeTextArea={ this.textInputChangeHandler }
        />
        <Button
          buttonText="Adicionar filme"
          buttonId="send-button"
          onClickInput={ this.clickAddButton }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
