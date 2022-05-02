import { lazy } from 'react';

// import { useRoutes } from 'react-router-dom';
// const SignUpView = lazy(() => import('./views/sign-up/sign-up'));
// const ForgotView = lazy(() =>
//   import("./views/forgot-password/forgot-password")
// );
// const ResetView = lazy(() => import("./views/reset-password/reset-password"));
// const SetupBusinessView = lazy(() =>
//   import("./views/setup-business/setup-business")
// );
// const OtpView = lazy(() => import("./views/otp/otp"));
// const SecureView = lazy(() => import("./views/secure-account/secure-account"));
// const ProfileView = lazy(() => import("./views/profile-view/profile"));
// const PersonalInfoView = lazy(() =>
//   import("./views/profile-view/profile-personal-info/personal-info")
// );

// const SignInView = lazy(() => import('./Views/sign-in/SignIn'));

// const routes = [
//   {
//     title: 'Sign In',
//     path: '/',
//     exact: true,
//     component: SignInView,
//     protected: false,
//   },

// {
//   title: "Sign Up",
//   path: "/sign-up",
//   exact: true,
//   component: SignUpView,
//   protected: false,
// },

// {
//   title: "Forgot Password",
//   path: "/forgot-password",
//   exact: true,
//   component: ForgotView,
//   protected: false,
// },

// {
//   title: "Reset Password",
//   path: "/reset-password/:token",
//   exact: true,
//   component: ResetView,
//   protected: false,
// },

// {
//   title: "Setup Business",
//   path: "/setup-business",
//   exact: true,
//   component: SetupBusinessView,
//   protected: false,
// },

// {
//   title: "Otp",
//   path: "/otp",
//   exact: true,
//   component: OtpView,
//   protected: false,
// },

// {
//   title: "Secure Account",
//   path: "/secure-account",
//   exact: true,
//   component: SecureView,
//   protected: false,
// },
// {
//   title: "Profile",
//   path: "/profile",
//   exact: true,
//   component: ProfileView,
//   protected: true,
//   childRoutes: [
//     {
//       path: "news",
//       components: { header: Header, sidebar: Sidebar },
//     },
//   ],
// },
// ];

// const routes = useRoutes([
// { path: '/', element: <SignInView /> },
// {
//   path: '/invoices',
//   element: <Invoices />,
//   children: [
//     { path: ':id', element: <Invoice /> },
//     { path: '/pending', element: <Pending /> },
//     { path: '/complete', element: <Complete /> },
//   ],
// },
// {
//   path: '/users',
//   element: <Users />,
//   children: [
//     { path: ':id', element: <Profile /> },
//     { path: '/settings', element: <Settings /> },
//   ],
// },
// ]);

// You can declare this in `App.js`, but it might
// be better to move it to its own file.

// const routes = [
//   {
//     path: '/',
//     component: SignInView,
//   },
//   {
//     path: '/Teachers',
//     component: TeacherListPage,
//   },
//   {
//     path: '/Teachers/:teacherId',
//     component: TeacherPage,
//   },
//   {
//     path: '/Teachers/:teacherId/Classes',
//     component: TaughtClassesPage,
//   },
// ];

import { useRoutes } from 'react-router-dom';

// import AuthLayout from './layouts/AuthLayout';
// import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import SignUp from './pages/Signup'
const LoginView = lazy(() => import('./Views/sign-in/SignIn'));

const AppRouter = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <LoginView />,
    },
    // {
    //   path: "/discover",
    //   element: <Discover />,
    // },
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
// export default routes;
