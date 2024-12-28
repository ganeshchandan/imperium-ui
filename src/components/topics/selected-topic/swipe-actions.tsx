import { isSwipeActionModal, setSwipeActionModal } from "@utils";
import { useEffect, useState } from "react";

const SwipeAction = ({
  className,
  label,
}: {
  className: string;
  label: string;
}) => {
  return (
    <div className={className}>
      <div className="arrow">
        <span></span>
        <span></span>
      </div>
      <label>{label}</label>
    </div>
  );
};

const SwipeActions = () => {
  const [showSwipeModal, setShowSwipeModal] = useState(true);

  useEffect(() => {
    setShowSwipeModal(!isSwipeActionModal());
  }, []);

  const handleSwipeActionModal = () => {
    setSwipeActionModal();
    setShowSwipeModal(false);
  };

  return showSwipeModal ? (
    <div className="swipe-actions-container">
      <div className="swipe-actions">
        <SwipeAction className="swipe-action next-news" label="Next News" />
        <SwipeAction
          className="swipe-action previous-news"
          label="Previous News"
        />
        <SwipeAction className="swipe-action list-news" label="List View" />
        <SwipeAction className="swipe-action source-page" label="Source Page" />
      </div>
      <div className="close-modal" onClick={handleSwipeActionModal}>
        OK GOT IT !
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SwipeActions;
