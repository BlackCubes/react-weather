import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => (
  <form>
    <input
      type="text"
      name="search"
      placeholder="City Name"
      onSubmit={onSubmit}
    />
    <input type="submit" value="Search" />
  </form>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
