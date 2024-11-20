import { UserAccessProtectionServer } from "@/_components/RoleAccessProtection";
import { DoctorsProvider } from "@/_context/DoctorsContext";
import { fetchFilteredDoctorsFromSupabase } from "@/_lib/data-server";
import { Suspense } from "react";



async function page({ searchParams }) {
  // const filter = [
  //   {
  //     column: "specialty",
  //     value: searchParams?.specialty || "",
  //   },
  //   {
  //     column: "doctorName",
  //     value: searchParams?.doctorName || "",
  //   },
  // ];

  const fetchedDoctorsList = await fetchFilteredDoctorsFromSupabase(searchParams);

  console.log("searchParams", searchParams);
  console.log("fetchedDoctorsList", fetchedDoctorsList);

  return (
    <UserAccessProtectionServer>
      <DoctorsProvider initialData={fetchedDoctorsList}>
        <h1> Doctors list </h1>
        <Suspense fallback={<p>Loading doctors...</p>}>
        <p className="text-lg z-50" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>
          <pre>{JSON.stringify(fetchedDoctorsList, null, 2)}</pre>
        </Suspense>
      </DoctorsProvider>
    </UserAccessProtectionServer>
  );
}

export default page;
