import SearchIcon from "../../assets/search-normal.svg";
import Menu from "../../assets/menu_four_dot.svg";
import Filter from "../../assets/sort.svg";
import Close from "../../assets/close.svg";
import UserIcon from "../../assets/user-icon.svg";
import IconWithName from "../common/icon-with-name";
import { FILTER, SEARCH, MENU, CLOSE, USER } from "../../constants";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setShowFilter, setShowMenu } from "../../reducers/filter";

interface ICategoryMenu {
  showMenu: boolean;
}

const CategoryMenu: FC<ICategoryMenu> = ({ showMenu }) => {
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    dispatch(setShowMenu(!showMenu));
  };

  const handleFilterClick = () => {
    dispatch(setShowFilter(true));
  };

  return (
    <div
      className={`footer-category-menus-container ${
        showMenu ? "show-menu" : ""
      }`}
    >
      <div className="footer-category-menus">
        <IconWithName
          name={SEARCH}
          imageUrl={SearchIcon}
          imageAlt={SEARCH}
          className="footer-category-icon"
        />
        <IconWithName
          name={MENU}
          imageUrl={Menu}
          imageAlt={MENU}
          className="footer-category-icon"
        />
        <IconWithName
          name={FILTER}
          imageUrl={Filter}
          imageAlt={FILTER}
          className="footer-category-icon"
          onClick={handleFilterClick}
        />
        <div className="footer-category-icon">
          <img src={UserIcon} alt={USER}></img>
        </div>
        <div className="footer-category-icon" onClick={handleShowMenu}>
          <img src={Close} alt={CLOSE}></img>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
