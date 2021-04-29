import React, { useState, useEffect } from "react";
import departments from "../facilitiesInfo";
import FacilitySelector from "../components/FacilitySelector";
import NavBar from "../components/NavBar";

const FacilitiesPage = () => {
  const [currDept, setCurrDept] = useState("none");
  const [currTest, setCurrTest] = useState("none");

  useEffect(() => {
    console.log(currTest);
  }, [currTest]);

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
            {currDept !== "none" ? <h2>{currDept} Department</h2> : ""}
            {currDept !== "none" ? <p>{departments[currDept].info} </p> : ""}
            {currTest !== "none" ? <h3>{currTest}</h3> : ""}
          </div>
          <div>
            {currDept !== "none" && currDept !== "none" ? <h3>Tests:</h3> : ""}
            {/* <ul>
              {currTest != "none" ? (
                <li></li>
              ) : (
                departments[currDept].tests[currTest].tests.map((test) => (
                  <li key={test.name}>{test.name}</li>
                ))
              )}
            </ul> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FacilitiesPage;
