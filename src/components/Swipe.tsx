import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { FC, ReactNode } from "react";

const Swipe: FC<{
  children: ReactNode;
  swipeRight: () => void;
  swipeUp: () => void;
  swipeDown: () => void;
  swipeLeft: () => void;
}> = ({ children, swipeRight, swipeUp, swipeDown, swipeLeft }) => {
  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => swipeLeft?.(),
    onSwipedRight: () => {
      console.log("ganesh here");
      swipeRight?.();
    },
    onSwipedUp: () => swipeUp?.(),
    onSwipedDown: () => swipeDown?.(),
    trackMouse: true,
  });

  return (
    <div {...handlers} className="swipeable-div">
      {children}
    </div>
  );
};

const SwipeComponent = (Component: FC<any>) => {
  return ({ swipeRight, swipeUp, swipeDown, swipeLeft, ...props }: any) => (
    <Swipe
      swipeRight={swipeRight}
      swipeUp={swipeUp}
      swipeDown={swipeDown}
      swipeLeft={swipeLeft}
    >
      <Component {...props} />
    </Swipe>
  );
};

export default SwipeComponent;
