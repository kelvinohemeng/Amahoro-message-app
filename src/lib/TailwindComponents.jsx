const Container = ({ children, className, onClick }) => {
  const containerClass = " container mx-auto px-8 md:px-4";
  return (
    <div onClick={onClick} className={`${containerClass} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
