import { useState } from "react";
import "./style.css";
import Box from "../../components/box";

const Matrix = () => {
  const [checked, setChecked]: any = useState([]);
  let array = Array.from({ length: 16 }, () => 0);

  return (
    <div className="container">
      {array?.map((_, index) => (
        <Box
          key={index}
          onPress={() => {
            let temp: any = [...checked];
            if (temp.length === 2) {
              temp.shift();
            }
            if (!temp.includes(index)) setChecked([...temp, index]);
          }}
          style={{ backgroundColor: checked.includes(index) ? "red" : "blue" }}
        />
      ))}
    </div>
  );
};

export default Matrix;
