import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import useAuth from '@/hooks/useAuth';
import Loader from '@/components/Loader/Loader';

const Main = () => {
  const location = useLocation();
  const { customLoading } = useAuth();
  const isSignUpPage =
    location.pathname === '/signUp' ||
    location.pathname === '/login' ||
    location.pathname === '/forgetPassword' ||
    location.pathname === '/enterCodePage' ||
    location.pathname === '/resetPassword';

  return (
    <div>
      <ScrollRestoration />
      {!isSignUpPage && <Navbar />}
      {customLoading ? (
        <Loader />
      ) : (
        <div className={`${!isSignUpPage ? 'mt-[164px]' : ''} `}>
          <Outlet />
        </div>
      )}
      {!isSignUpPage && <Footer />}
    </div>
  );
};

export default Main;
