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
    console.log("paramsObject", paramsObject);
    if (
      !paramsObject ||
      Object.keys(paramsObject).length === 0 
    ) {
      return appointments;
    }
    return appointments.filter((appointment) => {
      return Object.keys(paramsObject).every((key) => {
        const mappedKey = keyMapping[key] || key;
        return appointment[mappedKey] === paramsObject[key];
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
  console.log("context", context);
  return context;
};

// const [searchInput, setSearchInput] = useState('');

// const filteredAppointments = useMemo(() => {
//   if (!searchInput) {
//     return appointments;
//   }

//   return appointments.filter((appointment) => {
//     return Object.values(appointment).some((value) => {
//       return String(value).toLowerCase().includes(searchInput.toLowerCase());
//     });
//   });
// }, [appointments, searchInput]);











// const allParamsExceptFilter = Object.fromEntries(
//   [...searchParams.entries()].filter(([key]) => key !== "filter")
// );
// const filterParams = Object.fromEntries(
//   [...searchParams.entries()].filter(([key]) => key === "filter")
// );

// console.log("allParamsExceptFilter", allParamsExceptFilter);
// console.log("filterParams", filterParams);

// const keyMapping = {
//   status: "appointmentStatus",
// };

// const filteredAppointments = useMemo(() => {
//   console.log("allParamsExceptFilter", allParamsExceptFilter);

//   if (
//     !allParamsExceptFilter ||
//     Object.keys(allParamsExceptFilter).length === 0 ||
//     allParamsExceptFilter.specialty === "all-specialties"
//   ) {
//     return appointments;
//   }

//   if (filterParams) {
//     const filterValue = Object.values(filterParams)[0].trim().toLowerCase();
//     return appointments.filter((appointment) => {
//       return Object.values(appointment).some((value) => {
//         const aValue = String(value).trim().toLowerCase();
//         return aValue.includes(filterValue) || filterValue.includes(aValue);
//       });
//     });
//   }

//   if (allParamsExceptFilter) {
//     return appointments.filter((appointment) => {
//       return Object.keys(allParamsExceptFilter).every((key) => {
//         const mappedKey = keyMapping[key] || key;
//         return appointment[mappedKey] === allParamsExceptFilter[key];
//       });
//     });
//   }

// }, [appointments, allParamsExceptFilter, filterParams]);
