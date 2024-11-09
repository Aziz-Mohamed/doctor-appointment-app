"use client"
import { fetchAllAppointmentsFromSupabase } from '@/_lib/data-server';
import { createContext, useState, useEffect, useContext } from 'react';

export const AppointmentsContext = createContext({
  appointments: [],
  filteredAppointments: [],
  filters: {},
});


export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [filters, setFilters] = useState({});

  
  const handleFilterChange = (filter) => {
    setFilters(filter);
    const filteredData = appointments.filter((appointment) => {
      return Object.keys(filter).every((key) => {
        return appointment[key] === filter[key];
      });
    });
    setFilteredAppointments(filteredData);
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        setAppointments,
        filteredAppointments,
        setFilteredAppointments,
        filters,
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


