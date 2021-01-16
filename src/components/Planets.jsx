import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const response = await fetch("http://swapi.dev/api/planets/");
  return response.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
      <p>{status}</p>
    </div>
  );
};

export default Planets;
