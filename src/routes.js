import { lazy } from 'react';

import { useRoutes } from 'react-router-dom';

// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import SignUp from './pages/Signup'
const LoginView = lazy(() => import('./Views/sign-in/SignIn'));
const ForgotPasswordView = lazy(() => import('./Views/forgot-password/forgot-password'));

const AppRouter = () => {
  const element = useRoutes([
    {
      exact: true,
      path: '/',
      element: <LoginView />,
      protected: false,
      // children: [
      //   { path: '/forgot-password', element: <ForgotPasswordView /> },
      // ],
    },
    {
      path: '/forgot-password',
      exact: true,
      element: <ForgotPasswordView />,
      protected: false,
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
    // {
    //   element: <LoginView />,
    //   children: [
    //     { path: '/', element: <LoginView /> },
    //     //  { path: "signup", element: <SignUp /> },
    //   ],
    // },
    // {
    //     element: <MainLayout />,
    //     children: [
    //         { path: "home", element: <Home /> },
    //         { path: "about", element: <About /> },
    //     ],
    // },
  ]);
  return element;
};
export default AppRouter;
