"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/_components/ui/Card";
import { Button } from "@/_components/ui/Button";
import { Input } from "@/_components/ui/Input";
import { Label } from "@/_components/ui/Label";
import { Textarea } from "@/_components/ui/Textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/_components/ui/Popover";
import { Calendar } from "@/_components/ui/Calendar";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/Select";
import { Clock } from "lucide-react";
import { createAppointment } from "@/_lib/actions";

export default function AppointmentReservationForm({ doctor ,user }) {
  const [date, setDate] = useState(null);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();


    const formData = new FormData(event.target);

    const additionalFields = {
      doctorID: doctor.id,
      appointmentDate: date?.toISOString() || "",
      appointmentStatus: "pending",
      specialty: doctor.specialty,
    };


    Object.entries(additionalFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await createAppointment(formData);
  };

  return (
        <form
          onSubmit={handleSubmit}
        >
    <Card>
      <CardHeader>
        <CardTitle>Reserve Appointment</CardTitle>
        <CardDescription>
          Fill out the form to book your appointment
        </CardDescription>
      </CardHeader>
      <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Full Name</Label>
              <Input
                id="patientName"
                defaultValue={user?.user_metadata.full_name}
                type="text"
                name="patientName"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientEmail">Email</Label>
              <Input
                id="patientEmail"
                defaultValue={user?.email}
                type="email"
                name="patientEmail"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientPhone">Phone Number</Label>
              <Input
                id="patientPhone"
                defaultValue={user?.phone? user.phone : ""}
                type="tel"
                name="patientPhone"
                placeholder="(123) 456-7890"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Appointment Date</Label>
              <input
                type="hidden"
                name="appointmentDate"
                value={date ? date.toISOString() : ""}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toDateString() : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeOfDay">Preferred Time</Label>
              <Select name="timeOfDay">
                <SelectTrigger id="timeOfDay">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea
                id="reason"
                name="reason"
                placeholder="Brief description of your health concern"
              />
            </div>
          </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">
          <Clock className="mr-2 h-4 w-4" /> Book Appointment
        </Button>
      </CardFooter>
    </Card>
        </form>
  );
}
