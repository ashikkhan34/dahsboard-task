import React from "react";
import Card from "./Card";
import CallTrends from "./CallTrend";
import Activity from "./Activity";
import Repiar from "./Repiar";

const page = () => {
  return (
    <div>
      <Card></Card>
      <CallTrends></CallTrends>
      <div className="md:flex gap-6">
        <Activity></Activity>
        <Repiar></Repiar>
      </div>
    </div>
  );
};

export default page;
