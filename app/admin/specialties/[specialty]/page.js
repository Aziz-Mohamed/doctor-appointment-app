import AppointmentsTable from "@/_components/AppointmentsTable";
import InsertFakeBookingButton from "@/_components/InsertFakeBookingButton";
import { AdminAccessProtectionServer } from "@/_components/RoleAccessProtection";

async function page({params}) {

  return (
    <AdminAccessProtectionServer>
      <div>
        This is the admin dashboard
        {/* <ul style={{ border: "1px solid red", padding: "1em" }}>
          {fetchedAppointments.map((appointment) => (
            <li key={appointment.id}>
              <span>appointmentStatus: {appointment.appointmentStatus}</span>
              <span>...... </span>
              <span>specialty: {appointment.specialty}</span>
            </li>
          ))}
        </ul> */}
        <AppointmentsTable params={params} />
      </div>

      <InsertFakeBookingButton />
    </AdminAccessProtectionServer>
  );
}

export default page;
