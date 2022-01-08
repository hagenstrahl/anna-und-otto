interface ButtonProps {
  type?: "primary" | "secondary";
  children: JSX.Element[] | JSX.Element | string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type = "primary",
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element => (
  <button
    className={`flex justify-center items-center gap-3 px-6 h-12 focus:outline-none rounded-full transition-colors duration-300 font-text truncate ${
      type === "primary"
        ? "bg-blau hover:bg-gruen text-white"
        : "bg-white border-blau border text-blau hover:text-gruen hover:border-gruen"
    }`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
