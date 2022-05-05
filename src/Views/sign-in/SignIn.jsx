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
    <main className="sign-in flex flex-col justify-between h-screen outline outline-red-800">
      <article className="text-black flex lg:flex-row md:flex-col gap-2 outline outline-blue-600">
        <section className="form-aside outline outline-red-800 md:mx-auto md:max-w-md lg:max-w-full w-full md:w-1/2 xl:w-1/2 max-h-screen mb-20 pb-10">
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
              <div className="hidden md:flex md:flex-row">
                <input id="remember" className="mb-4" type="checkbox" />
                <label
                  className="label block text-gray-500 text-sm font-bold mb-2"
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
        </section>
      </article>
      <footer className="hidden lg:flex  text-black outline outline-black py-2">
        {' '}
        <CgCopyright className="mt-1" />
        <p>Credequity</p>
      </footer>
    </main>
  );
};

export default SignIn;
