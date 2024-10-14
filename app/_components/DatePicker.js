import AppointmentScheduler from "./AppointmentScheduler";

export default function DatePicker() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Pls pick an appointment 
      <div classname="flex justify-center align-center ">
        <AppointmentScheduler />
      </div>
    </div>
  );
}
