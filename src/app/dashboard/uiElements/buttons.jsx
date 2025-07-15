import React from "react";

export default function Button(props) {
  const {
    className = "",
    variant = "default",
    size = "default",
    type = "button",
    ...rest
  } = props;

  // Base styles
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// Variant styles
let variantStyle = "";
if (variant === "outline") {
  variantStyle = "border border-gray-300 text-gray-700 hover:bg-gray-100";
} else if (variant === "ghost") {
  variantStyle = "bg-transparent hover:bg-gray-100 text-gray-800";
} else if (variant === "destructive") {
  variantStyle = "bg-red-600 text-white hover:bg-red-700";
} else if (variant === "success") {
  variantStyle = "bg-green-600 text-white hover:bg-green-700";
} else {
  variantStyle = "bg-blue-600 text-white hover:bg-blue-700";
}

// Size styles
let sizeStyle = "";
if (size === "sm") {
  sizeStyle = "h-8 px-3 text-sm";
} else if (size === "lg") {
  sizeStyle = "h-12 px-6 text-lg";
} else if (size === "icon") {
  sizeStyle = "h-10 w-10 p-0";
} else {
  sizeStyle = "h-10 px-4 py-2";
}


  return (
    <button
      type={type}
      className={`${base} ${variantStyle} ${sizeStyle} ${className}`}
      {...rest}
    />
  );
}
