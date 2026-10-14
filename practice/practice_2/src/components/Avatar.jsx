import React from 'react';

function Avatar({ name, size = 48 }) {
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8b5cf6',
    color: '#fff',
    fontSize: size * 0.45,
    fontWeight: 700,
    flexShrink: 0,
  };

  return (
    <div style={style} role="img" aria-label={`Аватар: ${name}`}>
      {name[0]}
    </div>
  );
}

export default Avatar;
