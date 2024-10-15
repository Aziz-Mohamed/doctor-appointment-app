// const bookingState = {
//   id: null,
//   userId: 1,
//   doctorId: 1,
//   bookingDate: '2023-03-15',
//   bookingTime: '10:00',
//   bookingStatus: 'pending',
//   createdAt: new Date(),
//   updatedAt: new Date()
// }

import supabase from "./supabase";

export async function fetchBookings() {
  const { data: bookings, error } = await supabase.from("bookings").select("*");

  if (error) {
    console.error(error);
    return null;
  }

  return bookings;
}
