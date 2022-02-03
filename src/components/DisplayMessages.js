import { colorCoding } from "../core/colorCoding";
import { useState, useEffect } from "react";

import { css, dynamicFontSize } from "../styles/mediaStyles";

const DisplayMessages = ({ message, isVisible }) => {
  // Font size values and function
  const minFontSize = 1.6;
  const maxFontSize = 2.8;
  // Dynamic font size function. Formula located in mediaStyles file
  const fontSize = dynamicFontSize(minFontSize, maxFontSize);

  const [rotate, setRotate] = useState(rotateRandom(30));

  // Messages styling. Sets the message color and dynamically adjusts font size for the screen
  const messages = css({
    color: colorCoding.get(message.emotion),
    //add formula to calculate the width - optional
    width: "75%",
    fontSize: `clamp(${minFontSize}rem, ${fontSize}rem, ${maxFontSize}rem)`,
    // position: "absolute",
    transform: `rotate(${rotate}deg)`,
    letterSpacing: "0.3rem",
  });
  /** Function to assign a random tilt to each message instance
   * @param  {} val - Custom variable to determine the tilt range
   */
  function rotateRandom(val) {
    return `${Math.random() >= 0.5 ? "+" : "-"}${Math.random() * val}`;
  }

  useEffect(() => {
    if (isVisible) {
      setRotate(rotateRandom(30));
    }
  }, [isVisible]);

  return (
    <>
      <h3 className={messages()}>{message.message}</h3>
    </>
  );
};

export default DisplayMessages;
