import clsx from "clsx"

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  color?: "yellow" | "blue" | "silver"
}

const variantStyles = {
  primary: 'w-full rounded-[15px] text-center heading-sm pt-[14px] pb-[25px] active:shadow-none active:pb-[18px] active:mt-[7px]',
  secondary: 'rounded-[10px] text-[16px] font-bold leading-normal tracking-[1px] px-[16px] pt-[15px] pb-[17px]'
}

const colorStyles = {
  yellow: 
    'bg-light-yellow shadow-[inset_0px_-8px_0px_0px_rgba(204,139,19,1.0)] text-dark-navy hover:bg-light-yellow-hover',
  blue: 
    'bg-light-blue shadow-[inset_0px_-8px_0px_0px_rgba(17,140,135,1.0)] text-dark-navy hover:bg-light-blue-hover',
  silver: 
    'bg-silver shadow-[inset_0px_-4px_0px_0px_rgba(107,137,151,1.0)] text-dark-navy hover:bg-silver-hover'
}

export function Button({ variant = "primary", color = "yellow", className, ...props }: ButtonProps) {
  
  className = clsx(
    variantStyles[variant],
    colorStyles[color],
    className
  )

  return (
    <button className={className} {...props} />
  )
}
