import { UserAccessProtectionServer } from "@/_components/RoleAccessProtection";
import { DoctorsProvider } from "@/_context/DoctorsContext";
import { fetchMultiFilteredDoctorsFromSupabase } from "@/_lib/data-server";
import { Suspense } from "react";
import DoctorList from "@/_components/DoctorList";

async function page({ searchParams }) {
  const fetchedDoctorsList = await fetchMultiFilteredDoctorsFromSupabase(
    searchParams
  );

  // console.log("searchParams", searchParams);
  // console.log("fetchedDoctorsList", fetchedDoctorsList);

  return (
    <UserAccessProtectionServer>
      <DoctorsProvider initialData={fetchedDoctorsList}>
        <Suspense fallback={<p>Loading doctors...</p>}>
          <DoctorList doctors={fetchedDoctorsList} />
        </Suspense>
      </DoctorsProvider>
    </UserAccessProtectionServer>
  );
}

export default page;
