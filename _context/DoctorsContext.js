"use client";
import { useSearchParams } from "next/navigation";
import { createContext, useContext } from "react";

export const DoctorContext = createContext({
  doctors: [],
});

export const DoctorsProvider = ({ children, initialData }) => {
  const searchParams = useSearchParams();
const doctors = initialData || [];  
  return (
    <DoctorContext.Provider
      value={{
        doctors,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctors = () => {
  const context = useContext(DoctorContext);

  if (!context) {
    throw new Error("useDoctors must be used within an Doctor Provider");
  }
  console.log("context", context);
  return context;
};
