"use client";
import React, { useContext } from "react";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";
import  InsertFakeBookingButton  from "@/_components/InsertFakeBookingButton";
import { AppointmentsContext } from "@/_context/AppointmentsContext";
// import { useAppointments } from "@/_context/useAppointments";

function page() {
  // const {appointments} = useAppointments();
  const context = useContext(AppointmentsContext);
  return (
    <AdminAccessProtectionServer>
      <div>
        This is the admin dashboard

        <div>
          here is the data fetched
          <div>{JSON.stringify(appointments)}</div>
        </div>

      </div>
      <InsertFakeBookingButton/>

    </AdminAccessProtectionServer>
  );
}

export default page;
