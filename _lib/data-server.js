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

// Use it with the "params" in dynamic routes
export async function fetchFilteredDoctorsFromSupabase(filter = null) {
  const { data: doctors, error } = await supabase
    .from("doctors")
    .select("*")
    .eq(filter?.column, filter?.value);
  if (error) {
    console.error(error);
    return null;
  }
  return doctors;
}

// Use it with multi-filters like in the SearchPanel - but "ilike" is not working with params search in dynamic routes
export async function fetchMultiFilteredDoctorsFromSupabase(filters) {
  let query = supabase
    .from("doctors")
    .select("id, doctorName, specialty, rate, created_at, doctorID");

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      query = query.ilike(key, `%${value.toLowerCase()}%`);
    }
  });
  // console.log('thequery: ',query);

  const { data: doctors, error } = await query;
  // console.log('doctors from data-server: ',doctors);

  if (error) {
    console.error(error);
    return null;
  }

  return doctors;
}

// INSERT DATA
// export async function insertAppointmentToSupabase({
//   userID,
//   doctorID,
//   appointmentDate,
//   appointmentTime,
//   appointmentStatus,
//   specialty,
// }) {
//   const { data, error } = await supabase
//     .from("appointments")
//     .insert([
//       {
//         userID: Number(userID),
//         doctorID: Number(doctorID),
//         appointmentDate: appointmentDate,
//         appointmentTime: appointmentTime,
//         appointmentStatus: String(appointmentStatus),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         specialty: specialty,
//       },
//     ])
//     .select();
//   // console.log(data)
//   if (error) {
//     console.error(error);
//     return null;
//   }

//   return data;
// }

export async function insertAppointmentToSupabase(formData) {
  const appointmentData = {
    doctorID: Number(formData.get("doctorID")),
    appointmentDate: formData.get("appointmentDate"),
    appointmentTime: formData.get("appointmentTime"),
    appointmentStatus: String(formData.get("appointmentStatus")),
    createdAt: new Date(),
    updatedAt: new Date(),
    specialty: formData.get("specialty"),
    timeOfDay: formData.get("timeOfDay"),
    patientName: formData.get("patientName"),
    patientEmail: formData.get("patientEmail"),
    patientPhone: String(formData.get("patientPhone")),
    reason: formData.get("reason"),
  };

  const { data, error } = await supabase
    .from("appointments")
    .insert([appointmentData])
    .select();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

//UPDATE DATA
export async function updateAppointmentToSupabase({
  id,
  userID,
  doctorID,
  appointmentDate,
  appointmentTime,
  appointmentStatus,
  specialty,
}) {
  const { data, error } = await supabase
    .from("appointments")
    .update({
      userID: Number(userID),
      doctorID: Number(doctorID),
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
      appointmentStatus: String(appointmentStatus),
      updatedAt: new Date(),
      specialty: specialty,
    })
    .eq("id", id)
    .select();
  // console.log(data)
  if (error) {
    console.error(error);
    return null;
  }
}
