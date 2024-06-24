import { SwipeArrow } from "@assets";

const SwipeAction = ({
  className,
  label,
}: {
  className: string;
  label: string;
}) => {
  return (
    <div className={className}>
      <img src={SwipeArrow} alt="swipe-arrow" />
      <label>{label}</label>
    </div>
  );
};

const SwipeActions = () => {
  return (
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
      <div className="close-modal">OK GOT IT !</div>
    </div>
  );
};

export default SwipeActions;
