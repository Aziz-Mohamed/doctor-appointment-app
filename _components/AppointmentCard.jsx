
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








