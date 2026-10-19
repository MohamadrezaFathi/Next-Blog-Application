
import Link from "next/link";

const btnType = {
  primary:
    "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700",
  secondary:
    "bg-slate-100 text-slate-800 hover:bg-slate-200",
  outline:
    "border border-indigo-200 bg-white text-indigo-700 hover:border-indigo-300 hover:bg-indigo-50",
  danger:
    "bg-rose-600 text-white hover:bg-rose-700",
};

function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...rest
}) {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-xl px-5 py-3 text-sm font-semibold
    transition-all duration-200
    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/20
    disabled:cursor-not-allowed disabled:opacity-50
    active:scale-[0.98]
    ${btnType[variant] ?? btnType.primary}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
