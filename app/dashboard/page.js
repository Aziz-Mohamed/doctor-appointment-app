import React from "react";
import { Appointments } from "../.@/_components/Appointments";
import DateTimePicker from "../.@/_components/DateTimePicker";
import { UserAccessProtectionServer } from "../.@/_components/RoleAccessProtection";
import Signout from "../.@/_components/Signout";

function page() {
  return (
    <UserAccessProtectionServer>
      <div>
        This is the user dashboard
        <DateTimePicker />
        <Appointments />
        <Signout />
      </div>
    </UserAccessProtectionServer>
  );
}

export default page;
