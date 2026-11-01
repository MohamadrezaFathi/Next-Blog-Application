"use client";

import { forwardRef } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const FileInput = forwardRef(function FileInput(
  {
    label,
    name,
    isRequired = false,
    errors,
    value,
    accept = "image/*",
    onChange,
    disabled = false,
    ...rest
  },
  ref,
) {
  const error = errors?.[name];

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-secondary-700"
        >
          {label}
          {isRequired && <span className="text-error mr-1">*</span>}
        </label>
      )}

      <label
        htmlFor={name}
        className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed p-4 transition-colors ${
          error
            ? "border-error bg-error/5"
            : "border-secondary-300 hover:border-primary-900 hover:bg-primary-900/5"
        } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-900/10 text-primary-900">
          <ArrowUpTrayIcon className="h-6 w-6" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-secondary-700">
            برای انتخاب فایل کلیک کنید
          </span>

          <span className="mt-1 block truncate text-xs text-secondary-400">
            {value || "فقط تصاویر را انتخاب کنید"}
          </span>
        </span>

        <input
          {...rest}
          ref={ref}
          id={name}
          name={name}
          type="file"
          accept={accept}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />
      </label>

      {error?.message && (
        <span className="block text-xs text-error">{error.message}</span>
      )}
    </div>
  );
});

export default FileInput;
