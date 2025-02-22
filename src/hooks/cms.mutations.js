import { useMutation } from '@tanstack/react-query';
import { contactFormFunc } from './cms.api';
import useAuth from './useAuth';
import toast from 'react-hot-toast';

export const useContactMutation = () => {
  const { setLoading } = useAuth();
  return useMutation({
    mutationKey: ['contact-us'],
    mutationFn: (payload) => contactFormFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success('Your message has been sent !', {
        duration: 1500,
      });
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.response?.data?.message, {
        duration: 1500,
      });
    },
  });
};
