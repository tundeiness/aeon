/* eslint-disable no-unused-vars */
import React from 'react';
import { HiMail } from 'react-icons/hi';
import { GiPadlockOpen } from 'react-icons/gi';
import { CgCopyright } from 'react-icons/cg';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const validate = (value) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.email) {
      errors.email = 'Cannot be blank';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const formic = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(`You have loggedin succesfully! Email: ${values.email}`);
    },
  });

  console.log(formic.values);

  return (
    <div className="App flex justify-center min-h-full w-screen bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto content-container flex flex-col justify-center items-center overflow-y-hidden overflow-x-hidden min-h-screen">
        <div className="flex flex-col justify-between max-w-md w-full max-h-md h-full">
          <div className="max-w-md w-full mx-auto">
            <p className="text-white text-center">Aeon Brand</p>
          </div>
          <div className="max-w-md w-full mx-auto pb-10">
            <p className="text-white text-3xl text-center">Welcome!</p>
          </div>
        </div>

        <div className="max-w-md w-full mx-auto rounded-lg  px-8  bg-slate-100">
          <div className="form_top-matter text-center pt-10 pb-6">
            <p className="text-slate-400 text-sm">
              Sign in with your credentials
            </p>
          </div>
          <form action="" className="space-y-1" onSubmit={formic.handleSubmit}>
            <div className="email-block relative h-20">
              <HiMail className="envelope w-4 h-4 absolute ml-2 mt-[5%] text-gray-400 pointer-events-none" />
              {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label> */}
              <input
                required
                className={`shadow appearance-none border rounded mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus-within:text-gray-600 w-full pl-8 py-3 ${
                  formic.email && formic.errors.email
                    ? 'border-red-400'
                    : 'border-gray-100'
                }`}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
                value={formic.values.email}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
              {formic.touched.email && formic.errors.email && (
                <span className="text-red-300 text-xs">
                  {formic.errors.email}
                </span>
              )}
            </div>

            <div className="password-block relative">
              <GiPadlockOpen className="padlock w-4 h-4 absolute ml-2 mt-[3.5%] text-gray-400 pointer-events-none" />
              {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label> */}
              <input
                required
                className={`shadow appearance-none border rounded w-full pl-8 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formic.password && formic.errors.password
                    ? 'border-red-300'
                    : 'border-gray-100'
                }`}
                onChange={formic.handleChange}
                onBlur={formic.handleBlur}
                value={formic.values.password}
                id="password"
                name="password"
                type="text"
                placeholder="Password"
              />
              {formic.touched.password && formic.errors.password && (
                <span className="text-red-400">{formic.errors.password}</span>
              )}
            </div>

            <div className="px-4 flex justify-center my-2 pt-5 pb-10">
              <button
                className="px-6 py-3 bg-indigo-500 border border-slate-400 rounded-md hover:bg-slate-500 capitalize font-bold text-white hover:text-black sm:w[60%]"
                type="button"
                to="/home"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-between max-h-md h-full">
          <div className="max-w-md w-full mx-auto pt-4">

            <Link
              className="forgot-password-link inline-block px-10 text-sm text-slate-200"
              to="/Forgotpassword"
            >
              Forgot password?
            </Link>
          </div>
          <div className="max-w-md w-full mx-auto">
            <p className="brand flex uppercase px-10 text-sm text-slate-500">
              <CgCopyright className="mt-1" />
              credequity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
