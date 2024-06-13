import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import TopicList from './topic/list';

const SwipeComponent = () => {
    const handlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: () => console.log('Swiped left!'),
        onSwipedRight: () => console.log('Swiped right!'),
        onSwipedUp: () => console.log('Swiped up!'),
        onSwipedDown: () => console.log('Swiped down!'),
        trackMouse: true,
      });
    return (
      <div {...handlers} style={{ touchAction: 'pan-y' }}>
        <TopicList />
      </div>
    );
  };
  
  export default SwipeComponent;