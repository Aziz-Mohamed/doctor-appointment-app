"use server";

import { createClient } from "@/utils/supabase/server";
import {
  fetchAllAppointmentsFromSupabase,
  fetchMultiFilteredDoctorsFromSupabase,
  insertAppointmentToSupabase,
  updateAppointmentToSupabase,
} from "@/_lib/data-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

//GET
export async function getAppointments() {
  const appointments = await fetchAllAppointmentsFromSupabase();
  return appointments;
}

export async function getAppointmentsWithFilter(filter) {
  // filters is an object with column and value
  const filteredAppointments = await fetchFilteredAppointmentsFromSupabase(
    filter
  );
  console;
  return filteredAppointments;
}

export async function getAppointmentsWithFilters(filters) {
  // filters is array of objects with column and value
  const filteredAppointments = await fetchMultiFilteredAppointmentsFromSupabase(
    filters
  );
  return filteredAppointments;
}

export async function getFilteredDoctors(filter) {
  const doctors = await fetchMultiFilteredDoctorsFromSupabase(filter);
  revalidatePath("/dashboard", "page");
  return doctors;
}

//AUTH
export async function signUpNewUser(formData) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData?.get("email"),
    password: formData?.get("password"),
  });

  if (error) {
    console.error("Signup error:", error.message);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInUser(formData) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData?.get("email"),
    password: formData?.get("password"),
  });


  if (error) {
    console.error("Login error:", error.message);
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signInWithGoogleOAuth() {
  const supabase = createClient();
  const origin = (await headers()).get("origin");

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log("the error is", error);
  } else {
    return redirect(data.url);
  }
}

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
    return;
  }
  revalidatePath("/", "layout");
  redirect("/");
}

//CREATE
export async function createAppointment(formData) {
  const appointments = await insertAppointmentToSupabase(formData);
  return appointments;
}

//UPDATE
export async function updateAppointmentStatus(id, newStatus) {
  const data = await updateAppointmentToSupabase({ id, appointmentStatus: newStatus });
  revalidatePath("/admin/specialties");
  return data;
}


//INSERT FAKE DATA FOR DEVELOPMENT
export async function insertFakeAppointments() {
  const supabase = createClient();
  const fakeAppointments = [
    {
      appointmentDate: "2024-11-29T22:00:00.000Z",
      appointmentStatus: "pending",
      doctorID: "24",
      patientEmail: "abdilaziz.m.elsayed@gmail.com",
      patientName: "Abdil Aziz Elsayed",
      patientPhone: "01061044699",
      reason: "Good things are coming ISA",
      specialty: "family-medicine",
      timeOfDay: "morning"
    },
    {
      appointmentDate: "2024-11-30T10:00:00.000Z",
      appointmentStatus: "confirmed",
      doctorID: "25",
      patientEmail: "john.doe@example.com",
      patientName: "John Doe",
      patientPhone: "01234567890",
      reason: "Check-up",
      specialty: "family-medicine",
      timeOfDay: "morning"
    },
    {
      appointmentDate: "2024-12-01T14:00:00.000Z",
      appointmentStatus: "canceled",
      doctorID: "26",
      patientEmail: "jane.doe@example.com",
      patientName: "Jane Doe",
      patientPhone: "09876543210",
      reason: "Not feeling well",
      specialty: "family-medicine",
      timeOfDay: "afternoon"
    },
    {
      appointmentDate: "2024-12-02T16:00:00.000Z",
      appointmentStatus: "completed",
      doctorID: "27",
      patientEmail: "bob.smith@example.com",
      patientName: "Bob Smith",
      patientPhone: "1112223333",
      reason: "Follow-up",
      specialty: "family-medicine",
      timeOfDay: "afternoon"
    },
    {
      appointmentDate: "2024-11-29T22:00:00.000Z",
      appointmentStatus: "pending",
      doctorID: "28",
      patientEmail: "alice.johnson@example.com",
      patientName: "Alice Johnson",
      patientPhone: "4445556666",
      reason: "New patient",
      specialty: "internal-medicine",
      timeOfDay: "morning"
    },
    {
      appointmentDate: "2024-11-30T10:00:00.000Z",
      appointmentStatus: "confirmed",
      doctorID: "29",
      patientEmail: "mike.davis@example.com",
      patientName: "Mike Davis",
      patientPhone: "5556667777",
      reason: "Check-up",
      specialty: "internal-medicine",
      timeOfDay: "morning"
    },
    {
      appointmentDate: "2024-12-01T14:00:00.000Z",
      appointmentStatus: "canceled",
      doctorID: "30",
      patientEmail: "emily.chen@example.com",
      patientName: "Emily Chen",
      patientPhone: "6667778888",
      reason: "Not feeling well",
      specialty: "internal-medicine",
      timeOfDay: "afternoon"
    },
    {
      appointmentDate: "2024-12-02T16:00:00.000Z",
      appointmentStatus: "completed",
      doctorID: "31",
      patientEmail: "david.lee@example.com",
      patientName: "David Lee",
      patientPhone: "7778889999",
      reason: "Follow-up",
      specialty: "internal-medicine",
      timeOfDay: "afternoon"
    },
    {
      appointmentDate: "2024-11-29T22:00:00.000Z",
      appointmentStatus: "pending",
      doctorID: "32",
      patientEmail: "sarah.taylor@example.com",
      patientName: "Sarah Taylor",
      patientPhone: "8889990000",
      reason: "New patient",
      specialty: "pediatrics",
      timeOfDay: "morning"
    },
    {
      appointmentDate: "2024-11-30T10:00:00.000Z",
      appointmentStatus: "confirmed",
      doctorID: "33",
      patientEmail: "kevin.white@example.com",
      patientName: "Kevin White",
      patientPhone: "9990001111",
      reason: "Check-up",
      specialty: "pediatrics",
      timeOfDay: "morning"
    },
    {
      appointmentDate: "2024-11-30T10:00:00.000Z",
      appointmentStatus: "canceled",
      doctorID: "2",
      patientEmail: "jane.smith@example.com",
      patientName: "Jane Smith",
      patientPhone: "01020202020",
      reason: "Routine check-up",
      specialty: "family-medicine",
      timeOfDay: "morning",
    },
    {
      appointmentDate: "2024-12-01T14:00:00.000Z",
      appointmentStatus: "confirmed",
      doctorID: "3",
      patientEmail: "adam.johnson@example.com",
      patientName: "Adam Johnson",
      patientPhone: "01030303030",
      reason: "Family counseling",
      specialty: "family-medicine",
      timeOfDay: "afternoon",
    },
    {
      appointmentDate: "2024-12-02T16:00:00.000Z",
      appointmentStatus: "completed",
      doctorID: "4",
      patientEmail: "emily.brown@example.com",
      patientName: "Emily Brown",
      patientPhone: "01040404040",
      reason: "Follow-up on tests",
      specialty: "family-medicine",
      timeOfDay: "evening",
    },
    {
      appointmentDate: "2024-12-03T09:00:00.000Z",
      appointmentStatus: "pending",
      doctorID: "5",
      patientEmail: "mark.taylor@example.com",
      patientName: "Mark Taylor",
      patientPhone: "01050505050",
      reason: "Diabetes consultation",
      specialty: "internal-medicine",
      timeOfDay: "morning",
    },
    {
      appointmentDate: "2024-12-04T11:00:00.000Z",
      appointmentStatus: "canceled",
      doctorID: "6",
      patientEmail: "sarah.white@example.com",
      patientName: "Sarah White",
      patientPhone: "01060606060",
      reason: "Hypertension follow-up",
      specialty: "internal-medicine",
      timeOfDay: "morning",
    },
    {
      appointmentDate: "2024-12-05T15:00:00.000Z",
      appointmentStatus: "confirmed",
      doctorID: "7",
      patientEmail: "michael.green@example.com",
      patientName: "Michael Green",
      patientPhone: "01070707070",
      reason: "Liver function review",
      specialty: "internal-medicine",
      timeOfDay: "afternoon",
    },
    {
      appointmentDate: "2024-12-06T17:00:00.000Z",
      appointmentStatus: "completed",
      doctorID: "8",
      patientEmail: "chloe.adams@example.com",
      patientName: "Chloe Adams",
      patientPhone: "01080808080",
      reason: "General health check",
      specialty: "internal-medicine",
      timeOfDay: "evening",
    },
    {
      appointmentDate: "2024-12-07T08:00:00.000Z",
      appointmentStatus: "pending",
      doctorID: "9",
      patientEmail: "kevin.martin@example.com",
      patientName: "Kevin Martin",
      patientPhone: "01090909090",
      reason: "Growth assessment",
      specialty: "pediatrics",
      timeOfDay: "morning",
    },
    {
      appointmentDate: "2024-12-08T10:00:00.000Z",
      appointmentStatus: "canceled",
      doctorID: "10",
      patientEmail: "olivia.jones@example.com",
      patientName: "Olivia Jones",
      patientPhone: "01101010101",
      reason: "Flu symptoms",
      specialty: "pediatrics",
      timeOfDay: "morning",
    },
    {
      appointmentDate: "2024-12-09T14:00:00.000Z",
      appointmentStatus: "confirmed",
      doctorID: "11",
      patientEmail: "alex.anderson@example.com",
      patientName: "Alex Anderson",
      patientPhone: "01111111111",
      reason: "Allergy follow-up",
      specialty: "pediatrics",
      timeOfDay: "afternoon",
    },
    {
      appointmentDate: "2024-12-10T16:00:00.000Z",
      appointmentStatus: "completed",
      doctorID: "12",
      patientEmail: "mia.wilson@example.com",
      patientName: "Mia Wilson",
      patientPhone: "01121212121",
      reason: "Vaccination schedule",
      specialty: "pediatrics",
      timeOfDay: "evening",
    },
  ]


  for (const appointment of fakeAppointments) {
    const appointmentData = {
      doctorID: Number(appointment.doctorID) || 1,
      appointmentDate: appointment.appointmentDate,
      appointmentStatus: String(appointment.appointmentStatus),
      createdAt: new Date(),
      updatedAt: new Date(),
      specialty: appointment.specialty,
      timeOfDay: appointment.timeOfDay,
      patientName: appointment.patientName,
      patientEmail: appointment.patientEmail,
      patientPhone: String(appointment.patientPhone),
      reason: appointment.reason,
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
}
