"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useContext, useState, useMemo } from "react";

export const AppointmentsContext = createContext({
  appointments: [],
  filteredAppointments: [],
});

export const AppointmentsProvider = ({ children, initialData }) => {
  const [appointments, setAppointments] = useState(initialData || []);
  const searchParams = useSearchParams();

  const filteredAppointments = useMemo(() => {
    const paramsObject = Object.fromEntries(searchParams.entries());
    console.log("paramsObject", paramsObject);
    if (!paramsObject || Object.keys(paramsObject).length === 0 || paramsObject.specialty === "all-specialties") {
      return appointments;
    }
    return appointments.filter((appointment) => {
      return Object.keys(paramsObject).every((key) => {
        return appointment[key] === paramsObject[key];
      });
    });
  }, [appointments, searchParams]);

  console.log("filteredAppointments", filteredAppointments);

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        filteredAppointments,
        setAppointments,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentsContext);

  if (!context) {
    throw new Error(
      "useAppointments must be used within an AppointmentsProvider"
    );
  }

  return context;
};
