import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useState } from 'react';
import { Input } from 'components/Filter/Filter';
import styled from 'styled-components';

const AddContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={AddContactSchema}
    >
      <Form>
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <Input
          id="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
        <ErrorMessage component="div" name="name" />

        <LabelStyled htmlFor="number">Phone Number</LabelStyled>
        <Input
          id="number"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
        />
        <ErrorMessage component="div" name="number" />

        <AddButton type="submit">Add to contacts</AddButton>
      </Form>
    </Formik>
  );
};

const LabelStyled = styled.label`
  font-size: 25px;
`;
const AddButton = styled.button`
  display: block;
  font-weight: 700;
  width: 100%;
  font-size: 20px;
  cursor: pointer;
`;
