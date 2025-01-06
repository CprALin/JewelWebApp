import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function Alert({children}) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 1;
        if (newProgress <= 0) {
          setVisible(false);
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 30);

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed flex justify-center items-center text-text-1 w-[400px] h-20 z-50 bottom-5 right-5 bg-black rounded-2xl cursor-pointer">
      <p className="font-semibold text-xl">{children}</p>
      <div className="absolute w-[90%] h-[3px] bg-gray-500 bottom-0 rounded-full overflow-hidden">
        <div
          className="h-full bg-text-1"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

Alert.propTypes = {
   children : PropTypes.string.isRequired
}
