import { useForm } from 'react-hook-form';
import signUpPic from '../../assets/images/signUpImage/signUpImage.jpg';
import logo from '../../assets/images/signUpImage/signUpLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpSvg } from '../../components/SvgContainer/SvgConainer';
import { useMutation } from '@tanstack/react-query';
import { VerifyEmailFunc } from '@/hooks/auth.hooks';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { PiSpinnerBold } from 'react-icons/pi';
import { useEffect } from 'react';

const ForgetPasswordPage = () => {
  const { loading, setLoading, token } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // mutation:
  const verifyMailMutation = useMutation({
    mutationKey: ['verify-email'],
    mutationFn: VerifyEmailFunc,
    onMutate: async () => {
      setLoading(true);
    },
    onSuccess: (data, variables) => {
      setLoading(false);
      reset();
      localStorage.setItem('email', JSON.stringify(variables.email));
      navigate('/enterCodePage');
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
  const onSubmit = (data) => {
    verifyMailMutation.mutateAsync(data);
  };

  //return if the user is signed in
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);
  if (token) return;

  return (
    <section>
      <div className="flex h-[100vh] overflow-hidden">
        {/* This is the left div */}
        <div className="w-[50%] ">
          <div className="flex flex-col justify-center items-center mt-[68.58px]">
            <img
              className="w-[254px] h-[193px] object-cover"
              src={logo}
              alt=""
            />
            <h1 className="text-headingColor text-[32px] font-bold mt-[104px]">
              Forgot Password?
            </h1>
            <p className="text-navbarColor mt-2">
              Enter your email to get a verification code.
            </p>
          </div>
          {/* Input Field */}
          <div className="ml-[200px] mt-16 max-w-[560px]">
            {/* This is input field */}
            {/* Your Name Field */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
              {/* This is the Email Address input field */}
              <div className="flex flex-col gap-2 mt-[28px]">
                <label className="text-headingColor text-lg font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register('email', { required: true })}
                  className="border border-[#D0D3D6] rounded-xl py-[25px] px-5"
                  placeholder="Enter Email Address"
                />
                {errors.email && (
                  <span className="text-red-600 font-semibold">
                    Email Address is required
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
    </section>
  );
};

export default ForgetPasswordPage;
