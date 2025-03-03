import React, { useState } from "react";
import CountryList from "./components/CountryList.jsx";
import "./styles.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { id: Date.now(), name: countryName, states: [] }]);
    }
  };

  const editCountry = (id) => {
    const newName = prompt("Enter new country name:");
    if (newName) {
      setCountries(
        countries.map((country) =>
          country.id === id ? { ...country, name: newName } : country
        )
      );
    }
  };

  const deleteCountry = (id) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((country) => country.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Country, State, and City Management</h1>
      <button className="add-small" onClick={addCountry}>Add Country</button>
      <CountryList
        countries={countries}
        setCountries={setCountries}
        editCountry={editCountry}
        deleteCountry={deleteCountry}
      />
    </div>
  );
  
};

export default App;
