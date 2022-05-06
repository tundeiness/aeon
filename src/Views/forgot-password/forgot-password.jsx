/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  useFormik,
} from 'formik';
import { BiArrowBack } from 'react-icons/bi';
import AeonLogo from '../../static/assets/img/logo-blue.png';
import LandingImage from '../../static/assets/img/landing-image.png';
import LogoImage from '../../static/assets/img/logo-transparent.png';

function Forgotpassword() {
  const validate = (value) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.email) {
      errors.email = 'Cannot be blank';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)
    ) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const formic = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(`You have loggedin succesfully! Email: ${values.email}`);
    },
  });

  console.log(formic.values);
  return (
    <main className="forgot-container flex flex-col justify-between">
      <article className="article-matter flex flex-col md:flex-row items-center justify-center">
        <section className="login-section bg-white flex  md:mx-auto md-mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 px-6 lg:px-16 xl:px-20 xl:mx-10 h-screen border border-red-700">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="logo-container flex justify-center lg:mb-8 sm:mb-4 lg:mt-0 sm:mt-6 xs:mt-6 ">
              <img src={AeonLogo} alt="aeon-logo" className="lg:w-64 lg:h-16 sm:w-56 sm:h-14 xs:w-56 xs:h-14" />
            </div>
            <div className="w-full h-100 lg:px-16 lg:mb-0 xs:mb-14">
              <h1 className="cta-heading xl:mt-8 lg:mt-6 text-center font-semibold text-gray-900 leading-8 text-2xl">Forgot Password?</h1>
              <h2 className="cta-sub-heading sm:text-sm text-gray-500 mt-5 text-center">
                No worries, we&apos;ll send you reset instructions
              </h2>
              <form className="mt-6 px-6 border border-blue-700" onSubmit={formic.handleSubmit}>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    className={`w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 ${
                      formic.email && formic.errors.email
                        ? 'border-red-400'
                        : 'border-gray-100'
                    } `}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.email}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    required
                  />
                  {formic.touched.email && formic.errors.email && (
                  <span className="text-red-300 text-xs">
                    {formic.errors.email}
                  </span>
                  )}
                </div>

                {/* <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    className={`w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none focus:shadow-outline rounded-lg px-4 py-3 ${
                      formic.password && formic.errors.password
                        ? 'border-red-300'
                        : 'border-gray-100'
                    }`}
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.password}
                    id="password"
                    name="password"
                    type="password"
                    minLength={8}
                    placeholder="Enter password"
                    required
                  />
                  {formic.touched.password && formic.errors.password && (
                  <span className="text-red-400">{formic.errors.password}</span>
                  )}
                </div> */}

                {/* <div className="flex flex-row lg:justify-center justify-between w-full mt-12">
                  <div className="flex md:hidden flex-row">
                    <input id="remember" className="remember-input mt-2 mr-2" type="checkbox" />
                    <label
                      className="label block text-gray-700 text-xs font-medium mt-1"
                      htmlFor="remember"
                      id="remember-label"
                    >
                      Remember for 30 days
                    </label>
                  </div>
                  <Link className="block font-medium text-forgotBlue hover:text-black focus:text-black focus:outline-none" to="/forgot-password">Forgot Password</Link>
                </div> */}

                <button className="sign-in-button w-full block bg-buttonBlue text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type="submit">Reset Password</button>
                <div className="back-to-login flex flex-row mt-6 justify-center border border-red-600">
                  {/* <BiArrowBack className="pt-2 font-bold text-lg" /> */}
                  <Link className="text-gray-500" to="/">
                    <span className="back-arrow inline-block pr-2 text-md">&larr;</span>
                    <span className="inline-block">Back to Log in</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* <section className="relative banner-section hidden md:w-1/2 lg:block">
          <div className="relative image-wrapper w-full">
            <img src={LandingImage} alt="landing" className="w-full h-full object-cover" />
          </div>
          <img className="absolute bottom-0 w-full object-cover" src={LogoImage} alt="transparent-logo" />
        </section> */}
      </article>
      {/* <footer className="hidden lg:block footer-matter py-0 font-medium text-gray-500">
        {' '}
        <span className="inline-block pl-5">&copy;</span>
        <span className="uppercase inline-block pr-3">Credequity 2022</span>
      </footer> */}
    </main>
  );
}

export default Forgotpassword;
