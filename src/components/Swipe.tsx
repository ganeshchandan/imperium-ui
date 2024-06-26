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
    onSwipedLeft: swipeLeft,
    onSwipedRight: swipeRight,
    onSwipedUp: swipeUp,
    onSwipedDown: swipeDown,
    // onSwiping: (event: any) => {
    //   const height = event.event.currentTarget.clientHeight;
    //   const top = height - event.absY;
    //   event.event.currentTarget.children[0].children[0].children[0].style.top = `-${top}px`;
    // },
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
