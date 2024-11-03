import supabase from "./supabase";

export async function fetchAppointments() {
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

export async function insertAppointment({
  userID,
  doctorID,
  appointmentDate,
  appointmentTime,
  appointmentStatus,
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
