
"use client";

import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "@/ui/RHFTextField";
import { useAuth } from "@/context/AuthContext";

const schema = yup.object({
  email: yup
    .string()
    .trim()
    .email("ایمیل واردشده معتبر نیست")
    .required("ایمیل را وارد کنید"),

  password: yup
    .string()
    .required("رمز عبور را وارد کنید"),
});

function Signin() {
  const {signin} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    await signin(values);
  
};

  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-extrabold text-white shadow-lg shadow-indigo-200">
          
        </div>

        <h1 className="text-2xl font-extrabold text-slate-800">
          خوش برگشتی!
        </h1>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          برای ورود به حساب کاربری خود اطلاعاتت را وارد کن.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          type="email"
          dir="ltr"
          autoComplete="email"
          placeholder="example@email.com"
        />

        <RHFTextField
          label="رمز عبور"
          name="password"
          errors={errors}
          register={register}
          type="password"
          dir="ltr"
          autoComplete="current-password"
          placeholder="رمز عبور خود را وارد کنید"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2
            rounded-xl bg-indigo-600 px-4 py-3.5
            text-sm font-bold text-white shadow-lg
            shadow-indigo-100 transition-all duration-200
            hover:bg-indigo-700 hover:shadow-indigo-200
            disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "در حال ورود..." : "ورود به حساب کاربری"}
        </button>
      </form>

      <div className="mt-7 border-t border-slate-100 pt-6 text-center">
        <p className="text-sm text-slate-500">
          هنوز حساب کاربری نداری؟
          <Link
            href="/signup"
            className="mr-2 font-bold text-indigo-600
              transition-colors hover:text-indigo-800"
          >
            ثبت‌نام کن
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
