
export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  ...rest
}) {
  const error = errors?.[name];
  const hasError = Boolean(error);

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        dir={dir}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3
          text-sm text-slate-800 outline-none
          placeholder:text-slate-400
          transition-all duration-200
          focus:ring-4
          ${
            hasError
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : "border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:ring-indigo-100"
          }
          ${dir === "ltr" ? "text-left" : "text-right"}`}
        {...register(name)}
        {...rest}
      />

      {hasError && (
        <p
          id={`${name}-error`}
          role="alert"
          className="mt-2 text-xs leading-6 text-red-600"
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
