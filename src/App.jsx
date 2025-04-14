import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Form from "./components/Form";

const BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(function() {
    async function fetchCities(){
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const citiesData = await res.json();
        setCities(citiesData);
        console.log("States:", cities, isLoading);
      } catch (err) {
        alert('Error Loading Cities Data 😵');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  
  return (
    <div>
      {/* <h1>
        This would stay on all pages only the router part is going to change.
      </h1> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="countries" element={<p>List of countries</p>} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;