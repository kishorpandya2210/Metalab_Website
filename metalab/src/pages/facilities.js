import React, { useState } from "react";
import departments from "../facilitiesInfo";
import FacilitySelector from "../components/FacilitySelector";
import NavBar from "../components/NavBar";

const facilities = () => {
  const departmentList = ["Chemical", "Mechanical", "Metallurgical"];
  const test = "none";

  return (
    <div>
      <NavBar></NavBar>
      <main className="facilitiesBody">
        <div className="facilitiesList">
          <h4>Select a Department:</h4>
          <FacilitySelector />
        </div>
        <div className="facilitiesInfo">
          <div>
            <h2> Chemical </h2>
            <p>{departments.Chemical.info}</p>
            <h3>Tests:</h3>
            <ul>
              {departments.Chemical.tests.map((test) => (
                <li key={test.name}>{test.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default facilities;
