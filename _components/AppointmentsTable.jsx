"use client";

import { useAppointments } from "@/_context/AppointmentsContext";
import { useEffect, useState } from "react";

export default function AppointmentsTable() {
  const { filteredAppointments } = useAppointments();
  
  return (
    <>
      <div>Appointments Table</div>
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















// "use client";

// import { useAppointments } from "@/_context/AppointmentsContext";
// import { useEffect, useState } from "react";

// export default function AppointmentsTable({ params }) {
//   const { error, filteredAppointments, handleFilterChange } = useAppointments();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     function handleParamsChange(params) {
//       const changedParams = { specialty: params.specialty };
//       handleFilterChange(changedParams);
//       setLoading(false);
//     }
//     if (params.specialty) {
//       handleParamsChange(params);
//       console.log("params.specialty", params.specialty);
//     }
//   }, [params]);



//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <>
//       <div>AppointsTable</div>
//       <ul className="w-full">
//         {filteredAppointments.map((appointment) => (
//           <li key={appointment.id} className="flex border-b border-gray-200">
//             <div className="flex-1 px-4 py-2">{appointment.doctorID}</div>
//             <div className="flex-1 px-4 py-2">
//               {appointment.appointmentDate}
//             </div>
//             <div className="flex-1 px-4 py-2">
//               {appointment.appointmentTime}
//             </div>
//             <div className="flex-1 px-4 py-2">
//               {appointment.appointmentStatus}
//             </div>
//             <div className="flex-1 px-4 py-2">{appointment.specialty}</div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
