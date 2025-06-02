const Button = ({ name, isBeam = false, containerClass, href }) => {
  const ButtonTag = href ? 'a' : 'button';
  
  const handleClick = (e) => {
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <ButtonTag 
      href={href} 
      onClick={handleClick}
      className={`btn ${containerClass}`}
      {...(href && !href.startsWith('/#') && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </ButtonTag>
  );
};

export default Button;
