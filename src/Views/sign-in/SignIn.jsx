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

const SignIn = () => {
  const test = 0;
  return (
    <main className="sign-in flex flex-col outline outline-red-800">
      <article className="text-black flex lg:flex-row md:flex-col gap-2 h-screen outline outline-blue-600">
        <section className="form-aside outline outline-red-800 md:w-1/2">
          <div className="logo-container flex justify-center outline outline-red-800">
            <img src={AeonLogo} alt="aeon-logo" className="w-22" />
          </div>

          <form className="form outline outline-black lg:mx-10 lg:px-12">
            <div className="top-block outline outline-red-600 lg:mx-10 lg:px-10">
              <h1 className="cta-heading">Log in</h1>
              <p>Welcome back! Please enter your details</p>
            </div>
            <div className="email-block relative h-20 outline outline-red-600 lg:mx-10 lg:px-10">
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
            <div className="password-block relative h-20 outline outline-red-600 lg:mx-10 lg:px-10">
              <label
                className="label block text-gray-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                required
                className="shadow apperance-none text-gray-700 leading-tight w-full h-10 rounded-md lg:pl-3 outline outline-black"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
              />
            </div>
            <div className="bottom-block text-center outline outline-red-600 lg:mx-10 lg:px-10">
              <Link
                className="forgot-password-link inline-block px-10 text-sm text-forgotBlue"
                to="/forgot-password"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex justify-center outline outline-red-600 lg:mx-10 lg:px-10">
              <button
                className="sign-in-button w-full bg-buttonBlue border border-slate-400 rounded-md hover:bg-slate-500 capitalize font-bold text-white hover:text-black sm:w[60%]"
                type="button"
                to="/home"
              >
                Sign in
              </button>
            </div>
          </form>
        </section>

        <section className="welcome-aside outline outline-red-800 md:w-1/2 h-screen">
          <p>This is the welcome image section</p>
        </section>
      </article>
      <footer className="flex text-black outline outline-black">
        {' '}
        <CgCopyright className="mt-1" />
        Credequity
      </footer>
    </main>
  );
};

export default SignIn;
