import React from 'react';

const colors = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  danger: '#ef4444',
};

function Button({ children, variant = 'primary', onClick, disabled = false }) {
  const style = {
    backgroundColor: colors[variant],
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button type="button" onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
}

export default Button;
