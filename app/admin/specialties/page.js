import AppointmentsTable from "@/_components/AppointmentsTable";
import InsertFakeBookingButton from "@/_components/InsertFakeBookingButton";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";

async function page({params}) {

  return (
    <AdminAccessProtectionServer>
      <div>
        This is the admin dashboard
        <AppointmentsTable params={params} />
      </div>

      <InsertFakeBookingButton />
    </AdminAccessProtectionServer>
  );
}

export default page;
