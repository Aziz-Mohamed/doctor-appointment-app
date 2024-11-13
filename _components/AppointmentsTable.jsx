"use client";

import { useAppointments } from "@/_context/AppointmentsContext";
import { Select } from "@/_components/ui/Select";
import { useEffect, useState } from "react";
import AppointmentsList from "@/_components/AppointmentsList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/Table";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/Select";

export default function AppointmentsTable() {
  const { filteredAppointments } = useAppointments();

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-600 text-white"; 
      case "pending":
        return "bg-amber-500 text-black"; 
      case "completed":
        return "bg-sky-600 text-white"; 
      case "canceled":
        return "bg-rose-600 text-white";
      default:
        return "bg-gray-300 text-black"; 
    }
  };

  return (
    <>
      {/* <AppointmentsList appointments={filteredAppointments} /> */}

      <Table>
        <TableCaption>A list of appointments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Doctor ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Specialty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAppointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.doctorID}</TableCell>
              <TableCell>{appointment.appointmentDate}</TableCell>
              <TableCell>{appointment.appointmentTime}</TableCell>
              <TableCell >
                <Select
                  
                  onValueChange={() => {  console.log(appointment.appointmentStatus)}}
                  defaultValue={appointment.appointmentStatus}
                >
                  <SelectTrigger className={`w-[180px] ${getStatusColor(appointment.appointmentStatus)}`} >
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="canceled">Canceled</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{appointment.userID}</TableCell>
              <TableCell>{appointment.specialty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

{
  /* <ul className="w-full">
        {filteredAppointments.map((appointment) => (
          <li key={appointment.id} className="flex border-b border-gray-200">
            <div className="flex-1 px-4 py-2">{appointment.doctorID}</div>
            <div className="flex-1 px-4 py-2">{appointment.appointmentDate}</div>
            <div className="flex-1 px-4 py-2">{appointment.appointmentTime}</div>
            <div className="flex-1 px-4 py-2">{appointment.appointmentStatus}</div>
            <div className="flex-1 px-4 py-2">{appointment.specialty}</div>
          </li>
        ))}
      </ul> */
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
