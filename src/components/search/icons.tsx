import { SyntheticEvent } from "react";

const SearchBoxIcons = ({
  src,
  onClick,
}: {
  src: string;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
}) => {
  const handleIconClick = (event: SyntheticEvent<HTMLDivElement>) => {
    onClick?.(event);
  };

  const preventDefaultAcion = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className="search-box-icon">
      <img
        src={src}
        alt="search close"
        onClick={handleIconClick}
        onTouchEnd={handleIconClick}
        onTouchStart={preventDefaultAcion}
      />
    </div>
  );
};

export default SearchBoxIcons;
