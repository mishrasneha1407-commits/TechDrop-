import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export function GradientButton({ 
  children, 
  onClick, 
  href, 
  className, 
  variant = "primary",
  size = "md"
}: GradientButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
    "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
    "text-white shadow-lg hover:shadow-xl",
    "transform hover:scale-105 active:scale-95",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md", 
      "px-8 py-4 text-lg": size === "lg",
    },
    {
      "from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700": variant === "primary",
      "from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700": variant === "secondary",
    },
    className
  )

  const ButtonComponent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </motion.button>
  )

  const LinkComponent = (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={baseClasses}
    >
      {children}
    </motion.a>
  )

  return href ? LinkComponent : ButtonComponent
}