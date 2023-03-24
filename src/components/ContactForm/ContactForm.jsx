import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Component } from 'react';
import { Input } from 'components/Filter/Filter';
import styled from 'styled-components';
// import { AddContactSchema } from 'components/Validation/Validation';

const AddContactSchema = Yup.object().shape({
    name: Yup.string(),
    number: Yup.number()
})

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, {resetForm}) => {
      this.props.addContact(this.state);
     this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Formik
       initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={AddContactSchema}
      >
        <Form>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <Input
            id="name"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <ErrorMessage name="name" />

          <LabelStyled htmlFor="number">Phone Number</LabelStyled>
          <Input
            id="number"
            name="number"
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <ErrorMessage name="number" />

          <AddButton type="submit">Add to contacts</AddButton>
        </Form>
      </Formik>
    );
  }
}


const LabelStyled = styled.label`
  font-size: 25px;
`
const AddButton = styled.button`
  display: block;
  font-weight: 700;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
`

const FormError = styled(ErrorMessage)`
  display: block;
`