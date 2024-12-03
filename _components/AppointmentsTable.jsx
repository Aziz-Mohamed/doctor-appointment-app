"use client";

import { Select } from "@/_components/ui/Select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/Table";
import { useAppointments } from "@/_context/AppointmentsContext";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/Select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/_components/ui/Tooltip";
import { updateAppointmentStatus } from "@/_lib/actions";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import StatusFilterButtons from "@/_components/StatusFilterButtons";
import { CircleCheckBig } from 'lucide-react';


const TruncatedCell = ({ content }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="truncate max-w-[200px]">{content}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function AppointmentsTable() {
  const [sort, setSort] = useState("");
  const { filteredAppointments, setAppointments } = useAppointments();

  const handleStatusChange = async (id, newStatus) => {
    const  data = await updateAppointmentStatus(id, newStatus);
    if (!data) {
      alert("There was a problem. Please try again later.");
      return;
    }
    setAppointments((prevData) =>
      prevData.map((appointment) =>
        appointment.id === id
          ? { ...appointment, appointmentStatus: newStatus }
          : appointment
      )
    );
    toast(<> <CircleCheckBig /> Status has been updated Successfully.</>);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-primary";
      case "pending":
        return "bg-yellow-100 text-primary";
      case "completed":
        return "bg-blue-100 text-primary";
      case "canceled":
        return "bg-red-100 text-primary";
      default:
        return "";
    }
  };

  return (
    <>
    <div className="flex justify-end mb-4">
      <StatusFilterButtons/>
    </div>
      <div className="w-full overflow-x-auto">
        <Table className="w-full table-fixed">
          <TableCaption>A list of appointments.</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                Patient Name
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                specialty
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                Doctor ID
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                Date
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                Time
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                Status
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500 truncate overflow-hidden whitespace-nowrap">
                Patient Email
              </TableHead>
              <TableHead className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                Phone 
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id} className="border-b gap-x-2">
                <TableCell className="py-3 px-4 text-sm">
                  <TruncatedCell content={appointment.patientName.replace(/\b\w/g, char => char.toUpperCase())} />
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.specialty.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.doctorID}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.appointmentDate}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.timeOfDay.replace(/\b\w/g, char => char.toUpperCase())}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  <Select
                    onValueChange={(value) =>
                      handleStatusChange(appointment.id, value)
                    }
                    defaultValue={appointment.appointmentStatus}
                  >
                    <SelectTrigger
                      className={`w-full ${getStatusColor(
                        appointment.appointmentStatus
                      )}`}
                    >
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="canceled">Canceled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                <TruncatedCell content={appointment.patientEmail} />
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.patientPhone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
