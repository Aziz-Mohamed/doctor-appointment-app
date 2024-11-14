import AppointmentsTable from "@/_components/AppointmentsTable";
import InsertFakeBookingButton from "@/_components/InsertFakeBookingButton";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";
import { AppointmentsProvider } from "@/_context/AppointmentsContext";
import { fetchAllAppointmentsFromSupabase } from "@/_lib/data-server";

async function page({ params }) {
  const fetchedAppointments = await fetchAllAppointmentsFromSupabase();

  return (
    <AppointmentsProvider initialData={fetchedAppointments}>
      <AdminAccessProtectionServer>
        <AppointmentsTable params={params} />
        <InsertFakeBookingButton />
      </AdminAccessProtectionServer>
    </AppointmentsProvider>
  );
}

export default page;
