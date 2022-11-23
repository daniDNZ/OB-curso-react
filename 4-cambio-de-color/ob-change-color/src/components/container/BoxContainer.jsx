import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Box from "../pure/Box";

export default function BoxContainer() {
  const [color, setColor] = useState(null);
  const [intervalHandler, setIntervalHandler] = useState(null);
  const [flashStatus, setFlashStatus] = useState(false);
  const [actions, setActions] = useState(
    {
      firstH3: false,
      secondH3: false,
      thirdH3: false,
      fourthH3: false
    }
  );
  const firstH3Ref = useRef(0);
  const secondH3Ref = useRef(0);
  const thirdH3Ref = useRef(0);
  const fourthH3Ref = useRef(0);

  const getRandomMath = (max) => {
    return Math.floor(Math.random() * max);
  }

  const initChangeColorInterval = () => {
    const handler = setInterval(() => {
      const red = getRandomMath(255);
      const green = getRandomMath(255);
      const blue = getRandomMath(255);
  
      const rgb = `rgb(${red},${green},${blue})`;
  
      setColor(rgb);
    }, 200);

    setIntervalHandler(handler);

  }

  const onMouseEnterHandler = () => {
    initChangeColorInterval();
    setFlashStatus(true);
    !actions.firstH3 && setActions((oldActions) => ({ ...oldActions, firstH3: true }));
  }
  
  const onMouseLeaveHandler = () => {
    setFlashStatus(false);
    clearInterval(intervalHandler);
    !actions.secondH3 && setActions((oldActions) => ({ ...oldActions, secondH3: true }));
  }

  const toggleColorFlash = () => {
    flashStatus
      ? onMouseLeaveHandler()
      : onMouseEnterHandler()
    
    actions.thirdH3
      ? !flashStatus && setActions((oldActions) => ({ ...oldActions, fourthH3: true }))
      : setActions((oldActions) => ({ ...oldActions, thirdH3: true }))
  }

  useEffect(() => {
    actions.firstH3 && (firstH3Ref.current.style.textDecorationLine = 'line-through');
    actions.secondH3 && (secondH3Ref.current.style.textDecorationLine = 'line-through');
    actions.thirdH3 && (thirdH3Ref.current.style.textDecorationLine = 'line-through');
    actions.fourthH3 && (fourthH3Ref.current.style.textDecorationLine = 'line-through');
  }, [actions])

  return (
    <div>
      <Box
        color={color}
        size={'255px'}
        onMouseEnterHandler={onMouseEnterHandler}
        onMouseLeaveHandler={onMouseLeaveHandler}
        toggleColorFlash={toggleColorFlash}
      />
      <div style={{ margin: '0 auto', width: 'fit-content' }}>
        <h3 ref={firstH3Ref}>1. Try to hover the box.</h3>
        <h3 ref={secondH3Ref}>2. Try to leave the box.</h3>
        <h3 ref={thirdH3Ref}>3. Try to double click the box.</h3>
        <h3 ref={fourthH3Ref}>4. Try again 😉.</h3>
      </div>
        
    </div>
  )
}