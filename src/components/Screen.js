import { useEffect, useRef } from "react";
import fitty from "fitty";
import "./Screen.css";

const Screen = ({ value }) => {
  const screenRef = useRef(null);

  useEffect(() => {
    const fitInstance = fitty(screenRef.current, {
      maxSize: 100,
      minSize: 40,
    });

    return () => {
      fitInstance.unsubscribe();
    };
  }, [value]);

  return (
    <div className="screen" ref={screenRef}>
      {value}
    </div>
  );
};

export default Screen;
