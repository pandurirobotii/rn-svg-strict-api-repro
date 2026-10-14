import React from "react";
import { Svg, Circle } from "react-native-svg";

export function App() {
  return (
    <Svg width={100} height={100}>
      <Circle cx={50} cy={50} r={40} fill="red" />
    </Svg>
  );
}
