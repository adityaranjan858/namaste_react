import React, { useEffect, useState } from "react";
import { RES_MENU_API } from "./constants";

const useRestroMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResMenuInfo(json.data);
  };
  return resMenuInfo;
};

export default useRestroMenu;
