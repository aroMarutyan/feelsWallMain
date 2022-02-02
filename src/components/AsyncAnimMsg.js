import DisplayMessages from "./DisplayMessages";
import React, { useState, useEffect } from "react";
import "../styles/messageStyles.css";
import { useTransition, animated } from "@react-spring/web";
import { nlResVal, bp, css } from "../styles/mediaStyles";

// Component responsible for displaying the message in a randomly selected place on the screen.
const AsyncAnimMsg = ({
  messages,
  xCorrectionValue,
  yCorrectionValue,
  tension,
}) => {
  const wWidth = window.innerWidth;
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [xPositionValue, setXPositionValue] = useState(
    xPositionCalculator(nlResVal)
  );
  const [yPositionValue, setYPositionValue] = useState(
    yPositionCalculator(Math.random() >= 0.5 ? "+" : "-", nlResVal)
  );

  // reactSpring animation. Displays the message in a random position
  // Position can be adjusted and fine tuned via props passed down from each instance of AsyncAnimMsg component
  const transition = useTransition(isVisible, {
    //randomize x between 0 and 30
    //randomize y between -50 and 50
    //randomize sign for ALL elements
    //Use correction value to adjust the values
    //Modify nl reg formula to accept and use new values
    //Right side messages closer to the center

    from: {
      x: xPositionValue,
      y: yPositionValue,
      opacity: 0,
      filter: "blur(0.5px)",
    },
    enter: {
      x: xPositionValue,
      y: yPositionValue,
      opacity: 1,
    },
    leave: { opacity: 0 },

    config: { mass: 1, tension: tension, friction: 30 },
    onRest: () => setIsVisible(!isVisible),
  });

  // Styling for the AsyncAnimMsg component with Stitches
  const AsyncMsgStyle = css({
    // position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  /** Responsive function to determine the X coordinates of the component
   * @param  {} positionValue - Imported result value from a nonlinear regression formula. The formula and its calculated value are in the mediaStyles file
   * The position is dynamically calculated depending on screen size
   * Minimum and maximum threshholds are included in the function
   * posFor function is there to be DRY
   */
  function xPositionCalculator(positionValue) {
    const posFor = (value) =>
      value + Math.floor(Math.random() * xCorrectionValue) + "%";

    if (wWidth <= bp[0]) return posFor(1);

    if (wWidth >= bp[3]) return posFor(15);

    return posFor(positionValue);
  }

  /** Responsive function to determine the Y coordinates of the component
   * @param  {} sign - minus or plus sign. Determined randomly on each render of the component
   * @param  {} positionValue - same as the above function
   */
  function yPositionCalculator(positionValue) {
    const sign = Math.random() >= 0.5 ? "+" : "-";
    const posFor = (sign, value) =>
      sign + (value + Math.floor(Math.random() * yCorrectionValue)) + "%";
    return posFor(sign, positionValue);
  }

  // Initializing function hook
  // Randomly selects message from Firebase
  // Uses the two positioning functions to determine the coordinates of the component
  useEffect(() => {
    if (isVisible) {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
      setXPositionValue(xPositionCalculator(nlResVal));
      setYPositionValue(yPositionCalculator(nlResVal));
    }
  }, [isVisible]);

  return (
    <div className={AsyncMsgStyle()}>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <DisplayMessages message={message} isVisible={isVisible} />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default AsyncAnimMsg;
