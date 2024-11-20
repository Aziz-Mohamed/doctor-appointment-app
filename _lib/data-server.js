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


// export async function fetchFilteredDoctorsFromSupabase(filter = null) {
//   const { data: doctors, error } = await supabase
//     .from("doctors")
//     .select("*")
//     .eq(filter?.column, filter?.value);
//     if(error){
//       console.error(error);
//       return null;
//     }
//   return doctors;
// }


export async function fetchFilteredDoctorsFromSupabase(filters = {}) {
  // Start the query
  let query = supabase.from("doctors").select("*");

  // Apply filters dynamically
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      query = query.eq(key, value);
    }
  });

  const { data: doctors, error } = await query;

  if (error) {
    console.error(error);
    return null;
  }
  
  return doctors;
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



//UPDATE DATA
export async function updateAppointmentToSupabase({id,  userID, doctorID, appointmentDate, appointmentTime, appointmentStatus, specialty }) {
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
