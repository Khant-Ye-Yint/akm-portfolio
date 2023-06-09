'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import Img from '../../public/images/img3.jpeg';

const imageStyle = {
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: '1px solid #fff',
};

const Contact = () => {
  const formRef = useRef();

  return (
    <main className="container flex-1">
      <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl font-dosis text-primary">
        Contact Me.
      </h1>
      <div className="flex flex-col items-center justify-center my-10 md:space-y-10 md:justify-between md:space-x-5 lg:flex-row-reverse">
        <div className="relative w-full hidden md:flex justify-center select-none items-center md:h-[450px] 2xl:h-[600px] md:flex-1">
          <Image
            priority
            src={Img}
            alt="image"
            style={imageStyle}
            width={450}
          />
        </div>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, '* Too Short!')
              .max(70, '* Too Long!')
              .required('* Required'),
            email: Yup.string().email('* Invalid email').required('* Required'),
            message: Yup.string()
              .min(2, '* Too Short!')
              .max(500, '* Too Long!')
              .required('* Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            emailjs
              .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_PUBLIC_ID
              )
              .then(
                () => {
                  toast.success('Email Sent', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                  setSubmitting(false);
                },
                (error) => {
                  console.log(error.text);
                }
              );
            resetForm();
          }}
        >
          {({ isValid }) => (
            <div className="flex items-center justify-center flex-1 w-full">
              <Form
                className="flex flex-col items-start justify-center w-3/4 space-y-10 "
                ref={formRef}
              >
                <div className="form-field">
                  <Field name="name" placeholder="Name" className="input" />
                  <span className="text-red-500">
                    <ErrorMessage name="name" />
                  </span>
                </div>
                <div className="form-field">
                  <Field name="email" placeholder="Email" className="input" />
                  <span className="text-red-500">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div className="form-field">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Drop your thoughts"
                    className="input"
                    rows={4}
                  />
                  <span className="text-red-500">
                    <ErrorMessage name="message" />
                  </span>
                </div>

                <button
                  disabled={!isValid}
                  type="submit"
                  className={`py-1 text-lg font-bold rounded-md cursor-pointer px-7 transition duration-150 ease-in ${
                    isValid
                      ? 'bg-primary hover:bg-secondary'
                      : 'bg-gray-500 cursor-not-allowed'
                  }  text-background`}
                >
                  Submit
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Contact;
