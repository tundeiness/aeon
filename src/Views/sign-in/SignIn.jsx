/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { GiPadlockOpen } from 'react-icons/gi';
import { CgCopyright } from 'react-icons/cg';
import { useFormik } from 'formik';

import './signin.css';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import AeonLogo from '../../static/assets/img/logo-blue.png';
import LandingImage from '../../static/assets/img/landing-image.png';
import LogoImage from '../../static/assets/img/logo-transparent.png';

const SignIn = () => {
  const test = 0;

  const validate = (value) => {
    const errors = {};
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

  return (
    <main className="landing-container flex flex-col justify-between">
      <article className="article-matter flex flex-col md:flex-row items-center">
        <section className="login-section bg-white flex  md:mx-auto md-mx-0 md:max-w-md lg:max-w-full w-full md:w-1/2 px-6 lg:px-16 xl:px-20 xl:mx-10">
          <div className="w-full">
            <div className="logo-container flex justify-center lg:mb-8 sm:mb-4 lg:mt-2 sm:mt-6 xs:mt-6 ">
              <img src={AeonLogo} alt="aeon-logo" className="lg:w-64 lg:h-16 sm:w-56 sm:h-14 xs:w-56 xs:h-14" />
            </div>
            <div className="w-full h-100 lg:px-16 lg:mb-0 xs:mb-14">
              <h1 className="cta-heading font-bold leading-tight xl:mt-12 lg:mt-10">Log in</h1>
              <h2 className="cta-sub-heading sm:text-sm text-gray-500 mt-5">
                Welcome back! Please enter your details
              </h2>
              <form className="mt-6">
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input className="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none rounded-lg px-4 py-3" type="email" placeholder="Enter your email" required />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input className="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white  focus:outline-none rounded-lg px-4 py-3" type="password" minLength={8} placeholder="Enter password" required />
                </div>

                <div className="flex flex-row lg:justify-center justify-between w-full mt-12">
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
                </div>

                <button className="sign-in-button w-full block bg-buttonBlue text-white hover:bg-blue-700 px-4 py-3 mt-8 rounded-lg font-medium focus:bg-blue-700 focus:outline-none" type="submit">Sign in</button>
              </form>
            </div>
          </div>
        </section>

        <section className="relative banner-section hidden md:w-1/2 lg:block">
          <div className="relative image-wrapper w-full">
            <img src={LandingImage} alt="landing" className="w-full h-full object-cover" />
          </div>
          <img className="absolute bottom-0 w-full object-cover" src={LogoImage} alt="transparent-logo" />
        </section>
        {/* <section className="form-aside outline outline-red-800 md:mx-auto md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/2 max-h-screen mb-20 pb-10">
          <div className="logo-container flex justify-center outline outline-red-800 my-20">
            <img src={AeonLogo} alt="aeon-logo" className="w-22 h-16" />
          </div>

          <form className="form outline outline-black lg:mx-10 lg:px-12">
            <div className="top-block outline outline-red-600 lg:mx-10 lg:px-10">
              <h1 className="cta-heading leading-tight mb-4">Log in</h1>
              <p className="cta-sub-heading text-gray-500">
                Welcome back! Please enter your details
              </p>
            </div>
            <div className="email-block relative h-20 outline outline-red-600 lg:mx-10 lg:px-10 lg:mt-6 lg:mb-3">
              <label
                className="label block text-gray-500 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="shadow apperance-none text-gray-700 leading-tight w-full h-10 rounded-md lg:pl-3 outline outline-black"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
              />
            </div>

            <div className="password-block relative h-20 outline outline-red-600 lg:mx-10 lg:px-10 lg:mb-5">
              <label
                className="label block text-gray-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                required
                className="shadow apperance-none text-gray-700 leading-tight w-full h-10 rounded-md lg:pl-3 outline outline-black focus:outline-none"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
              />
            </div>

            <div className="bottom-block flex flex-row text-center outline outline-red-600 lg:mx-10 lg:px-10 lg:mb-10">
              <div className="flex md:hidden flex-row ">
                <input id="remember" className="mb-4" type="checkbox" />
                <label
                  className="label block text-gray-500 text-xs font-bold mb-2"
                  htmlFor="remember"
                >
                  Remember for 30 days
                </label>
              </div>
              <Link
                className="forgot-password-link inline-block px-10 text-sm text-forgotBlue"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex justify-center outline outline-red-600 lg:mx-10 lg:px-10">
              <button
                className="sign-in-button w-full bg-buttonBlue border border-slate-400 rounded-md hover:bg-slate-500 capitalize leading-5 text-white hover:text-black sm:w[60%]"
                type="submit"
                to="/home"
              >
                Sign in
              </button>
            </div>
          </form>
        </section>

        <section className="hidden lg:block md:w-1/2 welcome-aside outline outline-red-800">
          <p>This is the welcome image section</p>
        </section> */}
      </article>
      <footer className="hidden lg:block footer-matter py-0 font-medium text-gray-500">
        {' '}
        <span>&copy;</span>
        <span className="uppercase">Credequity 2022</span>
      </footer>
    </main>
  );
};

export default SignIn;
