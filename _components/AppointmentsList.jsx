import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentsList({appointments}) {
  return (
    <ul className="space-y-6">
      {appointments
        ? appointments.map((appointment) => (
            <AppointmentCard key = {Math.random()} appointment={appointment} />
          ))
        : null}
    </ul>
  );
}

export default AppointmentsList;
