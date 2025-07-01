import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.css';

const Contact = () => {
  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    agreeTerms: false,
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10,11}$/, 'Phone number must be 10-11 digits')
      .required('Phone number is required'),
    program: Yup.string().required('Please select a program'),
    message: Yup.string().required('Message is required'),
    agreeTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  });

  // Program options
  const programOptions = [
    { value: '', label: 'Please select' },
    { value: 'software-engineering', label: 'Software Engineering' },
    { value: 'information-system', label: 'Information System' },
    { value: 'information-assurance', label: 'Information Assurance' },
    { value: 'internet-of-things', label: 'Internet of Things' },
    { value: 'artificial-intelligence', label: 'Artificial Intelligence' },
    { value: 'digital-art-design', label: 'Digital Art & Design' },
  ];

  // Handle form submission
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // Simulating an API call
    setTimeout(() => {
      console.log('Form values:', values);
      alert('Form submitted successfully!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Fill out the form below to get in touch with us.</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="contact-form">
              <div className="form-group">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={errors.name && touched.name ? 'error-input' : ''}
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={errors.email && touched.email ? 'error-input' : ''}
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className={errors.phone && touched.phone ? 'error-input' : ''}
                />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <Field
                  as="select"
                  name="program"
                  className={errors.program && touched.program ? 'error-input' : ''}
                >
                  {programOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="program" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  className={errors.message && touched.message ? 'error-input' : ''}
                />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <Field type="checkbox" name="agreeTerms" />
                  <span>Agree to terms and conditions</span>
                </label>
                <ErrorMessage name="agreeTerms" component="div" className="error-message" />
              </div>

              <div className="form-group">
                <button type="submit" disabled={isSubmitting} className="submit-button">
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;