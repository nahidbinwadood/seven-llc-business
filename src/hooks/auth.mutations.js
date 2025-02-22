import { useMutation } from '@tanstack/react-query';
import { LoginInFunc, SignUpFunc } from './auth.hooks';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import toast from 'react-hot-toast';
import { axiosSecure } from './useAxiosSecure';

export const useSignUp = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['signUp'],
    onMutate: () => {
      setLoading(true);
    },
    mutationFn: (payload) => SignUpFunc(payload),
    onSuccess: () => {
      toast.success('User registered successfully', {
        duration: 1500,
      });
      setLoading(false);
      navigate('/login');
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};
export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser, setLoading } = useAuth();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (payload) => LoginInFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: async (data) => {
      setUser(data?.data);
      localStorage.setItem('token', data?.data?.token);
      const userData = {
        name: data?.data?.first_name + ' ' + data?.data?.last_name,
        image: data?.data?.avatar,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      setLoading(false);
      toast.success('User logged in successfully', {
        duration: 1500,
      });
      navigate('/');
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};
export const useLogout = () => {
  const { setUser, setCustomLoading } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      const { data } = await axiosSecure.post('/api/users/logout');
      return data;
    },
    onMutate: () => {
      setCustomLoading(true);
    },
    onSuccess: () => {
      setUser(null);
      setCustomLoading(false);
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      toast.success('User logged out successfully', {
        duration: 1500,
      });
      navigate('/login');
    },
    onError: () => {
      setCustomLoading(false);
    },
  });
};
