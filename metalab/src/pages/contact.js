import * as React from "react";
import ContactCard from "../components/ContactCard";

const contact = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "auto",
        backgroundColor: "rgb(0, 153, 153)",
      }}
    >
      <ContactCard></ContactCard>
    </div>
  );
};

export default contact;
