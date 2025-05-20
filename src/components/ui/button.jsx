
import React from 'react';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button'; 
  
  let baseClasses = "button";
  if (variant === 'primary') baseClasses += " button-primary";
  else if (variant === 'secondary') baseClasses += " button-secondary";
  else if (variant === 'outline') baseClasses += " button-outline";
  else if (variant === 'destructive') baseClasses += " button-destructive"; 
  else if (variant === 'ghost') baseClasses += " button-ghost";
  else if (variant === 'link') baseClasses += " button-link";

  if (size === 'sm') baseClasses += " button-sm";
  else if (size === 'lg') baseClasses += " button-lg";
  else if (size === 'icon') baseClasses += " button-icon";

  return (
    <Comp
      className={`${baseClasses} ${className || ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </Comp>
  );
});
Button.displayName = 'Button';

export { Button };
