// "use client";

// import { useAppointments } from "@/_context/AppointmentsContext";
// import { useEffect } from "react";
// import { getAppointments } from "@/_lib/actions";

// export default function AppointsTable() {
//   const { appointments, setAppointments, setFilteredAppointments } =
//     useAppointments();

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const fetchedAppointments = await getAppointments();
//         setAppointments(fetchedAppointments);
//         setFilteredAppointments(fetchedAppointments);
//         console.log(fetchedAppointments);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchAppointments();
//   }, []);

//   console.log("appointments",appointments)
//   return (
//     <>
//       <div>AppointsTable</div>
//       <div>{JSON.stringify(appointments)}</div>
//     </>
//   );
// }






'use client';

import { useAppointments } from "@/_context/AppointmentsContext";
import { useEffect, useState } from "react";
import { getAppointments } from "@/_lib/actions";

export default function AppointmentsTable() {
  const { appointments, setAppointments, setFilteredAppointments, filteredAppointments } =
    useAppointments();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchAppointments = async () => {
  //     try {
  //       const fetchedAppointments = await getAppointments();
  //       setAppointments(fetchedAppointments);
  //       setFilteredAppointments(fetchedAppointments);
  //       console.log(fetchedAppointments);
  //       console.log(appointments)

  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchAppointments();
  // }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>AppointsTable</div>
      <ul className="w-full">
        {filteredAppointments.map((appointment) => (
          <li key={appointment.id} className="flex border-b border-gray-200">
            <div className="flex-1 px-4 py-2">{appointment.doctorID}</div>
            <div className="flex-1 px-4 py-2">{appointment.appointmentDate}</div>
            <div className="flex-1 px-4 py-2">{appointment.appointmentTime}</div>
            <div className="flex-1 px-4 py-2">{appointment.appointmentStatus}</div>
            <div className="flex-1 px-4 py-2">{appointment.specialty}</div>
          </li>
        ))}
      </ul>
    </>
  );
}