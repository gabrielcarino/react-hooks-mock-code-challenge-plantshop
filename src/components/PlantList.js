import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantList = plants.map(plant => <PlantCard plant={plant} key={plant.id} />)
  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
