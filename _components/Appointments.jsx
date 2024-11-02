"use client";

import { useState, useEffect } from "react";
import { getAppointments } from "../_lib/actions";
import AppointmentsList from "./AppointmentsList";

export function Appointments() {
  const [value, setValue] = useState([]);

  // useEffect(() => {
  //   console.log("type of Data", typeof value);
  //   console.log("type of Data", Array.isArray(value));
  //   console.log("value", value);
  // }, [value]);

  const handleFetchData = async () => {
    const data = await getAppointments();
    console.log("Data", data);
    setValue(data);
  };
  return (
    <div>
      <button onClick={handleFetchData}>Fetch Data</button>
      {Array.isArray(value) && <AppointmentsList appointments={value} />}
    </div>
  );
}
