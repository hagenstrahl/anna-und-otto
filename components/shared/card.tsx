interface CardProps {
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`z-10 flex flex-col max-w-xs gap-4 p-6 bg-white sm:max-w-md rounded-xl ${className}`}
  >
    {children}
  </div>
);

export default Card;
