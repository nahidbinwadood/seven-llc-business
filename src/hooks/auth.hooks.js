import { axiosPublic } from './useAxiosPublic';
import { axiosSecure } from './useAxiosSecure';

export const SignUpFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/users/register', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
export const LoginInFunc = async (payload) => {
  const { data } = await axiosPublic.post('/api/users/login', payload);
  return data;
};
export const UserDataFunc = async () => {
  const { data } = await axiosSecure.get('/api/users/data');
  return data;
};
export const VerifyEmailFunc = async (payload) => {
  const { data } = await axiosPublic.post(
    '/api/users/login/email-verify',
    payload
  );
  return data;
};
export const OtpVerifyFunc = async (payload) => {
  const { data } = await axiosPublic.post(
    '/api/users/login/otp-verify',
    payload
  );
  return data;
};
export const ResetPasswordFunc = async (payload) => {
  const { data } = await axiosPublic.post(
    '/api/users/login/reset-password',
    payload
  );
  return data;
};
