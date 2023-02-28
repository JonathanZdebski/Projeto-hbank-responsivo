import React from "react";
import styles from "../style";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-6 pr-4 pl-4 bg-blue-gradient rounded-lg font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Criar conta
    </button>
  );
};

export default Button;
