import { useContactMutation } from '@/hooks/cms.mutations';
import useAuth from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { PiSpinnerBold } from 'react-icons/pi';

const ContactForm = () => {
  const { loading } = useAuth();
  const { mutateAsync: contactFormMutation } = useContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await contactFormMutation(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-16">
      {/* First Input Column */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-y-[10.5px] w-[50%]">
          <label className="text-lg text-headingColor font-medium">Name*</label>
          <input
            name="name"
            {...register('name', {
              required: 'Full Name is required',
            })}
            className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
            type="text"
            placeholder="Full Name"
          />
          {errors.name && (
            <span className="text-red-600 font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>
        {/*  */}
        <div className="flex flex-col gap-y-[10.5px] w-[50%]">
          <label className="text-lg text-headingColor font-medium">
            Business Name*
          </label>
          <input
            name="business_name"
            {...register('business_name', {
              required: 'Business Name is required',
            })}
            className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
            type="text"
            placeholder="Business Name"
          />
          {errors.business_name && (
            <span className="text-red-600 font-semibold">
              {errors.business_name.message}
            </span>
          )}
        </div>
      </div>
      {/* Second Input Column  */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-y-[10.5px] w-[50%]">
          <label className="text-lg text-headingColor font-medium">
            Email*
          </label>
          <input
            name="email"
            {...register('email', {
              required: 'Email is required',
            })}
            className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-600 font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
        {/*  */}
        <div className="flex flex-col gap-y-[10.5px] w-[50%]">
          <label className="text-lg text-headingColor font-medium">
            Phone Number*
          </label>
          <input
            name="phone"
            {...register('phone', {
              required: 'Phone Number is required',
            })}
            className="py-[31px] pl-[49px] bg-[#D9D9D91A] rounded-[10px]"
            type="number"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="text-red-600 font-semibold">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-10">
        <label className="text-lg text-headingColor font-medium">
          Message*
        </label>
        <textarea
          name="message"
          {...register('message', {
            required: 'Message is required',
          })}
          className="bg-[#D9D9D91A] rounded-[10px] pt-[31.5px] pb-[160.5px] pl-[43px] pr-[65px]"
          type="text"
          placeholder="Write your message here..."
        />
        {errors.message && (
          <span className="text-red-600 font-semibold">
            {errors.message.message}
          </span>
        )}
      </div>
      {/* This is the button section */}
      <div className="flex flex-col justify-center text-center mt-7">
        <h1 className="text-buttonColor text-xl italic font-[350px]">
          Backed by trusted industry leaders, we’re here to support your
          business every step of the way.
        </h1>
        <div className="text-center flex justify-center mt-[60px] mb-[45px]">
          <button
            className={`bg-buttonColor rounded-[60px] px-5 sm:px-6 md:px-7 lg:px-8 flex gap-2 justify-center items-center py-4 text-[#FFF] font-semibold hover:bg-transparent border border-buttonColor hover:border-buttonColor hover:text-buttonColor ease-in-out duration-150 group text-sm sm:text-base w-56`}
          >
            {loading ? (
              <PiSpinnerBold className="text-white size-7 animate-spin group-hover:text-buttonColor" />
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="transition size-5 md:size-6 duration-150 ease-in-out group-hover:fill-buttonColor"
                >
                  <path
                    d="M16.5054 9.6015L7.89838 18.2085L6.48438 16.7945L15.0904 8.1875H7.50538V6.1875H18.5054V17.1875H16.5054V9.6015Z"
                    fill="white"
                    className="group-hover:fill-buttonColor transition duration-150"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
