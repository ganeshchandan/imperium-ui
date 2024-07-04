import { UserIcon } from "@assets";
import { USER } from "@constants";
import { setShowUserProfile } from "@reducers";
import { useDispatch } from "react-redux";

const FooteruserIcon = () => {
  const dispatch = useDispatch();

  const handleUserClick = () => {
    dispatch(setShowUserProfile(true));
  };

  return (
    <div className="footer-category-icon user-icon" onClick={handleUserClick}>
      <img src={UserIcon} alt={USER}></img>
    </div>
  );
};

export default FooteruserIcon;
