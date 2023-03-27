import { Formik, Field } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import { FilterStyled } from './Filter.styled';

export function Filter({ contacts, filterContacts }) {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.target.value);
    return filterContacts(e.target.value);
  };
  if (contacts.length === 0) return;
  return (
    <Formik initialValues={{ filter: '' }}>
      <FilterStyled>
        <label htmlFor="searchfilter"></label>
        <Input
          id="searchfilter"
          filter="filter"
          placeholder="Search contact"
          value={filter}
          onChange={handleChange}
        />
      </FilterStyled>
    </Formik>
  );
}

export const Input = styled(Field)`
  font-size: 25px;
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;
