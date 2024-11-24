"use client";

import AppointmentsList from "@/_components/AppointmentsList";
import { useState } from "react";
import { getAppointments } from "../_lib/actions";

export function Appointments() {
  const [value, setValue] = useState([]);

  const handleFetchData = async () => {
    const data = await getAppointments();
    setValue(data);
  };
  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {Array.isArray(value) && <AppointmentsList appointments={value} />}
    </div>
  );
}
