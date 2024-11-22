import AppointmentReservationForm from "@/_components/AppointmentReservationForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/Avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/Card";
import { fetchFilteredDoctorsFromSupabase } from "@/_lib/data-server";
import { getUserData } from "@/_lib/getUserData";
import { Mail, MapPin, Phone, Star } from "lucide-react";

export default async function page({ params }) {
  const filter = { column: "doctorID", value: params.doctorID };
  const [doctor] = await fetchFilteredDoctorsFromSupabase(filter);
  const { data: {user} , error } = await getUserData();


  
  //This mock-data is a placeholder as It wasn't feasible for me currently to generate all this fake data for 100 doctors
  const mockData = {
    bio: "Dr. Jane Smith is a board-certified cardiologist with over 15 years of experience. She specializes in preventive cardiology and heart health management.",
    location: "123 Medical Center, New York, NY",
    phone: "(555) 123-4567",
    email: "dr.smith@example.com",
    photo: "/placeholder.svg",
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src={doctor.photo} alt={doctor.doctorName} />
                <AvatarFallback>
                  {doctor?.doctorName
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{doctor.doctorName}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{doctor.rate}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{mockData.bio}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{mockData.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{mockData.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{mockData.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <AppointmentReservationForm doctor={doctor} user={user} />
        </div>
      </div>
    </div>
  );
}
