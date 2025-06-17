import { useEffect, useState } from "react";

const useTip = (tip: boolean) => {
  const [tipVisible, setTipVisible] = useState(false);
  const [tipDisplay, setTipDisplay] = useState(false);
  useEffect(() => {
    if (tip) {
      setTipDisplay(true);
      setTipVisible(true);
    } else {
      setTipVisible(false);
      const timeout = setTimeout(() => {
        setTipDisplay(false);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [tip]);
  return { tipDisplay, tipVisible };
};

export default useTip;
