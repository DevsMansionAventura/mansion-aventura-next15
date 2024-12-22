"use client";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function ButtonBasic({
  label,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded text-white ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
