import {
  OrderSummerySvg,
  SettingUploadSvg,
} from "@/components/SvgContainer/SvgConainer";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import uploadImage from "../../../../assets/images/settingsUploadLogo/photo.png";
import Button from "@/components/Button/Button";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Settings = () => {
  const [image, setImage] = useState(uploadImage);

  const [addNewAddress, setAddNewAddress] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
      alert("File must be less than 2MB.");
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const storedAddresses =
      JSON.parse(localStorage.getItem("savedAddresses")) || [];
    setSavedAddresses(storedAddresses);
  }, []);

  const onSubmit = (data) => {
    const updatedAddresses = [...savedAddresses, data];
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
    setAddNewAddress(false);
    reset();
  };

  useEffect(() => {
    if (addNewAddress) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [addNewAddress]);

  console.log(savedAddresses);

  return (
    <section className="">
      {/* Account Settings */}
      <div className="container mx-auto">
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold">
              Account Setting
            </h1>
            <OrderSummerySvg />
          </div>
          {/* This is the Upload Images section */}
          <div className="xmd:ml-[97px] xmd:mt-[70.5px] max-w-[560px]">
            <div className="flex gap-6 items-center ml-5 xmd:ml-0">
              <label
                htmlFor="photo-upload"
                className="w-24 xxs:w-[130px] xxs:h-[130px] h-24 border-gray-300 flex justify-center items-center rounded-full cursor-pointer hover:border-blue-500 transition bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col items-center text-navbarColor rounded-xl">
                  <SettingUploadSvg />
                </div>
              </label>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className=" items-center gap-3">
                <p className="text-base xxs:text-2xl text-headingColor font-bold">
                  Michael Watson
                </p>
                <p className="text-xs xxs:text-lg text-navbarColor">
                  President of Sales
                </p>
              </div>
            </div>
          </div>
          {/* This is the Product Information */}
          <div className="mt-10 xmd:px-[97px]">
            {/* First Input Column */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* First Name */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  First Name
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="text"
                  placeholder="Michael"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Your Last Name
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="text"
                  placeholder="Watson"
                />
              </div>
            </div>
            {/* Second Input Column  */}
            <div className="flex flex-col md:flex-row gap-10 mt-6">
              {/* phone */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Phone
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="number"
                  placeholder="+1-202-555-0118"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Email
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="email"
                  placeholder="michaelwatson@gmail.com"
                />
              </div>
            </div>
          </div>
          {/* This is the contact information */}
          <div className="xmd:px-[97px]">
            {/* Country / Region */}
            <div className="flex flex-col md:flex-row gap-8 mt-6">
              {/* Country */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Country/Region
                </label>
                <Select>
                  <SelectTrigger className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country/Region</SelectLabel>
                      <SelectItem value="America">America</SelectItem>
                      <SelectItem value="Uk">UK</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* States */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  States
                </label>
                <Select>
                  <SelectTrigger className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>States</SelectLabel>
                      <SelectItem value="America">America</SelectItem>
                      <SelectItem value="Uk">UK</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* Postal Code */}
              <div className="flex flex-col gap-y-[10.5px] w-full px-4 xmd:px-0 md:w-[50%]">
                <label className="text-base text-headingColor font-medium">
                  Postal Code
                </label>
                <Input
                  className="py-4 h-14 px-5 bg-[#F8F8F8] text-sm text-headingColor"
                  type="number"
                  placeholder="75460"
                />
              </div>
            </div>
          </div>
          {/* This is the button section */}
          <div className="xmd:px-[97px] px-5 my-4 md:my-6 lg:my-8">
            <Button text={"Save Changes"} color={"bg-buttonColor"} />
          </div>
        </div>
      </div>
      {/* address Setting */}
      <div className="container mx-auto my-5 pb-10">
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
              Address Setting
            </h1>
            <OrderSummerySvg />
          </div>
          <section>
            {/* This is the Billing Address Section */}
            <div className="md:px-8 mb-10 mt-6">
              {/* Addresses Grid */}
              <div className="flex flex-row gap-6 flex-wrap">
                {/* Display saved addresses */}
                {savedAddresses.map((address, index) => (
                  <div
                    key={index}
                    className="flex flex-col border rounded-b-2xl"
                  >
                    <div className="flex gap-[145px] justify-between border items-center px-6">
                      <h1 className="text-headingColor text-base font-semibold py-[13px]">
                        Billing Address {index + 1}
                      </h1>

                      <h1 className="text-buttonColor font-medium cursor-pointer">
                        + EDIT ADDRESS
                      </h1>
                    </div>
                    {/* This is the Billing Address */}
                    <div className="my-6 space-y-4">
                      <div className="px-6">
                        <label className="text-headingColor">FULL NAME</label>
                        <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                          {address.firstName}
                        </p>
                      </div>
                      <div className="px-6">
                        <label className="text-headingColor">Address</label>
                        <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                          {address.address}
                        </p>
                      </div>
                      <div className="px-6">
                        <label className="text-headingColor">Email</label>
                        <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                          {address.email}
                        </p>
                      </div>
                      <div className="px-6">
                        <label className="text-headingColor">
                          Phone Number
                        </label>
                        <p className="bg-[#FFF] border-none h-11 mt-2 !text-sm text-[#8993A4]">
                          {address.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* "Add New Address" Button - Always Last */}
                {!addNewAddress ? (
                  <div className="border rounded-2xl min-w-full min-h-[300px] md:min-w-[444px] md:min-h-[550px] flex justify-center items-center p-4">
                    <button
                      onClick={() => setAddNewAddress(true)}
                      className="text-center text-xs xxs:text-base text-[#8993A4] font-medium"
                    >
                      + Add new Address
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col border rounded-b-2xl lg:w-[32%] mt-2"
                  >
                    <div className="flex gap-[150px] justify-between border items-center px-6">
                      <h1 className="text-headingColor text-base font-semibold py-[13px]">
                        Billing Address
                      </h1>
                    </div>
                    {/* This is the Billing Address */}
                    <div className="my-6 space-y-4">
                      <div className="flex flex-col xlg:flex-row px-2 xlg:px-6 gap-4 justify-center">
                        {/* First Name */}
                        <div className="">
                          <label className="text-headingColor">
                            First Name
                          </label>
                          <Input
                            className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                            type="text"
                            {...register("firstName", { required: true })}
                            placeholder="First Name"
                          />
                          {errors.firstName && (
                            <span className="text-red-500 text-sm">
                              First Name is required
                            </span>
                          )}
                        </div>
                        {/* Last Name */}
                        <div className="">
                          <label className="text-headingColor">Last Name</label>
                          <Input
                            className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                            type="text"
                            {...register("lastName", { required: true })}
                            placeholder="Last Name"
                          />
                          {errors.lastName && (
                            <span className="text-red-500 text-sm">
                              Last Name is required
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Company Name */}
                      <div className="px-2 xlg:px-6 mt-4">
                        <label className="text-headingColor">
                          Company Name (Optional)
                        </label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="text"
                          {...register("companyName", { required: true })}
                          placeholder="Company Name"
                        />
                        {errors.companyName && (
                          <span className="text-red-500 text-sm">
                            Company Name is required
                          </span>
                        )}
                      </div>
                      {/* Address */}
                      <div className="px-2 xlg:px-6">
                        <label className="text-headingColor">Address</label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="text"
                          {...register("address", { required: true })}
                          placeholder="Address"
                        />
                        {errors.address && (
                          <span className="text-red-500 text-sm">
                            Address is required
                          </span>
                        )}
                      </div>
                      {/* Country */}
                      <div className="px-2 xlg:px-6">
                        <label className="text-headingColor">Country</label>
                        <Controller
                          name="country"
                          control={control}
                          rules={{ required: "Country is required" }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              onValueChange={(value) => field.onChange(value)}
                            >
                              <SelectTrigger className="py-4 h-11 px-5 bg-[#F8F8F8] text-sm text-headingColor mt-2">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Countries</SelectLabel>
                                  <SelectItem value="America">
                                    America
                                  </SelectItem>
                                  <SelectItem value="UK">UK</SelectItem>
                                  <SelectItem value="Canada">Canada</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.country && (
                          <p className="text-red-500 text-sm">
                            {errors.country.message}
                          </p>
                        )}
                      </div>

                      {/* Region/State */}
                      <div className="px-2 xlg:px-6">
                        <label className="text-headingColor">
                          Region/State
                        </label>
                        <Controller
                          name="region"
                          control={control}
                          rules={{ required: "Region is required" }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              onValueChange={(value) => field.onChange(value)}
                            >
                              <SelectTrigger className="py-4 h-11 px-5 bg-[#F8F8F8] text-sm text-headingColor mt-2">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>States</SelectLabel>
                                  <SelectItem value="California">
                                    California
                                  </SelectItem>
                                  <SelectItem value="Texas">Texas</SelectItem>
                                  <SelectItem value="Florida">
                                    Florida
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.region && (
                          <p className="text-red-500 text-sm">
                            {errors.region.message}
                          </p>
                        )}
                      </div>
                      {/* City and Postal Code */}
                      <div className="flex gap-4 justify-center">
                        {/* City */}
                        <div className="w-[197px]">
                          <label className="text-headingColor">City</label>
                          <Controller
                            name="City" // Use the name "City" to match the field name
                            control={control}
                            rules={{ required: "City is required" }}
                            render={({ field }) => (
                              <Select
                                {...field}
                                onValueChange={(value) => field.onChange(value)}
                              >
                                <SelectTrigger className="py-4 h-11 bg-[#F8F8F8] text-sm text-headingColor mt-2">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Cities</SelectLabel>
                                    <SelectItem value="New York">
                                      New York
                                    </SelectItem>
                                    <SelectItem value="Los Angeles">
                                      Los Angeles
                                    </SelectItem>
                                    <SelectItem value="Chicago">
                                      Chicago
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            )}
                          />
                          {errors.City && (
                            <p className="text-red-500 text-sm">
                              {errors.City.message}{" "}
                            </p>
                          )}
                        </div>
                        {/* Postal Code */}
                        <div className="">
                          <label className="text-headingColor">
                            Postal Code
                          </label>
                          <Input
                            className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                            type="number"
                            {...register("postalCode", { required: true })}
                            placeholder="Your code here"
                          />
                          {errors.postalCode && (
                            <span className="text-red-500 text-sm">
                              Postal Code is required
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Email */}
                      <div className="px-2 xlg:px-6 mt-4">
                        <label className="text-headingColor">Email</label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="email"
                          {...register("email", { required: true })}
                          placeholder="Your email here"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            Email is required
                          </span>
                        )}
                      </div>
                      {/* Phone Number */}
                      <div className="px-2 xlg:px-6 mt-4">
                        <label className="text-headingColor">
                          Phone Number
                        </label>
                        <Input
                          className="bg-[#F8F8F8] border-none h-11 mt-2 !text-sm text-headingColor"
                          type="number"
                          {...register("phone", { required: true })}
                          placeholder="Your phone here"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-sm">
                            Phone Number is required
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Close Button */}
                    <div className="flex justify-between px-6 my-6">
                      <Button
                        type="submit"
                        text={"Save Changes"}
                        color={"bg-buttonColor"}
                      />
                      <button
                        onClick={() => setAddNewAddress(false)}
                        className="text-buttonColor text-base font-semibold"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Password Setting */}
      <div className="container mx-auto my-5 pb-10">
        <div className="bg-[#FFF] rounded-[20px] border border-[#F8F9FA] shadow-dashboardShadow mt-5 px-5 xxs:px-4 sm:px-4 xl:px-0">
          <div className="flex ml-8 gap-[22px] items-center mt-7 mb-[21px]">
            <h1 className="text-headingColor text-base xxs:text-lg md:text-xl font-semibold ">
              Password Setting
            </h1>
            <OrderSummerySvg />
          </div>
          <section>
            {/* This is the Password Setting Section */}
            <div className="xlg:mt-6 xlg:ml-[31px] border border-[#F0F0F0] rounded max-w-[984px] xlg:mb-[50px]">
              <div className="">
                <h1 className="text-headingColor text-base font-semibold border pl-5 py-[13px]">
                  Change Password
                </h1>
              </div>

              {/* Current Password Div */}
              <PasswordInput
                label={"Current Password"}
                placeholder={"Current Password"}
              />
              <PasswordInput
                label={"New Password"}
                placeholder={"8+ characters"}
              />
              <PasswordInput
                label={"Confirm Password"}
                placeholder={"Confirm Password"}
              />
              {/* This the button section */}
              <div className="pl-6 my-8">
                <Button text={"Change Password"} color={"bg-buttonColor"} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Settings;
