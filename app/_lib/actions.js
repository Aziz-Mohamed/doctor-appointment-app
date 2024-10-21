"use server";

import { fetchAppointments, insertAppointment } from "./data-server";
export async function createAppointment(formData) {
  const rawFormData =
    formData instanceof FormData
      ? {
          userID: formData.get("userID"),
          doctorID: formData.get("doctorID"),
          appointmentDate: formData.get("appointmentDate"),
          appointmentTime: formData.get("appointmentTime"),
          appointmentStatus: formData.get("appointmentStatus"),
        }
      : formData;
  const appointments = await insertAppointment(rawFormData);
}



export async function getAppointments() {
  const appointments = await fetchAppointments();
  console.log("appointments", appointments)
  return appointments;
}