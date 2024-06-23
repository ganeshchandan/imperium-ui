import { TViewType } from "@types";

export const TOPIC_IMAGE = "TOPIC_";
export const SHARE = "Share";
export const BOOKMARK = "Bookmark";
export const EMPTY_STRING = "";
export const SEARCH = "Search";
export const MENU = "Menu";
export const PINNED = "Pinned";
export const FILTER = "Filter";
export const CLOSE = "Close";
export const USER = "User";
export const CATEGORY_TAB = "category";
export const RELEVANCE_TAB = "relevance";
export const CANCEL = "CANCEL";
export const RESET = "RESET";
export const APPLY = "APPLY";
export const CLICK = "click";
export const SWIPE_UP = "swipe_up";
export const SWIPE_DOWN = "swipe_down";
export const SWIPE_NONE = "none";
export const FILTER_POPUP_TABS = [
  { name: "Category", value: CATEGORY_TAB },
  { name: "Relevance", value: RELEVANCE_TAB },
];

export const BOOKMARK_FILTER_TYPE = "bookmark";
export const CATEGOTY_FILTER_TYPE = "category";
export const SEARCH_FILTER_TYPE = "search";
export const DELETE_ACTION = "delete";
export const ADD_ACTION = "add";
export const TOPIC_GRID = "topic-grid";
export const TOPIC_LIST = "topic-list";
export const VIEW_TYPE_SWITCH: { [key: string]: TViewType } = {
  [TOPIC_GRID]: TOPIC_LIST,
  [TOPIC_LIST]: TOPIC_GRID,
};
export const RECENTLY_VIEWED = "recentlyViewed";

export const LIST_PAGE_SELECT = "list-page";
export const DETAILS_PAGE_SELECT = "details-page";
export const LINK_PAGE_SELECT = "link-page";
