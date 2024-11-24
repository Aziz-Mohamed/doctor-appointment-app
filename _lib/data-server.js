import { createClient } from "@/utils/supabase/server";
import supabase from "./supabase";

// FETCH DATA
export async function fetchAllAppointmentsFromSupabase() {
  const supabase = createClient();
  const { data: appointments, error } = await supabase
    .from("appointments")
    .select("id,appointmentStatus, doctorID, patientName, patientPhone, specialty, timeOfDay, appointmentDate, patientEmail, reason, createdAt, updatedAt");
    // .select("*");

  if (error) {
    console.error(error);
    return null;
  }

  return appointments;
}

export async function fetchFilteredAppointmentsFromSupabase(filter) {
  const supabase = createClient();
  let { data: appointments, error } = await supabase
    .from("appointments")
    .select("*")
    .eq(filter.column, filter.value);
  return appointments;
}

export async function fetchMultiFilteredAppointmentsFromSupabase(filters) {
  const supabase = createClient();
  let { data: appointments, error } = await supabase
    .from("appointments")
    .select("*");

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

  const { data: doctors, error } = await query;

  if (error) {
    console.error(error);
    return null;
  }

  return doctors;
}


// INSERT DATA
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
export async function updateAppointmentToSupabase(filter) {

  const { data, error } = await supabase
    .from("appointments")
    .update({ appointmentStatus: filter.appointmentStatus, updatedAt: new Date() })
    .eq("id", filter.id)
    .select();
    
  if (error) {
    console.error(error);
    return null;
  }
  return data
}