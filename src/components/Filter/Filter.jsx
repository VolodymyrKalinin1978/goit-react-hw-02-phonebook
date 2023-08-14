import React, { Component } from 'react';

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

export default Filter;
