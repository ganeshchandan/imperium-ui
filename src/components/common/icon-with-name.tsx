import { SyntheticEvent } from "react";

interface IIconWithName {
  name: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
}

const IconWithName = ({
  name,
  imageUrl,
  imageAlt,
  className,
  onClick,
}: IIconWithName) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={imageUrl} alt={imageAlt}></img>
      <label>{name}</label>
    </div>
  );
};

export default IconWithName;
