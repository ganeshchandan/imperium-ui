import { SyntheticEvent, useRef } from "react";

interface IIconWithName {
  name?: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
}

const IconWithName = ({
  name,
  imageUrl,
  imageAlt,
  className = "",
  onClick,
}: IIconWithName) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonClickRef = useRef<{
    timer?: NodeJS.Timeout;
    clickTimeOut?: NodeJS.Timeout;
  }>({});

  const handleOnClick = (event: SyntheticEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("button-clicked");
      buttonClickRef.current.timer = setTimeout(() => {
        buttonRef.current?.classList.remove("button-clicked");
        clearTimeout(buttonClickRef.current.timer);
      }, 1000);
    }
    buttonClickRef.current.clickTimeOut = setTimeout(() => {
      onClick?.(event);
    }, 100);
  };

  return (
    <div
      className={`icon-with-name ${className}`}
      onClick={handleOnClick}
      ref={buttonRef}
    >
      <img src={imageUrl} alt={imageAlt}></img>
      {name && <label>{name}</label>}
    </div>
  );
};

export default IconWithName;
