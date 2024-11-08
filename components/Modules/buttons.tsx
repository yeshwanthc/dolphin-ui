import React, { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/app/lib/utils"
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-md hover:shadow-lg",
        neon: "bg-black text-white border-2 border-blue-500 shadow-[0_0_10px_rgba(0,0,255,0.7)] hover:shadow-[0_0_20px_rgba(0,0,255,0.9)] transition-shadow",
        glassy: "bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white border border-white border-opacity-20 shadow-lg hover:bg-opacity-30",
        '3d': "bg-blue-500 text-white border-b-4 border-blue-700 hover:bg-blue-400 active:border-b-0 active:mb-1 active:shadow-inner",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md text-xs",
        lg: "h-11 px-8 rounded-md text-base",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        spin: "animate-spin",
        wiggle: "hover:animate-wiggle",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const DolphinButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, rounded, isLoading, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, animation, rounded, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
      </button>
    )
  }
)
DolphinButton.displayName = "DolphinButton"

export { DolphinButton, buttonVariants }


const ButtonDocumentation = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Dolphin UI Button</h1>
      <p className="text-xl text-gray-600">A versatile and stylish button component with various themes, sizes, and animations.</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`import { DolphinButton } from '@/components/dolphin-button'

<DolphinButton variant="default" size="default">
  Click me
</DolphinButton>`}</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>variant</strong>: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient' | 'neon' | 'glassy' | '3d'</li>
          <li><strong>size</strong>: 'default' | 'sm' | 'lg' | 'icon'</li>
          <li><strong>animation</strong>: 'none' | 'pulse' | 'bounce' | 'spin' | 'wiggle'</li>
          <li><strong>rounded</strong>: 'default' | 'full' | 'none'</li>
          <li><strong>isLoading</strong>: boolean</li>
          <li><strong>leftIcon</strong>: React.ReactNode</li>
          <li><strong>rightIcon</strong>: React.ReactNode</li>
          <li><strong>className</strong>: string (additional classes)</li>
          <li>...other button props</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Themes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DolphinButton variant="default">Default</DolphinButton>
          <DolphinButton variant="destructive">Destructive</DolphinButton>
          <DolphinButton variant="outline">Outline</DolphinButton>
          <DolphinButton variant="secondary">Secondary</DolphinButton>
          <DolphinButton variant="ghost">Ghost</DolphinButton>
          <DolphinButton variant="link">Link</DolphinButton>
          <DolphinButton variant="gradient">Gradient</DolphinButton>
          <DolphinButton variant="neon">Neon</DolphinButton>
          <DolphinButton variant="glassy">Glassy</DolphinButton>
          <DolphinButton variant="3d">3D</DolphinButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <DolphinButton size="sm">Small</DolphinButton>
          <DolphinButton size="default">Default</DolphinButton>
          <DolphinButton size="lg">Large</DolphinButton>
          <DolphinButton size="icon">🐬</DolphinButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Animations</h2>
        <div className="flex flex-wrap items-center gap-4">
          <DolphinButton animation="pulse">Pulse</DolphinButton>
          <DolphinButton animation="bounce">Bounce</DolphinButton>
          <DolphinButton animation="spin">Spin</DolphinButton>
          <DolphinButton animation="wiggle">Wiggle</DolphinButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Rounded Corners</h2>
        <div className="flex flex-wrap items-center gap-4">
          <DolphinButton rounded="default">Default</DolphinButton>
          <DolphinButton rounded="full">Full</DolphinButton>
          <DolphinButton rounded="none">None</DolphinButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Icons</h2>
        <div className="flex flex-wrap items-center gap-4">
          <DolphinButton leftIcon={<span>👈</span>}>Left Icon</DolphinButton>
          <DolphinButton rightIcon={<span>👉</span>}>Right Icon</DolphinButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Loading State</h2>
        <DolphinButton isLoading>Loading</DolphinButton>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Shortcodes</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`// Default button
<DolphinButton>Click me</DolphinButton>

// Themed button
<DolphinButton variant="gradient">Gradient</DolphinButton>

// Sized button
<DolphinButton size="lg">Large Button</DolphinButton>

// Animated button
<DolphinButton animation="pulse">Pulse</DolphinButton>

// Rounded button
<DolphinButton rounded="full">Rounded</DolphinButton>

// Button with icon
<DolphinButton leftIcon={<span>👋</span>}>Hello</DolphinButton>

// Loading button
<DolphinButton isLoading>Loading</DolphinButton>

// Combining props
<DolphinButton variant="neon" size="lg" animation="wiggle" rounded="full">
  Neon Wiggle
</DolphinButton>`}</code>
        </pre>
      </section>
    </div>
  )
}

export default function DolphinButtonComponent() {
  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ButtonDocumentation />
    </div>
  )
}