"use client";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/veryfyToken";
import { Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation(); // ✅ Fix isLoading

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const toastId = toast.loading("Logging in...");

    try {
      const res = await login(data).unwrap();

      if (res?.data?.accessToken) {
        const user = verifyToken(res.data.accessToken) as TUser;

        localStorage.setItem("accessToken", res.data.accessToken);
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 30,
          secure: true,
          sameSite: "Strict",
        });

        dispatch(setUser({ user, token: res.data.accessToken }));

        toast.success("Logged in successfully", { id: toastId });
        router.push("/");
      } else {
        toast.error("Login failed. Please try again.", { id: toastId });
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <section className="max-w-7xl mx-2 w-full flex items-center justify-center bg-white rounded-lg">
      <div className="p-5 md:w-1/2 xl:px-16 flex flex-col">
        <h3 className="text-2xl font-bold leading-10 tracking-wide mt-5">Login</h3>
        <p className="text-xl my-5 text-red-600">Login only with Google or GitHub</p>

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
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Insert your email"
                variant="bordered"
                radius="full"
                size="lg"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />

          {/* Password Input */}
          <label htmlFor="password" className="font-medium flex space-x-4 mt-2">
            Password <span className="text-pink-700">*</span>
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Insert your password"
                variant="bordered"
                radius="full"
                size="lg"
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <p className="text-sm my-3">
            Forgot your password?{" "}
            <Link href="/auth/forgot-password" className="text-sm text-blue-500">
              Forgot Password
            </Link>
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="text-2xl py-6 my-3 btn hover:scale-105 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-sm text-center mt-2">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-blue-500">
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
