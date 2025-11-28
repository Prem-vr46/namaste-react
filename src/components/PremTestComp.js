import React from "react";

const PremTestComp = (props) => {
  const { resData } = props;
  const { completed, id, title, userId } = resData;
  return (
    <div className="border border-black w-3/12 text-center bg-slate-400 font-bold">
      <h1>{title}</h1>
      <h2>{userId}</h2>
      <h2>{completed.toString()}</h2>
      <h2>{id}</h2>
    </div>
  );
};

export default PremTestComp;
