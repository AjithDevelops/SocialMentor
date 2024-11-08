import { ButtonProps } from "@types";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} sm:py-4 py-2 sm:px-6 px-4 bg-blue-gradient font-poppins font-medium sm:text-[18px] text-[14px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}
    >
      Get Started
    </button>
  );
};

export default Button;
