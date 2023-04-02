import * as React from "react";
import Svg, { Path } from "react-native-svg";
import Colors from "../constants/Colors";
const Pill = (props) => (
  <Svg
    width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.0964 12.0965L5.19289 19C1.38016 22.8127 1.38016 28.9944 5.19289 32.8072C9.00563 36.6199 15.1873 36.6199 19 32.8072L25.9035 25.9035M12.0964 12.0965L19 5.19292C22.8127 1.38019 28.9943 1.38019 32.8072 5.19292C36.6198 9.00566 36.6198 15.1873 32.8072 19L25.9035 25.9035M12.0964 12.0965L25.9035 25.9035M9.83334 23.1667C8.30824 24.6919 8.30824 26.6662 9.83334 28.1912" stroke={Colors.darkBlue} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
      {...props}
    />
  </Svg>
);
export default Pill;