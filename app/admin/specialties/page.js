import AppointmentsTable from "@/_components/AppointmentsTable";
import InsertFakeBookingButton from "@/_components/InsertFakeBookingButton";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";

async function page({ params }) {
  return (
    <AdminAccessProtectionServer>
      <AppointmentsTable params={params} />
      <InsertFakeBookingButton />
    </AdminAccessProtectionServer>
  );
}

export default page;
