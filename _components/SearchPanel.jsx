"use client";
import DropDownMenu from "@/_components/DropDownMenu";
import { Button } from "@/_components/ui/Button";
import { Input } from "@/_components/ui/Input";
import { useQueryParams } from "@/_hooks/useQueryParams";

import { useState } from "react";

export default function SearchPanel() {
  const [specialtySearch, setSpecialtySearch] = useState("");
  const [doctorNameSearch, setDoctorNameSearch] = useState("");

  const { setMultiQueryParams } = useQueryParams();

  const handleSpecialtyChange = (chosenSpecialty) => {
    setSpecialtySearch(chosenSpecialty);
  };
  
  const handleDoctorNameChange = (event) => {
    setDoctorNameSearch(event.target.value);
  };

  console.log("specialtySearch from searchPanel", specialtySearch);

  return (
    <div className="container-md flex items-center gap-2 p-4 z-50 bg-slate-300/50 rounded-md shadow-lg">
      <div className="flex items-center gap-3 justify-center">
        <DropDownMenu handleSpecialtyChange={handleSpecialtyChange} />
        <Input
          className="w-full rounded-md border bg-white/50 px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
          type="text"
          placeholder="Doctor Name"
          value={doctorNameSearch}
          onChange={handleDoctorNameChange}
        />
        <Button
          className="bg-red-500 text-primary-foreground min-w-40 "
          onClick={() => {
            setMultiQueryParams({
              doctorName: doctorNameSearch || "",
              specialty: specialtySearch || ""
            })
            // setQueryParam("doctorName", doctorNameSearch);
            // setQueryParam("specialty", specialtySearch);
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
