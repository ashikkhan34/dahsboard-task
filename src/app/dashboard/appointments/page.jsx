import React from "react";
import AppointmentCard from "./AppointmentCard";
import BookingLink from "./BookingLink";
import AppointmentTable from "./AppointmentTable";

const page = () => {
  return (
    <div>
      <AppointmentCard></AppointmentCard>
      <BookingLink></BookingLink>
      <AppointmentTable></AppointmentTable>
    </div>
  );
};

export default page;
