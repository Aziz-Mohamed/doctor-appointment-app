import supabase from "./supabase";


// FETCH DATA
export async function fetchAllAppointmentsFromSupabase() {
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("*");
  // console.log("appointments", appointments)
  if (error) {
    console.error(error);
    return null;
  }

  return appointments;
}

export async function fetchFilteredAppointmentsFromSupabase(filter) {
  // filters is an object with column and value
  const supabase = createClient();
  let { data: appointments, error } = await supabase
    .from("appointments")
    .select("*")
    .eq(filter.column, filter.value);
  return appointments;
}

export async function fetchMultiFilteredAppointmentsFromSupabase(filters) {
  // filters is array of objects with column and value
  const supabase = createClient();
  let { data: appointments, error } = await supabase
    .from("appointments")
    .select("*");
  // Filters
  filters.map((filter) => {
    appointments.eq(filter.column, filter.value);
  });
}


// INSERT DATA
export async function insertAppointmentToSupabase({
  userID,
  doctorID,
  appointmentDate,
  appointmentTime,
  appointmentStatus,
  specialty,
}) {
  const { data, error } = await supabase
    .from("appointments")
    .insert([
      {
        userID: Number(userID),
        doctorID: Number(doctorID),
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        appointmentStatus: String(appointmentStatus),
        createdAt: new Date(),
        updatedAt: new Date(),
        specialty: specialty,
      },
    ])
    .select();
  // console.log(data)
  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
