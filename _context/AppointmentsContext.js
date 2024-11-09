"use client"
import { createContext, useContext, useState } from 'react';

export const AppointmentsContext = createContext({
  appointments: [],
  filteredAppointments: [],
  filters: {},
});


export const AppointmentsProvider = ({ children, initialData }) => {
  const [appointments, setAppointments] = useState(initialData || []);
  const [filters, setFilters] = useState();
  const [filteredAppointments, setFilteredAppointments] = useState(
    filters ? [] : appointments
  );

  console.log("appointments", appointments);
  console.log("filteredAppointments", filteredAppointments);

  const handleFilterChange = (filter) => {
    setFilters(filter);
    const filteredData = filter ? appointments.filter((appointment) => {
      return Object.keys(filter).every((key) => {
        return appointment[key] === filter[key];
      });
    }) : appointments;
    setFilteredAppointments(filteredData);
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        filters,
        filteredAppointments,
        setAppointments,
        setFilteredAppointments,
        setFilters,
        handleFilterChange,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};



export const useAppointments = () => {
  const context = useContext(AppointmentsContext);

  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }

  const { appointments, setAppointments, filteredAppointments, setFilteredAppointments } = context;
  return { appointments, setAppointments, filteredAppointments, setFilteredAppointments };
};


