import Menu from "../../assets/menu.svg";
import { FC, useEffect, useRef } from "react";
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
  const showHideMenuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const showMenu = useSelector((state: RootState) => state.filter.showMenu);

  const handleShowMenu = () => {
    // ${
    //   showMenu ? "show-menu" : "hide-menu "
    // }
    dispatch(setShowMenu(!showMenu));
  };

  useEffect(() => {
    const showHideMenu = showHideMenuRef.current;
    if (showHideMenu) {
      const classList = showHideMenu.classList;
      if (showMenu) {
        classList.add("show-menu");
        classList.remove("hide-menu");
      } else if (!showMenu && classList.contains("show-menu")) {
        classList.remove("show-menu");
        classList.add("hide-menu");
        setTimeout(() => {
          classList.remove("hide-menu");
        }, 500);
      }
    }
  }, [showMenu]);

  return (
    <div ref={showHideMenuRef} className="footer-menu-container">
      <div className="footer-menu">
        <div className="footer-category-icons">
          <div></div>
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
        </div>
        <div className="overlay-div"></div>
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
