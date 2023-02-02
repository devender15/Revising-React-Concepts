import React, { useState, useEffect, useRef, useMemo } from "react";

import Counts from "./Counts";
import UseMemoCounts from "./UseMemoCounts";
import constants from "../utils/constants";

const Parent = () => {
  const [cheeseType, setCheeseType] = useState("");
  const [wine, setWine] = useState("");

  const [times, setTimes] = useState(0);
  const useMemoRef = useRef(0);

  const object = constants();

  const { MOZARELLA, CHEDDAR, PARMESAN, CABERNET, CHARDONAY, MERLOT } = object;

  const incrementUseMemoRef = () => useMemoRef.current++;

//   const memoizedValue = useMemoRef.current++;

  // the next line ensures that <UseMemoCounts /> only renders when the times value changes
    const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  const whichWineGoesBest = () => {
    switch (cheeseType) {
      case MOZARELLA:
        return setWine(CABERNET);

      case CHEDDAR:
        return setWine(CHARDONAY);

      case PARMESAN:
        return setWine(MERLOT);

      default:
        CHARDONAY;
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) whichWineGoesBest();

    return () => (mounted = false);
  }, [cheeseType]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center dark:text-gray-400 mt-10">
          Without React.memo() or useMemo()
        </h3>
        <h1 className="font-semibold text-2xl dark:text-white max-w-md text-center">
          Select a cheese and we will tell you which wine goes best!
        </h1>
        <div className="flex flex-col gap-4 mt-10">
          <button onClick={() => setCheeseType(MOZARELLA)}>{MOZARELLA} </button>
          <button onClick={() => setCheeseType(CHEDDAR)}>{CHEDDAR}</button>
          <button onClick={() => setCheeseType(PARMESAN)}>{PARMESAN} </button>
        </div>
        {cheeseType && (
          <p className="mt-5 dark:text-green-400 font-semibold">
            For {cheeseType},{" "}
            <span className="dark:text-yellow-500">{wine}</span> goes best.
          </p>
        )}
        <Counts />
      </div>

      <div className="flex flex-col justify-center items-center border-2 p-2 rounded-md mt-5 dark:border-yellow-200 max-w-lg m-auto pb-10 bg-gray-900">
        <div className="mt-4 text-center">
          <button
            className="bg-indigo-200 py-2 px-10 rounded-md"
            onClick={() => setTimes(times + 1)}
          >
            Force render
          </button>

          <UseMemoCounts memoizedValue={memoizedValue} />
        </div>
      </div>
    </>
  );
};

export default Parent;
