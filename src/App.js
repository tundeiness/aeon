/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { HiMail } from 'react-icons/hi';
import { GiPadlockOpen } from 'react-icons/gi';
import { CgCopyright } from 'react-icons/cg';
// import { Formik, Field, Form, ErrorMessage } from "formik";

function App() {
  return (
    <div className="App flex flex-col items-center h-screen w-screen bg-slate-800 border border-red-700">
      <div className="top-matter  px-2">
        <div className="forgot-password px-12 mx-12 mb-12 mt-5">
          <p className="text-center text-white px-10 pb-10">Aeon Brand</p>
        </div>
        <div className="salutation px-12 mx-12 mt-5 mb-5">
          <p className="text-center font-bold text-white px-4 text-3xl">
            Welcome!
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center  pt-4 pb-6">
        <form className="bg-amber  w-auto rounded-lg bg-white">
          <div className="form_top-matter text-center mt-12 mb-8">
            <p className="text-slate-400 text-sm">Sign in with your credentials</p>
          </div>

          <div className="mb-5 email-block relative focus-within:text-gray-600 mx-5">
            <HiMail className="w-5 h-5 absolute ml-12 mt-4 text-gray-400 pointer-events-none" />
            {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label> */}
            <input
              className="shadow appearance-none border rounded  py-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 mx-10"
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>

          <div className="mb-5 password-block mx-5">
            <GiPadlockOpen className="w-5 h-5 absolute ml-12 mt-4 text-gray-400 pointer-events-none" />
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label> */}
            <input
              className="shadow appearance-none border rounded w-96 mx-10 py-4 pl-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Password"
            />
          </div>

          <div className="px-4 pb-8 flex justify-center my-2">
            <button
              className="px-6 py-3 bg-blue-500 border border-slate-400 rounded-md hover:bg-slate-500 uppercase font-bold text-white hover:text-black sm:w[60%]"
              type="button"
            >
              Login
            </button>
          </div>
        </form>

      </div>
      <div className="bottom-matter flex flex-col justify-between">
        <div className="forgot-password px-10 mx-12 pb-10 mb-8">
          <a className="inline-block px-10 text-sm text-slate-200" href="./">
            Forgot password?
          </a>
        </div>
        <div className="copyright px-10 mx-12 text-slate-400 text-sm pt-10 mt-10">
          <p className="brand flex uppercase px-10">
            <CgCopyright className="mt-1" />
            credequity
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
