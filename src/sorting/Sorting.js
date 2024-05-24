import React, { useEffect, useState } from "react";
import "./sorting.css";

const sorts = ["e", "b", "c", "d"];

const Sorting = () => {
  const [sortAsc, setSortAsc] = useState();
  const [sortDesc, setSortDesc] = useState();

  const sortAscending = () => {
    const sortAscMode = setSortAsc(sorts.sort());
    return sortAscMode;
  };

  const sortDescending = () => {
    const sortDescMode = setSortDesc(sorts.reverse());
    return sortDescMode;
  };

  useEffect(() => {
    return () => {
      setSortAsc();
      setSortDesc();
    };
  }, [sortAsc, sortDesc]);

  return (
    <div className="sorting-page">
      <hr style={{ width: "95%" }} />

      <h3>Sorting Array list</h3>

      <ul>
        {sorts.map((sort, index) => (
          <li key={index}>{sort}</li>
        ))}
      </ul>
      <div id="sorting" className="sortingList">
        <button onClick={() => sortAscending()}>Asc</button>
        <button onClick={() => sortDescending()}>Desc</button>
      </div>
    </div>
  );
};

export default Sorting;
