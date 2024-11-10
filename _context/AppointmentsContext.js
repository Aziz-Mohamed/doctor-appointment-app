"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useContext, useState, useMemo } from "react";

export const AppointmentsContext = createContext({
  appointments: [],
  filteredAppointments: [],
  filters: {},
});

export const AppointmentsProvider = ({ children, initialData }) => {
  const [appointments, setAppointments] = useState(initialData || []);
  const [filters, setFilters] = useState({});
  const searchParams = useSearchParams();

  const filteredAppointments = useMemo(() => {
    if (!searchParams || Object.keys(searchParams).length === 0) {
      return appointments;
    }
    return appointments.filter((appointment) => {
      return Object.keys(searchParams).every((key) => {
        return appointment[key] === searchParams[key];
      });
    });
  }, [appointments, searchParams]);

  const handleFilterChange = (filter) => {
    setFilters(filter);
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        filters,
        filteredAppointments,
        setAppointments,
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
    throw new Error(
      "useAppointments must be used within an AppointmentsProvider"
    );
  }

  return context;
};

// "use client";
// import { createContext, useContext, useState } from "react";

// export const AppointmentsContext = createContext({
//   appointments: [],
//   filteredAppointments: [],
//   filters: {},
// });

// export const AppointmentsProvider = ({ children, initialData }) => {
//   const [appointments, setAppointments] = useState(initialData || []);
//   const [filters, setFilters] = useState();
//   const [filteredAppointments, setFilteredAppointments] = useState(
//     filters ? [] : appointments
//   );

//   console.log("appointments", appointments);
//   console.log("filteredAppointments", filteredAppointments);

//   const handleFilterChange = (filter) => {
//     setFilters(filter);
//     const filteredData = filter
//       ? appointments.filter((appointment) => {
//           return Object.keys(filter).every((key) => {
//             return appointment[key] === filter[key];
//           });
//         })
//       : appointments;
//     setFilteredAppointments(filteredData);
//   };

//   return (
//     <AppointmentsContext.Provider
//       value={{
//         appointments,
//         filters,
//         filteredAppointments,
//         setAppointments,
//         setFilteredAppointments,
//         setFilters,
//         handleFilterChange,
//       }}
//     >
//       {children}
//     </AppointmentsContext.Provider>
//   );
// };

// export const useAppointments = () => {
//   const context = useContext(AppointmentsContext);

//   if (!context) {
//     throw new Error(
//       "useAppointments must be used within an AppointmentsProvider"
//     );
//   }
//   return context
// };
