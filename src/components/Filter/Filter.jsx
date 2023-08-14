import React, { Component } from 'react';

import PropTypes from 'prop-types'; 

import { SearchInput } from 'components/App.Styled';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <SearchInput
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={onFilterChange}
      />
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
