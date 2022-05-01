import { lazy } from 'react';

const SignInView = lazy(() => import('./Views/sign-in/SignIn'));
// const SignUpView = lazy(() => import("./views/sign-up/sign-up"));
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

const routes = [
  {
    title: 'Sign In',
    path: '/',
    exact: true,
    component: SignInView,
    protected: false,
  },

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
  //   routes: [
  //     {
  //       title: "Personal",
  //       path: "/profile/personal-info",
  //       exact: true,
  //       component: PersonalInfoView,
  //       protected: true,
  //     },
  //   ],
  // },
];

export default routes;
