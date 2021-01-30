import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const regexUnicode = /^[a-zA-Z\u0080-\u024F]+(?:([ \-']|(\. ))[a-zA-Z\u0080-\u024F]+)*$/;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      errors: {
        location: '',
      },
      errorClass: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { location, errors } = this.state;
    const { onSubmit } = this.props;

    if (this.validateForm(errors)) {
      onSubmit(location);
    } else {
      this.setState({
        errors: {
          location: 'Invalid search!',
        },
        errorClass: 'error',
      });
    }
    this.setState({ location: '' });
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = this.state;
    let { errorClass } = this.state;

    if (value.length < 3)
      errors.location = 'Must be a minimum of 3 characters.';
    else if (value.length > 91)
      errors.location = 'Must be 90 characters or less.';
    else if (!regexUnicode.test(value))
      errors.location = 'Must be a valid city.';
    else errors.location = '';

    errorClass = errors.location.length > 0 ? 'error' : '';
    this.setState({ [name]: value, errors, errorClass });
  }

  validateForm(errors) {
    let valid = true;
    Object.values(errors).forEach((val) => {
      if (val.length > 0) valid = false;
    });
    return valid;
  }

  render() {
    const { location, errors, errorClass } = this.state;

    return (
      <div className="search-bar">
        <form className="form" onSubmit={this.handleSubmit} noValidate>
          <div className="form__group-wrapper">
            <div className="form__group">
              <label htmlFor="searchInput">
                <input
                  type="text"
                  name="location"
                  className={`form__input input-text ${errorClass}`}
                  id="searchInput"
                  value={location}
                  placeholder="City Name"
                  onChange={this.handleChange}
                  noValidate
                />
                <span className="form__label label-text">
                  {errors.location.length > 0
                    ? errors.location
                    : 'Winter is coming...'}
                </span>
              </label>
            </div>

            <div className="form__group">
              <button
                className="btn"
                type="submit"
                disabled={errors.location.length > 0}
              >
                <FontAwesomeIcon icon={faSearch} className="btn-icon" />
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
