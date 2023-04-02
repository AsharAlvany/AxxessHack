import * as React from "react";
import Svg, { Path, Mask, G } from "react-native-svg";
const Star = (props) => (
<Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
{...props}
>
<Mask id="mask0_18_148" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
<Path d="M40 0H0V40H40V0Z" fill="white"/>
</Mask>
<G mask="url(#mask0_18_148)">
<Path d="M24.8542 12.4776L21.6085 5.98684C20.9505 4.67105 19.0495 4.67105 18.3915 5.98684L15.1458 12.4776C14.8846 13.0001 14.3795 13.3623 13.7953 13.446L6.53772 14.4869C5.0665 14.6979 4.47905 16.4823 5.54363 17.5065L10.7953 22.5588C11.218 22.9655 11.4109 23.5515 11.3111 24.1258L10.0714 31.2598C9.82008 32.706 11.358 33.8088 12.6739 33.126L19.1653 29.7578C19.6878 29.4867 20.3122 29.4867 20.8347 29.7578L27.326 33.126C28.642 33.8088 30.18 32.706 29.9287 31.2598L28.6888 24.1258C28.589 23.5515 28.782 22.9655 29.2047 22.5588L34.4563 17.5065C35.521 16.4823 34.9335 14.6979 33.4623 14.4869L26.2047 13.446C25.6205 13.3623 25.1155 13.0001 24.8542 12.4776Z" stroke="#9CC7FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</G>
</Svg>
);
export default Star;