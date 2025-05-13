"use client";

import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/veryfyToken";
import {  Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

// Define the type for form inputs
type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();

  // Setup react-hook-form
  const {
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  // Handle form submission
  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const toastId = toast.loading("Registering...");

    try {
      const userInfo = { 
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const res = await register(userInfo).unwrap();

      if (res?.data?.accessToken) {
        const user = verifyToken(res.data.accessToken) as TUser;

        // Store token in local storage & cookies
        localStorage.setItem("accessToken", res.data.accessToken);
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 30,
          secure: true,
          sameSite: "Strict",
        });

        // Update Redux state
        dispatch(setUser({ user, token: res.data.accessToken }));

        toast.success("Registration successful", { id: toastId });
        router.push("/auth/login");
      } else {
        toast.error("Registration failed. Please try again.", { id: toastId });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <section className="max-w-7xl mx-2 w-max md:w-full flex items-center justify-center bg-white rounded-lg">
      <div className="p-5 md:w-1/2 xl:px-16 flex flex-col">
        <h3 className="text-2xl font-bold leading-10 tracking-wide mt-5">
          Register
        </h3>
        <p className="text-xl my-5">
          Join us and start your journey today!
        </p>
        <form
          autoComplete="off"
          className="grid grid-cols-1 gap-y-2 bg-white p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name Input */}
          <label htmlFor="name" className="font-medium flex space-x-4">
            Name <span className="text-pink-700">*</span>
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Enter your name"
                variant="bordered"
                radius="full"
                className="rounded-full text-xl"
                autoComplete="off"
                size="lg"
              />
            )}
          />

          {/* Email Input */}
          <label htmlFor="email" className="font-medium flex space-x-4">
            Email <span className="text-pink-700">*</span>
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Enter your email"
                variant="bordered"
                radius="full"
                className="rounded-full text-xl"
                autoComplete="off"
                size="lg"
              />
            )}
          />

          {/* Password Input */}
          <label htmlFor="password" className="font-medium flex space-x-4">
            Password <span className="text-pink-700">*</span>
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Enter your password"
                variant="bordered"
                radius="full"
                autoComplete="off"
                size="lg"
              />
            )}
          />

          {/* Register Button */}
          {/* <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="none"
            disabled={isLoading}
            className="text-2xl py-6 my-3 btn hover:scale-105 transform transition duration-300"
          >
            {isLoading ? "Registering..." : "Register"}
          </Button> */}
          <Button>hello</Button>
          
        </form>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-sm text-blue-500">
            Login
          </Link>
        </p>
      </div>

      {/* Right Side Image */}
      <div
        className="w-1/2 h-full hidden md:block rounded-r-lg"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dh20zdtys/image/upload/v1723790098/aa0dd710d59f69addf9c35baedbd81af_sdm8wz.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      ></div>
    </section>
  );
};

export default Register;
