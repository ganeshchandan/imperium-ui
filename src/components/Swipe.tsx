/* eslint-disable @typescript-eslint/no-explicit-any */
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { FC, ReactNode } from "react";

const Swipe: FC<{
  children: ReactNode;
  swipeRight: () => void;
  swipeUp: () => void;
  swipeDown: () => void;
}> = ({ children, swipeRight, swipeUp, swipeDown }) => {
  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped left!"),
    onSwipedRight: swipeRight,
    onSwipedUp: swipeUp,
    onSwipedDown: swipeDown,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="swipeable-div">
      {children}
    </div>
  );
};

const SwipeComponent = (Component: FC<any>) => {
  return ({ swipeRight, swipeUp, swipeDown, ...props }: any) => (
    <Swipe swipeRight={swipeRight} swipeUp={swipeUp} swipeDown={swipeDown}>
      <Component {...props} />
    </Swipe>
  );
};

export default SwipeComponent;
