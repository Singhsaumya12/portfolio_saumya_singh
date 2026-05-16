import React from "react";

export const Button = ({
  children,
  variant = "default",
  size = "md",
  asChild = false,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-md font-medium transition";

  const variants = {
    default:
      "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-300 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
  };

  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};
