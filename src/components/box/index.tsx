import { BoxProps } from "./types";
const Box = ({ onPress, style }: BoxProps) => {
  return <div style={style} onClick={onPress} className="box" />;
};

export default Box;
