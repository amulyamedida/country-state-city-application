import React from "react";
import CityList from "./CityList.jsx";

const StateList = ({ country, setCountries }) => {
  const addState = () => {
    const stateName = prompt(`Enter state name for ${country.name}:`);
    if (stateName) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? { ...c, states: [...c.states, { id: Date.now(), name: stateName, cities: [] }] }
            : c
        )
      );
    }
  };

  const editState = (stateId) => {
    const newName = prompt("Enter new state name:");
    if (newName) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? {
                ...c,
                states: c.states.map((s) =>
                  s.id === stateId ? { ...s, name: newName } : s
                ),
              }
            : c
        )
      );
    }
  };

  const deleteState = (stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.id === country.id
            ? { ...c, states: c.states.filter((s) => s.id !== stateId) }
            : c
        )
      );
    }
  };

  return (
    <div className="sub-section">
      <h4>States of {country.name}</h4>
      <button className="add-small" onClick={addState}>Add State</button>
      {country.states.length === 0 && <p>No states added yet.</p>}
      {country.states.map((state) => (
        <div className="item" key={state.id}>
          <h5>{state.name}</h5>
          <div>
            <button onClick={() => editState(state.id)}>Edit</button>
            <button onClick={() => deleteState(state.id)}>Delete</button>
          </div>
          <CityList country={country} state={state} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default StateList;
