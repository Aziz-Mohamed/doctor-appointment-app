import DateTimePicker from "./_components/DateTimePicker";
import ManualInput from "./_components/ManualInput";

export default async function Home() {
  // const bookings = await fetchBookings();
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="flex space-x-4">
        <DateTimePicker />
        {/* <ManualInput /> */}
      </div>
    </div>
  );
}
