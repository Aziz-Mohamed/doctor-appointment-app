import supabase from "./supabase";

export async function fetchBookings() {
  const { data: bookings, error } = await supabase.from("bookings").select("*");

  if (error) {
    console.error(error);
    return null;
  }

  return bookings;
}


export async function insertBooking({ userID, doctorID, bookingDate, bookingTime, bookingStatus }) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        userID: Number(userID),
        doctorID: Number(doctorID),
        bookingDate: bookingDate,
        bookingTime: bookingTime,
        bookingStatus: String(bookingStatus),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .select()
// console.log(data)
  if (error) {  
    console.error(error)
    return null
  }

  return data
}
