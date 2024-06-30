import { FC } from "react";
import IconWithName from "../../common/icon-with-name";
import { Filter, PinnedFooter, SearchIcon } from "@assets";
import { FILTER, PINNED, SEARCH } from "@constants";

const NAME_IMAGE_RUL: { [key: string]: string } = {
  [SEARCH]: SearchIcon,
  [PINNED]: PinnedFooter,
  [FILTER]: Filter,
};

const MenuIcon: FC<{
  className: string;
  name: string;
  onClick: () => void;
}> = ({ className, name, onClick }) => {
  return (
    <div className={`footer-category-icon ${className}`}>
      <IconWithName
        name={name}
        imageUrl={NAME_IMAGE_RUL[name]}
        imageAlt={name}
        onClick={onClick}
      />
    </div>
  );
};

export default MenuIcon;
