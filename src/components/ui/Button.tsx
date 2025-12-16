import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCyberSound } from "@/hooks/useCyberSound";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, onMouseEnter, onClick, ...props }, ref) => {
        const { playHover, playClick } = useCyberSound();

        const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
            playHover();
            onMouseEnter?.(e);
        };

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            playClick();
            onClick?.(e);
        };

        const variants = {
            primary: "bg-white text-black hover:bg-gray-200 border-transparent",
            secondary: "bg-white/10 text-white hover:bg-white/20 border-transparent backdrop-blur-md",
            outline: "bg-transparent text-white border-white/20 hover:border-white/50 hover:bg-white/5",
            ghost: "bg-transparent text-white hover:bg-white/5 border-transparent",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={handleMouseEnter}
                onClick={handleClick}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full font-medium transition-colors border",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
