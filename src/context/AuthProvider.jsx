/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { axiosSecure } from '@/hooks/useAxiosSecure';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [customLoading, setCustomLoading] = useState(false);

  //get user info::
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const userData = async () => {
        try {
          const { data } = await axiosSecure('/api/users/data');
          setUser(data?.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false); // Stop loading after fetching
        }
      };
      userData();
    } else {
      setLoading(false); // No token means no need to fetch
    }
  }, [token]);
  const stateValue = {
    user,
    setUser,
    token,
    loading,
    setLoading,
    customLoading,
    setCustomLoading,
  };

  return (
    <AuthContext.Provider value={stateValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
