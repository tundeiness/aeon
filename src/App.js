/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { HiMail } from 'react-icons/hi';
import { GiPadlockOpen } from 'react-icons/gi';
import { CgCopyright } from 'react-icons/cg';

function App() {
  return (
    <div className="App flex justify-center flex-col items-center h-screen w-screen bg-slate-800 border border-red-700">
      <p className="text-center font-bold text-white w-[29rem]">Welcome!</p>

      <div className="border border-red-800">
        {/* <p className="text-center font-bold text-white">Welcome!</p> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-10 py-4">
            {/* <p className="w-80 border border-red-400 rounded-lg mt-5 mb-10 cursor-pointer">
              Hello World!
            </p> */}
            <form className="bg-amber w-80 my-5">
              {/* <div className="mb-4 username-block relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-500 ring-2 ring-gray-500"
                  id="username"
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                />
              </div> */}

              <div className="mb-4 email-block relative flex flex-col items-start justify-center focus-within:text-gray-600">
                <HiMail className="w-3 h-3 absolute ml-3 text-gray-400 pointer-events-none" />
                {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label> */}
                <input
                  className="shadow appearance-none border rounded w-full py-4 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>

              <div className="mb-4 password-block">
                <GiPadlockOpen className="w-3 h-3 absolute ml-3 mt-12 text-gray-400 pointer-events-none" />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-4 pl-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  placeholder="Password"
                />
              </div>

              {/* <div className="mb-4 confirmation-block">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password-confirmation"
                >
                  Password Confirmation
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password-confirmation"
                  type="text"
                  placeholder="Password Confirmation"
                />
              </div> */}
            </form>
            <div className="px-4 pb-6 flex justify-center my-2">
              <button
                className="px-6 py-3 bg-purple-500 border border-slate-400 rounded-md hover:bg-slate-500 uppercase font-bold text-white hover:text-black sm:w[60%]"
                type="button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-matter border border-white">
        <div className="forgot-password px-10 mx-12">
          <a className="inline-block px-10" href="./">
            Forgot password?
          </a>
        </div>
        <div className="copyright px-10 mx-12">
          <p className="brand flex uppercase px-10">
            <CgCopyright className="mt-1" />
            credequity
          </p>
        </div>

        {/* <div className="brand pt-24">
          <p className="text-white flex justify-center">
            <CgCopyright className="mt-1" />
            CREDEQUITY
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
