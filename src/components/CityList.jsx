import React from "react";

const CityList = ({ country, state, setCountries }) => {
  const addCity = () => {
    const cityName = prompt(`Enter city name for ${state.name}, ${country.name}:`);
    if (cityName) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id ? { ...s, cities: [...s.cities, { id: Date.now(), name: cityName }] } : s
                ),
              }
            : c
        )
      );
    }
  };

  const deleteCity = (cityId) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === state.id ? { ...s, cities: s.cities.filter((city) => city.id !== cityId) } : s
                ),
              }
            : c
        )
      );
    }
  };

  return (
    <div className="sub-section">
      <h6>Cities in {state.name}</h6>
      <button className="add-small" onClick={addCity}>Add City</button>
      {state.cities.length === 0 && <p>No cities added yet.</p>}
      {state.cities.map((city) => (
        <div className="item" key={city.id}>
          <span>{city.name}</span>
          <button onClick={() => deleteCity(city.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CityList;
