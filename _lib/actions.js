"use server";
import { fakeAppointmentsData } from "@/_lib/fakeAppointmentsData";
import { createClient } from "@/utils/supabase/server";
import {
  fetchAllAppointmentsFromSupabase,
  insertAppointmentToSupabase,
} from "@/_lib/data-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";


//GET
export async function getAppointments() {
  const appointments = await fetchAllAppointmentsFromSupabase();
  // console.log("appointments", appointments);
  return appointments;
}


export async function getAppointmentsWithFilter(filter) {
  // filters is an object with column and value
 const filteredAppointments = await fetchFilteredAppointmentsFromSupabase(filter);
 console.log("filteredAppointments", filteredAppointments)
 return filteredAppointments
}


export async function getAppointmentsWithFilters(filters) {
  // filters is array of objects with column and value
const filteredAppointments = await fetchMultiFilteredAppointmentsFromSupabase(filters);
return filteredAppointments
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

export async function signInWithGoogleOAuth() {
  // 1. Create a Supabase client
  const supabase = createClient();
  const origin = headers().get("origin");
  // console.log("origin", origin);
  // 2. Sign in with GitHub
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
  // 3. Redirect to landing page
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
  const rawFormData = formData
    ? {
        userID: formData.get("userID"),
        doctorID: formData.get("doctorID"),
        appointmentDate: formData.get("appointmentDate"),
        appointmentTime: formData.get("appointmentTime"),
        appointmentStatus: formData.get("appointmentStatus"),
        specialty: formData.get("specialty"),
      }
    : formData;
  const appointments = await insertAppointmentToSupabase(rawFormData);
  return appointments;
}




export async function insertFakeAppointments() {
  const fakeAppointments = [
    // Family Medicine
    {
      doctorID: 1,
      appointmentDate: "2024-11-10",
      appointmentTime: "09:00:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-01T08:00:00Z",
      updatedAt: "2024-11-01T08:30:00Z",
      userID: "f1c6b676-3e77-4a8f-9e90-23bce43c8211",
      specialties: "family-medicine",
    },
    {
      doctorID: 2,
      appointmentDate: "2024-11-12",
      appointmentTime: "11:30:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-01T09:00:00Z",
      updatedAt: "2024-11-01T09:30:00Z",
      userID: "a2d4b478-1e99-4b7a-8d4f-6e2f8b65a111",
      specialties: "family-medicine",
    },
    {
      doctorID: 3,
      appointmentDate: "2024-11-15",
      appointmentTime: "15:00:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-01T10:00:00Z",
      updatedAt: "2024-11-01T10:30:00Z",
      userID: "b3e4c688-2f21-4d2f-9e12-7f4b4c79b222",
      specialties: "family-medicine",
    },
    // Internal Medicine
    {
      doctorID: 4,
      appointmentDate: "2024-11-17",
      appointmentTime: "10:00:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-02T08:00:00Z",
      updatedAt: "2024-11-02T08:30:00Z",
      userID: "c4f5d699-3g33-4d3f-8f34-8e5c5d87c333",
      specialties: "internal-medicine",
    },
    {
      doctorID: 5,
      appointmentDate: "2024-11-20",
      appointmentTime: "14:30:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-02T09:00:00Z",
      updatedAt: "2024-11-02T09:30:00Z",
      userID: "d5e6e711-4h44-4e4f-8g45-9f6d6e98d444",
      specialties: "internal-medicine",
    },
    {
      doctorID: 6,
      appointmentDate: "2024-11-22",
      appointmentTime: "16:00:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-02T10:00:00Z",
      updatedAt: "2024-11-02T10:30:00Z",
      userID: "e6f7f822-5i55-5f5f-9h56-0a7f7f09e555",
      specialties: "internal-medicine",
    },
    // Pediatrics
    {
      doctorID: 7,
      appointmentDate: "2024-11-25",
      appointmentTime: "09:30:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-03T08:00:00Z",
      updatedAt: "2024-11-03T08:30:00Z",
      userID: "f7g8g933-6j66-6g6g-0i67-1b8g8g20f666",
      specialties: "pediatrics",
    },
    {
      doctorID: 8,
      appointmentDate: "2024-11-28",
      appointmentTime: "13:00:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-03T09:00:00Z",
      updatedAt: "2024-11-03T09:30:00Z",
      userID: "g8h9h044-7k77-7h7h-1j78-2c9h9h31g777",
      specialties: "pediatrics",
    },
    {
      doctorID: 9,
      appointmentDate: "2024-12-01",
      appointmentTime: "15:30:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-03T10:00:00Z",
      updatedAt: "2024-11-03T10:30:00Z",
      userID: "h9i0i155-8l88-8i8i-2k89-3d0i0i42h888",
      specialties: "pediatrics",
    },
    // Cardiology
    {
      doctorID: 10,
      appointmentDate: "2024-11-10",
      appointmentTime: "10:00:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-01T08:00:00Z",
      updatedAt: "2024-11-01T08:30:00Z",
      userID: "aa1aa111-11aa-11a1-1a1a-1111aa1a1a1a",
      specialties: "cardiology",
    },
    {
      doctorID: 11,
      appointmentDate: "2024-11-12",
      appointmentTime: "12:00:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-01T08:00:00Z",
      updatedAt: "2024-11-01T08:30:00Z",
      userID: "bb2bb222-22bb-22b2-2b2b-2222bb2b2b2b",
      specialties: "cardiology",
    },
    {
      doctorID: 12,
      appointmentDate: "2024-11-14",
      appointmentTime: "14:00:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-01T08:00:00Z",
      updatedAt: "2024-11-01T08:30:00Z",
      userID: "cc3cc333-33cc-33c3-3c3c-3333cc3c3c3c",
      specialties: "cardiology",
    },
      // Dermatology
    {
      doctorID: 13,
      appointmentDate: "2024-11-10",
      appointmentTime: "09:30:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-02T08:00:00Z",
      updatedAt: "2024-11-02T08:30:00Z",
      userID: "dd4dd444-44dd-44d4-4d4d-4444dd4d4d4d",
      specialties: "dermatology",
    },
    {
      doctorID: 14,
      appointmentDate: "2024-11-12",
      appointmentTime: "11:30:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-02T08:00:00Z",
      updatedAt: "2024-11-02T08:30:00Z",
      userID: "ee5ee555-55ee-55e5-5e5e-5555ee5e5e5e",
      specialties: "dermatology",
    },
    {
      doctorID: 15,
      appointmentDate: "2024-11-14",
      appointmentTime: "13:30:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-02T08:00:00Z",
      updatedAt: "2024-11-02T08:30:00Z",
      userID: "ff6ff666-66ff-66f6-6f6f-6666ff6f6f6f",
      specialties: "dermatology",
    },
    // Endocrinology
    {
      doctorID: 16,
      appointmentDate: "2024-11-11",
      appointmentTime: "10:00:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-03T08:00:00Z",
      updatedAt: "2024-11-03T08:30:00Z",
      userID: "gg7gg777-77gg-77g7-7g7g-7777gg7g7g7g",
      specialties: "endocrinology",
    },
    {
      doctorID: 17,
      appointmentDate: "2024-11-13",
      appointmentTime: "12:30:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-03T08:00:00Z",
      updatedAt: "2024-11-03T08:30:00Z",
      userID: "hh8hh888-88hh-88h8-8h8h-8888hh8h8h8h",
      specialties: "endocrinology",
    },
    {
      doctorID: 18,
      appointmentDate: "2024-11-15",
      appointmentTime: "15:00:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-03T08:00:00Z",
      updatedAt: "2024-11-03T08:30:00Z",
      userID: "ii9ii999-99ii-99i9-9i9i-9999ii9i9i9i",
      specialties: "endocrinology",
    },
    // Gastroenterology
    {
      doctorID: 19,
      appointmentDate: "2024-11-10",
      appointmentTime: "08:30:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-04T08:00:00Z",
      updatedAt: "2024-11-04T08:30:00Z",
      userID: "jj1jj111-11jj-11j1-1j1j-1111jj1j1j1j",
      specialties: "gastroenterology",
    },
    {
      doctorID: 20,
      appointmentDate: "2024-11-13",
      appointmentTime: "11:00:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-04T08:00:00Z",
      updatedAt: "2024-11-04T08:30:00Z",
      userID: "kk2kk222-22kk-22k2-2k2k-2222kk2k2k2k",
      specialties: "gastroenterology",
    },
    {
      doctorID: 21,
      appointmentDate: "2024-11-15",
      appointmentTime: "13:00:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-04T08:00:00Z",
      updatedAt: "2024-11-04T08:30:00Z",
      userID: "ll3ll333-33ll-33l3-3l3l-3333ll3l3l3l",
      specialties: "gastroenterology",
    },
    // Neurology
    {
      doctorID: 22,
      appointmentDate: "2024-11-10",
      appointmentTime: "09:00:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-05T08:00:00Z",
      updatedAt: "2024-11-05T08:30:00Z",
      userID: "mm4mm444-44mm-44m4-4m4m-4444mm4m4m4m",
      specialties: "neurology",
    },
    {
      doctorID: 23,
      appointmentDate: "2024-11-12",
      appointmentTime: "10:30:00",
      appointmentStatus: "pending",
      createdAt: "2024-11-05T08:00:00Z",
      updatedAt: "2024-11-05T08:30:00Z",
      userID: "nn5nn555-55nn-55n5-5n5n-5555nn5n5n5n",
      specialties: "neurology",
    },
    {
      doctorID: 24,
      appointmentDate: "2024-11-15",
      appointmentTime: "14:30:00",
      appointmentStatus: "canceled",
      createdAt: "2024-11-05T08:00:00Z",
      updatedAt: "2024-11-05T08:30:00Z",
      userID: "oo6oo666-66oo-66o6-6o6o-6666oo6o6o6o",
      specialties: "neurology",
    },
    // Oncology
    {
      doctorID: 25,
      appointmentDate: "2024-11-11",
      appointmentTime: "13:30:00",
      appointmentStatus: "confirmed",
      createdAt: "2024-11-06T08:00:00Z",
      updatedAt: "2024-11-06T08:30:00Z",
      userID: "pp7pp777-77pp-77p7-7p7p-7777pp7p7p7p",
      specialties: "oncology",
    },
  ];

  for (const appointment of fakeAppointments) {
    await insertAppointmentToSupabase({
      userID: appointment.userID,
      doctorID: appointment.doctorID,
      appointmentDate: appointment.appointmentDate,
      appointmentTime: appointment.appointmentTime,
      appointmentStatus: appointment.appointmentStatus,
      specialty: appointment.specialty,
    });
  }
}
