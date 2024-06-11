import Menu from "../../assets/menu.svg";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../reducers/filter";
import { RootState } from "../../store";
import { SEARCH, MENU, FILTER, USER } from "../../constants";
import IconWithName from "../common/icon-with-name";
import SearchIcon from "../../assets/search-normal.svg";
import MenuDot from "../../assets/menu_four_dot.svg";
import Filter from "../../assets/sort.svg";
import Close from "../../assets/close.svg";
import UserIcon from "../../assets/user-icon.svg";

interface ICategoryMenu {}

const Footermenu: FC<ICategoryMenu> = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state: RootState) => state.filter.showMenu);

  const handleShowMenu = () => {
    dispatch(setShowMenu(!showMenu));
  };

  return (
    <div className={`footer-menu-container ${showMenu ? "show-menu" : ""}`}>
      <div className="footer-menu">
        <IconWithName
          name={SEARCH}
          imageUrl={SearchIcon}
          imageAlt={SEARCH}
          className="footer-category-icon"
        />
        <IconWithName
          name={MENU}
          imageUrl={MenuDot}
          imageAlt={MENU}
          className="footer-category-icon"
        />
        <IconWithName
          name={FILTER}
          imageUrl={Filter}
          imageAlt={FILTER}
          className="footer-category-icon"
          // onClick={handleFilterClick}
        />
        <div className="footer-category-icon">
          <img src={UserIcon} alt={USER}></img>
        </div>
        <div className="footer-menu-icon">
          <img
            src={showMenu ? Close : Menu}
            alt="menu"
            onClick={handleShowMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Footermenu;
