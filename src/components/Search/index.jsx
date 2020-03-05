import React, { useContext, useState } from 'react';
import { SearchContext } from '../../context';
import styled from '@emotion/styled';
import './style.scss';

const Wrapper = styled.form`
  .search--btn {
    color: ${props => props.theme.colorSecondary};
  }
  .search--input {
    color: ${props => props.theme.colorPrimary};
    ::placeholder {
      color: ${props => props.theme.colorSecondary};
    }
  }
`;

const Search = () => {
  const { setSearch } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState('');
  
  const addSearchValue = event => {
    setSearchValue(event.target.value);
  };
  const updateSearch = event => {
    event.preventDefault();
    setSearch(searchValue.trim());
  };
  return (
    <Wrapper className='search' onSubmit={updateSearch}>
      <button className='search--btn' type='submit'>
        <i className='fas fa-search'></i>
      </button>
      <input
        className='search--input'
        onChange={addSearchValue}
        type='text'
        placeholder='Search'
      />
    </Wrapper>
  );
};

export default Search;
