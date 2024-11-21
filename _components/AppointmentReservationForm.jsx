"use client"
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/_components/ui/Card"
import {Button} from "@/_components/ui/Button"
import {Input} from "@/_components/ui/Input"
import {Label} from "@/_components/ui/Label"
import {Textarea} from "@/_components/ui/Textarea"
import {Popover, PopoverContent, PopoverTrigger} from "@/_components/ui/Popover"
import {Calendar} from "@/_components/ui/Calendar"
import {CalendarIcon} from "lucide-react"
import { useState } from "react"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/_components/ui/Select"
import { Clock } from "lucide-react";

export default function AppointmentReservationForm() {
  const [date, setDate] = useState(null)

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log("Form submitted")
  // }

  return (
    <Card>
    <CardHeader>
      <CardTitle>Reserve Appointment</CardTitle>
      <CardDescription>Fill out the form to book your appointment</CardDescription>
    </CardHeader>
    <CardContent>
      <form
      //  onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
          </div>
          <div className="space-y-2">
            <Label>Appointment Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? date.toDateString() : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Select>
              <SelectTrigger id="time">
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
            <Textarea id="reason" placeholder="Brief description of your health concern" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter>
      <Button className="w-full">
        <Clock className="mr-2 h-4 w-4" /> Book Appointment
      </Button>
    </CardFooter>
  </Card>
  )
}