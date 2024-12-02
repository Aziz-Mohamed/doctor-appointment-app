import AppointmentsTable from "@/_components/AppointmentsTable";
import InsertFakeBookingButton from "@/_components/InsertFakeBookingButton";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";
import { AppointmentsProvider } from "@/_context/AppointmentsContext";
import { fetchAllAppointmentsFromSupabase } from "@/_lib/data-server";

export const metadata = {
  title: "Admin | MedClinic",
  description: "Manage appointments and bookings",
};

async function page(props) {
  const params = await props.params;
  const fetchedAppointments = await fetchAllAppointmentsFromSupabase();

  return (
    <AdminAccessProtectionServer>
      <AppointmentsProvider initialData={fetchedAppointments}>
        <AppointmentsTable params={params} />
        <InsertFakeBookingButton />
      </AppointmentsProvider>
    </AdminAccessProtectionServer>
  );
}

export default page;
