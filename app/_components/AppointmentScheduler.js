"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { addMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, setHours, setMinutes, addMinutes } from "date-fns"

import { Button } from "@/app/_components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/_components/ui/Select"

export default function AppointmentScheduler() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const startDate = startOfMonth(currentDate)
  const endDate = endOfMonth(currentDate)
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const previousMonth = () => setCurrentDate(addMonths(currentDate, -1))
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  const generateTimeSlots = () => {
    const slots = []
    let startTime = setHours(setMinutes(new Date(), 0), 9) // Start at 9:00 AM
    const endTime = setHours(setMinutes(new Date(), 0), 17) // End at 5:00 PM

    while (startTime < endTime) {
      slots.push(format(startTime, "hh:mm a"))
      startTime = addMinutes(startTime, 30)
    }

    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleDateClick = (day) => {
    setSelectedDate(day)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}`)
      // Here you would typically send this data to your backend
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-background">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {format(currentDate, "MMMM yyyy")}
        </CardTitle>
        <div className="space-x-2">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-sm font-medium text-muted-foreground p-2">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <Button
              key={day.toString()}
              variant="ghost"
              className={`w-10 h-10 p-0 flex items-center justify-center text-sm ${
                !isSameMonth(day, currentDate)
                  ? "text-muted-foreground opacity-50"
                  : isToday(day)
                  ? "bg-primary text-primary-foreground"
                  : ""
              } ${selectedDate && day.toDateString() === selectedDate.toDateString() ? "border-2 border-primary" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              {format(day, "d")}
            </Button>
          ))}
        </div>
        <div className="mt-4 h-[100px]">
          {selectedDate ? (
            <>
              <h3 className="text-sm font-medium mb-2">Select Time:</h3>
              <Select onValueChange={handleTimeSelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">Please select a date to view available time slots.</p>
          )}
        </div>
        <div className="mt-4 h-[40px]">
          {selectedDate && selectedTime && (
            <Button className="w-full" onClick={handleBookAppointment}>
              <Clock className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}