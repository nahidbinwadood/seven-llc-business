import { useForm } from 'react-hook-form';
import logo from '../../assets/images/signUpImage/signUpLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpSvg } from '@/components/SvgContainer/SvgConainer';
import signUpPic from '../../assets/images/signUpImage/signUpImage.jpg';
import { useEffect, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useMutation } from '@tanstack/react-query';
import { ResetPasswordFunc } from '@/hooks/auth.hooks';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { PiSpinnerBold } from 'react-icons/pi';

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading, setLoading, token } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const password = watch('password');

  // mutation function:
  const resetPasswordMutation = useMutation({
    mutationKey: ['reset-password'],
    mutationFn: (payload) => ResetPasswordFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      setLoading(false);
      console.log(data);
      if (data.success) {
        reset();
        navigate('/login');
        localStorage.removeItem('email');
      }
      toast.success(data?.message, {
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

  //handlers:
  const onSubmit = async (data) => {
    const updatedData = {
      email: JSON.parse(localStorage.getItem('email')),
      ...data,
    };
    resetPasswordMutation.mutate(updatedData);
  };

  //return if the user is signed in
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);
  if (token) return;

  return (
    <div className="flex h-[100vh] overflow-hidden">
      {/* This is the left div */}
      <div className="w-[50%] overflow-y-scroll">
        <div className="flex flex-col justify-center items-center mt-[68.58px]">
          <img className="w-[254px] h-[193px] object-cover" src={logo} alt="" />
          <h1 className="text-headingColor text-[32px] font-bold mt-[104px]">
            Reset Password
          </h1>
        </div>
        {/* Input Field */}
        <div className="ml-[200px] mt-16 max-w-[560px]">
          {/* This is input field */}
          {/* Your Name Field */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
            {/* This is the Password input field */}
            <div className="flex flex-col gap-2 mt-[28px] relative">
              <label className="text-headingColor text-lg font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5 w-full"
                  placeholder="Enter Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute bottom-[28px] right-[10px] cursor-pointer"
                >
                  {showPassword ? (
                    <IoEyeOutline className="text-xl" />
                  ) : (
                    <IoEyeOffOutline className="text-xl text-black" />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-600 font-semibold">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* This is the Confirm Password input field */}
            <div className="flex flex-col gap-2 mt-[28px] relative">
              <label className="text-headingColor text-lg font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="password_confirmation"
                  {...register('password_confirmation', {
                    required: 'Confirm Password is required',
                    validate: (value) =>
                      value === password || 'Passwords do not match',
                  })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5 w-full"
                  placeholder="Enter Confirm Password"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute bottom-[28px] right-[10px] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <IoEyeOutline className="text-xl" />
                  ) : (
                    <IoEyeOffOutline className="text-xl" />
                  )}
                </span>
              </div>
              {errors.password_confirmation && (
                <span className="text-red-600 font-semibold">
                  {errors.password_confirmation.message}
                </span>
              )}
            </div>
            {/* This is the submit button */}
            <div className="flex items-center gap-2">
              <button
                className="bg-buttonColor rounded-[60px] text-base font-semibold mt-9 text-[#FFF] w-[560px] h-[68px] flex items-center justify-center cursor-pointer hover:bg-white border hover:border-buttonColor hover:text-buttonColor group"
                type="submit"
              >
                {loading ? (
                  <PiSpinnerBold className="text-white size-7 animate-spin group-hover:text-buttonColor" />
                ) : (
                  <span className="flex items-center gap-1">
                    <span>Submit</span>
                    <SignUpSvg />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* This is the right div */}
      <div className="w-[50%] relative">
        <div className="flex items-center gap-2 absolute right-[200px] top-[56px]">
          <Link to={'/'}>
            <button
              className="bg-transparent rounded-[60px] text-base font-semibold mt-9 text-[#FFF] w-[208px] h-[58px] flex items-center justify-center cursor-pointer border border-[#FFF] "
              type="submit"
            >
              <span>Back to Home</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.0054 9.414L7.39838 18.021L5.98438 16.607L14.5904 8H7.00538V6H18.0054V17H16.0054V9.414Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
        <img
          className="w-[960px] h-[100vh] object-cover"
          src={signUpPic}
          alt=""
        />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
