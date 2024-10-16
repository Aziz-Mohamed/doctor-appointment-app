"use server";

import { insertBooking } from "./data-server";

export async function createBooking(formData) {
  if (!formData) {
    throw new Error("FormData is null or undefined");
  }

  const rawFormData = {
    userID: formData.get("userID"),
    doctorID: formData.get("doctorID"),
    bookingDate: formData.get("bookingDate"),
    bookingTime: formData.get("bookingTime"),
    bookingStatus: formData.get("bookingStatus"),
  };

  if (
    !rawFormData.userID ||
    !rawFormData.doctorID ||
    !rawFormData.bookingDate ||
    !rawFormData.bookingTime ||
    !rawFormData.bookingStatus
  ) {
    throw new Error("One or more required fields are missing");
  }

  try {
    const booking = await insertBooking(rawFormData);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
