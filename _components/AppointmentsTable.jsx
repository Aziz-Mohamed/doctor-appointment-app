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
import { useCallback, useState } from "react";
import { updateAppointmentStatus } from "@/_lib/actions";
import { toast } from "sonner";

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

  const handleStatusChange = useCallback(
    (id, newStatus) => {
      const data = updateAppointmentStatus(id, newStatus);
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
      toast("Status has been updated Successfully.");
    },
    [setAppointments]
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500 text-primary-foreground";
      case "pending":
        return "bg-yellow-500 text-primary-foreground";
      case "completed":
        return "bg-blue-500 text-primary-foreground";
      case "canceled":
        return "bg-red-500 text-primary-foreground";
      default:
        return "";
    }
  };

  return (
    <>
    <div>
      
    </div>
      <div className="w-full overflow-x-auto">
        <Table className="w-full table-fixed">
          <TableCaption>A list of appointments.</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[8.33%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                ID
              </TableHead>
              <TableHead className="w-[8.33%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                Doctor ID
              </TableHead>
              <TableHead className="w-[16.66%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                Date
              </TableHead>
              <TableHead className="w-[16.66%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                Time
              </TableHead>
              <TableHead className="w-[16.66%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                Status
              </TableHead>
              <TableHead className="w-[16.66%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                User ID
              </TableHead>
              <TableHead className="w-[16.66%] py-3 px-4 text-left text-sm font-medium text-gray-500">
                Specialty
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.map((appointment) => (
              <TableRow key={appointment.id} className="border-b">
                <TableCell className="py-3 px-4 text-sm">
                  {" "}
                  <TruncatedCell content={appointment.id} />{" "}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.doctorID}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.appointmentDate}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.appointmentTime}
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
                  {appointment.userID}
                </TableCell>
                <TableCell className="py-3 px-4 text-sm">
                  {appointment.specialty}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* // The same table but with divs instead of Table component */}
      {/* <div className="w-full overflow-x-auto">
      <div className="min-w-full">
        <div className="grid grid-cols-12 gap-4 py-3 px-4 text-sm font-medium text-gray-500 bg-gray-100">
          <div className="col-span-1">ID</div>
          <div className="col-span-1">Doctor ID</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Time</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">User ID</div>
          <div className="col-span-2">Specialty</div>
        </div>
        <div className="bg-white">
          {appointmentData.map((appointment) => (
            <div key={appointment.id} className="grid grid-cols-12 gap-4 py-3 px-4 border-b text-sm">
              <div className="col-span-1 font-medium"> <TruncatedCell content={appointment.id} /></div>
              <div className="col-span-1">{appointment.doctorID}</div>
              <div className="col-span-2">{appointment.appointmentDate}</div>
              <div className="col-span-2">{appointment.appointmentTime}</div>
              <div className="col-span-2">
                <Select
                  onValueChange={(value) => handleStatusChange(appointment.id, value)}
                  defaultValue={appointment.appointmentStatus}
                >
                  <SelectTrigger className={`w-full ${getStatusColor(appointment.appointmentStatus)}`}>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="canceled">Canceled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2">{appointment.userID}</div>
              <div className="col-span-2">{appointment.specialty}</div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    </>
  );
}
