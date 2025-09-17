import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlassmorphismCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlassmorphismCard({ 
  children, 
  className, 
  hover = true,
  delay = 0
}: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300",
        hover && "hover:glass-hover cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  )
}