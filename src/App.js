/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { HiMail } from 'react-icons/hi';
import { GiPadlockOpen } from 'react-icons/gi';

function App() {
  return (
    <div className="App flex justify-center flex-col items-center h-screen w-screen bg-slate-800">
      <p className="text-center font-bold text-white w-[29rem]">Welcome!</p>
      <div className="p-10">
        {/* <p className="text-center font-bold text-white">Welcome!</p> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-10 py-4">
            <p className="w-80 border border-red-400 rounded-lg mt-5 mb-10 cursor-pointer">
              Hello World!
            </p>
            <form className="bg-amber">
              <div className="mb-4 username-block relative">
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
              </div>

              <div className="mb-4 email-block relative flex flex-col items-start justify-center focus-within:text-gray-600">
                <HiMail className="w-5 h-5 absolute ml-3 text-gray-400 pointer-events-none" />
                {/* <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label> */}
                <input
                  className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>

              <div className="mb-4 password-block">
                <GiPadlockOpen className="w-5 h-5 absolute ml-3 mt-9 text-gray-400 pointer-events-none" />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 pl-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  placeholder="Password"
                />
              </div>

              <div className="mb-4 confirmation-block">
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
              </div>
            </form>
            <div className="px-4 flex justify-center my-2">
              <button
                className="px-8 py-2 bg-purple-500 border border-slate-400 rounded-md hover:bg-slate-500 uppercase font-bold text-white hover:text-black sm:w[60%]"
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
