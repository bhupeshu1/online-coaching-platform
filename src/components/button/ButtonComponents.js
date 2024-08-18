import React from 'react';
const VARIANT_STYLES = {
  primary: 'bg-[#ebded5] hover:bg-[#03ccba] text-[#242424]',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  success: 'bg-green-500 hover:bg-green-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
  warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
};

const SIZE_STYLES = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
};

const ButtonComponents = ({
  label,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  ...rest
}) => {
  const baseStyles =
    'font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200';
  const variantStyles = VARIANT_STYLES[variant];
  const sizeStyles = SIZE_STYLES[size];
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const combinedStyles = `${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles}`;
  return (
  <button  className={combinedStyles}
  onClick={onClick}
  disabled={disabled}
  {...rest}>
    {label}
    </button>
  )
};

export default ButtonComponents;
