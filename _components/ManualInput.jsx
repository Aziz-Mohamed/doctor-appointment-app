import React from "react";
import { createAppointment } from "../_lib/actions";

function ManualInput() {
  return (
    <form action={createAppointment} className="space-y-4">
      <label className="block">
        User Id:
        <input
          className="block w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          type="number"
          name="userID"
        />
      </label>
      <br />
      <label className="block">
        Doctor Id:
        <input
          className="block w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          type="number"
          name="doctorID"
        />
      </label>
      <br />
      <label className="block">
        appointment Date:
        <input
          className="block w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          type="date"
          name="appointmentDate"
        />
      </label>
      <br />
      <label className="block">
        appointment Time:
        <input
          className="block w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          type="time"
          name="appointmentTime"
        />
      </label>
      <br />
      <label className="block">
        appointment Status:
        <input
          className="block w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          type="text"
          name="appointmentStatus"
        />
      </label>
      <br />
      <button
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary hover:bg-opacity-90 focus:outline-none focus:border-primary focus:shadow-outline-primary active:bg-primary active:bg-opacity-90"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ManualInput;
