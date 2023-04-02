import * as React from "react";
import Svg, { Path, Mask, G, Circle } from "react-native-svg";
const Dot = (props) => (
<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
{...props}
>
<Circle cx="10" cy="10" r="10" fill="#9CC7FF"/>
</Svg>
);
export default Dot;