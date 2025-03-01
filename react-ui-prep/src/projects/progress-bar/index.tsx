import { useEffect, useState } from "react";
import "./progressbar.css";

const ProgressBar = ({ progress }: { progress: number }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="progress-bar-wrapper">
      <div
        className="progress-bar"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
        }}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

const ProgressBars = () => {
  const percentageArray = [5, 10, 20, 30, 40, 50, 60, 70, 100];

  return (
    <div>
      <div>Progress Bar</div>
      {percentageArray.map((p) => {
        return <ProgressBar progress={p} />;
      })}
    </div>
  );
};

export default ProgressBars;
