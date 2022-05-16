// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import InputSelect from './InputSelect';
import optionsSearchBar from '../searchBarOptions';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <Input
          inputLabel="Inclui o texto:"
          inputLabelTestId="text-input-label"
          inputValue={ searchText }
          onChangeInput={ onSearchTextChange }
          inputTestId="text-input"
          inputId="input-text"
          inputName="searchText"
        />
        <Input
          inputLabel="Mostrar somente favoritos"
          inputLabelTestId="checkbox-input-label"
          inputChecked={ bookmarkedOnly }
          onChangeInput={ onBookmarkedChange }
          inputTestId="checkbox-input"
          inputId="input-check"
          inputName="bookmarkedOnly"
          inputType="checkbox"
          inputValue="favorites"
        />
        <InputSelect
          labelText="Filtrar por gênero"
          labelId="select-input-label"
          selectId="select-input"
          selectName="selectedGenre"
          selectValue={ selectedGenre }
          onChangeInput={ onSelectedGenreChange }
          optionId="select-option"
          optionValue={ optionsSearchBar }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
