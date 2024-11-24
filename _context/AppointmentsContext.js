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
    const keyMapping = {
      status: "appointmentStatus",
    };
    const paramsObject = Object.fromEntries(searchParams.entries());
    if (
      !paramsObject ||
      Object.keys(paramsObject).length === 0 
    ) {
      return [...appointments].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return [...appointments]
      .filter((appointment) => {
        return Object.keys(paramsObject).every((key) => {
          const mappedKey = keyMapping[key] || key;
          return appointment[mappedKey] === paramsObject[key];
        });
      })
      .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [appointments, searchParams]);

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
