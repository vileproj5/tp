import React from 'react';

const RadioGroup = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <div
      className={`grid gap-2 ${className}`}
      {...props}
      ref={ref}
      role="radiogroup"
    />
  );
});

RadioGroup.displayName = 'RadioGroup';

const RadioGroupItem = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      type="radio"
      className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };