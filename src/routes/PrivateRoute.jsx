import useAuth from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
