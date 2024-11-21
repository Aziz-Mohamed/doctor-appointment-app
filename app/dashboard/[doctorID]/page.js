'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { CalendarIcon, Clock, MapPin, Phone, Star, Mail } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/Avatar"
import { Button } from "@/_components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/_components/ui/Card"
import { Input } from "@/_components/ui/Input"
import { Label } from "@/_components/ui/Label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/_components/ui/Select"
import { Textarea } from "@/_components/ui/Textarea"
import { Calendar } from "@/_components/ui/Calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/_components/ui/Popover"

export default function DoctorProfile() {
  const { id } = useParams()
  const [date, setDate] = useState(null)

  // In a real application, you would fetch the doctor's data based on the id
  const doctor = {
    name: "Dr. Jane Smith",
    specialty: "Cardiology",
    rating: 4.8,
    photo: "/placeholder.svg",
    bio: "Dr. Jane Smith is a board-certified cardiologist with over 15 years of experience. She specializes in preventive cardiology and heart health management.",
    location: "123 Medical Center, New York, NY",
    phone: "(555) 123-4567",
    email: "dr.smith@example.com"
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src={doctor.photo} alt={doctor.name} />
                <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{doctor.bio}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-500" />
                  <span>{doctor.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Reserve Appointment</CardTitle>
              <CardDescription>Fill out the form to book your appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
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
        </div>
      </div>
    </div>
  )
}