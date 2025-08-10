import React from "react";
import { motion } from "framer-motion";

export default function Loading({
  size = "md",
  variant = "spinner",
  message = "Loading...",
  transparent = false,
  fullscreen = false,
}) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div
      role="status"
      aria-busy="true"
      className={`flex flex-col items-center justify-center gap-3 transition-all duration-300
        ${fullscreen ? "fixed inset-0 z-50 backdrop-blur-sm" : ""}
        ${transparent ? "" : "bg-white/80 dark:bg-gray-900/70 p-4 rounded-2xl shadow-lg"}
      `}
    >
      {/* Spinner */}
      {variant === "spinner" && (
        <div
          className={`relative flex items-center justify-center ${sizeMap[size]}`}
        >
          <svg
            viewBox="0 0 50 50"
            className={`absolute inset-0 ${sizeMap[size]}`}
          >
            <defs>
              <linearGradient id="g1" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="url(#g1)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="80"
              strokeDashoffset="0"
              fill="none"
              className="animate-spin"
            />
          </svg>
          <div className="flex items-center justify-center rounded-full bg-white dark:bg-gray-900 p-1">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                  fill="#7c3aed"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      )}

      {/* Dots */}
      {variant === "dots" && (
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              className={`inline-block ${
                size === "sm"
                  ? "w-2 h-2"
                  : size === "md"
                  ? "w-3 h-3"
                  : size === "lg"
                  ? "w-4 h-4"
                  : "w-5 h-5"
              } rounded-full`}
              animate={{
                y: [0, -6, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                delay: i * 0.15,
              }}
              style={{
                background: "linear-gradient(90deg, #06b6d4, #7c3aed)",
              }}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {variant === "bar" && (
        <div className="w-40 md:w-56 lg:w-80 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />
        </div>
      )}

      {/* Message */}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs md:text-sm text-gray-600 dark:text-gray-300 select-none"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
