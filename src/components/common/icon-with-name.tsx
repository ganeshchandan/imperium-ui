interface IIconWithName {
  name: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

const IconWithName = ({
  name,
  imageUrl,
  imageAlt,
  className,
}: IIconWithName) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt={imageAlt}></img>
      <label>{name}</label>
    </div>
  );
};

export default IconWithName;
