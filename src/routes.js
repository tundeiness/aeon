import { lazy } from 'react';

// import { useRoutes } from 'react-router-dom';

// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';
const LoginView = lazy(() => import('./Views/sign-in/SignIn'));
const ForgotPasswordView = lazy(() => import('./Views/forgot-password/forgot-password'));

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

];

export default routes;
