
import React, { useContext } from "react";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";
import  InsertFakeBookingButton  from "@/_components/InsertFakeBookingButton";
import AppointmentsTable from "@/_components/AppointmentsTable";

function page() {
  return (
    <AdminAccessProtectionServer>
      <div>
        This is the admin dashboard

          <AppointmentsTable/>
      </div>

      <InsertFakeBookingButton/>

    </AdminAccessProtectionServer>
  );
}

export default page;
