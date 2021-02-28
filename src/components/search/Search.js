import React, { useState } from 'react';
import { connect } from 'react-redux';
import './search.css';
import { getSearchedResults, isEndOfPage } from '../../redux/actions';
import useSearch from './useSearch';

const Search = (props) => {
  const [query, setQuery] = useState('');

  const handleSearch = (value) => {
    setQuery(value);
  };

  useSearch(
    query,
    props.token,
    'album',
    props.getSearchedResults,
    props.endOfPage,
    props.isEndOfPage,
    props.data
  );
  return (
    <div className='searchContainer'>
      <input
        className='search'
        type='search'
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='Search by artist or album'
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    data: state.data,
    endOfPage: state.endOfPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchedResults: (data) => dispatch(getSearchedResults(data)),
    isEndOfPage: (res) => dispatch(isEndOfPage(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
