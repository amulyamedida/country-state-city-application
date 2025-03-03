import React from "react";
import StateList from "./StateList.jsx";

const CountryList = ({ countries, setCountries, editCountry, deleteCountry }) => {
  return (
    <div className="section">
      <h2>Countries</h2>
      {countries.length === 0 && <p>No countries added yet.</p>}
      {countries.map((country) => (
        <div className="item" key={country.id}>
          <h3>{country.name}</h3>
          <div>
            <button className="edit-btn" onClick={() => editCountry(country.id)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteCountry(country.id)}>Delete</button>
          </div>
          <StateList country={country} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
