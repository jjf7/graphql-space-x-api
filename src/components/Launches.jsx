import React from "react";
import ImagesLaunch from "./ImagesLaunch";

const Launches = ({ launch }) => {
  return (
    <div>
      <div>{launch.mission_name}</div>
      <div>{launch.launch_date_local}</div>
      <div>{launch.launch_site.site_name_long}</div>
      {launch.ships.length > 0 ? <ImagesLaunch ships={launch.ships} /> : ""}
      <hr />
    </div>
  );
};

export default Launches;
