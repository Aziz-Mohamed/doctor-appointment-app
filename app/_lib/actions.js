"use server";

import { insertBooking } from "./data-server";
export async function createBooking(formData) {
  const rawFormData =
    formData instanceof FormData
      ? {
          userID: formData.get("userID"),
          doctorID: formData.get("doctorID"),
          bookingDate: formData.get("bookingDate"),
          bookingTime: formData.get("bookingTime"),
          bookingStatus: formData.get("bookingStatus"),
        }
      : formData;
  const booking = await insertBooking(rawFormData);
}
