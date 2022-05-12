import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [initPlants, setInitPlants] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plantsData => {
        setInitPlants(plantsData) 
        setPlants(plantsData)
      })
  }, []);

  function handleSearch(search) {
    const plantQuery = initPlants.filter(plant => plant.name.toLowerCase().includes(search));
    setPlants(plantQuery);
  }

  function handleAddPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
