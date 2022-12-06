import React, { useState, useCallback } from "react";

const useFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const changeFilterTab = useCallback((tab) => {
    setSelectedFilter(tab);
  }, []);

  return [selectedFilter, changeFilterTab];
};

export default useFilter;
