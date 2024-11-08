
import { fetchAllAppointmentsFromSupabase } from '@/_lib/data-server';
import { createContext, useState, useEffect } from 'react';

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointments = await fetchAllAppointmentsFromSupabase();
      setAppointments(appointments);
      setFilteredAppointments(appointments);
    };
    fetchAppointments();
  }, []);


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
        filteredAppointments,
        filters,
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

  return context;
};



