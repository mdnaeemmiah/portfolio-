"use client";

import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/veryfyToken";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation(); // ✅ Fix isLoading
  const [showPassword, setShowPassword] = useState(false);

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
        router.push("/dashboard");
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
    <section className="min-h-screen px-4 py-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.45)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="rounded-[28px] bg-white/90 p-8 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.35)]">
          <p className="section-kicker">Admin Access</p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900">Welcome back</h3>
          <p className="mt-2 text-sm text-slate-600">
            Sign in to manage projects, blog posts, and messages.
          </p>

          <form
            autoComplete="off"
            className="mt-6 grid grid-cols-1 gap-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
          {/* Email Input */}
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Email <span className="text-[#c27a52]">*</span>
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
                classNames={{
                  inputWrapper: "border border-slate-200/80 bg-white shadow-sm h-14",
                  input: "text-slate-900",
                }}
              />
            )}
          />

          {/* Password Input */}
          <label htmlFor="password" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Password <span className="text-[#c27a52]">*</span>
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type={showPassword ? "text" : "password"}
                placeholder="Insert your password"
                variant="bordered"
                radius="full"
                size="lg"
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
                classNames={{
                  inputWrapper: "border border-slate-200/80 bg-white shadow-sm h-14",
                  input: "text-slate-900",
                }}
                endContent={
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-slate-500 hover:text-slate-900"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                }
              />
            )}
          />

          {/* <p className="text-sm text-slate-600">
            Forgot your password?{" "}
            <Link href="/auth/forgot-password" className="text-sm text-[#c27a52]">
              Forgot Password
            </Link>
          </p> */}

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="mt-2 rounded-full bg-[#c27a52] py-6 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#b86f47]"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        {/* <p className="mt-4 text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-[#c27a52]">
            Register
          </Link>
        </p> */}
        </div>

        <div className="relative hidden h-full min-h-[520px] overflow-hidden rounded-[28px] md:block">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(140deg, rgba(194,122,82,0.15), rgba(15,23,42,0.4)), url('https://res.cloudinary.com/dh20zdtys/image/upload/v1723790098/aa0dd710d59f69addf9c35baedbd81af_sdm8wz.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Control Center</p>
            <h4 className="mt-3 text-3xl font-semibold">Ship with clarity.</h4>
            <p className="mt-2 text-sm text-white/70">
              Keep your portfolio fresh with a streamlined admin workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
