import {
  SearchIcon,
  Filter,
  Close,
  UserIcon,
  PinnedFooter,
  Menu,
} from "@assets";
import { useBookmarkAction } from "@hooks";
import { setShowFilter, setShowMenu, setSearchBox } from "@reducers";
import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SEARCH, FILTER, USER, PINNED } from "../../constants";
import IconWithName from "../common/icon-with-name";

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
            onClick={handleSearchClick}
            className="footer-category-icon"
          />
          <IconWithName
            name={PINNED}
            imageUrl={PinnedFooter}
            imageAlt={PINNED}
            className="footer-category-icon"
            onClick={filterBookmark}
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
