import { lazy } from 'react';

// import { useRoutes } from 'react-router-dom';

// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';
const LoginView = lazy(() => import('./Views/sign-in/SignIn'));
const ForgotPasswordView = lazy(() => import('./Views/forgot-password/forgot-password'));
const CheckEmailView = lazy(() => import('./Views/check-email/check-email'));
const NewPasswordView = lazy(() => import('./Views/new-password/new-password'));
const PasswordResetView = lazy(() => import('./Views/password-reset/password-reset'));

// const AppRouter = () => {
//   const element = useRoutes([
//     {
//       exact: true,
//       path: '/',
//       element: <LoginView />,
//       protected: false,
//       // children: [
//       //   { path: '/forgot-password', element: <ForgotPasswordView /> },
//       // ],
//     },
//     {
//       path: '/forgot-password',
//       exact: true,
//       element: <ForgotPasswordView />,
//       protected: false,
//     },
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
//   ]);
//   return element;
// };
// export default AppRouter;

const routes = [
  {
    path: '/', // the url
    element: <LoginView />, // view rendered
    protected: false,
    title: 'Log In',
    exact: true,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordView />,
    protected: false,
    title: 'Forgot Password',
    exact: true,
  },
  {
    path: '/check-email',
    element: <CheckEmailView />,
    protected: false,
    title: 'Check Email',
    exact: true,
  },
  {
    path: '/new-password',
    element: <NewPasswordView />,
    protected: false,
    title: 'New Password',
    exact: true,
  },
  {
    path: '/password-reset',
    element: <PasswordResetView />,
    protected: false,
    title: 'Password Reset',
    exact: true,
  },

];

export default routes;
