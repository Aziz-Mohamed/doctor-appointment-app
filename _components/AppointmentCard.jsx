
function AppointmentCard({ appointment }) {
  const { userID, doctorID, appointmentDate, appointmentTime, appointmentStatus } = appointment;

  return (
    <div className="flex border border-primary-800">


      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            Appointment with Dr. {doctorID} on {appointmentDate}
          </h3>
          {appointmentStatus === "confirmed" ? (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              Confirmed
            </span>
          ) : appointmentStatus === "unConfirmed" ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              Unconfirmed
            </span>
          ) : (
            <span className="bg-red-800 text-red-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              Completed
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {appointmentTime}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="ml-auto text-sm text-primary-400">
            Appointed by the patient {userID}
          </p>
        </div>
      </div>

    </div>
  );
}

export default AppointmentCard;

















// function AppointmentCard({ appointment }) {
//   const { userID, doctorID, appointmentDate, appointmentTime, appointmentStatus } = appointment;

//   return (
//     <div className="flex border border-primary-800">
//       <div className="relative h-32 aspect-square">
//         {/* <Image
//           src={image}
//           alt={`Cabin ${name}`}
//           fill
//           className="object-cover border-r border-primary-800"
//         /> */}
//       </div> 

//       <div className="flex-grow px-6 py-3 flex flex-col">
//         <div className="flex items-center justify-between">
//           <h3 className="text-xl font-semibold">
//             Appointment with Dr. {doctorID} on {appointmentDate}
//           </h3>
//           {appointmentStatus === "pending" ? (
//             <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
//               pending
//             </span>
//           ) : (
//             <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">
//               confirmed
//             </span>
//           )}
//         </div>

//         <p className="text-lg text-primary-300">
//           {appointmentTime}
//         </p>

//         <div className="flex gap-5 mt-auto items-baseline">
//           {/* <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
//           <p className="text-primary-300">&bull;</p>
//           <p className="text-lg text-primary-300">
//             {numGuests} guest{numGuests > 1 && "s"}
//           </p> */}
//           <p className="ml-auto text-sm text-primary-400">
//             Booked by User {userID}
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col border-l border-primary-800 w-[100px]">
//         {/* {!isPast(startDate) ? (
//           <>
//             <Link
//               href={`/account/reservations/edit/${id}`}
//               className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
//             >
//               <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
//               <span className="mt-1">Edit</span>
//             </Link>
//             <DeleteReservation bookingId={id} onDelete={onDelete} />
//           </>
//         ) : null} */}
//       </div>
//     </div>
//   );
// }

// export default AppointmentCard;

