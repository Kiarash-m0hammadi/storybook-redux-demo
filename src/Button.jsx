import React from "react";

const Button = ({ label, backgroundColor, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor }}>
      {label}
    </button>
  );
};

export default Button;
