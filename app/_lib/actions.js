"use server"

import supabase from "./supabase"

export async function createBooking({ id, userId, doctorId, bookingDate, bookingTime, bookingStatus }) {

  const { data, error } = await supabase
  .from('bookings')
  .insert([
    {
      id,
      userId,
      doctorId,
      bookingDate,
      bookingTime,
      bookingStatus,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
  .select()

  if (error) {
    console.error(error)
    return null
  }

  return data
}
