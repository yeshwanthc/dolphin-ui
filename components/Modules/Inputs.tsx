import React, { forwardRef, InputHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from "@/app/lib/utils"
import { Eye, EyeOff, Search, X } from 'lucide-react'

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        filled: "bg-muted border-transparent",
        flushed: "border-x-0 border-t-0 rounded-none px-0",
        unstyled: "border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0",
      },
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onRightIconClick?: () => void
  error?: boolean
  errorMessage?: string
}

const DolphinInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type = "text", leftIcon, rightIcon, onRightIconClick, error, errorMessage, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [value, setValue] = React.useState(props.value || props.defaultValue || "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      props.onChange?.(e)
    }

    const handleClear = () => {
      setValue("")
      const event = new Event('input', { bubbles: true })
      const inputElement = ref as React.MutableRefObject<HTMLInputElement>
      inputElement.current?.dispatchEvent(event)
    }

    const inputType = showPassword ? "text" : type

    const getPlaceholder = () => {
      if (placeholder) return placeholder
      switch (variant) {
        case "default":
          return "Enter text..."
        case "filled":
          return "Type here..."
        case "flushed":
          return "Input here..."
        case "unstyled":
          return "Write something..."
        default:
          return "Enter text..."
      }
    }

    return (
      <div className="relative">
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant, size: size as "default" | "sm" | "lg", className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-red-500 focus-visible:ring-red-500"
            )}
            ref={ref}
            value={value}
            onChange={handleChange}
            placeholder={getPlaceholder()}
            {...props}
          />
          {rightIcon && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={onRightIconClick}
            >
              {rightIcon}
            </div>
          )}
          {type === "password" && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          )}
          {type === "search" && value && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={handleClear}
            >
              <X size={18} />
            </div>
          )}
        </div>
        {error && errorMessage && (
          <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
        )}
      </div>
    )
  }
)

DolphinInput.displayName = "DolphinInput"

export { DolphinInput, inputVariants }

// Documentation Component
const InputDocumentation = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Dolphin UI Input</h1>
      <p className="text-xl text-gray-600">A versatile and stylish input component with various styles, features, and placeholders.</p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`import { DolphinInput } from '@/components/dolphin-input'

<DolphinInput />`}</code>
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>variant</strong>: 'default' | 'filled' | 'flushed' | 'unstyled'</li>
          <li><strong>size</strong>: 'default' | 'sm' | 'lg'</li>
          <li><strong>leftIcon</strong>: React.ReactNode</li>
          <li><strong>rightIcon</strong>: React.ReactNode</li>
          <li><span className="font-bold">onRightIconClick</span>: ()  void</li>
          <li><span className="font-bold">error</span>: boolean</li>
          <li><span className="font-bold">errorMessage</span>: string</li>
          <li><span className="font-bold">placeholder</span>: string (custom placeholder, overrides default)</li>
          <li>...other input props</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants with Default Placeholders</h2>
        <div className="grid gap-4">
          <DolphinInput variant="default" />
          <DolphinInput variant="filled" />
          <DolphinInput variant="flushed" />
          <DolphinInput variant="unstyled" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <div className="grid gap-4">
          <DolphinInput size="sm" placeholder="Small input" />
          <DolphinInput size="default" placeholder="Default input" />
          <DolphinInput size="lg" placeholder="Large input" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">With Icons</h2>
        <div className="grid gap-4">
          <DolphinInput leftIcon={<Search size={18} />} placeholder="Search..." />
          <DolphinInput rightIcon={<Eye size={18} />} placeholder="With right icon" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Special Types</h2>
        <div className="grid gap-4">
          <DolphinInput type="password" placeholder="Enter password" />
          <DolphinInput type="search" placeholder="Search..." />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Error State</h2>
        <DolphinInput error errorMessage="This field is required" placeholder="Error input" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Disabled State</h2>
        <DolphinInput disabled placeholder="Disabled input" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Placeholder</h2>
        <DolphinInput placeholder="This is a custom placeholder" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Shortcodes</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`// Default input with default placeholder
<DolphinInput />

// Styled input with custom placeholder
<DolphinInput variant="filled" size="lg" placeholder="Custom large filled input" />

// Input with icon and default placeholder
<DolphinInput leftIcon={<Search size={18} />} variant="flushed" />

// Password input
<DolphinInput type="password" placeholder="Enter password" />

// Error input
<DolphinInput error errorMessage="Invalid input" placeholder="Error input" />

// Disabled input
<DolphinInput disabled placeholder="Disabled input" />

// Combining props
<DolphinInput
  variant="flushed"
  size="lg"
  leftIcon={<Search size={18} />}
  placeholder="Custom search placeholder"
/>`}</code>
        </pre>
      </section>
    </div>
  )
}

export default function DolphinInputDemo() {
  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <InputDocumentation />
    </div>
  )
}