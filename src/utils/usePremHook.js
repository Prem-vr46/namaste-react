import React, { useState } from "react";
import { useEffect } from "react";
import { SWIGGY_API } from "./constant";

const usePremHook = () => {
  const [premMenu, setPremMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const value = await fetch(SWIGGY_API);
    const resultJson = await value.json();
    setPremMenu(resultJson);
  };
  return premMenu;
};

export default usePremHook;
