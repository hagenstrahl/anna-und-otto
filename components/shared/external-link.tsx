interface ExternalLinkProps {
  href: string;
  className?: string;
  children: JSX.Element[] | JSX.Element | string;
}

const ExternalLink = ({
  href,
  className = "",
  children,
}: ExternalLinkProps): JSX.Element => {
  if (href.includes("mailto:") || href.includes("tel:")) {
    return (
      <a
        className={`flex items-center justify-center ${className}`}
        href={href}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        className={`flex items-center justify-center ${className}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default ExternalLink;
