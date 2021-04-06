import React, { useState } from "react";
import "../Index.css";
import departments from "../facilitiesInfo";

const departmentTitles = ["Chemical", "Mechanical", "Metallurgical"];

const FacilitySelector = (props) => {
  const [dept, setDept] = useState("none");
  const [testName, setTestName] = useState("none");

  return (
    <div className="facilitiesSelector">
      {departmentTitles.map((name) => {
        return (
          <div
            className={name === dept ? "facilityBtnActive" : "facilityBtn"}
            onClick={() => {
              setDept(name);
            }}
          >
            <p>{name}</p>
            <div>
              {dept !== "none" && dept === name
                ? departments[dept].tests.map((test) => {
                    return (
                      <div
                        className={
                          testName === test ? "testBtnActive" : "testBtn"
                        }
                        onClick={() => {
                          setTestName(test);
                        }}
                      >
                        <p>{test.name}</p>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FacilitySelector;
