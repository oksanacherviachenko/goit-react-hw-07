import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters'),
  number: Yup.string()
    .required('Number is required')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Number must match the pattern 000-00-00'
    ),
});

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact)); 
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;




