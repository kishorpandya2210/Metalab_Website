import React, { useEffect, useState } from "react";
import "../Index.css";
import departments from "../facilitiesInfo";

const departmentTitles = ["Chemical", "Mechanical", "Metallurgical"];

const FacilitySelector = ({ changeDept, changeTest }) => {
  const [dept, setDept] = useState("none");
  const [testName, setTestName] = useState("none");

  useEffect(() => {
    changeTest(testName);
  }, [testName]);

  useEffect(() => {
    changeDept(dept);
  }, [dept]);

  return (
    <div className="facilitiesSelector">
      {departmentTitles.map((name) => {
        return (
          <div>
            <div
              className={name === dept ? "facilityBtnActive" : "facilityBtn"}
              onClick={() => {
                setDept(name);
                setTestName("none");
              }}
            >
              <p>{name}</p>
            </div>
            <div>
              {dept !== "none" && dept === name
                ? departments[dept].tests.map((test) => {
                    return (
                      <div
                        className={
                          testName === test.name ? "testBtnActive" : "testBtn"
                        }
                        onClick={() => {
                          setTestName(test.name);
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
