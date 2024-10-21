import { Appointments } from "./_components/Appointments";
import DateTimePicker from "./_components/DateTimePicker";

export default async function Home() {
  // const appointments = await fetchappointments();
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="flex space-x-4">
        <DateTimePicker />
        <Appointments />
      </div>
    </div>
  );
}
