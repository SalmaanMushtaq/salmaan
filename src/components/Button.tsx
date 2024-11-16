interface Text {
  text: string;
}
function Button({ text }: Text) {
  const formattedSections = text.toLowerCase().replace(/\s+/g, "");
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(formattedSections);
    if (targetElement) {
      const offset = 96;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <a
      className="customShadow inline-flex justify-center items-center p-1 px-6 bg-btnBackground rounded-full
      border-2 border-transparent hover:border-white hover:border-2"
      href={`#${formattedSections}`}
      onClick={handleClick}
    >
      {text}
    </a>
  );
}

export default Button;
