/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
// import { HiMail } from 'react-icons/hi';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { GiPadlockOpen } from 'react-icons/gi';
// import { CgCopyright } from 'react-icons/cg';
// import {
//   Formik, Field, Form, ErrorMessage, useFormik,
// } from 'formik';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Suspense } from 'react';
// import routes from './Routes';

import routes from './Routes';

const App = () => {
  const test = 0;
  return (
    <>
      {/* <Router /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
