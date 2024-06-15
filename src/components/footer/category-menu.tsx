import SearchIcon from "../../assets/search-normal.svg";
import Filter from "../../assets/sort.svg";
import Close from "../../assets/close.svg";
import UserIcon from "../../assets/user-icon.svg";
import FilterIcon from "../../assets/bookmark.svg";
import IconWithName from "../common/icon-with-name";
import { FILTER, SEARCH, CLOSE, USER, PINNED } from "../../constants";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { setShowFilter, setShowMenu } from "../../reducers/filter";
import { useBookmarkAction } from "../../hooks";
import { setSearchBox } from "../../reducers/topic";

interface ICategoryMenu {
  showMenu: boolean;
}

const CategoryMenu: FC<ICategoryMenu> = ({ showMenu }) => {
  const dispatch = useDispatch();
  const { filterBookmark } = useBookmarkAction();
  const handleShowMenu = () => {
    dispatch(setShowMenu(!showMenu));
  };

  const handleFilterClick = () => {
    dispatch(setShowFilter(true));
  };

  const handleSearchClick = () => {
    dispatch(setSearchBox(true));
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
          onClick={handleSearchClick}
          className="footer-category-icon"
        />
        <IconWithName
          name={PINNED}
          imageUrl={FilterIcon}
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
        <div className="footer-category-icon" onClick={handleShowMenu}>
          <img src={Close} alt={CLOSE}></img>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
