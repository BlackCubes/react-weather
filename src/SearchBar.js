import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit, search }) => (
  <form>
    <input
      type="text"
      name="search"
      value={search}
      placeholder="City Name"
      onSubmit={onSubmit}
    />
    <input type="submit" value="Search" />
  </form>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchBar;
