import React from "react";
import Launches from "./Launches";

const ListLaunches = ({ list }) => {
  return (
    <div>
      {list.map((l) => {
        return <Launches key={l.mission_name} launch={l} />
      })}
    </div>
  );
};

export default ListLaunches;
