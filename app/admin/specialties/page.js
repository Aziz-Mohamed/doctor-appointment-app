import AppointmentsTable from "@/_components/AppointmentsTable";
import InsertFakeBookingButton from "@/_components/InsertFakeBookingButton";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";

async function page({params}) {

  return (
<div className="w-full">
    <AdminAccessProtectionServer>
      <div>
        <AppointmentsTable params={params} />
      </div>

      <InsertFakeBookingButton />
    </AdminAccessProtectionServer>
</div>
  );
}

export default page;
