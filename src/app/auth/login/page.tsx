"use client";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/veryfyToken";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie"; 
import Image from "next/image";
import {  signIn } from "next-auth/react"
// For storing token in cookies
type LoginFormInputs = {
  email: string;
  password: string;
};


const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  // Setup react-hook-form
  const {
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Handle form submission
  const onSubmit : SubmitHandler<LoginFormInputs> = async (data) => {
    const toastId = toast.loading("Logging in...");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      if (res?.data?.accessToken) {
        const user = verifyToken(res.data.accessToken) as TUser;

        // Store token in local storage
        localStorage.setItem("accessToken", res.data.accessToken);

        // Store token in cookies
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 30, // Expires in 7 days
          secure: true,
          sameSite: "Strict",
        });

        // Update Redux state
        dispatch(setUser({ user, token: res.data.accessToken }));

        toast.success("Logged in successfully", { id: toastId });
        router.push("/");
      } else {
        toast.error("Login failed. Please try again.", { id: toastId });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <section className="max-w-7xl mx-2 w-max md:w-full flex items-center justify-center bg-white rounded-lg">
      <div className="p-5 md:w-1/2 xl:px-16 flex flex-col">
        <h3 className="text-2xl font-bold leading-10 tracking-wide mt-5">
          Login
        </h3>
        <p className="text-xl my-5 text-red-600">
         Login only google or github
        </p>
        <form
          autoComplete="off"
          className="grid grid-cols-1 gap-y-2 bg-white p-2"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                placeholder="Insert your email"
                variant="bordered"
                radius="full"
                // errorMessage={errors?.email?.message}
                className="rounded-full text-xl"
                autoComplete="off"
                size="lg"
              />
            )}
          />

          {/* Password Input */}
          <div className="grid grid-cols-1 gap-y-1 mt-2">
            <label htmlFor="password" className="flex space-x-4">
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
                  placeholder="Insert your password"
                  variant="bordered"
                  radius="full"
                  // errorMessage={errors?.password?.message}
                  autoComplete="off"
                  size="lg"
                />
              )}
            />
            <p className="text-sm my-3">
              Forgot your password?{" "}
              <Link href="/auth/forgot-password" className="text-sm">
                Forgot Password
              </Link>
            </p>
          </div>

          {/* Login Button */}
          {/* <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="none"
            isDisabled={isLoading}
            className="text-2xl py-6 my-3 btn hover:scale-105 transform transition duration-300"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button> */}

            {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
             onClick={() => signIn("google" , {callbackUrl: "http://localhost:3001"})}
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="Google logo"
              />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
            onClick={() => signIn("github" , {callbackUrl: "http://localhost:3001"})}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
              />
            </button>
          </div>


        </form>

        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-sm text-blue-500">
            Register
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

export default Login;









