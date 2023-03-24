import { Form, Formik, Field } from 'formik';
import { Component } from 'react';
import styled from 'styled-components';
import { FilterStyled } from './Filter.styled';

export class Filter extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
     this.setState(
      { filter: e.target.value },
      this.props.filterContacts(e.target.value)
    );


  };
  render() {
    return (
      <Formik initialValues={{ filter: '' }}>
        <FilterStyled>
          <label htmlFor="searchfilter"></label>
          <Input
            id="searchfilter"
            filter="filter"
            placeholder="Search contact"
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </FilterStyled>
      </Formik>
    );
  }
}

export const Input = styled(Field)`
  font-size: 25px;
  display: block;
  width: 100%;
margin-bottom: 15px;
`