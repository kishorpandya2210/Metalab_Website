import React, { useState } from "react";
import departments from "../facilitiesInfo";
import FacilitySelector from "../components/FacilitySelector";
import NavBar from "../components/NavBar";

const FacilitiesPage = () => {
  const departmentList = ["Chemical", "Mechanical", "Metallurgical"];
  const test = "none";

  const [currDept, setCurrDept] = useState("none");
  const [currTest, setCurrTest] = useState("none");

  const handleDeptChange = (dept) => {
    setCurrDept(dept);
  };

  const handleTestChange = (test) => {
    setCurrTest(test);
  };

  return (
    <div>
      <NavBar></NavBar>
      <main className="facilitiesBody">
        <div className="facilitiesList">
          <h4>Select a Department:</h4>
          <FacilitySelector
            changeTest={handleTestChange}
            changeDept={handleDeptChange}
          />
        </div>
        <div className="facilitiesInfo">
          <div>
            <h2>{currDept} Department</h2>
            <h2>{currTest}</h2>
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

export default FacilitiesPage;
