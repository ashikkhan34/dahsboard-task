import React from "react";
import AppointmentCard from "./AppointmentCard";
import BookingLink from "./BookingLink";
import AppointmentTable from "./AppointmentTable";
import Pagination from "./Pagination";

const page = () => {
  return (
    <div>
      <AppointmentCard></AppointmentCard>
      <BookingLink></BookingLink>
      <AppointmentTable></AppointmentTable>
      <Pagination></Pagination>
    </div>
  );
};

export default page;
