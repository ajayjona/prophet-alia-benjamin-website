"use client"

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({ 
  children, 
  className, 
  delay = 0,
  direction = "up" 
}: FadeInProps) {
  
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
