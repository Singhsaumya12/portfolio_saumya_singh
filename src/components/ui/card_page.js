import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-xl bg-white dark:bg-slate-900 
      border border-slate-200 dark:border-slate-700 
      shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
