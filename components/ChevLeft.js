import * as React from "react";
import Svg, { Path, Mask, G} from "react-native-svg";
const ChevLeft = (props) => (
<Svg width="20" height="26" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"
{...props}
>
<Path d="M2 15.6667L10 9.00002L2 2.33335" stroke="#9CC7FF" stroke-width={8} stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
);
export default ChevLeft;