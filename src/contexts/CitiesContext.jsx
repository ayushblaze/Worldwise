import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

/* eslint-disable */
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const citiesData = await res.json();
        setCities(citiesData);
        console.log("States:", cities, isLoading);
      } catch (err) {
        alert("Error Loading Cities Data 😵");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
  return context;
}

export { CitiesProvider, useCities };