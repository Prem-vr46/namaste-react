import React, { useEffect, useState } from "react";
import { TCS_API } from "../utils/constant";
import { data, useNavigate } from "react-router";
import PremTestComp from "./PremTestComp";
import SuccessPage from "./SuccessPage";

// const PremTest = () => {
//   const [result, setResult] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const value = await fetch(TCS_API);
//     const data = await value.json();
//     //console.log(data);
//     setResult(data);
//   };

//   return (
//     <div className="body-container flex flex-wrap">
//       {result.map((data) => {
//         return <PremTestComp key={data.id} resData={data} />;
//       })}
//     </div>
//   );
// };

const PremTest = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (
      firstName.toLowerCase() === lastName.toLowerCase() &&
      (firstName != "") & (lastName != "")
    ) {
      navigate("/success");
    } else {
      alert("miss matched");
    }
  };

  return (
    <div className="element-container">
      <input
        type="text"
        placeholder="first name"
        className="border border-black m-4"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        className="border border-black m-4"
        onChange={(e) => setLastName(e.target.value)}
      />
      <button className="border border-black" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default PremTest;
