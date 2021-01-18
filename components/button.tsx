import React from 'react';

interface ButtonProps {
    className?: string;
    color?: 'accent' | 'red' | 'blue' | 'green' | 'yellow';
}

const Button: React.FC<ButtonProps> = ({ className, color = 'accent', children }) =>
    <button color={ color } className={ `${ className } button` }>{ children }</button>;

export default Button;
