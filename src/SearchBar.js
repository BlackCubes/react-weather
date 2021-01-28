import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { location } = this.state;
    const { onSubmit } = this.props;
    onSubmit(location);
    this.setState({ location: '' });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { location } = this.state;

    return (
      <div className="search-bar">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group-wrapper">
            <div className="form__group">
              <label className="form__label label-text" htmlFor="searchInput">
                <input
                  type="text"
                  name="location"
                  className="form__input input-text"
                  id="searchInput"
                  value={location}
                  placeholder="City Name"
                  onChange={this.handleChange}
                />
                Winter is coming...
              </label>
            </div>

            <div className="form__group">
              <button className="btn" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
