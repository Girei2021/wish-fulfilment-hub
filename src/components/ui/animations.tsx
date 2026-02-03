import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const step = Math.ceil(end / 60); // 60 fps

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, incrementTime * step);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="stat-number">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ 
  badge, 
  title, 
  description, 
  align = "center",
  light = false 
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export function FadeIn({ 
  children, 
  direction = "up", 
  delay = 0,
  className = "" 
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const directionVariants = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionVariants[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionVariants[direction] }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
