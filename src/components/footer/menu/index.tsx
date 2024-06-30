import { Close, UserIcon, Menu } from "@assets";
import { useBookmarkAction } from "@hooks";
import { setShowFilter, setShowMenu, setSearchBox } from "@reducers";
import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { SEARCH, FILTER, USER, PINNED } from "../../../constants";
import MenuIcon from "./icon";

interface ICategoryMenu {}

const Footermenu: FC<ICategoryMenu> = () => {
  const showHideMenuRef = useRef<HTMLDivElement>(null);
  const showMenu = useSelector((state: RootState) => state.filter.showMenu);
  const dispatch = useDispatch();
  const { filterBookmark } = useBookmarkAction();

  const handleFilterClick = () => {
    dispatch(setShowFilter(true));
  };

  const handleSearchClick = () => {
    dispatch(setSearchBox(true));
  };

  const handleShowMenu = () => {
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
        }, 700);
      }
    }
  }, [showMenu]);

  return (
    <div ref={showHideMenuRef} className="footer-menu-container">
      <div className="footer-icons">
        <MenuIcon
          className="search-icon"
          name={SEARCH}
          onClick={handleSearchClick}
        />
        <MenuIcon
          className="pinned-icon"
          name={PINNED}
          onClick={filterBookmark}
        />
        <MenuIcon
          className="filter-icon"
          name={FILTER}
          onClick={handleFilterClick}
        />
        <div className="footer-category-icon user-icon">
          <img src={UserIcon} alt={USER}></img>
        </div>
        <div></div>
      </div>
      <div className="footer-menu-icon">
        <img
          src={showMenu ? Close : Menu}
          alt="menu"
          onClick={handleShowMenu}
        />
      </div>
    </div>
  );
};

export default Footermenu;
