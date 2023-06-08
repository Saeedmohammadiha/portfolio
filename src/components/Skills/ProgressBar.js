import React, { useEffect, useState } from "react";
import "./progressBar.scss";

const ProgressBar = ({ progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
   const interval = setTimeout(() => {
      setDisplayProgress(progress);
    }, 1500);

    return () => {
      clearTimeout(interval);
    };
  }, [progress]);

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${displayProgress}%` }}>
        {`${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
