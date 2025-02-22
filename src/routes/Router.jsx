import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import ProductServices from '../pages/ProductServices/ProductServices';
import BlogArticles from '../pages/BlogArticles/BlogArticles';
import BlogDetailsPage from '../pages/BlogArticles/BlogDetailsPage';
import SignUp from '../pages/SignUp/SignUp';
import Login from '../pages/LogIn/Login';
import ForgetPasswordPage from '../pages/ForgetPasswordPage/ForgetPasswordPage';
import CodePage from '../pages/CodePage/CodePage';
import ProductGuidePage from '../pages/ProductGuidePage/ProductGuidePage';
import TermsConditions from '../pages/TermsConditions/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import OrderForms from '../pages/OrderForms/OrderForms';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/pages/Dashboard/Dashboard';
import OrderHistory from '../pages/Dashboard/pages/OrderHistory/OrderHistory';
import PaymentHistory from '../pages/Dashboard/pages/PaymentHistory/PaymentHistory';
import Settings from '../pages/Dashboard/pages/Settings/Settings';
import ContactUs from '@/pages/ContactUs/ContactUs';
import ResetPasswordPage from '@/pages/ResetPasswordPage/ResetPasswordPage';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs />,
      },
      {
        path: '/productServices',
        element: <ProductServices />,
      },
      {
        path: '/blogArticles',
        element: <BlogArticles />,
      },
      {
        path: '/blogArticles/:slug',
        element: <BlogDetailsPage />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/forgetPassword',
        element: <ForgetPasswordPage />,
      },
      {
        path: '/enterCodePage',
        element: <CodePage />,
      },
      {
        path: '/productGuidePage',
        element: <ProductGuidePage />,
      },
      {
        path: '/terms',
        element: <TermsConditions />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/orderForms',
        element: <OrderForms />,
      },
      {
        path: '/contactUs',
        element: <ContactUs />,
      },
      {
        path: '/resetPassword',
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: '/dashboardLayout',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboardLayout/mainDashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboardLayout/orderHistory',
        element: (
          <PrivateRoute>
            <OrderHistory />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboardLayout/paymentHistory',
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboardLayout/settings',
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
