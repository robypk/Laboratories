import React from "react";

interface ButtonProps {
  ButtonName: string;
}

const Button: React.FC<ButtonProps> = ({ ButtonName }) => {
  return (
    <button className=" bg-inherit border-2 border-cyan-600 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
      {ButtonName}
    </button>
  );
};

export default Button;
