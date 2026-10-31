
"use client";

import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "@/ui/RHFTextField";
import { useAuth } from "@/context/AuthContext";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(5, "نام و نام خانوادگی باید حداقل ۵ کاراکتر باشد")
    .required("نام و نام خانوادگی را وارد کنید"),

  email: yup
    .string()
    .trim()
    .email("ایمیل واردشده معتبر نیست")
    .required("ایمیل را وارد کنید"),

  password: yup
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .required("رمز عبور را وارد کنید"),
});

function Signup() {
 const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
  await signup(values);
};
  return (
    <div className="w-full">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center
          justify-center rounded-2xl bg-indigo-600 text-2xl
          font-extrabold text-white shadow-lg shadow-indigo-200"
        >
          
        </div>

        <h1 className="text-2xl font-extrabold text-slate-800">
          ساخت حساب کاربری
        </h1>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          به وبلاگ‌یار بپیوند و تجربه مطالعه‌ات را شخصی‌تر کن.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          errors={errors}
          register={register}
          autoComplete="name"
          placeholder="نام کامل خود را وارد کنید"
        />

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
          autoComplete="new-password"
          placeholder="حداقل ۸ کاراکتر"
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
          {isSubmitting ? "در حال ایجاد حساب..." : "ایجاد حساب کاربری"}
        </button>
      </form>

      <div className="mt-7 border-t border-slate-100 pt-6 text-center">
        <p className="text-sm text-slate-500">
          قبلاً ثبت‌نام کرده‌ای؟
          <Link
            href="/signin"
            className="mr-2 font-bold text-indigo-600
              transition-colors hover:text-indigo-800"
          >
            وارد شو
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
