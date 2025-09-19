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
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hover ? { 
        y: -3, 
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          duration: 0.2
        }
      } : {}}
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-200 ease-out",
        hover && "hover:glass-hover cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  )
}